"use client";

import NavbarStaging1 from "@/components/NavbarStaging1";
import InvestmentSection from "@/components/InvestmentSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <NavbarStaging1 />
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
