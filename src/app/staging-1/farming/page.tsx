"use client";

import NavbarStaging1 from "@/components/NavbarStaging1";
import FarmingSection from "@/components/FarmingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BuildSection from "@/components/BuildSection";
import BuildFreedomSection from "@/components/BuildFreedomSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FarmingPage() {
  return (
    <>
      <NavbarStaging1 />
      <main className="page-navbar-offset">
        <FarmingSection />
        <WhyChooseSection />
        <BuildSection />
        <BuildFreedomSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
