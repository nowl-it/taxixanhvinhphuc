import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";
import { carFleet } from "@/data/cars";
import { Car, Briefcase, CheckCircle2, Phone, ArrowRight, ShieldCheck, Sparkles, Plane, Building2, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} [${siteConfig.hotline}] - Dịch Vụ Xe 4 Chỗ, 7 Chỗ, 16 Chỗ & Xe Tiện Chuyến`,
  description:
    "Cung cấp đa dạng dịch vụ taxi Vĩnh Phúc: Thuê xe 4 chỗ, 7 chỗ, 16 chỗ đời mới 2022-2025. Xe tiện chuyến Hà Nội, đưa đón sân bay Nội Bài, xe hợp đồng KCN trọn gói giá rẻ. Hotline 058 815 555.",
  alternates: {
    canonical: `${siteConfig.domain}/dich-vu`,
  },
  openGraph: {
    title: `${siteConfig.brandName} [${siteConfig.hotline}] - Dịch Vụ Thuê Xe Taxi 4 Chỗ, 7 Chỗ, 16 Chỗ Vĩnh Phúc`,
    description: "Đội xe đời mới 2022 - 2025 phục vụ đưa đón sân bay Nội Bài, đường dài liên tỉnh, hợp đồng du lịch.",
    url: `${siteConfig.domain}/dich-vu`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function DichVuPage() {
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
        name: "Dịch vụ xe",
        item: `${siteConfig.domain}/dich-vu`,
      },
    ],
  };
  const extraServices = [
    {
      title: "Đưa Đón Sân Bay Nội Bài 24/7",
      desc: "Phục vụ 24/24 đón tiễn sân bay Nội Bài từ mọi xã, phường Vĩnh Phúc. Miễn phí chờ delay, lái xe hỗ trợ hành lý chu đáo.",
      icon: Plane,
      price: "Chỉ từ 180.000đ trọn gói",
      link: "/tuyen-duong/vinh-phuc-noi-bai",
    },
    {
      title: "Xe Tiện Chuyến Đi Bệnh Viện Hà Nội",
      desc: "Khởi hành từ 4h sáng phục vụ khám chữa bệnh tại BV Bạch Mai, Việt Đức, K Tân Triều, 108. Đi ghép chỉ 150k/người hoặc bao trọn chuyến.",
      icon: Building2,
      price: "Đi ghép từ 150.000đ / người",
      link: "/tuyen-duong/vinh-phuc-ha-noi",
    },
    {
      title: "Thuê Xe Hợp Đồng Đưa Đón KCN",
      desc: "Đưa đón chuyên gia, lãnh đạo các nhà máy KCN Bá Thiện 1-2, Bình Xuyên, Khai Quang, Thăng Long. Hóa đơn VAT điện tử minh bạch.",
      icon: Calendar,
      price: "Từ 1.000.000đ / ngày",
      link: "/tuyen-duong/vinh-phuc-kcn",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-slate-600" />
            <span>DỊCH VỤ VẬN TẢI CHUYÊN NGHIỆP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Các Dịch Vụ Xe Taxi Vĩnh Phúc - Phú Thọ
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Đáp ứng toàn diện mọi nhu cầu di chuyển: cá nhân, gia đình, công tác, du lịch và hợp đồng doanh nghiệp với dàn xe đời mới 2022 - 2025.
          </p>
        </div>

        {/* Core Fleet Options: 4, 7, 16 seats */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-black text-slate-900">
              Đội Xe Phục Vụ Trọng Tâm (4 - 7 - 16 Chỗ)
            </h2>
            <p className="text-sm text-slate-500">
              Xe gia đình sạch sẽ, thơm tho, bảo dưỡng chính hãng định kỳ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {carFleet.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-56 bg-slate-900 overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                      {car.seats} Chỗ Ngồi
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-red-600 font-black text-xs px-3 py-1 rounded-xl shadow-md">
                      {car.basePricePerKm}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{car.name}</h3>
                      <p className="text-xs font-bold text-slate-700 mt-0.5">{car.tagline}</p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{car.description}</p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Car className="w-4 h-4 text-slate-600 shrink-0" />
                        <span><strong>Dòng xe:</strong> {car.models.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Briefcase className="w-4 h-4 text-slate-600 shrink-0" />
                        <span><strong>Khoang hành lý:</strong> {car.luggage}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <span className="font-bold text-slate-800 block">Ưu điểm nổi bật:</span>
                      {car.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-2">
                  <a
                    href={`tel:${siteConfig.hotlineRaw}`}
                    className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-slate-600/20 transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Đặt Xe Nhanh</span>
                  </a>
                  <Link
                    href={`/dich-vu/${car.slug}`}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 transition"
                  >
                    <span>Chi Tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Specialized Services */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-black text-slate-900">
              Các Hình Thức Dịch Vụ Nổi Bật Khác
            </h2>
            <p className="text-sm text-slate-500">
              Tối ưu ngân sách theo từng mục đích di chuyển chuyên biệt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extraServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-500/50 transition"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
                    <div className="inline-block bg-slate-50 text-slate-800 font-bold text-xs px-3 py-1 rounded-full border border-slate-200">
                      {srv.price}
                    </div>
                  </div>

                  <Link
                    href={srv.link}
                    className="text-xs font-bold text-slate-700 hover:underline flex items-center gap-1 pt-2"
                  >
                    <span>Khám phá tuyến này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Tiêu Chuẩn Phục Vụ 5 Sao</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Bạn Cần Tư Vấn Loại Xe Phù Hợp Cho Chuyến Đi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Đội ngũ điều phối viên trực máy 24/7 sẽ tư vấn lộ trình và dòng xe tiết kiệm chi phí nhất cho gia đình bạn.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-lg transition"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>GỌI TỔNG ĐÀI: {siteConfig.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
