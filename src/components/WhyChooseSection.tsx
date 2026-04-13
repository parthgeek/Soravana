import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const sketchCheck = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeDasharray="3 2" />
    <path d="M8 12 L11 15 L16 9" />
  </svg>
);

const reasons = [
  "Professionally managed organic farming with expert agronomists",
  "100% legally verified with clear titles and documentation",
  "Premium amenities: Nature Lounge, cottages and more",
  "Approx. 85-120 minutes from key Bangalore hubs",
  "Complete freedom to design and build your dream home",
  "Real-time farm updates and transparent reporting",
  "Gated community with 24/7 security and CCTV",
  "Eco-friendly infrastructure: solar, rainwater harvesting, composting",
];

const WhyChooseSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Why Choose Soravana?
          </h2>
          <motion.div
            className="w-16 h-0.5 bg-accent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A truly organic heaven — where every detail is designed for sustainable, premium living.
          </p>
        </AnimateIn>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <StaggerChild key={r}>
              <motion.div
                className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border"
                whileHover={{ x: 4, borderColor: "hsl(var(--accent))" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-accent">{sketchCheck}</span>
                <p className="text-foreground/90 text-sm leading-relaxed">{r}</p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
