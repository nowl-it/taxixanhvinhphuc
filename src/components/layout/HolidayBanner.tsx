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
      className="relative bg-gradient-to-r from-red-700 via-amber-600 to-emerald-800 text-white text-xs py-2 px-3 sm:px-4 shadow-md border-b border-amber-400/30 animate-in fade-in duration-300"
    >
      <div className="container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 flex-wrap sm:flex-nowrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-black text-[10px] sm:text-xs px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
            <Sparkles className="w-3 h-3 text-red-700" />
            <span>{notice.badge}</span>
          </span>

          <p className="text-[11px] sm:text-xs font-semibold text-white/95 leading-snug text-center sm:text-left">
            <strong className="text-amber-200 mr-1.5">{notice.title}:</strong>
            <span>{notice.message}</span>
          </p>

          {notice.linkHref && (
            <Link
              href={notice.linkHref}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-amber-200 hover:text-white underline underline-offset-2 shrink-0 ml-1 transition"
            >
              <span>{notice.linkText || "Xem chi tiết"}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${siteConfig.hotlineRaw}`}
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white font-bold text-[11px] transition"
          >
            <Phone className="w-3 h-3" />
            <span>{siteConfig.hotline}</span>
          </a>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Đóng thông báo"
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/20 transition"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
