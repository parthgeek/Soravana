import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaggerParent, StaggerChild } from "@/components/AnimateIn";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 11, suffix: "+", label: "Acres of Community" },
  { value: 150, suffix: "+", label: "Happy Families" },
  { value: 5000, suffix: "+", label: "Trees Planted" },
  { value: 100, suffix: "%", label: "Organic & Chemical-Free" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const numRef = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        gsap.to(obj, {
          val: value,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString() + suffix;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value, suffix]);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-heading text-accent mb-2">
        <span ref={numRef}>0{suffix}</span>
      </p>
      <p className="text-muted-foreground text-sm font-body tracking-wide uppercase">{label}</p>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-16 bg-section-alt">
    <div className="container mx-auto px-4">
      <StaggerParent className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StaggerChild key={s.label}>
            <StatItem {...s} />
          </StaggerChild>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default StatsSection;
