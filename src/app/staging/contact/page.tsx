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
      <main className="page-navbar-offset">
        <ContactForm />
        <FAQSection />
        <InvestmentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
