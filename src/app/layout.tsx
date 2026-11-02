import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { siteConfig } from "@/data/config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} [${siteConfig.hotline}] - Dịch Vụ Taxi & Xe Tiện Chuyến Trọn Gói Giá Rẻ 24/7`,
    template: `%s`,
  },
  description:
    "Tổng đài Taxi Vĩnh Phúc - Phú Thọ 058 815 5551 - Dịch vụ taxi đưa đón sân bay Nội Bài chỉ từ 180K, xe tiện chuyến Vĩnh Phúc Hà Nội, Tam Đảo, Tây Thiên, xe hợp đồng KCN. Xe đời mới 2022-2025, đúng giờ, giá trọn gói không phụ phí.",
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
    "taxi vĩnh phúc - phú thọ",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
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
    title: `${siteConfig.brandName} [${siteConfig.hotline}] - Xe Tiện Chuyến & Sân Bay Trọn Gói Giá Rẻ 24/7`,
    description:
      "Tổng đài gọi xe Taxi Vĩnh Phúc 24/7: 058 815 5551. Đón tận nơi các huyện Vĩnh Yên, Phúc Yên, Bình Xuyên, Yên Lạc, Vĩnh Tường. Giá trọn gói siêu rẻ, xe mới 100%.",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Dịch Vụ Taxi Vĩnh Phúc - Phú Thọ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} [${siteConfig.hotline}] - Dịch Vụ Taxi & Xe Tiện Chuyến Vĩnh Phúc`,
    description: "Tổng đài đặt xe taxi Vĩnh Phúc 24/7 Hotline: 058 815 5551. Cam kết đúng giờ, giá trọn gói.",
    images: ["/images/hero-banner.jpg"],
  },
  alternates: {
    canonical: siteConfig.domain,
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
  other: {
    "geo.region": "VN-VP",
    "geo.placename": "Vĩnh Phúc",
    "geo.position": "21.3093;105.6049",
    "ICBM": "21.3093, 105.6049",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for LocalBusiness, TaxiService, and WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.brandName,
        description: siteConfig.slogan,
        inLanguage: "vi-VN",
      },
      {
        "@type": ["LocalBusiness", "TaxiService", "AutoRental"],
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.brandName,
        alternateName: [siteConfig.shortName, "Taxi Vĩnh Phúc", siteConfig.brandName],
        image: `${siteConfig.domain}/images/hero-banner.jpg`,
        logo: `${siteConfig.domain}/logo.svg`,
        url: siteConfig.domain,
        telephone: siteConfig.hotlineRaw,
        priceRange: "180000VND - 1500000VND",
        currenciesAccepted: "VND",
        paymentAccepted: "Tiền mặt, Chuyển khoản ngân hàng, Quét mã QR",
        address: {
          "@type": "PostalAddress",
          addressLocality: "TP. Vĩnh Yên, TP. Phúc Yên",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "258",
          reviewCount: "186",
        },
        serviceType: [
          "Taxi Sân Bay Nội Bài",
          "Xe Tiện Chuyến Vĩnh Phúc Hà Nội",
          "Taxi Tam Đảo",
          "Taxi Tây Thiên",
          "Thuê Xe 4 Chỗ Vĩnh Phúc",
          "Thuê Xe 7 Chỗ Vĩnh Phúc",
          "Thuê Xe 16 Chỗ Vĩnh Phúc",
          "Xe Ghép Vĩnh Phúc",
        ],
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Bảng Dịch Vụ Taxi & Xe Tiện Chuyến",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Taxi Vĩnh Phúc đi Sân Bay Nội Bài",
                description: "Đưa đón sân bay Nội Bài 2 chiều chỉ từ 180.000đ, miễn phí 60p chờ",
              },
              price: "180000",
              priceCurrency: "VND",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Xe Tiện Chuyến Vĩnh Phúc đi Hà Nội",
                description: "Xe tiện chuyến và ghép xe đi Hà Nội, bệnh viện trung ương từ 150.000đ",
              },
              price: "150000",
              priceCurrency: "VND",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Taxi Đi Du Lịch Tam Đảo, Tây Thiên",
                description: "Đưa đón đèo Tam Đảo, khu du lịch Tây Thiên xe đời mới chỉ từ 350.000đ",
              },
              price: "350000",
              priceCurrency: "VND",
            },
          ],
        },
        serviceArea: "Tỉnh Vĩnh Phúc và các tỉnh lân cận",
        sameAs: [siteConfig.zalo],
      },
    ],
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-slate-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
