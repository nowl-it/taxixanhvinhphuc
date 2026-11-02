"use client";

import React from "react";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Phone, BadgePercent, Clock3, Wallet, Route } from "lucide-react";

// Banner 2: Khối khuyến mãi lớn (Promo Block)
// Gợi ý vị trí: giữa trang, sau CarFleet / trước Commitments.
export default function PromoBlock() {
  const perks = [
    { icon: BadgePercent, title: "Giảm đến 70%", desc: "Cước chiều về khi đi khứ hồi trong ngày" },
    { icon: Wallet, title: "Giá trọn gói", desc: "Đã gồm phí cầu đường, không phụ phí ẩn" },
    { icon: Clock3, title: "Xe sau 10-15 phút", desc: "Tài xế túc trực, có mặt siêu tốc" },
    { icon: Route, title: "Đón trả tận nơi", desc: "Tất cả xã, huyện, TP tại Vĩnh Phúc" },
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl shadow-slate-900/20">
          {/* Decorative amber glow (lightweight, no blur filter on layout) */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-500/10 pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-amber-400/5 pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left: headline + CTA */}
            <div className="lg:col-span-3 space-y-5 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black">
                <BadgePercent className="w-4 h-4" />
                Ưu Đãi Giới Hạn Trong Tuần
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
                Đi Khứ Hồi Trong Ngày{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  Giảm Đến 70% Chiều Về
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Đặt xe khứ hồi cùng ngày, chiều về được giảm sâu tới 70%. Phù hợp đi công tác, khám bệnh
                tại Hà Nội hay du lịch Tam Đảo. Gọi ngay để giữ giá tốt nhất!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                <a
                  href={`tel:${siteConfig.hotlineRaw}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/30 transition-transform transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  <span>GỌI NGAY: {siteConfig.hotline}</span>
                </a>
                <a
                  href={siteConfig.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/25 transition-transform transform hover:-translate-y-0.5"
                >
                  <ZaloIcon className="w-5 h-5" />
                  <span>Nhắn Zalo Giữ Xe</span>
                </a>
              </div>
            </div>

            {/* Right: perks grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col gap-1.5"
                >
                  <p.icon className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-sm text-white">{p.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
