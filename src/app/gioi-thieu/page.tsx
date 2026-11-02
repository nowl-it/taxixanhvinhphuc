import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import { ShieldCheck, Award, Car, Phone, CheckCircle2, Clock, MapPin, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} [${siteConfig.hotline}] - Giới Thiệu Đội Xe Đời Mới, Uy Tín Hàng Đầu`,
  description:
    "Tìm hiểu về Taxi Vĩnh Phúc - Phú Thọ: Đội ngũ hơn 200 xe gia đình đời mới 2022-2025, tài xế bản địa thông thạo đường xá, cam kết giá trọn gói không phụ phí, phục vụ 24/7.",
  alternates: {
    canonical: `${siteConfig.domain}/gioi-thieu`,
  },
  openGraph: {
    title: `${siteConfig.brandName} [${siteConfig.hotline}] - Về Chúng Tôi, Phục Vụ 24/7`,
    description: "Liên minh hơn 200 xe gia đình đời mới tại Vĩnh Phúc cam kết dịch vụ vàng đúng giờ, tận tâm.",
    url: `${siteConfig.domain}/gioi-thieu`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function GioiThieuPage() {
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
        name: "Giới thiệu",
        item: `${siteConfig.domain}/gioi-thieu`,
      },
    ],
  };

  const values = [
    {
      title: "An Toàn Là Trên Hết",
      desc: "100% xe được bảo dưỡng định kỳ tại các đại lý chính hãng. Tài xế chấp hành nghiêm túc luật giao thông, không phóng nhanh vượt ẩu.",
      icon: ShieldCheck,
    },
    {
      title: "Đúng Giờ Tuyệt Đối",
      desc: "Luôn có mặt trước giờ hẹn từ 10 - 15 phút. Chúng tôi thấu hiểu từng phút giây quý báu của quý khách đối với giờ bay hay giờ khám bệnh.",
      icon: Clock,
    },
    {
      title: "Minh Bạch Giá Cước",
      desc: "Báo giá trọn gói trước khi khởi hành. Tuyệt đối không phát sinh phụ phí ẩn, không tính cước chênh lệch khi gặp tắc đường.",
      icon: Award,
    },
    {
      title: "Tận Tâm Phục Vụ",
      desc: "Lái xe hỗ trợ khiêng vác hành lý, cư xử hòa nhã, lịch sự. Xe luôn giữ sạch sẽ, thơm tho, mang lại sự dễ chịu cho người lớn và trẻ nhỏ.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-slate-600" />
            <span>VỀ CHÚNG TÔI</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {`${siteConfig.brandName} [${siteConfig.hotline}]`}
            <br />
            Bạn Đồng Hành Tin Cậy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hệ thống liên minh taxi gia đình và xe tiện chuyến chất lượng cao số 1 tại tỉnh Vĩnh Phúc.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Sứ Mệnh Phục Vụ Cộng Đồng Vĩnh Phúc
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Được thành lập với mục tiêu mang đến cho người dân và doanh nghiệp trên địa bàn tỉnh Vĩnh Phúc một dịch vụ vận tải hành khách văn minh, hiện đại, an toàn và tiết kiệm, <strong>Taxi Vĩnh Phúc - Phú Thọ</strong> đã không ngừng mở rộng mạng lưới xe và nâng cao chất lượng dịch vụ.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Khác với các hãng taxi truyền thống tính cước theo đồng hồ thường gây bất an cho khách hàng, chúng tôi áp dụng mô hình <strong>giá cước trọn gói cố định</strong> cho từng tuyến đường. Quý khách biết trước chính xác số tiền cần trả trước khi lên xe, giúp an tâm tuyệt đối trên suốt hành trình.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-600">200+</div>
                <div className="text-xs text-slate-500 font-medium">Xe Đời Mới Liên Kết</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-600">15.000+</div>
                <div className="text-xs text-slate-500 font-medium">Chuyến Đi Mỗi Tháng</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-600">99.8%</div>
                <div className="text-xs text-slate-500 font-medium">Khách Hài Lòng</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-950 text-white p-8 rounded-3xl space-y-6 shadow-xl">
            <h3 className="text-xl font-black flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              Tiêu Chuẩn Lái Xe Bản Địa
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Có trên 5 năm kinh nghiệm lái xe thực tế, không tiền án tiền sự</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Thông thuộc mọi cung đường đèo Tam Đảo, Tây Thiên và cao tốc Hà Nội</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Tác phong chuẩn mực, trang phục gọn gàng, nhiệt tình giúp đỡ hành khách</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Kiểm tra nồng độ cồn và chất kích thích nghiêm ngặt trước ca làm việc</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-700/60">
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Phone className="w-4 h-4 animate-phone-ring" />
                <span>Hotline Điều Hành: {siteConfig.hotline}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Giá Trị Cốt Lõi Chúng Tôi Theo Đuổi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Xây dựng uy tín bền vững bằng trải nghiệm thực tế của mỗi hành khách
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operating Areas List */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-slate-600" />
            Mạng Lưới Đội Xe Thường Trực Tại Vĩnh Phúc
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Chúng tôi có xe túc trực 24/7 tại trung tâm các thành phố và huyện để đảm bảo có mặt sau 10 - 15 phút:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
            {siteConfig.operatingAreas.map((area, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
