"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OverviewSection from "@/components/OverviewSection";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import AdvantageSection from "@/components/AdvantageSection";
import InvestmentSection from "@/components/InvestmentSection";
import FarmingSection from "@/components/FarmingSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StaySection from "@/components/StaySection";
import BuildSection from "@/components/BuildSection";
import BuildFreedomSection from "@/components/BuildFreedomSection";
import TeamSection from "@/components/TeamSection";
import TrustSection from "@/components/TrustSection";
import GallerySection from "@/components/GallerySection";
import BrochureSection from "@/components/BrochureSection";
import LocationSection from "@/components/LocationSection";
import PricingCTA from "@/components/PricingCTA";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StaySection />
      <AboutSection />
      <AdvantageSection />
      <OverviewSection />
      <ExperienceSection />
      <AmenitiesSection />
      <InvestmentSection />
      <FarmingSection />
      <SustainabilitySection />
      <WhyChooseSection />
      <BuildSection />
      <BuildFreedomSection />
      <TeamSection />
      <TrustSection />
      <GallerySection />
      <BrochureSection />
      <LocationSection />
      <PricingCTA />
      <ContactForm />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
