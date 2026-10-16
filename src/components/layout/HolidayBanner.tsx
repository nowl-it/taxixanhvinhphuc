"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Sparkles, ArrowRight, X, Phone } from "lucide-react";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = () => {
  try {
    return sessionStorage.getItem("holiday_banner_dismissed") === "true";
  } catch {
    return false;
  }
};

const getServerSnapshot = () => false;

export default function HolidayBanner() {
  const notice = siteConfig.holidayNotice;
  const isDismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [manuallyDismissed, setManuallyDismissed] = useState(false);

  if (!notice || !notice.enabled || isDismissed || manuallyDismissed) {
    return null;
  }

  const handleDismiss = () => {
    setManuallyDismissed(true);
    try {
      sessionStorage.setItem("holiday_banner_dismissed", "true");
    } catch {
      // ignore
    }
  };

  return (
    <aside
      aria-label="Thông báo ngày lễ"
      className="relative bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white text-xs py-2 sm:py-2.5 px-3 sm:px-4 shadow-sm border-b border-emerald-800/50 animate-in fade-in duration-300"
    >
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 flex-wrap sm:flex-nowrap justify-center sm:justify-start">
          {/* Badge with ample breathing room so Vietnamese diacritics never touch borders */}
          <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full shrink-0 shadow-sm leading-normal">
            <Sparkles className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            <span>{notice.badge}</span>
          </span>

          <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed text-center sm:text-left">
            <strong className="text-amber-300 mr-1.5 font-bold">{notice.title}:</strong>
            <span>{notice.message}</span>
          </p>

          {notice.linkHref && (
            <Link
              href={notice.linkHref}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 shrink-0 transition"
            >
              <span>{notice.linkText || "Xem chi tiết"}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${siteConfig.hotlineRaw}`}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-800/60 hover:bg-emerald-700/80 text-white font-bold text-xs border border-emerald-700/50 transition"
          >
            <Phone className="w-3 h-3 text-amber-300" />
            <span>{siteConfig.hotline}</span>
          </a>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Đóng thông báo"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
