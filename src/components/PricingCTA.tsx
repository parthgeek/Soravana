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
  <section className="py-24 bg-background">
    <div className="container    mx-auto px-4">
      <AnimateIn variant="scaleUp">
        <div className="max-w mx-auto rounded-xl bg-[linear-gradient(135deg,rgba(22,101,52,0.14)_0%,rgba(34,197,94,0.1)_52%,rgba(132,204,22,0.08)_100%)] p-10 text-center transition-all duration-300 hover:border-emerald-900/30 hover:bg-[linear-gradient(135deg,rgba(20,83,45,0.22)_0%,rgba(21,128,61,0.18)_52%,rgba(101,163,13,0.14)_100%)] md:p-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Limited Plots Available
          </h2>
          <p className="text-muted-foreground mb-8">
            Own your farmland in a premium community setting.
          </p>

          <StaggerParent className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            {plots.map((p) => (
              <StaggerChild key={p.label}>
                <motion.div
                  className="rounded-lg border border-emerald-800/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.42)_0%,rgba(236,253,245,0.28)_100%)] p-4 backdrop-blur-[2px]"
                  whileHover={{ y: -4, borderColor: "rgba(22, 101, 52, 0.35)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Ruler className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-heading text-lg">{p.size}</p>
                  <p className="text-muted-foreground text-xs">{p.label}</p>
                </motion.div>
              </StaggerChild>
            ))}
          </StaggerParent>

          <AnimateIn variant="fadeUp" delay={0.25}>
            <div className="flex items-center justify-center gap-2 mb-8">
              <IndianRupee className="w-5 h-5 text-accent" />
              <span className="text-2xl md:text-3xl font-heading">
                Starting at ₹XX Lakhs*
              </span>
            </div>
            <p className="text-muted-foreground text-xs mb-8">
              *Price varies based on plot size and location within the community
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="hero-outline" size="lg">
                  <Link href={contactHref}>Talk to Advisor</Link>
                </Button>
              </motion.div>
            </div>
          </AnimateIn>
        </div>
      </AnimateIn>
    </div>
  </section>
);

export default PricingCTA;
