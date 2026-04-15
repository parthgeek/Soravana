"use client";

import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <ExperienceSection />
      <AmenitiesSection />
      <GallerySection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
