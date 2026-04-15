"use client";

import NavbarStaging1 from "@/components/NavbarStaging1";
import HeroSection from "@/components/HeroSection";
import StaySection from "@/components/StaySection";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import FarmingSection from "@/components/FarmingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BuildSection from "@/components/BuildSection";
import BuildFreedomSection from "@/components/BuildFreedomSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function StagingHomePageV1() {
  return (
    <>
      <NavbarStaging1 />
      <HeroSection />
      <StaySection />
      <ExperienceSection />
      <AmenitiesSection />
      <FarmingSection />
      <WhyChooseSection />
      <BuildSection />
      <BuildFreedomSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
