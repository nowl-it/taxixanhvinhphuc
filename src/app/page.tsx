import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import PriceSection from "@/components/home/PriceSection";
import CarFleet from "@/components/home/CarFleet";
import Commitments from "@/components/home/Commitments";
import StepGuide from "@/components/home/StepGuide";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
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
