"use client";

import NavbarStaging1 from "@/components/NavbarStaging1";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OverviewSection from "@/components/OverviewSection";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import AdvantageSectionStaging1 from "@/components/AdvantageSectionStaging1";
import InvestmentSection from "@/components/InvestmentSection";
import FarmingSection from "@/components/FarmingSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StaySection from "@/components/StaySection";
import BuildSection from "@/components/BuildSection";
import BuildFreedomSection from "@/components/BuildFreedomSection";
import TeamSectionStaging1 from "@/components/TeamSectionStaging1";
import GallerySection from "@/components/GallerySection";
import BrochureSection from "@/components/BrochureSection";
import LocationSection from "@/components/LocationSection";
import PricingCTA from "@/components/PricingCTA";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function StagingHomePageV1() {
  return (
    <>
      <NavbarStaging1 />
      <HeroSection />
      <AboutSection />
      <StaySection />
      
      <AdvantageSectionStaging1 />
      <OverviewSection />
      <ExperienceSection />
      <AmenitiesSection />
      <InvestmentSection />
      <FarmingSection />
      
      <WhyChooseSection />
      <BuildSection />
      <BuildFreedomSection />
      <TeamSectionStaging1 />
     
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
