import { Globe, Heart, Scale } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const principles = [
  {
    icon: Globe,
    title: "Earth Care",
    desc: "Ensuring all living systems can continue and multiply through regenerative farming practices.",
  },
  {
    icon: Heart,
    title: "People Care",
    desc: "Ensuring people have access to the resources necessary for a fulfilling and healthy existence.",
  },
  {
    icon: Scale,
    title: "Fair Share",
    desc: "Governing our own needs and setting limits to consumption for a balanced ecosystem.",
  },
];

const SustainabilitySection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <AnimateIn variant="fadeUp" className="mb-14">
        <h2 className="text-2xl md:text-4xl font-heading text-foreground mb-4 max-w-2xl mx-auto leading-snug">
          By Applying the Principles of Conventional Farming, We Create a More
          Sustainable Future
        </h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </AnimateIn>
      <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {principles.map((p) => (
          <StaggerChild key={p.title}>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.18)" }}
                transition={{ duration: 0.3 }}
              >
                <p.icon className="w-7 h-7 text-accent" />
              </motion.div>
              <h3 className="font-heading text-lg text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default SustainabilitySection;
