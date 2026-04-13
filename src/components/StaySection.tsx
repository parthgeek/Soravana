import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";
const cottageImg = "/assets/cottage-sketch.jpg";

const points = [
  "Book in-house cottages",
  "Perfect for weekend getaways",
  "Stay even if your farmhouse isn't built yet",
];

const StaySection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimateIn variant="fadeLeft">
          <motion.div
            className="rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={cottageImg}
              alt="Cozy cottage at Soravana"
              className="w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Stay Till You Build Your Home</h2>
          <motion.div
            className="w-12 h-0.5 bg-accent mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Enjoy the Soravana experience from day one.
          </p>
          <StaggerParent className="space-y-3">
            {points.map((p) => (
              <StaggerChild key={p}>
                <motion.li
                  className="flex items-center gap-3 text-sm list-none"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{p}</span>
                </motion.li>
              </StaggerChild>
            ))}
          </StaggerParent>
        </AnimateIn>
      </div>
    </div>
  </section>
);

export default StaySection;
