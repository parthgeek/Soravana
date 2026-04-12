import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const stats = [
  { value: "11+", label: "ACRES OF COMMUNITY" },
  { value: "150+", label: "HAPPY FAMILIES" },
  { value: "5,000+", label: "TREES PLANTED" },
];
const heroImg = "/assets/hero-original.jpg";

const HeroSection = () => {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Start everything hidden
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
      });
      gsap.set(statsRef.current?.children ?? [], { opacity: 0, y: 20 });
      gsap.set(overlayRef.current, { opacity: 0 });

      tl.to(overlayRef.current, { opacity: 1, duration: 1.2 })
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.6")
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          statsRef.current?.children ?? [],
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of Soravana farmland at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />

      {/* Top badge */}
      <div className="relative z-10 text-center pt-28 md:pt-32">
        <span ref={badgeRef} className="inline-block text-accent font-body text-xs md:text-sm tracking-[0.25em] uppercase">
          Premium Managed Farmland • Near Bangalore
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Left: Title + CTAs */}
          <div>
            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.95] text-primary-foreground mb-2 italic">
              Soravana Farmland
            </h1>
            <p ref={subtitleRef} className="text-primary-foreground/80 font-heading italic text-lg md:text-xl mb-6">
              It's a life you return to.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg">Book Site Visit</Button>
              <Button variant="hero-outline" size="lg">Download Brochure</Button>
            </div>
          </div>

          {/* Right: Stats */}
          <div ref={statsRef} className="flex gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-right">
                <p className="text-3xl md:text-5xl font-heading text-primary-foreground leading-none mb-1 italic">
                  {s.value}
                </p>
                <p className="text-[10px] md:text-xs text-primary-foreground/70 font-body tracking-[0.15em] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
