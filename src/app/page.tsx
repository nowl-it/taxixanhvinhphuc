import React from "react";
import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import PriceSection from "@/components/home/PriceSection";
import CarFleet from "@/components/home/CarFleet";
import Commitments from "@/components/home/Commitments";
import StepGuide from "@/components/home/StepGuide";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: {
    absolute: `Taxi Vĩnh Phúc - Dịch Vụ Taxi & Xe Tiện Chuyến Trọn Gói Giá Rẻ 24/7 [${siteConfig.hotline}]`,
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Giá cước taxi Vĩnh Phúc đi Sân bay Nội Bài là bao nhiêu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Giá cước taxi từ Vĩnh Phúc đi Sân bay Nội Bài chỉ từ 180.000đ cho xe 4 chỗ (từ Phúc Yên) và từ 250.000đ (từ Vĩnh Yên, Bình Xuyên). Giá trọn gói đã bao gồm vé cầu đường cơ bản và miễn phí 60 phút chờ đầu tiên tại sân bay.",
        },
      },
      {
        "@type": "Question",
        name: "Taxi Vĩnh Phúc - Phú Thọ có đón tận nhà và phục vụ ban đêm không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Đội xe chúng tôi hoạt động liên tục 24/7 kể cả ngày lễ, Tết và ban đêm. Lái xe đón tận nhà tại tất cả các xã, huyện, thành phố thuộc tỉnh Vĩnh Phúc và đưa đến đúng điểm đến.",
        },
      },
      {
        "@type": "Question",
        name: "Giá cước chiều về trong ngày có được giảm giá không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quý khách đi 2 chiều khứ hồi trong ngày được giảm từ 40% đến 70% giá cước chiều về, giúp tiết kiệm chi phí tối đa cho chuyến công tác hoặc khám bệnh.",
        },
      },
      {
        "@type": "Question",
        name: "Đặt xe Taxi Vĩnh Phúc - Phú Thọ như thế nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quý khách có thể gọi trực tiếp Hotline 24/7: 0829 387 338, nhắn tin Zalo số 0829 387 338 hoặc điền form đặt xe trên website taxivinhphuc.com. Tổng đài sẽ điều phối xe có mặt sau 10 - 15 phút.",
        },
      },
      {
        "@type": "Question",
        name: "Dàn xe phục vụ là xe loại nào, có sạch sẽ không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100% xe phục vụ là xe gia đình đời mới từ năm 2022 - 2025 (Toyota Vios, Hyundai Accent, Mitsubishi Xpander, Toyota Fortuner, Ford Transit), được vệ sinh hút bụi hàng ngày, không mùi hôi khó chịu.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroBanner />
      <PriceSection />
      <CarFleet />
      <Commitments />
      <StepGuide />
      <Testimonials />
      <BlogSection />
      <CTASection />
    </>
  );
}
