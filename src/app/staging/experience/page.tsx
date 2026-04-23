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
      <main className="page-navbar-offset">
        <ExperienceSection />
        <AmenitiesSection />
        <GallerySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
