import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import ZaloIcon from "@/components/ui/ZaloIcon";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên Hệ Tổng Đài Taxi Xanh Vĩnh Phúc 24/7 - 0961 299 934",
  description:
    "Tổng đài hỗ trợ và điều phối xe taxi Vĩnh Phúc 24/7: Hotline 0961 299 934, Zalo 0961 299 934. Đón tận nhà tại tất cả các huyện, thành phố tỉnh Vĩnh Phúc. Đặt xe nhanh sau 2 phút.",
  alternates: {
    canonical: `${siteConfig.domain}/lien-he`,
  },
  openGraph: {
    title: "Liên Hệ Tổng Đài Taxi Xanh Vĩnh Phúc 24/7",
    description: "Hotline 0961 299 934 - Zalo 0961 299 934. Xe đón tận nơi các huyện thành phố Vĩnh Phúc.",
    url: `${siteConfig.domain}/lien-he`,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function LienHePage() {
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
            name: "Liên hệ",
            item: `${siteConfig.domain}/lien-he`,
          },
        ],
      },
      {
        "@type": "ContactPage",
        name: "Liên Hệ Tổng Đài Taxi Xanh Vĩnh Phúc",
        url: `${siteConfig.domain}/lien-he`,
        mainEntity: {
          "@type": "LocalBusiness",
          name: siteConfig.brandName,
          telephone: siteConfig.hotlineRaw,
          email: siteConfig.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "TP. Vĩnh Yên, TP. Phúc Yên",
            addressRegion: "Vĩnh Phúc",
            addressCountry: "VN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.hotlineRaw,
            contactType: "customer service",
            availableLanguage: "vi",
            areaServed: "VN",
          },
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
          <span className="text-slate-800 font-semibold">Liên hệ</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>KẾT NỐI 24/7 VỚI CHÚNG TÔI</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Liên Hệ Tổng Đài Taxi Xanh Vĩnh Phúc
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Tổng đài điều hành và đội xe hoạt động liên tục 24/7 kể cả ban đêm, ngày nghỉ lễ và Tết Nguyên Đán.
          </p>
        </div>

        {/* Contact Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">
                Thông Tin Tổng Đài & Điều Phối
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Khu vực phục vụ:</strong>
                    <span className="text-slate-600 text-xs leading-relaxed">Đón trả tận nơi tại TP. Vĩnh Yên, TP. Phúc Yên và toàn bộ các huyện tỉnh Vĩnh Phúc</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 animate-phone-ring" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Hotline Đặt Xe 24/7:</strong>
                    <a
                      href={`tel:${siteConfig.hotlineRaw}`}
                      className="text-base font-black text-red-600 hover:underline"
                    >
                      {siteConfig.hotline}
                    </a>
                    <span className="text-xs text-slate-500 block">Bấm để gọi ngay lập tức</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <ZaloIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Zalo Đặt Xe & Gửi Vị Trí:</strong>
                    <a
                      href={siteConfig.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 hover:underline block"
                    >
                      0961 299 934 (Chat Zalo)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Email Hợp Đồng & Hóa Đơn:</strong>
                    <span className="text-xs text-slate-600">{siteConfig.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">Thời Gian Hoạt Động:</strong>
                    <span className="text-xs text-slate-600">{siteConfig.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Call Button */}
              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.hotlineRaw}`}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 text-white font-black text-base text-center flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 transition transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 animate-phone-ring" />
                  <span>GỌI TÀI XẾ NGAY: {siteConfig.hotline}</span>
                </a>
              </div>
            </div>

            {/* Operating Areas Box */}
            <div className="bg-emerald-900 text-white rounded-3xl p-6 space-y-3 shadow-lg">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Car className="w-5 h-5 text-emerald-400" />
                Đội Xe Thường Trực Tại Các Huyện:
              </h3>
              <p className="text-xs text-emerald-200">
                Chỉ cần bạn ở bất kỳ khu vực nào sau đây, xe sẽ tới đón sau 10 - 15 phút:
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {siteConfig.operatingAreas.map((area, i) => (
                  <span key={i} className="bg-emerald-800/80 px-2.5 py-1 rounded-lg border border-emerald-700/50">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            <ContactForm />

            {/* Embedded Map Representation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Bản Đồ Khu Vực Vĩnh Phúc & Trục Kết Nối
              </h3>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Bản đồ Vĩnh Phúc"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119047.88219921764!2d105.52044813580461!3d21.31113204963507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fa969dc3cfcb%3A0xe7f9b882d9fe08b9!2zVHAuIFbEqW5oWcOqbiwgVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
