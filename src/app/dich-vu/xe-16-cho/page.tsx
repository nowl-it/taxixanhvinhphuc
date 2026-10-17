import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { carFleet } from "@/data/cars";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Users, Briefcase, CheckCircle2, Phone, ShieldCheck, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: `Dịch Vụ Thuê Xe 16 Chỗ Vĩnh Phúc [${siteConfig.hotline}]`,
  },
  description:
    "Thuê xe 16 chỗ tại Vĩnh Phúc: Ford Transit, Hyundai Solati đời mới. Phục vụ đoàn du lịch Tam Đảo, Tây Thiên, đám cưới hỏi, hợp đồng đưa đón KCN giá rẻ. Hotline 0961 299 934.",
  alternates: {
    canonical: `${siteConfig.domain}/dich-vu/xe-16-cho`,
  },
  openGraph: {
    title: `Dịch Vụ Thuê Xe 16 Chỗ Vĩnh Phúc [${siteConfig.hotline}]`,
    description: "Xe 16 chỗ Ford Transit, Solati đón tận nhà, tài xế bản địa tận tâm.",
    url: `${siteConfig.domain}/dich-vu/xe-16-cho`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function Xe16ChoPage() {
  const car = carFleet.find((c) => c.slug === "xe-16-cho") || carFleet[2];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Dịch vụ xe",
            item: `${siteConfig.domain}/dich-vu`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Xe 16 Chỗ",
            item: `${siteConfig.domain}/dich-vu/xe-16-cho`,
          },
        ],
      },
      {
        "@type": "Product",
        name: "Dịch Vụ Thuê Xe 16 Chỗ Vĩnh Phúc",
        description: car.description,
        brand: {
          "@type": "Brand",
          name: siteConfig.brandName,
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "VND",
          lowPrice: "450000",
          highPrice: "1600000",
        },
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-600">Trang chủ</Link>
          <span>/</span>
          <Link href="/dich-vu" className="hover:text-emerald-600">Dịch vụ</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Xe 16 Chỗ</span>
        </nav>

        {/* Hero Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5 text-emerald-600" />
              <span>ĐOÀN ĐÔNG & DU LỊCH</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Dịch Vụ Thuê Xe 16 Chỗ Vĩnh Phúc
            </h1>
            <p className="text-emerald-700 font-bold text-base sm:text-lg">
              {car.tagline}
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <Users className="w-5 h-5 text-emerald-600 mb-1" />
                <div className="font-bold text-slate-900 text-sm">Số chỗ ngồi</div>
                <div className="text-xs text-slate-500">Tối đa 16 hành khách</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <Briefcase className="w-5 h-5 text-emerald-600 mb-1" />
                <div className="font-bold text-slate-900 text-sm">Khoang hành lý</div>
                <div className="text-xs text-slate-500">{car.luggage}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition"
              >
                <Phone className="w-4 h-4 animate-phone-ring" />
                <span>Gọi Đặt Xe: {siteConfig.hotline}</span>
              </a>
              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 shadow-sm font-bold text-sm flex items-center justify-center gap-2 transition"
              >
                <ZaloIcon className="w-4 h-4" />
                <span>Chat Zalo Báo Giá</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
            <Image
              src={car.image}
              alt="Xe 16 chỗ Ford Transit Vĩnh Phúc"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
              Ford Transit • Hyundai Solati
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl text-xs flex justify-between items-center">
              <span>Giá cước đường dài:</span>
              <strong className="text-amber-300 text-sm">{car.basePricePerKm}</strong>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Bảng Giá Cước Xe 16 Chỗ Theo Khoảng Cách
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Cự Ly Di Chuyển</th>
                  <th className="py-3 px-4 font-bold text-emerald-800">Đơn Giá / Km</th>
                  <th className="py-3 px-4 font-bold text-amber-700">Ưu Đãi Chiều Về</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {car.pricingTable.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{p.distance}</td>
                    <td className="py-3.5 px-4 font-black text-emerald-700">{p.price}</td>
                    <td className="py-3.5 px-4 font-semibold text-amber-700">{p.roundTripDiscount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Suitability & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Tiện Ích & Trang Bị Trên Xe
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {car.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Phù Hợp Cho Nhu Cầu Nào?
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {car.suitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
