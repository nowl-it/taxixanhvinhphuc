import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} - Dịch Vụ Taxi & Xe Tiện Chuyến Trọn Gói Giá Rẻ 24/7`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Tổng đài Taxi Xanh Vĩnh Phúc 0961 299 934 - Dịch vụ taxi đưa đón sân bay Nội Bài chỉ từ 180K, xe tiện chuyến Vĩnh Phúc Hà Nội, Tam Đảo, Tây Thiên, xe hợp đồng KCN. Xe đời mới 2022-2025, đúng giờ, giá trọn gói không phụ phí.",
  keywords: [
    "taxi vĩnh phúc",
    "taxi vĩnh yên",
    "taxi phúc yên",
    "taxi sân bay nội bài vĩnh phúc",
    "xe tiện chuyến vĩnh phúc hà nội",
    "xe ghép vĩnh yên hà nội",
    "taxi tam đảo",
    "taxi tây thiên",
    "taxi vĩnh phúc phú thọ",
    "taxi kcn bá thiện",
    "taxi kcn bình xuyên",
    "thuê xe 4 chỗ vĩnh phúc",
    "thuê xe 7 chỗ vĩnh phúc",
    "taxi xanh vĩnh phúc",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  formatDetection: {
    telephone: true,
    address: false,
    email: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} - Xe Tiện Chuyến & Sân Bay Trọn Gói Giá Rẻ 24/7`,
    description:
      "Tổng đài gọi xe Taxi Vĩnh Phúc 24/7: 0961 299 934. Đón tận nơi các huyện Vĩnh Yên, Phúc Yên, Bình Xuyên, Yên Lạc, Vĩnh Tường. Giá trọn gói siêu rẻ, xe mới 100%.",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch Vụ Taxi Xanh Vĩnh Phúc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} - Dịch Vụ Taxi & Xe Tiện Chuyến Vĩnh Phúc`,
    description: "Tổng đài đặt xe taxi Vĩnh Phúc 24/7 Hotline: 0961 299 934. Cam kết đúng giờ, giá trọn gói.",
    images: ["/images/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for LocalBusiness & TaxiService
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: siteConfig.brandName,
    alternateName: siteConfig.shortName,
    image: `${siteConfig.domain}/images/hero-banner.jpg`,
    "@id": siteConfig.domain,
    url: siteConfig.domain,
    telephone: siteConfig.hotlineRaw,
    priceRange: "150000VND - 1500000VND",
    address: {
      "@type": "PostalAddress",
      addressLocality: "TP. Vĩnh Yên",
      addressRegion: "Vĩnh Phúc",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.3093,
      longitude: 105.6049,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Vĩnh Yên" },
      { "@type": "City", name: "Phúc Yên" },
      { "@type": "AdministrativeArea", name: "Bình Xuyên" },
      { "@type": "AdministrativeArea", name: "Yên Lạc" },
      { "@type": "AdministrativeArea", name: "Vĩnh Tường" },
      { "@type": "AdministrativeArea", name: "Tam Đảo" },
      { "@type": "AdministrativeArea", name: "Tam Dương" },
      { "@type": "AdministrativeArea", name: "Lập Thạch" },
      { "@type": "AdministrativeArea", name: "Sông Lô" },
      { "@type": "AdministrativeArea", name: "Hà Nội" },
      { "@type": "AdministrativeArea", name: "Phú Thọ" },
    ],
    serviceArea: "Tỉnh Vĩnh Phúc và các tỉnh lân cận",
    sameAs: [siteConfig.zalo],
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
