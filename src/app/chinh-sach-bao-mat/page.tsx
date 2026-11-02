import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { ShieldCheck, Lock, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} [${siteConfig.hotline}] - Chính Sách Bảo Mật Thông Tin`,
  description: `Chính sách bảo vệ quyền riêng tư và thông tin cá nhân khách hàng sử dụng dịch vụ của ${siteConfig.brandName}. Cam kết bảo mật 100% theo tiêu chuẩn.`,
  alternates: {
    canonical: `${siteConfig.domain}/chinh-sach-bao-mat`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link href="/" className="hover:text-amber-700 transition">Trang chủ</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Chính sách bảo mật</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-slate-600" />
            <span>QUYỀN RIÊNG TƯ & AN TOÀN DỮ LIỆU</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Chính Sách Bảo Mật Thông Tin Khách Hàng
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Cập nhật lần cuối: Ngày 16 tháng 10 năm 2026 • Áp dụng cho website {siteConfig.domain}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              1. Mục đích thu thập thông tin cá nhân
            </h2>
            <p>
              Khi quý khách liên hệ đặt xe hoặc gửi yêu cầu báo giá trên website <strong>{siteConfig.domain}</strong>, chúng tôi chỉ thu thập những thông tin cơ bản và cần thiết nhất bao gồm:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
              <li><strong>Số điện thoại liên hệ:</strong> Dùng để tổng đài viên và tài xế gọi điện xác nhận điểm đón và thời gian di chuyển.</li>
              <li><strong>Điểm đón và Điểm đến:</strong> Dùng để điều phối xe gần bạn nhất và báo giá cước trọn gói chính xác.</li>
              <li><strong>Họ tên và Ghi chú (tùy chọn):</strong> Hỗ trợ tài xế nhận diện hành khách và chuẩn bị xe phù hợp (số người, hành lý to, trẻ nhỏ).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              2. Phạm vi sử dụng thông tin
            </h2>
            <p>
              Thông tin của quý khách chỉ được sử dụng nội bộ trong hệ thống điều hành xe của <strong>{siteConfig.brandName}</strong> cho các mục đích:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Điều phối xe đón đúng giờ, đúng địa điểm đã hẹn.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Thông báo lộ trình, giá cước trọn gói và thông tin tài xế.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Hỗ trợ tìm kiếm hành lý thất lạc trên xe (nếu có).</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Giải quyết khiếu nại và nâng cao chất lượng phục vụ.</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              3. Cam kết không chia sẻ thông tin cho bên thứ ba
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 font-medium text-xs sm:text-sm flex items-start gap-3">
              <Lock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
              <span>
                <strong>Cam kết tuyệt đối:</strong> Chúng tôi KHÔNG BÁN, KHÔNG CHIA SẺ, KHÔNG TRAO ĐỔI thông tin cá nhân hay số điện thoại của hành khách cho bất kỳ đơn vị quảng cáo, tiếp thị, hay bên thứ ba nào vì mục đích thương mại.
              </span>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              4. Bảo mật dữ liệu & Thời gian lưu trữ
            </h2>
            <p>
              Thông tin liên hệ của quý khách được lưu trữ bảo mật trong hệ thống nhật ký điều phối và tự động xóa sau khi hành trình kết thúc thành công hoặc khi quý khách có yêu cầu xóa dữ liệu.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              5. Quyền của khách hàng đối với thông tin cá nhân
            </h2>
            <p>
              Quý khách có toàn quyền yêu cầu chúng tôi kiểm tra, cập nhật hoặc xóa vĩnh viễn thông tin liên hệ của mình bất kỳ lúc nào bằng cách gọi trực tiếp đến tổng đài <strong>{siteConfig.hotline}</strong> hoặc gửi thư đến email <strong>{siteConfig.email}</strong>.
            </p>
          </section>

          {/* Contact Box */}
          <div className="pt-4 border-t border-slate-200">
            <h3 className="font-black text-slate-900 text-base mb-3">Đơn Vị Quản Lý & Chịu Trách Nhiệm Dữ Liệu:</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>Khu vực điều hành:</strong> Tỉnh Vĩnh Phúc (TP. Vĩnh Yên, TP. Phúc Yên và các huyện)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>Hotline 24/7:</strong> {siteConfig.hotline}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>Email:</strong> {siteConfig.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
