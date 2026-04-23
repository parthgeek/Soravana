import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/staging-1" },
  { label: "About", href: "/staging-1/about" },
  { label: "Location", href: "/staging-1/location" },
  { label: "Contact", href: "/staging-1/contact" },
];

const NavbarStaging1 = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (open || currentScrollY < 24) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      setHidden(false);
    }
  }, [open]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-0 md:px-8 pt-4 md:pt-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="flex min-h-[72px] items-center pl-0 pr-4 md:min-h-0 md:justify-between md:px-8">
          <Link href="/staging-1" className="flex items-center text-left font-heading text-lg leading-none tracking-[0.15em] text-accent md:gap-2 md:flex-none md:text-xl">
            <Image
              src="/favicon.png"
              alt="Soravana Logo"
              width={112}
              height={112}
              className="h-16 w-auto rounded-sm md:h-20"
            />
            SORAVANA
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.18, ease: "easeOut" },
                }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="relative text-base font-semibold tracking-wide text-accent hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <button
            className="ml-auto text-foreground md:hidden"
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
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="md:hidden overflow-hidden border-t border-border/30"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-4 pt-3 space-y-1">
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
                      className="block text-base font-semibold tracking-wide text-accent hover:opacity-80 transition-colors py-2"
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
  );
};

export default NavbarStaging1;
