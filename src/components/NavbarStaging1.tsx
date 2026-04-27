"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/staging-1" },
  { label: "About", href: "/staging-1/about" },
  { label: "Location", href: "/staging-1/location" },
  { label: "Contact", href: "/staging-1/contact" },
];
const mobileBadgeText = "Premium Managed Farmland • Near Bengaluru";

const NavbarStaging1 = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const isHomePage = pathname === "/staging-1";

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowTop(currentScrollY > 400);
      setHidden(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setHidden(false);
    }
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Standalone logo — sits outside navbar so nav can stay short.
          Wrapped in same max-w-7xl + px scheme as HeroSection so logo
          left edge aligns with the "Soravana Farmland" headline. */}
      <motion.div
        className="fixed left-3 top-2 z-[60] md:left-5 md:top-3"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? -20 : 0 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href="/staging-1" className="inline-block">
          <Image
            src="/assets/Soravana_Logo.png"
            alt="Soravana Logo"
            width={192}
            height={192}
            className={`w-auto rounded-full transition-all duration-300 drop-shadow-md md:ml-7 ${
              isHomePage
                ? scrolled
                  ? "h-16 md:h-20"
                  : "h-24 md:h-32"
                : scrolled
                  ? "h-12 md:h-16"
                  : "h-16 md:h-20"
            }`}
          />
        </Link>
      </motion.div>

      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-8 md:pt-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {isHomePage && (
          <div className="pointer-events-none absolute left-[7rem] right-[4.5rem] top-4 flex justify-center md:hidden">
            <span className="max-w-full truncate whitespace-nowrap rounded-full bg-black/35 px-3 py-1 text-[7px] font-body font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-sm backdrop-blur-[2px]">
              {mobileBadgeText}
            </span>
          </div>
        )}

        <div
          className={`ml-auto w-fit rounded-full transition-all duration-300 md:mr-0 ${
            scrolled
              ? "bg-white/95 shadow-md backdrop-blur-md"
              : "bg-white/80 shadow-sm backdrop-blur-sm"
          }`}
        >
          <div
            className={`flex items-center justify-center gap-6 px-4 transition-all duration-300 md:px-7 ${
              scrolled ? "py-1.5 md:py-1.5" : "py-2 md:py-2"
            }`}
          >
            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.18, ease: "easeOut" },
                  }}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-semibold tracking-wide text-accent transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              className="text-foreground md:hidden flex items-center justify-center"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="overflow-hidden border-t border-border/30 md:hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="space-y-1 px-6 pb-4 pt-3">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{
                        scale: 1.12,
                        transition: { duration: 0.16, ease: "easeOut" },
                      }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-base font-semibold tracking-wide text-accent transition-colors hover:opacity-80"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile return-to-top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Return to top"
            className="fixed bottom-5 left-1/2 z-[55] flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg md:hidden"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarStaging1;
