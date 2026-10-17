import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import { Phone, Mail, Clock, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";

import TaxiCarIcon from "@/components/ui/TaxiCarIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-16 pb-24 sm:pb-20 border-t border-slate-800">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/25 shrink-0 p-1">
                <TaxiCarIcon className="w-full h-auto drop-shadow-sm" primaryColor="#FFFFFF" secondaryColor="#022c22" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  TAXI XANH <span className="text-emerald-400">VĨNH PHÚC</span>
                </span>
                <p className="text-xs text-slate-400">Tổng đài taxi &amp; xe tiện chuyến 24/7</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Dịch vụ taxi gia đình, xe tiện chuyến, xe ghép giá rẻ trọn gói tại Vĩnh Phúc. Đội xe đời mới 2022 - 2025, lái xe bản địa thân thiện, cam kết đúng giờ và giá cước rẻ nhất thị trường.
            </p>

            <div className="space-y-2.5 pt-2 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Đón trả tận nơi tại TP. Vĩnh Yên, TP. Phúc Yên &amp; toàn tỉnh Vĩnh Phúc</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${siteConfig.hotlineRaw}`} className="text-amber-400 font-bold hover:underline">
                  Hotline 24/7: {siteConfig.hotline}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Featured Routes */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Tuyến Đường Nổi Bật
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tuyen-duong/vinh-phuc-noi-bai" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Taxi Vĩnh Phúc ⇄ Sân Bay Nội Bài (từ 180K)
                </Link>
              </li>
              <li>
                <Link href="/tuyen-duong/vinh-phuc-ha-noi" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Xe Tiện Chuyến Hà Nội - Các Bệnh Viện
                </Link>
              </li>
              <li>
                <Link href="/tuyen-duong/vinh-phuc-phu-tho" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Taxi Vĩnh Yên ⇄ Việt Trì - Đền Hùng
                </Link>
              </li>
              <li>
                <Link href="/tuyen-duong/vinh-phuc-tam-dao" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Taxi Du Lịch Thị Trấn Tam Đảo
                </Link>
              </li>
              <li>
                <Link href="/tuyen-duong/vinh-phuc-tay-thien" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Xe Đi Danh Thắng Tây Thiên
                </Link>
              </li>
              <li>
                <Link href="/tuyen-duong/vinh-phuc-kcn" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Xe Hợp Đồng Đưa Đón KCN Bá Thiện, Bình Xuyên
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Dịch Vụ & Bảng Giá
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/dich-vu/xe-4-cho" className="hover:text-emerald-400 transition">
                  • Thuê xe 4 chỗ (Vios, Accent, City đời mới)
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/xe-7-cho" className="hover:text-emerald-400 transition">
                  • Thuê xe 7 chỗ (Xpander, Fortuner, Carnival)
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/xe-16-cho" className="hover:text-emerald-400 transition">
                  • Thuê xe 16 chỗ (Transit, Solati du lịch)
                </Link>
              </li>
              <li>
                <Link href="/bang-gia" className="hover:text-emerald-400 transition">
                  • Bảng giá cước tính theo Kilomet đường dài
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="hover:text-emerald-400 transition">
                  • Cẩm nang kinh nghiệm đặt xe giá rẻ
                </Link>
              </li>
              <li>
                <Link href="/gioi-thieu" className="hover:text-emerald-400 transition">
                  • Về chúng tôi & Cam kết chất lượng
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Commitment & Direct Booking */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Cam Kết Dịch Vụ Vàng
            </h3>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Không tăng giá giờ cao điểm hay ngày lễ</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Giảm 40% - 70% cước chiều về trong ngày</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hủy xe miễn phí, không phạt cọc</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition"
              >
                <Phone className="w-4 h-4 animate-phone-ring" />
                <span>BẤM GỌI: {siteConfig.hotline}</span>
              </a>
              <a
                href={siteConfig.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-center flex items-center justify-center gap-2 transition text-sm"
              >
                <ZaloIcon className="w-4 h-4" />
                <span>Kết bạn Zalo tư vấn 24/7</span>
              </a>
            </div>
          </div>
        </div>

        {/* Areas Served */}
        <div className="border-t border-slate-800 pt-8 pb-6 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">Khu vực phục vụ đón trả 24/7 tại Vĩnh Phúc:</p>
          <div className="flex flex-wrap gap-2">
            {siteConfig.operatingAreas.map((area, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer Banner for Google Ads Transparency */}
        <div className="border-t border-slate-800/80 pt-6 pb-4">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs text-slate-400 space-y-1.5 leading-relaxed">
            <p className="font-bold text-slate-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Tuyên bố minh bạch &amp; Miễn trừ trách nhiệm (Disclaimer):
            </p>
            <p>
              Website <strong>{siteConfig.domain}</strong> là cổng thông tin tiếp nhận đặt xe và điều phối của <strong>{siteConfig.brandName}</strong> – Đơn vị cung cấp dịch vụ taxi gia đình, xe tiện chuyến và xe hợp đồng tư nhân độc lập tại tỉnh Vĩnh Phúc và các tuyến liên tỉnh. Chúng tôi hoạt động độc lập, không trực thuộc, không đại diện và không có mối quan hệ ủy quyền hay liên kết thương hiệu với Công ty Cổ phần Di chuyển Xanh và Thông minh (GSM), VinFast hay bất kỳ tổ chức nào khác.
            </p>
          </div>
        </div>

        {/* Legal Policies Links */}
        <div className="border-t border-slate-900 pt-5 pb-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400">
          <Link href="/chinh-sach-bao-mat" className="hover:text-emerald-400 hover:underline transition">
            Chính Sách Bảo Mật
          </Link>
          <span>•</span>
          <Link href="/dieu-khoan-su-dung" className="hover:text-emerald-400 hover:underline transition">
            Điều Khoản Dịch Vụ
          </Link>
          <span>•</span>
          <Link href="/chinh-sach-hoan-huy" className="hover:text-emerald-400 hover:underline transition">
            Chính Sách Hủy Chuyến &amp; Hoàn Tiền
          </Link>
          <span>•</span>
          <Link href="/lien-he" className="hover:text-emerald-400 hover:underline transition">
            Liên Hệ &amp; Khiếu Nại
          </Link>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3 sm:gap-4 text-center sm:text-left">
          <p>© 2026 {siteConfig.brandName}. Bản quyền thuộc về Taxi Xanh Vĩnh Phúc. Đơn vị cung cấp dịch vụ vận tải taxi &amp; xe tiện chuyến hàng đầu Vĩnh Phúc.</p>
          <p className="text-slate-400 shrink-0">
            Hotline điều hành: <strong className="text-amber-400">{siteConfig.hotline}</strong> | Zalo: <strong className="text-blue-400">0961 299 934</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
