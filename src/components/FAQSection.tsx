import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I get full ownership of the land?", a: "Yes, each plot comes with clear, individual ownership." },
  { q: "Can I build a farmhouse?", a: "Yes, you can build your farmhouse as per guidelines." },
  { q: "Is farming mandatory?", a: "No, you can choose to participate or opt for managed farming." },
  { q: "Can I stay before construction?", a: "Yes, cottages are available for booking." },
];

const FAQSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4 max-w-2xl">
      <AnimateIn variant="fadeUp" className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-heading mb-4">Frequently Asked Questions</h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </AnimateIn>
      <StaggerParent>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <StaggerChild key={i}>
              <AccordionItem value={`faq-${i}`} className="bg-background rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-heading text-base hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </StaggerChild>
          ))}
        </Accordion>
      </StaggerParent>
    </div>
  </section>
);

export default FAQSection;
