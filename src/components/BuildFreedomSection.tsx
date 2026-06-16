"use client";
import { useRef, useState } from "react";
import { Home, Paintbrush, Clock, TreePine, Hammer } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const freedoms = [
  { icon: Home, title: "Your Design, Your Rules", desc: "No cookie-cutter layouts. Build the home you've always imagined." },
  { icon: Paintbrush, title: "Any Architecture Style", desc: "Modern, rustic, traditional, or minimalist — it's entirely your call." },
  { icon: Clock, title: "Build on Your Timeline", desc: "No pressure to start immediately. Construct when you're ready." },
  { icon: TreePine, title: "Landscape Freely", desc: "Design your gardens, pathways, and outdoor spaces however you wish." },
  { icon: Hammer, title: "Choose Your Builder", desc: "Hire any contractor or use our recommended partners — no lock-ins." },
];

type FreedomCardProps = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const FreedomCard = ({ icon: Icon, title, desc }: FreedomCardProps) => {
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
      className="relative bg-card rounded-xl p-8 border border-border overflow-hidden cursor-default"
      whileHover={{
        scale: 1.025,
        borderColor: "rgba(var(--accent-rgb, 74 107 80), 0.4)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
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

      {/* Bottom accent line slides in */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-accent"
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Icon with wobble */}
      <motion.div
        className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5 relative z-10"
        animate={hovered ? { scale: 1.18, backgroundColor: "rgba(74,107,80,0.18)" } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
      >
        <motion.div
          animate={hovered ? { rotate: [0, -14, 14, -6, 0] } : { rotate: 0 }}
          transition={{ duration: 0.48, ease: "easeInOut" }}
        >
          <Icon className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>

      <div className="relative z-10">
        <motion.h3
          className="font-heading text-lg mb-2"
          animate={hovered ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

const BuildFreedomSection = () => (
  <section className="section-spacing bg-section-alt">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-widest uppercase mb-3 block">
          Total Creative Freedom
        </span>
        <h2 className="text-3xl md:text-5xl font-heading mb-4">
          Your Land. Your Vision. Zero Restrictions.
        </h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Unlike gated communities with rigid guidelines, Soravana gives you{" "}
          <strong className="text-foreground">complete freedom</strong> to design and build your dream
          home — no architectural committees, no mandatory templates, no compromises.
        </p>
      </AnimateIn>

      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {freedoms.map((f) => (
          <StaggerChild key={f.title}>
            <FreedomCard icon={f.icon} title={f.title} desc={f.desc} />
          </StaggerChild>
        ))}
      </StaggerParent>

      <AnimateIn variant="fadeUp" delay={0.2} className="mt-14 text-center">
        <p className="text-lg font-heading text-foreground">
          "It's not just farmland — it's a blank canvas for the life you want to build."
        </p>
      </AnimateIn>
    </div>
  </section>
);

export default BuildFreedomSection;
