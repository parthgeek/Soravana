"use client";

import Navbar from "@/components/Navbar";
import FarmingSection from "@/components/FarmingSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BuildSection from "@/components/BuildSection";
import BuildFreedomSection from "@/components/BuildFreedomSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FarmingPage() {
  return (
    <>
      <Navbar />
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
