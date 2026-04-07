import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 11, suffix: "+", label: "Acres of Community" },
  { value: 150, suffix: "+", label: "Happy Families" },
  { value: 5000, suffix: "+", label: "Trees Planted" },
  { value: 100, suffix: "%", label: "Organic & Chemical-Free" },
];

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref, started };
};

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref, started } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className={`text-4xl md:text-5xl font-heading text-accent mb-2 ${started ? "animate-count-up" : "opacity-0"}`}>
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-muted-foreground text-sm font-body tracking-wide uppercase">{label}</p>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-16 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
