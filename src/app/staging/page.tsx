"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StaySection from "@/components/StaySection";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import FarmingSection from "@/components/FarmingSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BuildSection from "@/components/BuildSection";
import BuildFreedomSection from "@/components/BuildFreedomSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function StagingHomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StaySection />
      <ExperienceSection />
      <AmenitiesSection />
      <GallerySection />
      <FarmingSection />
      <SustainabilitySection />
      <WhyChooseSection />
      <BuildSection />
      <BuildFreedomSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
