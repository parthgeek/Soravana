import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";

const sketchIcons = {
  waterfall: (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 8 H32" strokeDasharray="3 2" />
      <path d="M14 8 C15 12 13 15 14 20 C15 24 18 26 20 30" />
      <path d="M20 8 C21 12 19 15 20 20 C21 24 24 26 26 30" />
      <path d="M26 8 C27 12 25 15 26 20 C27 24 30 26 32 30" />
      <path d="M8 32 C12 29 16 35 20 32 C24 29 28 35 32 32" />
    </svg>
  ),
  confluence: (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 10 C14 12 14 18 20 20" />
      <path d="M32 10 C26 12 26 18 20 20" />
      <path d="M20 20 C20 24 22 27 25 30" />
      <path d="M20 20 C20 24 18 27 15 30" />
      <path d="M8 34 H32" strokeDasharray="3 2" />
    </svg>
  ),
  gorge: (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 34 L16 12" />
      <path d="M34 34 L24 12" />
      <path d="M16 12 H24" />
      <path d="M18 22 C19 24 21 24 22 26" />
      <path d="M10 34 H30" strokeDasharray="3 2" />
    </svg>
  ),
  hill: (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 32 L14 18 L21 27 L28 16 L36 32" />
      <path d="M28 16 L31 20 L33 18" />
      <path d="M4 32 H36" strokeDasharray="3 2" />
    </svg>
  ),
  pyramid: (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 L6 34 H34 Z" />
      <path d="M20 6 V34" />
      <path d="M12 24 H28" />
    </svg>
  ),
  ashram: (
    <svg
      viewBox="0 0 40 40"
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 34 V22 L20 14 L30 22 V34" />
      <path d="M6 22 L20 10 L34 22" />
      <rect x="17" y="25" width="6" height="9" rx="0.5" />
      <path d="M8 34 H32" strokeDasharray="3 2" />
    </svg>
  ),
};

const famousPlaces = [
  { icon: sketchIcons.waterfall, label: "Chunchi Falls", value: "Approx. 10 mins drive" },
  { icon: sketchIcons.confluence, label: "Kaveri Sangama", value: "Approx. 15 mins drive" },
  { icon: sketchIcons.gorge, label: "Mekedatu", value: "Approx. 45 mins drive" },
  { icon: sketchIcons.hill, label: "Bilikal Rangaswamy Betta", value: "Approx. 55 mins drive" },
  { icon: sketchIcons.pyramid, label: "Pyramid Valley", value: "Approx. 50 mins drive" },
  { icon: sketchIcons.ashram, label: "Art of Living Intl. Center", value: "Approx. 65 mins drive" },
];

const OverviewSectionStaging1 = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading mb-4">Project Highlights</h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto mb-5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Famous nearby places from CHANDUSURYA HOUSE, 9C3H+PQ2, Nallahalli Doddi.
        </p>
      </AnimateIn>
      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {famousPlaces.map((place) => (
          <StaggerChild key={place.label}>
            <motion.div
              className="bg-background rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.18)" }}
                transition={{ duration: 0.25 }}
              >
                {place.icon}
              </motion.div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{place.label}</p>
                <p className="font-heading text-lg">{place.value}</p>
              </div>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerParent>
      <p className="text-[11px] text-muted-foreground/80 text-center mt-6">
        Drive times are approximate and vary by traffic and time of day.
      </p>
    </div>
  </section>
);

export default OverviewSectionStaging1;
