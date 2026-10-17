import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { CheckCircle2, RotateCcw, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Chính Sách Đặt Xe, Hủy Chuyến & Phương Thức Thanh Toán",
  description: `Quy định đặt xe, chính sách miễn phí hủy chuyến 100% và các phương thức thanh toán linh hoạt tại ${siteConfig.brandName}.`,
  alternates: {
    canonical: `${siteConfig.domain}/chinh-sach-hoan-huy`,
  },
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link href="/" className="hover:text-emerald-600 transition">Trang chủ</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Chính sách đặt &amp; hủy chuyến</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <RotateCcw className="w-4 h-4 text-emerald-600" />
            <span>MINH BẠCH GIÁ CƯỚC &amp; ĐỔI TRẢ</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Chính Sách Đặt Xe, Hủy Chuyến &amp; Thanh Toán
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Cam kết quyền lợi tối đa cho khách hàng • Phục vụ 24/7 không phụ phí
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              1. Quy trình đặt xe &amp; Xác nhận hành trình
            </h2>
            <p>
              Khách hàng có thể đặt xe nhanh chóng qua 2 phương thức:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">Cách 1: Gọi điện trực tiếp</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Gọi Hotline <strong>{siteConfig.hotline}</strong> (trực 24/7). Nhân viên điều phối sẽ kiểm tra vị trí xe gần bạn nhất và báo giá trọn gói trong 30 giây.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-slate-900 text-sm">Cách 2: Đặt qua Form / Zalo</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Nhập thông tin tại Form trên website. Tổng đài viên sẽ liên hệ lại qua số điện thoại hoặc Zalo để gửi biển số xe và hình ảnh tài xế đón bạn.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Cancellation Policy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              2. Chính sách hủy chuyến – Miễn phí 100%
            </h2>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>MIỄN PHÍ HỦY CHUYẾN 100% TRONG MỌI TRƯỜNG HỢP</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                Chúng tôi thấu hiểu kế hoạch của quý khách có thể thay đổi do chuyến bay trễ giờ, hoãn lịch họp hoặc thay đổi việc gia đình.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-emerald-900">
                <li>Quý khách được <strong>hủy chuyến hoàn toàn miễn phí</strong> bằng cách gọi điện hoặc nhắn tin cho tổng đài trước giờ xe khởi hành.</li>
                <li>Không phát sinh phí phạt, không giữ tiền cọc của khách hàng.</li>
                <li>Nếu cần dời giờ đón, chúng tôi sẽ hỗ trợ đổi lịch sang khung giờ mới mà không tăng giá cước.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Payment Policy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              3. Phương thức thanh toán linh hoạt
            </h2>
            <p>
              Để thuận tiện nhất cho hành khách, {siteConfig.brandName} áp dụng hình thức <strong>thanh toán sau khi kết thúc chuyến đi</strong> an toàn:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block">Tiền mặt</span>
                <p className="text-[11px] sm:text-xs text-slate-500">Thanh toán trực tiếp cho tài xế sau khi đến nơi.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block">Chuyển khoản (Banking)</span>
                <p className="text-[11px] sm:text-xs text-slate-500">Chuyển khoản qua số tài khoản ngân hàng chính thức.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 text-xs sm:text-sm block">Quét mã VietQR</span>
                <p className="text-[11px] sm:text-xs text-slate-500">Quét mã QR tiện lợi ngay trên xe qua ứng dụng ngân hàng.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Refund Policy */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              4. Chính sách hoàn tiền &amp; Đền bù
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Trong trường hợp khách hàng đã chuyển khoản cọc trước cho các chuyến xe đường dài hoặc hợp đồng tham quan, nếu quý khách hủy chuyến hợp lệ, chúng tôi cam kết hoàn trả 100% số tiền qua tài khoản ngân hàng trong vòng tối đa 2 giờ làm việc.
            </p>
          </section>

          {/* Contact Box */}
          <div className="pt-4 border-t border-slate-200">
            <h3 className="font-black text-slate-900 text-base mb-3">Tổng Đài Hỗ Trợ Đặt Xe &amp; Hủy Chuyến:</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Địa chỉ:</strong> {siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Hotline 24/7:</strong> {siteConfig.hotline}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Email:</strong> {siteConfig.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
