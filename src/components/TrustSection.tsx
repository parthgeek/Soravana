import { ShieldCheck, FileText, User, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const items = [
  { icon: ShieldCheck, label: "Clear land titles" },
  { icon: FileText, label: "Verified documentation" },
  { icon: User, label: "Individual ownership" },
  { icon: HeadphonesIcon, label: "End-to-end support" },
];

const TrustSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4 text-center">
      <AnimateIn variant="fadeUp" className="mb-12">
        <h2 className="text-3xl md:text-5xl font-heading mb-4">Transparency You Can Trust</h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <p className="text-muted-foreground max-w-lg mx-auto">
          We believe in complete clarity and security.
        </p>
      </AnimateIn>
      <StaggerParent className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <StaggerChild key={item.label}>
            <motion.div
              className="flex flex-col items-center gap-3"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.12, backgroundColor: "rgba(var(--primary), 0.18)" }}
                transition={{ duration: 0.25 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <p className="text-sm font-medium">{item.label}</p>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerParent>
    </div>
  </section>
);

export default TrustSection;
