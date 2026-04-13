import { motion } from "framer-motion";
import AnimateIn, { StaggerParent, StaggerChild } from "@/components/AnimateIn";

const sketchIcons = {
  location: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 C12 4 6 10 6 18 C6 28 20 38 20 38 C20 38 34 28 34 18 C34 10 28 4 20 4Z" />
      <circle cx="20" cy="17" r="5" strokeDasharray="2 1.5" />
      <path d="M2 36 H38" strokeDasharray="3 2" />
    </svg>
  ),
  farmhouse: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20 L20 6 L36 20" />
      <rect x="8" y="19" width="24" height="18" rx="1" />
      <rect x="16" y="28" width="8" height="9" rx="0.5" />
      <rect x="10" y="22" width="5" height="5" rx="0.5" strokeDasharray="2 1" />
      <rect x="25" y="22" width="5" height="5" rx="0.5" strokeDasharray="2 1" />
    </svg>
  ),
  bed: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="16" width="32" height="14" rx="2" />
      <path d="M4 30 V34" />
      <path d="M36 30 V34" />
      <path d="M4 22 H36" />
      <ellipse cx="14" cy="14" rx="5" ry="4" strokeDasharray="2 1" />
      <ellipse cx="26" cy="14" rx="5" ry="4" strokeDasharray="2 1" />
    </svg>
  ),
  trees: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 36 V24" />
      <ellipse cx="14" cy="16" rx="8" ry="10" strokeDasharray="2.5 1.5" />
      <path d="M28 36 V28" />
      <ellipse cx="28" cy="22" rx="6" ry="8" strokeDasharray="2.5 1.5" />
      <path d="M4 36 H36" strokeDasharray="3 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 L6 10 V22 C6 30 20 38 20 38 C20 38 34 30 34 22 V10 L20 4Z" />
      <path d="M14 20 L18 24 L26 16" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 36 V20" />
      <path d="M20 20 C20 14 14 10 10 12 C6 14 12 20 20 20" />
      <path d="M20 20 C20 14 26 10 30 12 C34 14 28 20 20 20" />
      <path d="M20 28 C18 24 12 22 10 26 C8 30 18 28 20 28" />
      <path d="M20 28 C22 24 28 22 30 26 C32 30 22 28 20 28" />
      <path d="M10 36 H30" strokeDasharray="3 2" />
    </svg>
  ),
  waterfall: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 8 H32" strokeDasharray="3 2" />
      <path d="M14 8 C15 12 13 15 14 20 C15 24 18 26 20 30" />
      <path d="M20 8 C21 12 19 15 20 20 C21 24 24 26 26 30" />
      <path d="M26 8 C27 12 25 15 26 20 C27 24 30 26 32 30" />
      <path d="M8 32 C12 29 16 35 20 32 C24 29 28 35 32 32" />
    </svg>
  ),
  confluence: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 10 C14 12 14 18 20 20" />
      <path d="M32 10 C26 12 26 18 20 20" />
      <path d="M20 20 C20 24 22 27 25 30" />
      <path d="M20 20 C20 24 18 27 15 30" />
      <path d="M8 34 H32" strokeDasharray="3 2" />
    </svg>
  ),
  gorge: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 34 L16 12" />
      <path d="M34 34 L24 12" />
      <path d="M16 12 H24" />
      <path d="M18 22 C19 24 21 24 22 26" />
      <path d="M10 34 H30" strokeDasharray="3 2" />
    </svg>
  ),
  hill: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 32 L14 18 L21 27 L28 16 L36 32" />
      <path d="M28 16 L31 20 L33 18" />
      <path d="M4 32 H36" strokeDasharray="3 2" />
    </svg>
  ),
  pyramid: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 L6 34 H34 Z" />
      <path d="M20 6 V34" />
      <path d="M12 24 H28" />
    </svg>
  ),
  ashram: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 34 V22 L20 14 L30 22 V34" />
      <path d="M6 22 L20 10 L34 22" />
      <rect x="17" y="25" width="6" height="9" rx="0.5" />
      <path d="M8 34 H32" strokeDasharray="3 2" />
    </svg>
  ),
};

const advantages = [
  {
    icon: sketchIcons.location,
    title: "Well Within Reach",
    desc: "120 mins from Bangalore Airport • 85 mins from MG Road • 105 mins from Whitefield",
  },
  {
    icon: sketchIcons.farmhouse,
    title: "Design & Build",
    desc: "Design your farmhouse and build at your convenience.",
  },
  {
    icon: sketchIcons.bed,
    title: "Relax & Recharge",
    desc: "Curated cottages designed for peaceful weekend stays near the clubhouse.",
  },
  {
    icon: sketchIcons.trees,
    title: "Green Corridors",
    desc: "Existing plantation within a fully operational and maintained farm project.",
  },
  {
    icon: sketchIcons.shield,
    title: "Top-Tier Care",
    desc: "Managed by professionals ensuring premium quality and meticulous attention to detail.",
  },
  {
    icon: sketchIcons.sprout,
    title: "Farming Experts On-Site",
    desc: "Design your mixed fruit orchard and organic garden with our agronomy team.",
  },
];

const famousPlaces = [
  {
    icon: sketchIcons.waterfall,
    title: "Chunchi Falls",
    desc: "Approx. 10 mins drive",
  },
  {
    icon: sketchIcons.confluence,
    title: "Kaveri Sangama",
    desc: "Approx. 15 mins drive",
  },
  {
    icon: sketchIcons.gorge,
    title: "Mekedatu",
    desc: "Approx. 45 mins drive",
  },
  {
    icon: sketchIcons.hill,
    title: "Bilikal Rangaswamy Betta",
    desc: "Approx. 55 mins drive",
  },
  {
    icon: sketchIcons.pyramid,
    title: "Pyramid Valley",
    desc: "Approx. 50 mins drive",
  },
  {
    icon: sketchIcons.ashram,
    title: "Art of Living Intl. Center",
    desc: "Approx. 65 mins drive",
  },
];

const AdvantageSectionStaging1 = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-heading mb-4">The Soravana Advantage</h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need for a sustainable, connected, and fulfilling lifestyle — all in one place.
        </p>
      </AnimateIn>
      <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((a) => (
          <StaggerChild key={a.title}>
            <motion.div
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                {a.icon}
              </motion.div>
              <h3 className="font-heading text-lg mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerParent>

      <motion.div
        className="mt-8 bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-5">
          <h3 className="font-heading text-2xl mb-1">Nearby Famous Places</h3>
          <p className="text-sm text-muted-foreground">Grouped in one block as requested.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {famousPlaces.map((place) => (
            <div key={place.title} className="rounded-lg border border-border bg-background px-4 py-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                {place.icon}
              </div>
              <p className="font-heading text-lg mb-1">{place.title}</p>
              <p className="text-muted-foreground text-sm">{place.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AdvantageSectionStaging1;
