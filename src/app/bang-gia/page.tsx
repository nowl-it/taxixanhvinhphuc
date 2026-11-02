import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { noiBaiRoutes, haNoiRoutes, phuThoRoutes, tamDaoRoutes, kmRates, kcnContracts } from "@/data/routes";
import { Phone, Tag, ArrowRight, MoveHorizontal, Plane, Building2, MapPin, Mountain, Gauge, Briefcase } from "lucide-react";

import ZaloIcon from "@/components/ui/ZaloIcon";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.brandName} [${siteConfig.hotline}] - Bảng Giá Cước Taxi Trọn Gói`,
  },
  description:
    "Cập nhật bảng giá taxi Vĩnh Phúc trọn gói 2026: Tuyến Sân Bay Nội Bài từ 180K, Hà Nội đi ghép 150K, Việt Trì 200K, Tam Đảo 350K. Giảm 40% - 70% cước chiều về. Hotline 058 815 555.",
  alternates: {
    canonical: `${siteConfig.domain}/bang-gia`,
  },
  openGraph: {
    title: `${siteConfig.brandName} [${siteConfig.hotline}] - Bảng Giá Cước Taxi Trọn Gói`,
    description: "Bảng giá cước taxi đưa đón sân bay Nội Bài, Hà Nội, Tam Đảo, Tây Thiên trọn gói rẻ nhất Vĩnh Phúc.",
    url: `${siteConfig.domain}/bang-gia`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function BangGiaPage() {
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
            name: "Bảng giá cước",
            item: `${siteConfig.domain}/bang-gia`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Giá cước taxi Vĩnh Phúc đi sân bay Nội Bài là bao nhiêu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tuyến Phúc Yên - Nội Bài: 180.000đ - 220.000đ (4 chỗ) / 250.000đ (7 chỗ). Tuyến Vĩnh Yên/Bình Xuyên - Nội Bài: 250.000đ - 280.000đ (4 chỗ) / 320.000đ (7 chỗ).",
            },
          },
          {
            "@type": "Question",
            name: "Đi 2 chiều trong ngày có được giảm giá không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Khách hàng đi 2 chiều khứ hồi trong ngày được giảm từ 40% đến 70% cước chiều về tùy cung đường.",
            },
          },
          {
            "@type": "Question",
            name: "Giá cước có bao gồm phí cầu đường chưa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Báo giá của Taxi Vĩnh Phúc - Phú Thọ là giá trọn gói đã bao gồm phí cầu đường cơ bản, cam kết không phát sinh phụ phí ẩn.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <Link href="/" className="hover:text-amber-700">Trang chủ</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Bảng giá cước</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>NIÊM YẾT GIÁ CHÍNH THỨC 2026</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            <span className="whitespace-nowrap">{`${siteConfig.brandName} ${siteConfig.hotline}`}</span> - Bảng Giá Cước Taxi & Xe Tiện Chuyến
          </h1>
          <p className="text-slate-600 text-xs sm:text-base">
            Giá cước trọn gói minh bạch, đã bao gồm phí cầu đường cơ bản. Cam kết không phát sinh phụ phí ẩn, đón trả tận nhà 24/7.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-white flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="space-y-2 text-left max-w-2xl">
            <span className="inline-block bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Chính Sách Khứ Hồi Ưu Đãi
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-balance leading-snug">
              Giảm Từ 40% Đến 70% <br className="hidden sm:inline" />
              Cước Chiều Về Trong Ngày!
            </h2>
            <p className="text-xs sm:text-sm text-slate-100 text-pretty leading-relaxed">
              Miễn phí 60 phút chờ đầu tiên khi đón sân bay Nội Bài. Hủy xe không mất phí cọc.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto justify-start xl:justify-end">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition whitespace-nowrap"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>GỌI TỔNG ĐÀI: {siteConfig.hotline}</span>
            </a>
            <a
              href={siteConfig.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 text-blue-600 font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm whitespace-nowrap"
            >
              <ZaloIcon className="w-4 h-4" />
              <span>Nhắn Zalo</span>
            </a>
          </div>
        </div>

        {/* 1. Tuyến Sân Bay Nội Bài */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  1. Tuyến Vĩnh Phúc ⇄ <span className="whitespace-nowrap">Sân Bay Nội Bài</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Đưa đón đúng giờ bay tại sảnh ga T1 (Nội địa) và T2 (Quốc tế). Theo dõi mã chuyến bay tự động.
                </p>
              </div>
            </div>
            <Link
              href="/tuyen-duong/vinh-phuc-noi-bai"
              className="whitespace-nowrap shrink-0 text-xs font-bold text-slate-700 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition self-start sm:self-center"
            >
              <span>Xem chi tiết tuyến</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:hidden px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Vuốt ngang để xem đủ giá các loại xe</span>
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[760px] lg:min-w-full">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold min-w-[240px] sm:min-w-[260px]">Điểm Đón / Trả</th>
                  <th className="py-3.5 px-4 font-bold whitespace-nowrap">Cự Ly</th>
                  <th className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">
                    <span>Xe 4 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-slate-700/80">Vios / Accent</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-blue-800 whitespace-nowrap">
                    <span>Xe 7 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-blue-700/80">Xpander / Fortuner</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">
                    <span>Xe 16 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-slate-500">Transit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {noiBaiRoutes.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 min-w-[240px] sm:min-w-[260px]">
                      <div className="font-bold text-slate-900 leading-snug break-words">
                        <span>{r.from}</span>
                        <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                        <span>{r.to}</span>
                      </div>
                      {r.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{r.note}</div>}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-semibold whitespace-nowrap">{r.distance}</td>
                    <td className="py-3.5 px-4 font-black text-slate-700 whitespace-nowrap">{r.price4Seats}</td>
                    <td className="py-3.5 px-4 font-black text-blue-700 whitespace-nowrap">{r.price7Seats}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-700 whitespace-nowrap">{r.price16Seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Tuyến Hà Nội & Bệnh Viện */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  2. Tuyến Vĩnh Phúc ⇄ <span className="whitespace-nowrap">Hà Nội & Bệnh Viện</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Phục vụ khám chữa bệnh (Bạch Mai, Việt Đức, K Tân Triều, 108, Nhi TW...), công tác và bến xe.
                </p>
              </div>
            </div>
            <Link
              href="/tuyen-duong/vinh-phuc-ha-noi"
              className="whitespace-nowrap shrink-0 text-xs font-bold text-slate-700 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition self-start sm:self-center"
            >
              <span>Xem chi tiết tuyến</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:hidden px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Vuốt ngang để xem đủ giá xe 4 &amp; 7 chỗ</span>
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[700px] lg:min-w-full">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold min-w-[240px] sm:min-w-[260px]">Lộ Trình Tuyến</th>
                  <th className="py-3.5 px-4 font-bold whitespace-nowrap">Cự Ly</th>
                  <th className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">
                    <span>Xe 4 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-slate-700/80">Sedan</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-blue-800 whitespace-nowrap">
                    <span>Xe 7 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {haNoiRoutes.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 min-w-[240px] sm:min-w-[260px]">
                      <div className="font-bold text-slate-900 leading-snug break-words">
                        <span>{r.from}</span>
                        <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                        <span>{r.to}</span>
                      </div>
                      {r.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{r.note}</div>}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-semibold whitespace-nowrap">{r.distance}</td>
                    <td className="py-3.5 px-4 font-black text-slate-700 whitespace-nowrap">{r.price4Seats}</td>
                    <td className="py-3.5 px-4 font-black text-blue-700 whitespace-nowrap">{r.price7Seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Tuyến Phú Thọ & Việt Trì */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  3. Tuyến Vĩnh Phúc ⇄ <span className="whitespace-nowrap">Phú Thọ (Việt Trì)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Qua cầu Hạc Trì và cầu Vĩnh Phú. Đưa đón Đền Hùng, TP Việt Trì, Lâm Thao chỉ 20 - 30 phút.
                </p>
              </div>
            </div>
            <Link
              href="/tuyen-duong/vinh-phuc-phu-tho"
              className="whitespace-nowrap shrink-0 text-xs font-bold text-slate-700 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition self-start sm:self-center"
            >
              <span>Xem chi tiết tuyến</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:hidden px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Vuốt ngang để xem đủ giá xe 4 &amp; 7 chỗ</span>
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[700px] lg:min-w-full">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold min-w-[240px] sm:min-w-[260px]">Lộ Trình Phổ Biến</th>
                  <th className="py-3.5 px-4 font-bold whitespace-nowrap">Khoảng Cách</th>
                  <th className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">
                    <span>Xe 4 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-slate-700/80">Sedan</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-blue-800 whitespace-nowrap">
                    <span>Xe 7 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {phuThoRoutes.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 min-w-[240px] sm:min-w-[260px]">
                      <div className="font-bold text-slate-900 leading-snug break-words">
                        <span>{r.from}</span>
                        <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                        <span>{r.to}</span>
                      </div>
                      {r.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{r.note}</div>}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">{r.distance}</td>
                    <td className="py-3.5 px-4 font-black text-slate-700 whitespace-nowrap">{r.price4Seats}</td>
                    <td className="py-3.5 px-4 font-black text-blue-700 whitespace-nowrap">{r.price7Seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Tuyến Tam Đảo & Tây Thiên */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  4. Tuyến Du Lịch <span className="whitespace-nowrap">Tam Đảo & Tây Thiên</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Lái xe bản địa quen đường cua đèo dốc sương mù, xe gầm cao an toàn tuyệt đối.
                </p>
              </div>
            </div>
            <Link
              href="/tuyen-duong/vinh-phuc-tam-dao"
              className="whitespace-nowrap shrink-0 text-xs font-bold text-slate-700 hover:text-slate-800 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition self-start sm:self-center"
            >
              <span>Xem chi tiết tuyến</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:hidden px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Vuốt ngang để xem đủ giá xe 4 &amp; 7 chỗ</span>
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[700px] lg:min-w-full">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold min-w-[240px] sm:min-w-[260px]">Lộ Trình Du Lịch</th>
                  <th className="py-3.5 px-4 font-bold whitespace-nowrap">Đặc Điểm Tuyến</th>
                  <th className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">
                    <span>Xe 4 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-slate-700/80">Sedan</span>
                  </th>
                  <th className="py-3.5 px-4 font-bold text-blue-800 whitespace-nowrap">
                    <span>Xe 7 Chỗ</span>
                    <span className="block text-[11px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tamDaoRoutes.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 min-w-[240px] sm:min-w-[260px]">
                      <div className="font-bold text-slate-900 leading-snug break-words">
                        <span>{r.from}</span>
                        <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                        <span>{r.to}</span>
                      </div>
                      {r.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{r.note}</div>}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">{r.distance}</td>
                    <td className="py-3.5 px-4 font-black text-slate-700 whitespace-nowrap">{r.price4Seats}</td>
                    <td className="py-3.5 px-4 font-black text-blue-700 whitespace-nowrap">{r.price7Seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Giá Theo KM Đi Tỉnh Đường Dài */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  5. Giá Cước Tính Theo Km <span className="whitespace-nowrap">(Đường Dài Đi Tỉnh)</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Áp dụng đi Tuyên Quang, Yên Bái, Lào Cai (Sa Pa), Bắc Ninh, Quảng Ninh, Hải Phòng, Ninh Bình...
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden px-4 py-2 bg-slate-50 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>Vuốt ngang để xem cự ly và ưu đãi khứ hồi</span>
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[740px] lg:min-w-full">
              <thead>
                <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-bold min-w-[200px]">Loại Xe</th>
                  <th className="py-3.5 px-4 font-bold whitespace-nowrap">Dưới 30km</th>
                  <th className="py-3.5 px-4 font-bold whitespace-nowrap">Từ 31km – 100km</th>
                  <th className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">Trên 100km (Đường dài)</th>
                  <th className="py-3.5 px-4 font-bold text-amber-700 whitespace-nowrap">Khứ Hồi (Chiều về)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {kmRates.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 min-w-[200px]">
                      <div className="font-bold text-slate-900">{r.carType.split('(')[0].trim()}</div>
                      {r.carType.includes('(') && (
                        <div className="text-xs text-slate-500 mt-0.5 font-normal">
                          {r.carType.substring(r.carType.indexOf('(')).replace(/^\(|\)$/g, '')}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 font-semibold whitespace-nowrap">{r.under30km}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-semibold whitespace-nowrap">{r.from31to100km}</td>
                    <td className="py-3.5 px-4 font-black text-slate-700 whitespace-nowrap">{r.over100km}</td>
                    <td className="py-3.5 px-4 font-bold text-amber-700 bg-amber-50/50 whitespace-nowrap">{r.roundTripDiscount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Xe Hợp Đồng KCN Vĩnh Phúc */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 sm:mt-0">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  6. Thuê Xe Hợp Đồng <span className="whitespace-nowrap">Doanh Nghiệp & KCN</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Phục vụ các KCN Khai Quang, Bình Xuyên 1-2, Bá Thiện 1-2, Thăng Long. Xuất hóa đơn VAT điện tử hợp lệ.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {kcnContracts.map((contract, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{contract.name}</h3>
                  <div className="text-base sm:text-lg font-black text-slate-700 mb-2">{contract.price}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{contract.desc}</p>
                </div>
                <div className="text-xs text-slate-500 border-t border-slate-200 pt-3 flex flex-wrap items-center justify-between gap-2">
                  <span>Phát sinh km: <strong className="text-slate-800">{contract.overKm}</strong></span>
                  <span>Phát sinh giờ: <strong className="text-slate-800">{contract.overHour}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-4 sm:py-6 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">Bạn Đã Sẵn Sàng Cho Chuyến Đi?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Chỉ một cuộc gọi điện thoại, tài xế sẽ có mặt tại điểm đón của bạn sau 10 - 15 phút.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 transition transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Phone className="w-5 h-5 animate-phone-ring" />
              <span>Gọi Tổng Đài: {siteConfig.hotline}</span>
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-slate-600/30 transition flex items-center justify-center whitespace-nowrap"
            >
              Đặt Xe Trực Tuyến
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
