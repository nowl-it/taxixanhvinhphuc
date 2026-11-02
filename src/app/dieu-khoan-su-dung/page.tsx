import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import { AlertTriangle, Scale, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} [${siteConfig.hotline}] - Điều Khoản Sử Dụng Dịch Vụ & Miễn Trừ Trách Nhiệm`,
  description: `Điều khoản và điều kiện sử dụng dịch vụ đặt xe, đưa đón hành khách của ${siteConfig.brandName}. Cam kết minh bạch, rõ ràng và uy tín.`,
  alternates: {
    canonical: `${siteConfig.domain}/dieu-khoan-su-dung`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link href="/" className="hover:text-amber-700 transition">Trang chủ</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Điều khoản dịch vụ</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Scale className="w-4 h-4 text-blue-600" />
            <span>QUY CHẾ HOẠT ĐỘNG MINH BẠCH</span>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-600 tracking-tight">
            {`${siteConfig.brandName} ${siteConfig.hotline}`}
          </h2>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Điều Khoản Sử Dụng Dịch Vụ & Tuyên Bố Pháp Lý
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Có hiệu lực từ ngày 16/10/2026 • Áp dụng cho tất cả hành khách đặt chuyến qua {siteConfig.domain}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* CRITICAL DISCLAIMER BOX FOR GOOGLE ADS */}
          <div className="p-4 sm:p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-black text-amber-900 text-base">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM &amp; TÍNH ĐỘC LẬP (DISCLAIMER)</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              Website <strong>{siteConfig.domain}</strong> là kênh giới thiệu và tiếp nhận thông tin đặt xe của <strong>{siteConfig.brandName}</strong> – Đội ngũ cung cấp dịch vụ vận tải hành khách, taxi gia đình, xe tiện chuyến và xe hợp đồng độc lập tại tỉnh Vĩnh Phúc.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed font-semibold">
              Chúng tôi là đơn vị vận tải tư nhân hoạt động độc lập, KHÔNG trực thuộc, KHÔNG đại diện, và KHÔNG có mối quan hệ ủy quyền hay liên kết thương hiệu với bất kỳ hãng taxi, doanh nghiệp vận tải hay tập đoàn nào khác.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              1. Phạm vi cung cấp dịch vụ
            </h2>
            <p>
              {siteConfig.brandName} cung cấp dịch vụ vận chuyển hành khách bằng các dòng xe ô tô 4 chỗ, 7 chỗ và 16 chỗ đời mới tại tỉnh Vĩnh Phúc đi Sân bay Nội Bài, Hà Nội, Phú Thọ và các tỉnh thành lân cận. Dịch vụ bao gồm:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Taxi đưa đón Sân bay Nội Bài trọn gói (đã bao gồm vé cầu đường).</li>
              <li>Xe tiện chuyến, xe ghép giá rẻ Vĩnh Phúc ⇄ Hà Nội (khám bệnh, công tác, du lịch).</li>
              <li>Xe hợp đồng đưa đón chuyên gia, cán bộ công nhân viên các Khu công nghiệp.</li>
              <li>Xe tham quan du lịch danh thắng Tam Đảo, Tây Thiên, Đền Hùng.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              2. Quyền và nghĩa vụ của hành khách
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p>• <strong>Cung cấp thông tin chính xác:</strong> Quý khách có trách nhiệm cung cấp đúng số điện thoại liên lạc, điểm đón và thời gian đón để tài xế phục vụ đúng giờ.</p>
              <p>• <strong>An toàn trên xe:</strong> Thắt dây an toàn trong suốt hành trình; không mang theo hàng cấm, vũ khí, chất cháy nổ hoặc các chất bị pháp luật Việt Nam nghiêm cấm.</p>
              <p>• <strong>Bảo quản tư trang:</strong> Tự quản lý tiền bạc và hành lý có giá trị cá nhân. Trong trường hợp để quên đồ trên xe, vui lòng liên hệ ngay tổng đài {siteConfig.hotline} để được hỗ trợ tìm kiếm và trao trả kịp thời.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              3. Cam kết của chúng tôi đối với hành khách
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p>• <strong>Đúng giờ &amp; Đúng lộ trình:</strong> Tài xế có mặt trước giờ hẹn từ 5 - 10 phút, di chuyển đúng cung đường nhanh nhất và an toàn nhất.</p>
              <p>• <strong>Minh bạch giá cước:</strong> Báo giá trọn gói trước khi khởi hành, cam kết không phát sinh bất kỳ khoản phụ phí vô lý nào.</p>
              <p>• <strong>Phương tiện đạt chuẩn:</strong> 100% xe phục vụ được đăng kiểm định kỳ, sạch sẽ, không mùi hôi, máy lạnh hoạt động tốt.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              4. Xử lý khiếu nại và Tranh chấp
            </h2>
            <p>
              Mọi phản ánh về thái độ phục vụ của lái xe, giá cước hoặc sự cố phát sinh đều được ban điều hành tiếp nhận và xử lý trực tiếp qua đường dây nóng <strong>{siteConfig.hotline}</strong> trong vòng tối đa 24 giờ làm việc.
            </p>
          </section>

          {/* Footer Contact Info */}
          <div className="pt-4 border-t border-slate-200">
            <h3 className="font-black text-slate-900 text-base mb-3">Thông Tin Liên Hệ &amp; Tiếp Nhận Phản Hồi:</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>Khu vực đón trả:</strong> Tỉnh Vĩnh Phúc (TP. Vĩnh Yên, TP. Phúc Yên và các huyện)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600 shrink-0" />
                <span><strong>Hotline 24/7:</strong> {siteConfig.hotline}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
