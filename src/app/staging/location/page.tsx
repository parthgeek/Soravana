"use client";

import Navbar from "@/components/Navbar";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function LocationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-white">
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
