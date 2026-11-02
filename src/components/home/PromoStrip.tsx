"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Plane, ArrowRight, Phone } from "lucide-react";

// Banner 1: Dải thông báo khuyến mãi mỏng (Promo Strip)
// Gợi ý vị trí: ngay dưới HeroBanner, trên PriceSection.
export default function PromoStrip() {
  return (
    <aside
      aria-label="Ưu đãi nổi bật"
      className="relative bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 border-y border-amber-500/40"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="inline-flex items-center gap-2 font-black text-xs sm:text-sm leading-normal">
            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-950 text-amber-400 shrink-0">
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
            Đón - Trả Sân Bay Nội Bài chỉ từ 180K
          </span>

          <span className="hidden sm:inline text-slate-700 font-semibold text-xs sm:text-sm">
            • Giá trọn gói, miễn phí 60 phút chờ •
          </span>

          <Link
            href="/bang-gia"
            className="inline-flex items-center gap-1.5 font-black text-xs sm:text-sm text-slate-950 hover:underline underline-offset-4 shrink-0 transition"
          >
            <span>Xem bảng giá</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={`tel:${siteConfig.hotlineRaw}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-950 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{siteConfig.hotline}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
