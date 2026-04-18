"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const heroImg = "/assets/hero-original.jpg";
const heroVideos = [
  "/assets/timelapse.mp4",
  "/assets/sunrise.mp4",
  "/herosection.mp4",
  "/farm.mp4",
  "/assets/cow_grazing.mp4",
  "/assets/plantsh.mp4",
  "/assets/playing.mp4",
  "/assets/tl2.mp4",
  "/assets/rain2.mp4",
  "/assets/rain3.mp4",
];
const maxPlaybackSeconds = 10;
const FADE_DURATION = 0.8;

const HeroSection = () => {
  const [firstVideoReady, setFirstVideoReady] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeSlotRef = useRef<"a" | "b">("a");
  const firstLoadDoneRef = useRef(false);
  const isAdvancingRef = useRef(false);
  const isTransitioningRef = useRef(false);

  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const currentVideo = heroVideos[currentIndex];

  const getActiveVideo = () =>
    activeSlotRef.current === "a" ? videoARef.current : videoBRef.current;

  const isActiveVideoEvent = (video: HTMLVideoElement) =>
    !isTransitioningRef.current && video === getActiveVideo();

  const advanceToNextVideo = () => {
    if (isAdvancingRef.current || isTransitioningRef.current) return;
    isAdvancingRef.current = true;
    isTransitioningRef.current = true;
    setCurrentIndex((i) => (i + 1) % heroVideos.length);
  };

  const jumpToVideo = (index: number) => {
    if (index === currentIndex) return;
    getActiveVideo()?.pause();
    isAdvancingRef.current = false;
    isTransitioningRef.current = true;
    setCurrentIndex(index);
  };

  // Intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current], { opacity: 0, y: 30 });
      gsap.set(overlayRef.current, { opacity: 0 });
      tl.to(overlayRef.current, { opacity: 1, duration: 1.2 })
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.6")
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.4")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
    });
    return () => ctx.revert();
  }, []);

  // Crossfade video loading — two-slot A/B swap
  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    isAdvancingRef.current = false;
    setVideoProgress(0);

    const isFirstLoad = !firstLoadDoneRef.current;
    const targetSlot = isFirstLoad ? "a" : activeSlotRef.current === "a" ? "b" : "a";
    const targetVideo = targetSlot === "a" ? videoA : videoB;
    const otherVideo = targetSlot === "a" ? videoB : videoA;

    let handled = false;
    const handleCanPlay = () => {
      if (handled) return;
      handled = true;
      targetVideo.removeEventListener("canplay", handleCanPlay);

      targetVideo.currentTime = 0;
      void targetVideo.play().catch(() => {});

      if (isFirstLoad) {
        gsap.to(targetVideo, { opacity: 1, duration: FADE_DURATION });
        firstLoadDoneRef.current = true;
        setFirstVideoReady(true);
      } else {
        gsap.to(targetVideo, { opacity: 1, duration: FADE_DURATION });
        gsap.to(otherVideo, {
          opacity: 0,
          duration: FADE_DURATION,
          onComplete: () => {
            otherVideo.pause();
            otherVideo.removeAttribute("src");
          },
        });
      }
      activeSlotRef.current = targetSlot;
      isTransitioningRef.current = false;
      isAdvancingRef.current = false;
    };

    targetVideo.addEventListener("canplay", handleCanPlay);
    targetVideo.src = currentVideo;
    targetVideo.load();

    if (targetVideo.readyState >= 2) {
      handleCanPlay();
    }

    return () => {
      targetVideo.removeEventListener("canplay", handleCanPlay);
    };
  }, [currentVideo]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!isActiveVideoEvent(video)) return;
    setVideoProgress(Math.min(video.currentTime / maxPlaybackSeconds, 1));
    if (video.currentTime >= maxPlaybackSeconds) advanceToNextVideo();
  };

  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (!isActiveVideoEvent(e.currentTarget)) return;
    advanceToNextVideo();
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!isActiveVideoEvent(video)) return;
    advanceToNextVideo();
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Fallback image — only visible until first video is ready */}
      <img
        src={heroImg}
        alt="Aerial view of Soravana farmland at sunset"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          firstVideoReady ? "opacity-0" : "opacity-100"
        }`}
        width={1920}
        height={1080}
      />

      {/* Slot A */}
      <video
        ref={videoARef}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={handleEnded}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Slot B */}
      <video
        ref={videoBRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={handleEnded}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
      />

      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />

      {/* Top badge */}
      <div className="relative z-10 text-center pt-28 md:pt-32">
        <span
          ref={badgeRef}
          className="inline-block rounded-full bg-black/35 px-4 py-2 text-primary-foreground font-body font-semibold text-xs md:text-sm tracking-[0.25em] uppercase shadow-sm backdrop-blur-[2px]"
        >
          Premium Managed Farmland • Near Bengaluru
        </span>
      </div>

      {/* Video dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroVideos.map((_, i) => {
          const isActive = i === currentIndex;
          return (
            <button
              type="button"
              key={i}
              onClick={() => jumpToVideo(i)}
              aria-label={`Play video ${i + 1}`}
              aria-pressed={isActive}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                isActive ? "w-8 h-2" : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            >
              {isActive && (
                <>
                  <span className="absolute inset-0 rounded-full bg-white/40" />
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    style={{ width: `${videoProgress * 100}%` }}
                  />
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.95] text-primary-foreground mb-2 italic"
            >
              Soravana Farmland
            </h1>
            <p
              ref={subtitleRef}
              className="text-primary-foreground/80 font-heading italic text-lg md:text-xl mb-6"
            >
              It's a life you return to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
