"use client";

import Navbar from "@/components/Navbar";
import InvestmentSection from "@/components/InvestmentSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24 bg-[#FDFAF4]">
        <ContactForm />
        <FAQSection />
        <InvestmentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
