import { TrendingUp, Shield, Landmark, Leaf, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const benefits = [
  { icon: TrendingUp, title: "Appreciating Asset", desc: "Farmland near Bengaluru appreciates steadily — outperforming many traditional investments." },
  { icon: Shield, title: "Clear Legal Titles", desc: "100% legally verified with RERA-compliant documentation and transparent ownership." },
  { icon: Leaf, title: "Passive Organic Income", desc: "Earn from managed organic farming — fruits, vegetables, and timber plantations." },
  { icon: Landmark, title: "Tangible Ownership", desc: "Unlike stocks or crypto, you own real land you can see, visit, and build on." },
  { icon: BarChart3, title: "Dual Returns", desc: "Benefit from both land appreciation and agricultural yield — wealth that grows naturally." },
  { icon: Clock, title: "Generational Legacy", desc: "Pass on fertile, managed farmland to your children — a legacy rooted in nature." },
];

const InvestmentSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-widest uppercase mb-3 block">
          Smart Investment
        </span>
        <h2 className="text-3xl md:text-5xl font-heading mb-4">
          Why Farmland Is the Smartest Investment Today
        </h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real land. Real returns. While markets fluctuate, well-managed farmland delivers consistent value growth and lifestyle returns.
        </p>
      </AnimateIn>
      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {benefits.map((b) => (
          <StaggerChild key={b.title}>
            <motion.div
              className="bg-card rounded-xl p-8 border border-border hover:border-accent/40 hover:shadow-lg transition-all group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <b.icon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="font-heading text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerParent>
 
    </div>
  </section>
);

export default InvestmentSection;
