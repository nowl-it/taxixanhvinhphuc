import React from "react";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-3 sm:bottom-6 left-0 right-0 z-50 pointer-events-none mx-auto px-3 sm:px-6 lg:px-8 flex items-end justify-between">
      {/* Left: Zalo Chat Button */}
      <div className="pointer-events-auto flex items-center gap-2 group">
        <a
          href={siteConfig.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white hover:bg-slate-50 shadow-xl shadow-blue-600/25 border border-blue-100 transition-transform transform hover:scale-105 active:scale-95 pulse-ring-blue"
          aria-label="Chat Zalo Đặt Xe 0961 299 934"
        >
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-500 border-2 border-white rounded-full z-10"></span>
          <ZaloIcon className="w-7 h-7 sm:w-10 sm:h-10" />
        </a>
        <div className="hidden md:flex flex-col bg-white px-3 py-1.5 rounded-xl shadow-lg border border-blue-100 text-left">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">Chat Zalo</span>
          <span className="text-xs font-extrabold text-slate-800">0961 299 934</span>
        </div>
      </div>

      {/* Right: Hotline Call Button */}
      <div className="pointer-events-auto flex items-center gap-2 group">
        <div className="hidden md:flex flex-col bg-white px-3 py-1.5 rounded-xl shadow-lg border border-red-100 text-right">
          <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider flex items-center justify-end gap-1">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Tổng Đài 24/7
          </span>
          <span className="text-sm font-black text-slate-900 tracking-wide">{siteConfig.hotline}</span>
        </div>

        <a
          href={`tel:${siteConfig.hotlineRaw}`}
          className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/30 transition-transform transform hover:scale-105 active:scale-95 pulse-ring-red"
          aria-label="Gọi xe ngay 0961 299 934"
        >
          <Phone className="w-6 h-6 sm:w-8 sm:h-8 animate-phone-ring" />
        </a>
      </div>
    </div>
  );
}
