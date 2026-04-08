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
      <path d="M4 30 V34" /><path d="M36 30 V34" />
      <path d="M4 22 H36" />
      <ellipse cx="14" cy="14" rx="5" ry="4" strokeDasharray="2 1" />
      <ellipse cx="26" cy="14" rx="5" ry="4" strokeDasharray="2 1" />
    </svg>
  ),
  trees: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 36 V24" /><ellipse cx="14" cy="16" rx="8" ry="10" strokeDasharray="2.5 1.5" />
      <path d="M28 36 V28" /><ellipse cx="28" cy="22" rx="6" ry="8" strokeDasharray="2.5 1.5" />
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
};

const advantages = [
  {
    icon: sketchIcons.location,
    title: "Well Within Reach",
    desc: "90 mins from Bangalore Airport • 60 mins from MG Road • 30 mins from Whitefield",
  },
  {
    icon: sketchIcons.farmhouse,
    title: "Designed. Built. Ready.",
    desc: "Curated farmhouses designed and constructed as per your needs and preferences.",
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

const AdvantageSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
        The Soravana Advantage
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
        Everything you need for a sustainable, connected, and fulfilling
        lifestyle — all in one place.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((a) => (
          <div
            key={a.title}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors text-primary">
              {a.icon}
            </div>
            <h3 className="font-heading text-lg mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantageSection;
