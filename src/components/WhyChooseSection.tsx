"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  BellRing,
  Camera,
  Car,
  FileCheck,
  Home,
  Recycle,
  Sprout,
  Trees,
  type LucideIcon,
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
    icon: Car,
    text: "Approx. 85-120 minutes from key Bengaluru hubs",
  },
  {
    icon: Home,
    text: "Complete freedom to design and build your dream home",
  },
  {
    icon: BellRing,
    text: "Real-time farm updates and transparent reporting",
  },
  {
    icon: Camera,
    text: "Gated community with 24/7 security and CCTV",
  },
  {
    icon: Recycle,
    text: "Eco-friendly infrastructure: solar, rainwater harvesting, composting",
  },
];

type ReasonCardProps = { icon: LucideIcon; text: string };

const ReasonCard = ({ icon: Icon, text }: ReasonCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { damping: 25, stiffness: 250 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), springCfg);
  const glowX = useTransform(rawX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(rawY, [-0.5, 0.5], [0, 100]);

  const shimmerBg = useTransform(
    [glowX, glowY],
    ([lx, ly]: number[]) =>
      `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,0.28) 0%, transparent 60%)`
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
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="relative rounded-2xl overflow-hidden cursor-default"
      initial={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
      whileHover={{ scale: 1.04, boxShadow: "0 24px 64px rgba(0,0,0,0.13)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Gradient card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/[0.07]" />

      {/* Mouse shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: shimmerBg }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-4">
        {/* Icon in rounded square tile */}
        <motion.div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/25 to-accent/8 flex items-center justify-center shadow-sm"
          animate={hovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
        >
          <motion.div
            animate={hovered ? { rotate: [0, -12, 12, -5, 0] } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Icon aria-hidden="true" className="h-8 w-8 text-primary/90" />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-foreground/80 text-sm leading-relaxed"
          animate={hovered ? { x: 2 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.p>
      </div>

      {/* Gradient bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ width: "0%", left: "50%" }}
        animate={
          hovered
            ? { width: "100%", left: "0%" }
            : { width: "0%", left: "50%" }
        }
        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.div>
  );
};

const WhyChooseSection = () => (
  <section className="section-spacing bg-section-alt">
    <div className="container mx-auto px-4">
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

      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {reasons.map(({ icon, text }) => (
          <StaggerChild key={text} className="h-full">
            <ReasonCard icon={icon} text={text} />
          </StaggerChild>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default WhyChooseSection;
