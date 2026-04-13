"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const heroImg = "/assets/hero-original.jpg";
const heroVideo = "/herosection.mp4";

const HeroSection = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const markReady = () => setIsVideoReady(true);

    if (video.readyState >= 2) {
      markReady();
    }

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);

    void video.play().catch(() => {
      // Keep the image visible if autoplay is blocked or the codec is unsupported.
    });

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of Soravana farmland at sunset"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
        width={1920}
        height={1080}
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroImg}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />

      {/* Top badge */}
      <div className="relative z-10 text-center pt-28 md:pt-32">
        <span
          ref={badgeRef}
          className="inline-block rounded-full bg-black/35 px-4 py-2 text-primary-foreground font-body font-semibold text-xs md:text-sm tracking-[0.25em] uppercase shadow-sm backdrop-blur-[2px]"
        >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
