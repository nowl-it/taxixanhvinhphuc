import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { routeDetailsList } from "@/data/routes";
import { siteConfig } from "@/data/config";
import { Navigation, Clock, ArrowRight, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: `Taxi Điện Vĩnh Phúc - Danh Sách Tuyến Xe Taxi Vĩnh Phúc Trọn Gói [${siteConfig.hotline}]`,
  },
  description:
    "Tổng hợp các tuyến taxi xuất phát từ Vĩnh Phúc: Sân Bay Nội Bài, Hà Nội & Bệnh Viện, Việt Trì Phú Thọ, Tam Đảo, Tây Thiên, Xe hợp đồng KCN. Đón trả tận nơi 24/7.",
  alternates: {
    canonical: `${siteConfig.domain}/tuyen-duong`,
  },
  openGraph: {
    title: `Taxi Điện Vĩnh Phúc - Danh Sách Tuyến Xe Taxi Vĩnh Phúc Trọng Điểm [${siteConfig.hotline}]`,
    description: "Đưa đón sân bay Nội Bài chỉ từ 180K, xe tiện chuyến Hà Nội từ 150K, Tam Đảo, Tây Thiên 24/7.",
    url: `${siteConfig.domain}/tuyen-duong`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function TuyenDuongPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: siteConfig.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tuyến đường",
        item: `${siteConfig.domain}/tuyen-duong`,
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>MẠNG LƯỚI TUYẾN ĐƯỜNG KẾT NỐI</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Các Tuyến Xe Trọng Điểm Từ Vĩnh Phúc
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Đón trả tận nhà tại TP. Vĩnh Yên, Phúc Yên và các huyện trong tỉnh. Xe riêng trọn gói, đón đúng giờ bay và giờ hẹn khám bệnh.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routeDetailsList.map((route) => (
            <div
              key={route.slug}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {route.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{route.duration}</span>
                  </div>
                </div>

                <div>
                  <Link href={`/tuyen-duong/${route.slug}`}>
                    <h2 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                      {route.title}
                    </h2>
                  </Link>
                  <p className="text-xs text-emerald-700 font-semibold mt-1">{route.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Navigation className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Khoảng cách: <strong>{route.distance}</strong></span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {route.description}
                </p>

                {/* Price Highlights */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Xe 4 Chỗ:</span>
                    <span className="font-black text-emerald-700">{route.prices[0]?.oneWay}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Xe 7 Chỗ:</span>
                    <span className="font-black text-blue-700">{route.prices[1]?.oneWay}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 flex items-center gap-2">
                <a
                  href={`tel:${siteConfig.hotlineRaw}`}
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-md shadow-emerald-600/20 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi Đặt Tuyến</span>
                </a>

                <Link
                  href={`/tuyen-duong/${route.slug}`}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 transition"
                >
                  <span>Chi Tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-black">
              Bạn Cần Đón Tuyến Khác Không Có Trong Danh Sách?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Taxi Điện Vĩnh Phúc - Phú Thọ nhận đưa đón theo yêu cầu tới bất kỳ tỉnh thành nào trên toàn quốc. Đơn giá chỉ từ 9.000đ/km, giảm tới 70% cước chiều về.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-lg transition"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>GỌI BÁO GIÁ: {siteConfig.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
