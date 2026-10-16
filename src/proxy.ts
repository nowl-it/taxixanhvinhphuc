import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/data/config";

// In-memory rate limiting map (IP -> { count, expiresAt })
const ipRequestCounts = new Map<string, { count: number; expiresAt: number }>();

export function proxy(request: NextRequest) {
  // Extract client IP address
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfIp = request.headers.get("cf-connecting-ip");

  const clientIp = (cfIp || (forwardedFor ? forwardedFor.split(",")[0].trim() : null) || realIp || "unknown").trim();

  const security = siteConfig.security;

  // 1. Check IP Blacklist
  if (security?.blockedIps && clientIp !== "unknown") {
    const isBlocked = security.blockedIps.some((blocked) => {
      const cleanBlocked = blocked.trim();
      return cleanBlocked && (clientIp === cleanBlocked || clientIp.startsWith(cleanBlocked));
    });

    if (isBlocked) {
      return new NextResponse(
        "<html><head><meta charset='utf-8'><title>403 Forbidden</title></head><body style='font-family:sans-serif;text-align:center;padding:50px;'><h2>403 - Quyền Truy Cập Bị Từ Chối</h2><p>Địa chỉ IP của bạn đã bị chặn truy cập theo chính sách bảo mật chống click ảo.</p></body></html>",
        {
          status: 403,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }
      );
    }
  }

  // 2. Rate Limiting for rapid click spam & DDoS protection
  if (security?.enableRateLimit && clientIp !== "unknown" && clientIp !== "127.0.0.1") {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = security.maxRequestsPerMinute || 60;

    const record = ipRequestCounts.get(clientIp);
    if (!record || now > record.expiresAt) {
      ipRequestCounts.set(clientIp, { count: 1, expiresAt: now + windowMs });
    } else {
      record.count += 1;
      if (record.count > maxRequests) {
        return new NextResponse(
          "<html><head><meta charset='utf-8'><title>429 Too Many Requests</title></head><body style='font-family:sans-serif;text-align:center;padding:50px;'><h2>429 - Thao Tác Quá Nhanh</h2><p>Hệ thống phát hiện tần suất nhấp chuột bất thường từ mạng của bạn. Vui lòng đợi 1 phút trước khi thử lại.</p></body></html>",
          {
            status: 429,
            headers: {
              "Content-Type": "text/html; charset=utf-8",
              "Retry-After": "60",
            },
          }
        );
      }
    }

    // Periodically clean up expired keys to prevent memory leak
    if (ipRequestCounts.size > 5000) {
      for (const [key, val] of ipRequestCounts.entries()) {
        if (now > val.expiresAt) {
          ipRequestCounts.delete(key);
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|sitemap.xml|robots.txt).*)",
  ],
};
