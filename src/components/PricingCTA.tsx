import { Button } from "@/components/ui/button";
import { Ruler, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";
import Link from "next/link";

const plots = [
  { size: "5,000 sq. ft.", label: "Standard Plot" },
  { size: "10,000 sq. ft.", label: "Premium Plot" },
  { size: "Half Acre", label: "Estate Plot" },
];

type PricingCTAProps = {
  contactHref: string;
};

const PricingCTA = ({ contactHref }: PricingCTAProps) => (
  <section className="pb-14 md:pb-24 bg-section-alt">
    <div className="w-full px-4 md:px-8">
      <AnimateIn variant="scaleUp">
        <div className="relative mx-auto w-full overflow-hidden rounded-xl text-center text-primary-foreground">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
            style={{ backgroundImage: "url('/assets/limited-plots.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,42,31,0.88)_0%,rgba(23,61,49,0.82)_52%,rgba(38,78,61,0.8)_100%)] transition-colors duration-300 hover:bg-[linear-gradient(135deg,rgba(10,32,24,0.92)_0%,rgba(18,49,39,0.88)_52%,rgba(31,64,50,0.86)_100%)]"
            aria-hidden="true"
          />
          <div className="relative p-10 md:p-16">
            <h2 className="mb-4 text-3xl font-heading text-primary-foreground md:text-4xl">
              Limited Plots Available
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Own your farmland in a premium community setting.
            </p>

            <StaggerParent className="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {plots.map((p) => (
                <StaggerChild key={p.label}>
                  <motion.div
                    className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_100%)] p-4 text-primary-foreground backdrop-blur-[2px]"
                    whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.24)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Ruler className="mx-auto mb-2 h-5 w-5 text-primary-foreground" />
                    <p className="text-lg font-heading text-primary-foreground">{p.size}</p>
                    <p className="text-xs text-primary-foreground/75">{p.label}</p>
                  </motion.div>
                </StaggerChild>
              ))}
            </StaggerParent>

            <AnimateIn variant="fadeUp" delay={0.25}>
              <div className="mb-8 flex items-center justify-center gap-2">
                <IndianRupee className="h-5 w-5 text-primary-foreground" />
                <span className="text-2xl font-heading text-primary-foreground md:text-3xl">
                  Starting at ₹XX Lakhs*
                </span>
              </div>
              <p className="mb-8 text-xs text-primary-foreground/70">
                *Price varies based on plot size and location within the community
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    asChild
                    variant="hero-outline"
                    size="lg"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-[#173d31]"
                  >
                    <Link href={contactHref}>Talk to Advisor</Link>
                  </Button>
                </motion.div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </AnimateIn>
    </div>
  </section>
);

export default PricingCTA;
