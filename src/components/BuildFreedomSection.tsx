"use client";
import { useRef, useState } from "react";
import { LayoutTemplate, Layers, Hourglass, TreeDeciduous, Handshake } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const freedoms = [
  { icon: LayoutTemplate, title: "Your Design, Your Rules", desc: "No cookie-cutter layouts. Build the home you've always imagined." },
  { icon: Layers, title: "Any Architecture Style", desc: "Modern, rustic, traditional, or minimalist — it's entirely your call." },
  { icon: Hourglass, title: "Build on Your Timeline", desc: "No pressure to start immediately. Construct when you're ready." },
  { icon: TreeDeciduous, title: "Landscape Freely", desc: "Design your gardens, pathways, and outdoor spaces however you wish." },
  { icon: Handshake, title: "Choose Your Builder", desc: "Hire any contractor or use our recommended partners — no lock-ins." },
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

      {/* Corner dot */}
      <motion.div
        className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-accent/40"
        animate={hovered ? { scale: 3, opacity: 0.3 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      <div className="relative z-10 p-6 flex flex-col gap-4">
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

      {/* Gradient bottom line expands from center */}
      <motion.div
        className="absolute bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ width: "0%", left: "50%" }}
        animate={hovered ? { width: "100%", left: "0%" } : { width: "0%", left: "50%" }}
        transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
      />
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
