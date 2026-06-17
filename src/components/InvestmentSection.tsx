"use client";
import { useRef, useState } from "react";
import { TrendingUp, Shield, Landmark, Leaf, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const benefits = [
  { icon: TrendingUp, title: "Appreciating Asset", desc: "Farmland near Bengaluru appreciates steadily — outperforming many traditional investments." },
  { icon: Shield, title: "Clear Legal Titles", desc: "100% legally verified with RERA-compliant documentation and transparent ownership." },
  { icon: Leaf, title: "Passive Organic Income", desc: "Earn from managed organic farming — fruits, vegetables, and timber plantations." },
  { icon: Landmark, title: "Tangible Ownership", desc: "Unlike stocks or crypto, you own real land you can see, visit, and build on." },
  { icon: BarChart3, title: "Dual Returns", desc: "Benefit from both land appreciation and agricultural yield — wealth that grows naturally." },
  { icon: Clock, title: "Generational Legacy", desc: "Pass on fertile, managed farmland to your children — a legacy rooted in nature." },
];

type BenefitCardProps = { icon: React.ElementType; title: string; desc: string };

const BenefitCard = ({ icon: Icon, title, desc }: BenefitCardProps) => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/[0.07]" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: shimmerBg }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-accent/40"
        animate={hovered ? { scale: 3, opacity: 0.3 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      <div className="relative z-10 p-6 flex flex-col gap-4">
        <motion.div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/25 to-accent/8 flex items-center justify-center shadow-sm"
          animate={hovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
        >
          <motion.div
            animate={hovered ? { rotate: [0, -12, 12, -5, 0] } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Icon className="w-7 h-7 text-accent" strokeWidth={1.4} />
          </motion.div>
        </motion.div>

        <div>
          <motion.h3
            className="font-heading text-lg mb-1.5"
            animate={hovered ? { x: 2 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ width: "0%", left: "50%" }}
        animate={hovered ? { width: "100%", left: "0%" } : { width: "0%", left: "50%" }}
        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.div>
  );
};

const InvestmentSection = () => (
  <section className="section-spacing bg-background">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-widest uppercase mb-3 block">
          Smart Investment
        </span>
        <h2 className="text-3xl md:text-5xl font-heading mb-4">
          Why Farmland Is the Smartest Investment Today
        </h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real land. Real returns. While markets fluctuate, well-managed farmland delivers consistent value growth and lifestyle returns.
        </p>
      </AnimateIn>

      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {benefits.map((b) => (
          <StaggerChild key={b.title}>
            <BenefitCard icon={b.icon} title={b.title} desc={b.desc} />
          </StaggerChild>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default InvestmentSection;
