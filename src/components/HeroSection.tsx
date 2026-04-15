"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const heroImg = "/assets/hero-original.jpg";
const heroVideos = [
  "/herosection.mp4",
  "/assets/70465-538463762_medium.mp4",
  "/assets/cow_grazing.mp4",
];
const maxPlaybackSeconds = 10;

const shuffleArray = (items: number[]) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
};

const buildPlaylist = (
  previousVideoIndex?: number,
  excludedVideoIndexes: number[] = []
) => {
  const excludedIndexes = new Set(excludedVideoIndexes);
  const shuffledIndexes = shuffleArray(
    heroVideos
      .map((_, index) => index)
      .filter((index) => !excludedIndexes.has(index))
  );

  if (
    typeof previousVideoIndex === "number" &&
    heroVideos.length > 1 &&
    shuffledIndexes[0] === previousVideoIndex
  ) {
    const nextDifferentIndex = shuffledIndexes.findIndex(
      (videoIndex) => videoIndex !== previousVideoIndex
    );

    if (nextDifferentIndex > 0) {
      [shuffledIndexes[0], shuffledIndexes[nextDifferentIndex]] = [
        shuffledIndexes[nextDifferentIndex],
        shuffledIndexes[0],
      ];
    }
  }

  return shuffledIndexes;
};

type PlaybackState = {
  playlist: number[];
  cursor: number;
};

const HeroSection = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [playbackState, setPlaybackState] = useState<PlaybackState>(() => ({
    playlist: buildPlaylist(),
    cursor: 0,
  }));
  const videoRef = useRef<HTMLVideoElement>(null);
  const isAdvancingRef = useRef(false);
  const failedVideoIndexesRef = useRef<Set<number>>(new Set());
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const currentVideoIndex = playbackState.playlist[playbackState.cursor] ?? 0;
  const currentVideo = heroVideos[currentVideoIndex] ?? heroVideos[0];

  const advanceToNextVideo = () => {
    if (isAdvancingRef.current) {
      return;
    }

    isAdvancingRef.current = true;
    setPlaybackState((currentState) => {
      if (currentState.cursor < currentState.playlist.length - 1) {
        return {
          ...currentState,
          cursor: currentState.cursor + 1,
        };
      }

      return {
        playlist: buildPlaylist(
          currentState.playlist[currentState.cursor],
          Array.from(failedVideoIndexesRef.current)
        ),
        cursor: 0,
      };
    });
  };

  const handleVideoError = () => {
    if (isAdvancingRef.current) {
      return;
    }

    isAdvancingRef.current = true;
    failedVideoIndexesRef.current.add(currentVideoIndex);
    setIsVideoReady(false);

    if (failedVideoIndexesRef.current.size >= heroVideos.length) {
      return;
    }

    setPlaybackState(() => ({
      playlist: buildPlaylist(currentVideoIndex, Array.from(failedVideoIndexesRef.current)),
      cursor: 0,
    }));
  };

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

    isAdvancingRef.current = false;
    setIsVideoReady(false);

    const markReady = () => setIsVideoReady(true);

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);
    video.load();

    if (video.readyState >= 2) {
      markReady();
    }

    void video.play().catch(() => {
      // Keep the image visible if autoplay is blocked or the codec is unsupported.
    });

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
    };
  }, [currentVideo]);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || video.currentTime < maxPlaybackSeconds) {
      return;
    }

    advanceToNextVideo();
  };

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
        muted
        playsInline
        preload="auto"
        poster={heroImg}
        aria-hidden="true"
        src={currentVideo}
        onEnded={advanceToNextVideo}
        onError={handleVideoError}
        onTimeUpdate={handleVideoTimeUpdate}
      />
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
