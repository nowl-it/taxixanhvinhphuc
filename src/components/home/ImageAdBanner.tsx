"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Phone, Mountain, ArrowRight } from "lucide-react";

// Banner 3: Banner hình quảng cáo full-width (Image Ad Banner)
// Gợi ý vị trí: trước CTASection/Footer, hoặc giữa BlogSection.
export default function ImageAdBanner() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[320px] sm:min-h-[400px] bg-slate-900">
          {/* Background image */}
          <Image
            src="/images/xe-7-cho.jpg"
            alt="Taxi đi du lịch Tam Đảo - Tây Thiên"
            fill
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />

          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30"></div>

          {/* Content overlay */}
          <div className="relative h-full flex flex-col justify-center p-6 sm:p-10 lg:p-14 max-w-2xl">
            <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-bold mb-4 backdrop-blur-sm">
              <Mountain className="w-4 h-4" />
              Combo Du Lịch Tam Đảo - Tây Thiên
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
              Trọn Gói Xe Đi Tam Đảo,{" "}
              <span className="text-amber-400">Chỉ Từ 350K</span>
            </h2>

            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              Xe đời mới 4 - 7 - 16 chỗ đưa đón gia đình, nhóm bạn leo đèo Tam Đảo, vãn cảnh Tây Thiên.
              Lái xe địa phương am hiểu đường, giá thỏa thuận trọn gói trước khi đi.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm sm:text-base shadow-lg shadow-red-600/30 transition-transform transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Đặt Xe: {siteConfig.hotline}</span>
              </a>
              <Link
                href="/tuyen-duong"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition"
              >
                <span>Xem tuyến đường</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
