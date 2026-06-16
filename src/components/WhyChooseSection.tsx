import { motion } from "framer-motion";
import {
  FileCheck,
  Hammer,
  Leaf,
  MapPinned,
  Shield,
  Sprout,
  Trees,
  Wifi,
} from "lucide-react";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const reasons = [
  {
    icon: Sprout,
    text: "Professionally managed organic farming with expert agronomists",
  },
  {
    icon: FileCheck,
    text: "100% legally verified with RERA-compliant documentation and transparent ownership.",
  },
  {
    icon: Trees,
    text: "Premium amenities: Nature Lounge, cottages and more",
  },
  {
    icon: MapPinned,
    text: "Approx. 85-120 minutes from key Bengaluru hubs",
  },
  {
    icon: Hammer,
    text: "Complete freedom to design and build your dream home",
  },
  {
    icon: Wifi,
    text: "Real-time farm updates and transparent reporting",
  },
  {
    icon: Shield,
    text: "Gated community with 24/7 security and CCTV",
  },
  {
    icon: Leaf,
    text: "Eco-friendly infrastructure: solar, rainwater harvesting, composting",
  },
];

const WhyChooseSection = () => (
  <section className="section-spacing bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
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
        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {reasons.map(({ icon: Icon, text }) => (
            <StaggerChild key={text} className="h-full">
              <motion.div
                className="flex flex-col items-start gap-3 bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full min-h-[200px]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="text-foreground/80 text-sm leading-relaxed">{text}</p>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
