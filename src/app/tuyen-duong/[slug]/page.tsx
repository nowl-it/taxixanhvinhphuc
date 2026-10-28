import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routeDetailsList } from "@/data/routes";
import { siteConfig } from "@/data/config";
import BookingForm from "@/components/home/BookingForm";
import {
  MapPin,
  Navigation,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export async function generateStaticParams() {
  return routeDetailsList.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routeDetailsList.find((r) => r.slug === slug);

  if (!route) {
    return {
      title: "Taxi Điện Vĩnh Phúc - Tuyến Đường Không Tồn Tại",
    };
  }

  const seoTitle = `Taxi Điện Vĩnh Phúc - ${route.title} [${siteConfig.hotline}]`;

  return {
    title: {
      absolute: seoTitle,
    },
    description: `${route.subtitle}. Đưa đón tận nơi tại Vĩnh Phúc, xe đời mới 2022-2025, đúng giờ bay và giờ hẹn. Tổng đài: ${siteConfig.hotline}.`,
    alternates: {
      canonical: `${siteConfig.domain}/tuyen-duong/${slug}`,
    },
    keywords: [
      route.title,
      route.subtitle,
      "taxi vĩnh phúc",
      "xe tiện chuyến vĩnh phúc",
      route.slug,
      "đặt xe taxi vĩnh phúc",
      "taxi nội bài",
    ],
    openGraph: {
      title: seoTitle,
      description: route.subtitle,
      url: `${siteConfig.domain}/tuyen-duong/${slug}`,
      images: ["/images/hero-banner.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: route.subtitle,
      images: ["/images/hero-banner.jpg"],
    },
  };
}

export const instant = false;

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routeDetailsList.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

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
            name: "Tuyến đường",
            item: `${siteConfig.domain}/tuyen-duong`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: route.title,
            item: `${siteConfig.domain}/tuyen-duong/${route.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: route.title,
        description: route.description,
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.brandName,
          telephone: siteConfig.hotlineRaw,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Vĩnh Phúc",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Bảng giá ${route.title}`,
          itemListElement: route.prices.map((p) => ({
            "@type": "Offer",
            name: `${route.title} - ${p.carType}`,
            price: p.oneWay.replace(/[^0-9]/g, ""),
            priceCurrency: "VND",
            description: `Một chiều: ${p.oneWay}, Khứ hồi: ${p.roundTrip}. ${p.notes || ""}`,
          })),
        },
      },
      ...(route.faqs && route.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: route.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-600">Trang chủ</Link>
          <span>/</span>
          <Link href="/tuyen-duong" className="hover:text-emerald-600">Tuyến đường</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{route.title}</span>
        </nav>

        {/* Header Hero */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TUYẾN XE TRỌNG ĐIỂM VĨNH PHÚC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {route.title}
          </h1>

          <p className="text-emerald-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            {route.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>Cự ly: <strong>{route.distance}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Thời gian đi: <strong>{route.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Giá trọn gói 100%</span>
            </div>
          </div>
        </div>

        {/* Content & Booking Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Detailed Information */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                Giới Thiệu Tuyến Xe
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {route.description}
              </p>
            </div>

            {/* Pricing Breakdown Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                Bảng Giá Tuyến {route.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Loại Xe</th>
                      <th className="py-3 px-4 font-bold text-emerald-800">Một Chiều</th>
                      <th className="py-3 px-4 font-bold text-amber-700">Khứ Hồi (2 Chiều)</th>
                      <th className="py-3 px-4 font-bold hidden sm:table-cell">Ghi Chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {route.prices.map((p, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition">
                        <td className="py-3.5 px-4 font-bold text-slate-900">{p.carType}</td>
                        <td className="py-3.5 px-4 font-black text-emerald-700">{p.oneWay}</td>
                        <td className="py-3.5 px-4 font-black text-amber-700">{p.roundTrip}</td>
                        <td className="py-3.5 px-4 text-xs text-slate-500 hidden sm:table-cell">{p.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic pt-2">
                * Báo giá đã bao gồm phí cầu đường cơ bản. Chiều về trong ngày được giảm sâu tới 50% - 70%.
              </p>
            </div>

            {/* Pickup & Dropoff Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Điểm Đón Tại Vĩnh Phúc
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {route.pickupPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-red-500" />
                  Điểm Trả Theo Lộ Trình
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {route.dropoffPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-emerald-50 rounded-3xl p-6 sm:p-8 border border-emerald-100 space-y-3">
              <h3 className="font-black text-emerald-950 text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Đặc Quyền Dành Cho Khách Hàng Tuyến Này
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {route.highlights.map((h, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-2xl border border-emerald-100 flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {route.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-600" />
                  Câu Hỏi Thường Gặp
                </h2>
                <div className="space-y-3 divide-y divide-slate-100">
                  {route.faqs.map((faq, idx) => (
                    <div key={idx} className="pt-3 first:pt-0 space-y-1">
                      <h4 className="font-bold text-slate-900 text-sm">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Form & Direct Calling */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <BookingForm initialDropoff={route.title} />

            {/* Quick Hotline Box */}
            <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-6 text-white text-center space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 animate-phone-ring" />
              </div>
              <h3 className="text-lg font-black">Cần Xe Gấp Sau 10 Phút?</h3>
              <p className="text-xs text-red-100">
                Bấm gọi ngay điều hành trực tuyến để xe tới điểm đón nhanh nhất!
              </p>
              <a
                href={`tel:${siteConfig.hotlineRaw}`}
                className="block w-full py-3.5 rounded-xl bg-white text-red-600 font-black text-base shadow-lg hover:bg-slate-50 transition"
              >
                GỌI: {siteConfig.hotline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
