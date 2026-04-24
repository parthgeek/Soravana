"use client";

import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import AdvantageSection from "@/components/AdvantageSection";
import OverviewSection from "@/components/OverviewSection";
import TeamSection from "@/components/TeamSection";
import TrustSection from "@/components/TrustSection";
import BrochureSection from "@/components/BrochureSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <AboutSection />
        <AdvantageSection />
        <OverviewSection />
        <TeamSection />
        <TrustSection />
        <BrochureSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
