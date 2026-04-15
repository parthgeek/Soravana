"use client";

import NavbarStaging1 from "@/components/NavbarStaging1";
import AboutSection from "@/components/AboutSection";
import AdvantageSectionStaging1 from "@/components/AdvantageSectionStaging1";
import OverviewSection from "@/components/OverviewSection";
import TeamSectionStaging1 from "@/components/TeamSectionStaging1";
import BrochureSection from "@/components/BrochureSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <NavbarStaging1 />
      <AboutSection />
      <AdvantageSectionStaging1 />
      <OverviewSection />
      <TeamSectionStaging1 />
      <BrochureSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
