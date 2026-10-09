"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import BookingForm from "./BookingForm";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Phone, CheckCircle2, ShieldCheck, Clock, Award, Sparkles, Star } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:py-16">
      {/* Lightweight background gradient without blur filters */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 pointer-events-none"></div>

      {/* Hero background image optimized with subtle opacity without expensive mix-blend mode */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/images/hero-banner.jpg"
          alt="Dịch vụ Taxi Xanh Vĩnh Phúc đời mới"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Slogan & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-sm font-semibold leading-tight max-w-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span>Dịch Vụ Taxi & Xe Tiện Chuyến Hàng Đầu Vĩnh Phúc</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
              Taxi Xanh Vĩnh Phúc <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Đúng Giờ • Trọn Gói • Siêu Rẻ
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed">
              Tổng đài đặt xe 24/7 đón trả tận nơi tại TP. Vĩnh Yên, Phúc Yên và toàn bộ các huyện tỉnh Vĩnh Phúc. Đưa đón Sân Bay Nội Bài chỉ từ <strong>180K</strong>, xe đi Hà Nội, khám bệnh, du lịch Tam Đảo.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 sm:pt-2 text-left">
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-start gap-2 sm:gap-2.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[11px] sm:text-xs text-white">Có Mặt Sau 10P</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Tài xế túc trực mọi nơi</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-start gap-2 sm:gap-2.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[11px] sm:text-xs text-white">Giá Trọn Gói 100%</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Không phụ phí hay phí ẩn</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-start gap-2 sm:gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[11px] sm:text-xs text-white">Xe Mới 2022-2025</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Sạch sẽ, không mùi, êm ái</p>
                </div>
              </div>
            </div>

            {/* Direct Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-3">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 sm:gap-3 shadow-xl shadow-red-600/35 transition-transform transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-phone-ring" />
                <span>GỌI TỔNG ĐÀI: {siteConfig.hotline}</span>
              </a>

              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-2.5 shadow-lg shadow-blue-600/25 transition-transform transform hover:-translate-y-0.5"
              >
                <ZaloIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Chat Zalo Báo Giá Ngay</span>
              </a>
            </div>

            {/* Trust Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px] sm:text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                Hơn 15.000+ chuyến đi an toàn/tháng
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-amber-300 font-semibold flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300 shrink-0" />
                <span>4.9/5 Đánh giá hài lòng</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-5">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
