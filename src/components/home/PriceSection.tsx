"use client";

import React, { useState } from "react";
import Link from "next/link";
import { noiBaiRoutes, haNoiRoutes, phuThoRoutes, tamDaoRoutes, kmRates } from "@/data/routes";
import { siteConfig } from "@/data/config";
import { Plane, Building2, MapPin, Mountain, Gauge, Phone, ArrowRight, ShieldCheck, Tag, MoveHorizontal } from "lucide-react";

export default function PriceSection() {
  const [activeTab, setActiveTab] = useState<"noibai" | "hanoi" | "phutho" | "tamdao" | "km">("noibai");

  return (
    <section id="bang-gia" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-slate-600" />
            <span>BẢNG GIÁ NIÊM YẾT MINH BẠCH 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Bảng Giá Cước Tuyến Trọng Điểm
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            Giá cước trọn gói bao gồm vé cầu đường cơ bản. Cam kết không phát sinh phụ phí ẩn, giảm <strong>40% - 70%</strong> cước chiều về trong ngày!
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center sm:justify-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap -mx-3 px-3 sm:mx-0 sm:px-0 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("noibai")}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 sm:shrink transition flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "noibai"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Sân Bay Nội Bài</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("hanoi")}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 sm:shrink transition flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "hanoi"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Hà Nội & Bệnh Viện</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("phutho")}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 sm:shrink transition flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "phutho"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Phú Thọ & Việt Trì</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("tamdao")}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 sm:shrink transition flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "tamdao"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Mountain className="w-4 h-4" />
            <span>Tam Đảo & Tây Thiên</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("km")}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 sm:shrink transition flex items-center gap-1.5 sm:gap-2 ${
              activeTab === "km"
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span>Giá Tính Theo Km</span>
          </button>
        </div>

        {/* Tab Content 1: Noi Bai */}
        {activeTab === "noibai" && (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden animate-in fade-in duration-200">
            <div className="lg:hidden px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Vuốt ngang để xem đủ giá các loại xe</span>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[760px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-4 sm:px-6 font-bold min-w-[220px] sm:min-w-[260px]">Điểm Đón / Tuyến</th>
                    <th className="py-4 px-3 sm:px-4 font-bold hidden sm:table-cell whitespace-nowrap">Cự Ly</th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-800 whitespace-nowrap">
                      <span>Xe 4 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-slate-700/80">Sedan</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-blue-800 whitespace-nowrap">
                      <span>Xe 7 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-800 hidden md:table-cell whitespace-nowrap">
                      <span>Xe 16 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-slate-500">Transit</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 text-center font-bold whitespace-nowrap">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {noiBaiRoutes.map((route, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-4 px-4 sm:px-6 min-w-[220px] sm:min-w-[260px]">
                        <div className="font-bold text-slate-900 leading-snug break-words">
                          <span>{route.from}</span>
                          <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                          <span>{route.to}</span>
                        </div>
                        {route.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{route.note}</div>}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600 font-medium hidden sm:table-cell whitespace-nowrap">{route.distance}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-slate-700 whitespace-nowrap">{route.price4Seats}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-blue-700 whitespace-nowrap">{route.price7Seats}</td>
                      <td className="py-4 px-3 sm:px-4 font-bold text-slate-700 whitespace-nowrap hidden md:table-cell">{route.price16Seats}</td>
                      <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                        <a
                          href={`tel:${siteConfig.hotlineRaw}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition whitespace-nowrap"
                        >
                          <Phone className="w-3 h-3 animate-pulse" />
                          <span>Đặt Tuyến</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-900">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Miễn phí 60 phút chờ máy bay delay • Đón tận sảnh T1 & T2 Nội Bài
              </span>
              <Link href="/tuyen-duong/vinh-phuc-noi-bai" className="font-bold text-slate-700 hover:underline flex items-center gap-1">
                Xem chi tiết tuyến Vĩnh Phúc - Nội Bài <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab Content 2: Hanoi */}
        {activeTab === "hanoi" && (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden animate-in fade-in duration-200">
            <div className="lg:hidden px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Vuốt ngang để xem đủ giá xe 4 &amp; 7 chỗ</span>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[720px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-4 sm:px-6 font-bold min-w-[220px] sm:min-w-[260px]">Lộ Trình Tuyến</th>
                    <th className="py-4 px-3 sm:px-4 font-bold whitespace-nowrap">Cự Ly / Hình Thức</th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-800 whitespace-nowrap">
                      <span>Xe 4 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-slate-700/80">Sedan</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-blue-800 whitespace-nowrap">
                      <span>Xe 7 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 text-center font-bold whitespace-nowrap">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {haNoiRoutes.map((route, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-4 px-4 sm:px-6 min-w-[220px] sm:min-w-[260px]">
                        <div className="font-bold text-slate-900 leading-snug break-words">
                          <span>{route.from}</span>
                          <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                          <span>{route.to}</span>
                        </div>
                        {route.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{route.note}</div>}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600 font-semibold whitespace-nowrap">{route.distance}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-slate-700 whitespace-nowrap">{route.price4Seats}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-blue-700 whitespace-nowrap">{route.price7Seats}</td>
                      <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                        <a
                          href={`tel:${siteConfig.hotlineRaw}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition whitespace-nowrap"
                        >
                          <Phone className="w-3 h-3 animate-pulse" />
                          <span>Gọi Đặt Xe</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-900">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Xe đi sớm từ 4h sáng phục vụ khám bệnh BV Bạch Mai, Việt Đức, K Tân Triều, 108
              </span>
              <Link href="/tuyen-duong/vinh-phuc-ha-noi" className="font-bold text-slate-700 hover:underline flex items-center gap-1">
                Xem chi tiết xe tiện chuyến Hà Nội <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab Content 3: Phu Tho */}
        {activeTab === "phutho" && (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden animate-in fade-in duration-200">
            <div className="lg:hidden px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Vuốt ngang để xem đủ giá xe 4 &amp; 7 chỗ</span>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[700px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-4 sm:px-6 font-bold min-w-[220px] sm:min-w-[260px]">Lộ Trình Tuyến</th>
                    <th className="py-4 px-3 sm:px-4 font-bold hidden sm:table-cell whitespace-nowrap">Khoảng Cách</th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-800 whitespace-nowrap">
                      <span>Xe 4 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-slate-700/80">Sedan</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-blue-800 whitespace-nowrap">
                      <span>Xe 7 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 text-center font-bold whitespace-nowrap">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {phuThoRoutes.map((route, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-4 px-4 sm:px-6 min-w-[220px] sm:min-w-[260px]">
                        <div className="font-bold text-slate-900 leading-snug break-words">
                          <span>{route.from}</span>
                          <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                          <span>{route.to}</span>
                        </div>
                        {route.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{route.note}</div>}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600 font-medium hidden sm:table-cell whitespace-nowrap">{route.distance}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-slate-700 whitespace-nowrap">{route.price4Seats}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-blue-700 whitespace-nowrap">{route.price7Seats}</td>
                      <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                        <a
                          href={`tel:${siteConfig.hotlineRaw}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition whitespace-nowrap"
                        >
                          <Phone className="w-3 h-3 animate-pulse" />
                          <span>Đặt Xe</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-900">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Kết nối nhanh qua cầu Vĩnh Phú và cầu Hạc Trì chỉ 20 phút di chuyển
              </span>
              <Link href="/tuyen-duong/vinh-phuc-phu-tho" className="font-bold text-slate-700 hover:underline flex items-center gap-1">
                Xem chi tiết tuyến Vĩnh Phúc - Việt Trì <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab Content 4: Tam Dao */}
        {activeTab === "tamdao" && (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden animate-in fade-in duration-200">
            <div className="lg:hidden px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Vuốt ngang để xem đủ giá xe 4 &amp; 7 chỗ</span>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[700px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-4 sm:px-6 font-bold min-w-[220px] sm:min-w-[260px]">Lộ Trình Du Lịch</th>
                    <th className="py-4 px-3 sm:px-4 font-bold hidden sm:table-cell whitespace-nowrap">Đặc Điểm</th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-800 whitespace-nowrap">
                      <span>Xe 4 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-slate-700/80">Sedan</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-blue-800 whitespace-nowrap">
                      <span>Xe 7 Chỗ</span>
                      <span className="block text-[10px] font-normal normal-case text-blue-700/80">SUV / MPV</span>
                    </th>
                    <th className="py-4 px-3 sm:px-4 text-center font-bold whitespace-nowrap">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tamDaoRoutes.map((route, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-4 px-4 sm:px-6 min-w-[220px] sm:min-w-[260px]">
                        <div className="font-bold text-slate-900 leading-snug break-words">
                          <span>{route.from}</span>
                          <span className="inline-block mx-1.5 text-slate-600 font-bold">⇄</span>
                          <span>{route.to}</span>
                        </div>
                        {route.note && <div className="text-xs text-slate-500 mt-1 leading-relaxed">{route.note}</div>}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600 font-medium hidden sm:table-cell whitespace-nowrap">{route.distance}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-slate-700 whitespace-nowrap">{route.price4Seats}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-blue-700 whitespace-nowrap">{route.price7Seats}</td>
                      <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                        <a
                          href={`tel:${siteConfig.hotlineRaw}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition whitespace-nowrap"
                        >
                          <Phone className="w-3 h-3 animate-pulse" />
                          <span>Đặt Xe</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-900">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                Tài xế bản địa tay lái vững đèo dốc sương mù, xe đời mới gầm cao
              </span>
              <Link href="/tuyen-duong/vinh-phuc-tam-dao" className="font-bold text-slate-700 hover:underline flex items-center gap-1">
                Xem chi tiết xe đi Tam Đảo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Tab Content 5: KM Rates */}
        {activeTab === "km" && (
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md border border-slate-200 overflow-hidden animate-in fade-in duration-200">
            <div className="lg:hidden px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>Vuốt ngang để xem cự ly và ưu đãi khứ hồi</span>
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm min-w-[740px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                    <th className="py-4 px-4 sm:px-6 font-bold min-w-[200px]">Loại Phương Tiện</th>
                    <th className="py-4 px-3 sm:px-4 font-bold whitespace-nowrap">Dưới 30km</th>
                    <th className="py-4 px-3 sm:px-4 font-bold whitespace-nowrap">Từ 31km - 100km</th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-slate-800 whitespace-nowrap">Trên 100km (Đường dài)</th>
                    <th className="py-4 px-3 sm:px-4 font-bold text-amber-600 whitespace-nowrap">Khứ Hồi (Chiều về)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {kmRates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-4 px-4 sm:px-6 min-w-[200px]">
                        <div className="font-bold text-slate-900">{rate.carType.split('(')[0].trim()}</div>
                        {rate.carType.includes('(') && (
                          <div className="text-xs text-slate-500 font-normal mt-0.5">
                            {rate.carType.substring(rate.carType.indexOf('(')).replace(/^\(|\)$/g, '')}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-700 font-semibold whitespace-nowrap">{rate.under30km}</td>
                      <td className="py-4 px-3 sm:px-4 text-slate-700 font-semibold whitespace-nowrap">{rate.from31to100km}</td>
                      <td className="py-4 px-3 sm:px-4 font-black text-slate-700 whitespace-nowrap">{rate.over100km}</td>
                      <td className="py-4 px-3 sm:px-4 font-bold text-amber-700 bg-amber-50/50 whitespace-nowrap">{rate.roundTripDiscount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-900 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-600 shrink-0" />
              <span>Áp dụng đi các tỉnh miền Bắc: Tuyên Quang, Yên Bái, Lào Cai, Bắc Ninh, Quảng Ninh, Hải Phòng...</span>
            </div>
          </div>
        )}

        {/* Bottom Quick Call CTA Banner */}
        <div className="mt-8 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-800 to-slate-900 text-white flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 sm:gap-6 shadow-xl shadow-slate-900/10">
          <div className="space-y-1 text-left max-w-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-balance leading-snug">
              Bạn Cần Báo Giá Tuyến Riêng Hoặc Thuê Xe Hợp Đồng?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 text-pretty leading-relaxed">
              Gọi ngay tổng đài điều hành để nhận báo giá trọn gói tốt nhất chỉ trong 30 giây!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto justify-start xl:justify-end">
            <a
              href={`tel:${siteConfig.hotlineRaw}`}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition whitespace-nowrap"
            >
              <Phone className="w-4 h-4 animate-phone-ring" />
              <span>GỌI: {siteConfig.hotline}</span>
            </a>
            <Link
              href="/bang-gia"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center transition whitespace-nowrap"
            >
              Xem Chi Tiết
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
