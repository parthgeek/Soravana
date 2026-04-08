const sketchCheck = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeDasharray="3 2" />
    <path d="M8 12 L11 15 L16 9" />
  </svg>
);

const reasons = [
  "Professionally managed organic farming with expert agronomists",
  "100% legally verified with clear titles and documentation",
  "Premium amenities: Nature Lounge, pool, cottages & organic store",
  "Just 60-90 minutes from Bangalore city center",
  "Complete freedom to design and build your dream home",
  "Real-time farm updates and transparent reporting",
  "Gated community with 24/7 security and CCTV",
  "Eco-friendly infrastructure: solar, rainwater harvesting, composting",
];

const WhyChooseSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Why Choose Soravana?
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A truly organic heaven — where every detail is designed for sustainable, premium living.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
              <span className="text-accent">{sketchCheck}</span>
              <p className="text-foreground/90 text-sm leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
