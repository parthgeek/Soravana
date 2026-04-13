import { Button } from "@/components/ui/button";
import { Ruler, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const plots = [
  { size: "5,000 sq. ft.", label: "Standard Plot" },
  { size: "10,000 sq. ft.", label: "Premium Plot" },
  { size: "Half Acre", label: "Estate Plot" },
];

const PricingCTA = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimateIn variant="scaleUp">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto">
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
                  className="bg-background rounded-lg p-4 border border-border"
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }}
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
                <Button variant="hero-outline" size="lg">Talk to Advisor</Button>
              </motion.div>
            </div>
          </AnimateIn>
        </div>
      </AnimateIn>
    </div>
  </section>
);

export default PricingCTA;
