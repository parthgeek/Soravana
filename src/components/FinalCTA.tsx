import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const FinalCTA = () => (
  <section id="contact" className="py-24 bg-primary/5">
    <div className="container mx-auto px-4 text-center">
      <AnimateIn variant="fadeUp">
        <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
          Experience Soravana Before You Own It
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Visit the site, feel the space, and discover a better way of living.
        </p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button variant="hero" size="lg">Book Site Visit</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button variant="hero-outline" size="lg" className="border-accent text-foreground">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </motion.div>
        </motion.div>
      </AnimateIn>
    </div>
  </section>
);

export default FinalCTA;
