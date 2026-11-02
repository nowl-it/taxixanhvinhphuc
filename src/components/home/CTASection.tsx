import React from "react";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Phone, Gift, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white relative">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-sm font-bold">
          <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>ƯU ĐÃI ĐẶC BIỆT KHI ĐẶT XE KHỨ HỒI</span>
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Giảm Ngay <span className="text-amber-400">40% – 70%</span> Cước Chiều Về!
        </h2>

        <p className="text-slate-100 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Áp dụng cho mọi chuyến đi 2 chiều trong ngày tuyến Sân Bay Nội Bài, Hà Nội, Phú Thọ hoặc đi tỉnh đường dài. Miễn phí chờ đợi, xe riêng không ghép người lạ!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 pt-1 sm:pt-2 text-[11px] sm:text-sm text-slate-200">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>Miễn phí hủy chuyến</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>Đón tận nhà - Trả tận nơi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span>Tài xế có mặt sau 10 phút</span>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${siteConfig.hotlineRaw}`}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm sm:text-lg flex items-center justify-center gap-2.5 sm:gap-3 shadow-2xl shadow-red-600/40 transition-transform transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-5 h-5 animate-phone-ring" />
            <span>GỌI TỔNG ĐÀI: {siteConfig.hotline}</span>
          </a>

          <a
            href={siteConfig.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 text-blue-600 font-bold text-sm sm:text-lg flex items-center justify-center gap-2.5 sm:gap-3 shadow-xl shadow-slate-900/10 border border-blue-100 transition-transform transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <ZaloIcon className="w-5 h-5" />
            <span>Nhắn Zalo Nhận Báo Giá</span>
          </a>
        </div>
      </div>
    </section>
  );
}
