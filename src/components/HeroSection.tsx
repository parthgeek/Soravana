"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/use-mobile";

const heroImg = "/assets/hero-original.jpg";
const desktopHeroVideos = [
  "/assets/mist.mp4",
  "/assets/cow-on-the-grassland.mp4",
  "/assets/boy-planting-a-sapling.mp4",
  "/assets/plucking-fruits.mp4",
  "/assets/touching-the-plants.mp4",
  "/assets/sunrise.mp4",
];
const maxPlaybackSeconds = 10;
const FADE_DURATION = 0.8;

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [firstVideoReady, setFirstVideoReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useStaticHero, setUseStaticHero] = useState(false);

  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeSlotRef = useRef<"a" | "b">("a");
  const firstLoadDoneRef = useRef(false);
  const isAdvancingRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const playbackFailureCountRef = useRef(0);

  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const heroVideos = desktopHeroVideos;
  const shouldLoopSingleVideo = heroVideos.length === 1;
  const currentVideo = heroVideos[currentIndex % heroVideos.length];

  const getActiveVideo = () =>
    activeSlotRef.current === "a" ? videoARef.current : videoBRef.current;

  const isActiveVideoEvent = (video: HTMLVideoElement) =>
    !isTransitioningRef.current && video === getActiveVideo();

  const prepareVideoForInlinePlayback = (video: HTMLVideoElement) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.disablePictureInPicture = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("autoplay", "");
    video.setAttribute("disablepictureinpicture", "");
  };

  const switchToStaticHero = () => {
    isTransitioningRef.current = false;
    isAdvancingRef.current = false;
    setFirstVideoReady(false);
    setUseStaticHero(true);

    [videoARef.current, videoBRef.current].forEach((video) => {
      if (!video) return;
      gsap.set(video, { opacity: 0 });
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
  };

  const advanceToNextVideo = () => {
    if (useStaticHero || shouldLoopSingleVideo || isAdvancingRef.current || isTransitioningRef.current) {
      return;
    }
    isAdvancingRef.current = true;
    isTransitioningRef.current = true;
    setCurrentIndex((i) => (i + 1) % heroVideos.length);
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

  useEffect(() => {
    [videoARef.current, videoBRef.current].forEach((video) => {
      if (!video) return;
      prepareVideoForInlinePlayback(video);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersStaticHero = mediaQuery.matches;

    if (prefersStaticHero) {
      switchToStaticHero();
    }
  }, []);

  // Crossfade video loading — two-slot A/B swap
  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB || useStaticHero) return;

    isAdvancingRef.current = false;

    const isFirstLoad = !firstLoadDoneRef.current;
    const targetSlot = isFirstLoad ? "a" : activeSlotRef.current === "a" ? "b" : "a";
    const targetVideo = targetSlot === "a" ? videoA : videoB;
    const otherVideo = targetSlot === "a" ? videoB : videoA;
    const readyEvent = isMobile ? "loadeddata" : isFirstLoad ? "loadeddata" : "canplay";

    let handled = false;
    let cancelled = false;

    const resetTransitionState = () => {
      isTransitioningRef.current = false;
      isAdvancingRef.current = false;
    };

    const restoreCurrentVideo = () => {
      gsap.set(targetVideo, { opacity: 0 });
      targetVideo.pause();
      targetVideo.removeAttribute("src");
      targetVideo.load();
      resetTransitionState();

      const activeVideo = getActiveVideo();
      if (!activeVideo) return;
      activeVideo.currentTime = 0;
      void activeVideo.play().catch(() => {
        switchToStaticHero();
      });
    };

    const revealTargetVideo = () => {
      if (cancelled) return;

      if (isFirstLoad) {
        gsap.to(targetVideo, { opacity: 1, duration: FADE_DURATION });
        firstLoadDoneRef.current = true;
        setFirstVideoReady(true);
      } else {
        gsap.set(targetVideo, { zIndex: 1 });
        gsap.set(otherVideo, { zIndex: 0 });
        gsap.to(targetVideo, { opacity: 1, duration: FADE_DURATION });
        gsap.to(otherVideo, {
          opacity: 0,
          duration: FADE_DURATION,
          onComplete: () => {
            otherVideo.pause();
            otherVideo.removeAttribute("src");
            otherVideo.load();
          },
        });
      }
      activeSlotRef.current = targetSlot;
      resetTransitionState();
    };

    const startPlayback = async () => {
      if (cancelled) return;

      prepareVideoForInlinePlayback(targetVideo);
      targetVideo.currentTime = 0;

      try {
        await targetVideo.play();
        if (cancelled || targetVideo.paused) {
          throw new Error("Autoplay was blocked");
        }
        playbackFailureCountRef.current = 0;
        revealTargetVideo();
      } catch {
        if (isFirstLoad) {
          switchToStaticHero();
          return;
        }
        restoreCurrentVideo();
      }
    };

    const handleReady = () => {
      if (handled) return;
      handled = true;
      targetVideo.removeEventListener(readyEvent, handleReady);
      void startPlayback();
    };

    const handleTargetError = () => {
      targetVideo.removeEventListener(readyEvent, handleReady);
      if (isFirstLoad) {
        switchToStaticHero();
        return;
      }
      restoreCurrentVideo();
    };

    targetVideo.addEventListener(readyEvent, handleReady);
    targetVideo.addEventListener("error", handleTargetError);
    gsap.set(targetVideo, { opacity: 0, zIndex: isFirstLoad ? 1 : 1 });

    const existingSrc = targetVideo.getAttribute("src");
    if (existingSrc !== currentVideo) {
      targetVideo.pause();
      targetVideo.src = currentVideo;
      targetVideo.load();
    } else if (
      targetVideo.readyState < HTMLMediaElement.HAVE_CURRENT_DATA &&
      targetVideo.networkState === HTMLMediaElement.NETWORK_EMPTY
    ) {
      targetVideo.load();
    }

    if (targetVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      handleReady();
    }

    return () => {
      cancelled = true;
      targetVideo.removeEventListener(readyEvent, handleReady);
      targetVideo.removeEventListener("error", handleTargetError);
    };
  }, [currentVideo, heroVideos.length, isMobile, useStaticHero]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (!isActiveVideoEvent(video)) return;
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
        autoPlay
        playsInline
        loop={shouldLoopSingleVideo}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        poster={heroImg}
        preload="metadata"
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
        autoPlay
        playsInline
        loop={shouldLoopSingleVideo}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        poster={heroImg}
        preload="metadata"
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
