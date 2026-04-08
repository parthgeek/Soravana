const sketchIcons = {
  mapPin: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 C12 4 6 10 6 18 C6 28 20 38 20 38 C20 38 34 28 34 18 C34 10 28 4 20 4Z" />
      <circle cx="20" cy="17" r="5" strokeDasharray="2 1.5" />
    </svg>
  ),
  ruler: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="32" height="12" rx="1" />
      <path d="M10 14 V20" /><path d="M16 14 V22" /><path d="M22 14 V20" /><path d="M28 14 V22" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 L6 10 V22 C6 30 20 38 20 38 C20 38 34 30 34 22 V10 L20 4Z" />
      <path d="M14 20 L18 24 L26 16" />
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 36 V18" />
      <ellipse cx="20" cy="12" rx="10" ry="9" strokeDasharray="2.5 1.5" />
      <path d="M20 18 Q14 14 12 10" /><path d="M20 18 Q26 14 28 10" />
      <path d="M12 36 H28" strokeDasharray="3 2" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="24" height="26" rx="1" />
      <path d="M4 12 L20 4 L36 12" />
      <rect x="16" y="26" width="8" height="10" rx="0.5" />
      <rect x="12" y="14" width="5" height="5" rx="0.5" /><rect x="23" y="14" width="5" height="5" rx="0.5" />
    </svg>
  ),
  cottage: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 20 L20 8 L34 20" />
      <rect x="10" y="19" width="20" height="16" rx="1" />
      <rect x="17" y="26" width="6" height="9" rx="0.5" />
      <rect x="12" y="22" width="4" height="4" rx="0.5" strokeDasharray="2 1" />
      <rect x="24" y="22" width="4" height="4" rx="0.5" strokeDasharray="2 1" />
      <path d="M4 35 H36" strokeDasharray="3 2" />
    </svg>
  ),
};

const highlights = [
  { icon: sketchIcons.mapPin, label: "Total Land Area", value: "11 Acres" },
  { icon: sketchIcons.ruler, label: "Plot Size", value: "5,000 sq. ft. onwards" },
  { icon: sketchIcons.shield, label: "Layout", value: "Gated Community" },
  { icon: sketchIcons.tree, label: "Green Spaces", value: "Internal Roads & Parks" },
  { icon: sketchIcons.building, label: "Community Hall", value: "Shared Gathering Space" },
  { icon: sketchIcons.cottage, label: "Stay Cottages", value: "Weekend Retreat Ready" },
];

const OverviewSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">Project Highlights</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div key={h.label} className="bg-background rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
              {h.icon}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{h.label}</p>
              <p className="font-heading text-lg">{h.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OverviewSection;
