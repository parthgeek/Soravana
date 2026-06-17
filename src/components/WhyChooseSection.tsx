"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const reasons = [
  {
    iconSrc: "/assets/noun-icons/farm-crop-rows-8331711.png",
    text: "Professionally managed organic farming with expert agronomists",
  },
  {
    iconSrc: "/assets/noun-icons/farm-field-trees-8283635.png",
    text: "100% legally verified with RERA-compliant documentation and transparent ownership.",
  },
  {
    iconSrc: "/assets/noun-icons/farm-barn-8331706.png",
    text: "Premium amenities: Nature Lounge, cottages and more",
  },
  {
    iconSrc: "/assets/noun-icons/farm-rolling-fields-8331708.png",
    text: "Approx. 85-120 minutes from key Bengaluru hubs",
  },
  {
    iconSrc: "/assets/noun-icons/farm-house-fields-8283659.png",
    text: "Complete freedom to design and build your dream home",
  },
  {
    iconSrc: "/assets/noun-icons/farm-barn-fields-8283634.png",
    text: "Real-time farm updates and transparent reporting",
  },
  {
    iconSrc: "/assets/noun-icons/farm-tree-line-8283673.png",
    text: "Gated community with 24/7 security and CCTV",
  },
  {
    iconSrc: "/assets/noun-icons/farm-wheat-8283636.png",
    text: "Eco-friendly infrastructure: solar, rainwater harvesting, composting",
  },
];

type ReasonCardProps = { iconSrc: string; text: string };

const ReasonCard = ({ iconSrc, text }: ReasonCardProps) => {
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
            <Image
              src={iconSrc}
              alt=""
              width={64}
              height={64}
              aria-hidden="true"
              className="h-8 w-8 object-contain opacity-90 [filter:brightness(0)_saturate(100%)_invert(22%)_sepia(23%)_saturate(1068%)_hue-rotate(105deg)_brightness(92%)_contrast(93%)]"
            />
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
          {reasons.map(({ iconSrc, text }) => (
            <StaggerChild key={text} className="h-full">
              <ReasonCard iconSrc={iconSrc} text={text} />
            </StaggerChild>
          ))}
        </StaggerParent>

        <p className="mt-6 text-center text-xs text-muted-foreground/70">
          Farm icons by{" "}
          <a
            href="https://thenounproject.com/creator/ishaqahmad.ar/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-accent"
          >
            Ahmad Ishaq
          </a>{" "}
          from{" "}
          <a
            href="https://thenounproject.com/search/icons/?q=farm"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-accent"
          >
            Noun Project
          </a>
          .
        </p>
    </div>
  </section>
);

export default WhyChooseSection;
