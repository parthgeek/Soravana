"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  { icon: Sprout, text: "Professionally managed organic farming with expert agronomists" },
  { icon: FileCheck, text: "100% legally verified with RERA-compliant documentation and transparent ownership." },
  { icon: Trees, text: "Premium amenities: Nature Lounge, cottages and more" },
  { icon: MapPinned, text: "Approx. 85-120 minutes from key Bengaluru hubs" },
  { icon: Hammer, text: "Complete freedom to design and build your dream home" },
  { icon: Wifi, text: "Real-time farm updates and transparent reporting" },
  { icon: Shield, text: "Gated community with 24/7 security and CCTV" },
  { icon: Leaf, text: "Eco-friendly infrastructure: solar, rainwater harvesting, composting" },
];

type ReasonCardProps = { icon: React.ElementType; text: string };

const ReasonCard = ({ icon: Icon, text }: ReasonCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { damping: 25, stiffness: 250 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), springCfg);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), springCfg);

  const glowX = useTransform(rawX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(rawY, [-0.5, 0.5], [0, 100]);

  const shimmerBg = useTransform(
    [glowX, glowY],
    ([lx, ly]: number[]) =>
      `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.2) 0%, transparent 55%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative flex flex-col items-start gap-3 bg-background rounded-xl p-6 border border-border overflow-hidden cursor-default h-full min-h-[200px]"
      whileHover={{
        scale: 1.025,
        boxShadow: "0 20px 56px rgba(0,0,0,0.11)",
        borderColor: "rgba(74,107,80,0.4)",
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Mouse-tracking shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{ background: shimmerBg }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-accent"
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Icon with wobble */}
      <motion.span
        className="text-accent relative z-10"
        animate={hovered ? { scale: 1.2 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <motion.div
          animate={hovered ? { rotate: [0, -14, 14, -6, 0] } : { rotate: 0 }}
          transition={{ duration: 0.48, ease: "easeInOut" }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </motion.div>
      </motion.span>

      <motion.p
        className="text-foreground/80 text-sm leading-relaxed relative z-10"
        animate={hovered ? { x: 3 } : { x: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

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
          {reasons.map(({ icon, text }) => (
            <StaggerChild key={text} className="h-full">
              <ReasonCard icon={icon} text={text} />
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
