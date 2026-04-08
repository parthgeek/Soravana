const items = [
  {
    title: "Own",
    desc: "Individually owned 5,000 sq. ft. farmland plots with clear titles.",
    sketch: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40 L32 12 L56 40" />
        <path d="M14 38 V54 H26 V44 H38 V54 H50 V38" />
        <path d="M22 30 L22 24 L28 24" />
        <circle cx="44" cy="20" r="4" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Farm",
    desc: "Grow your own food or opt for managed farming support.",
    sketch: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 56 V30" />
        <path d="M32 30 C32 22 24 16 20 20 C16 24 22 30 32 30" />
        <path d="M32 30 C32 22 40 16 44 20 C48 24 42 30 32 30" />
        <path d="M32 40 C28 36 20 34 18 38 C16 42 26 42 32 40" />
        <path d="M32 40 C36 36 44 34 46 38 C48 42 38 42 32 40" />
        <path d="M22 56 H42" />
      </svg>
    ),
  },
  {
    title: "Build",
    desc: "Design and build your farmhouse at your own pace.",
    sketch: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="28" width="40" height="28" rx="1" />
        <path d="M6 30 L32 10 L58 30" />
        <rect x="26" y="40" width="12" height="16" rx="1" />
        <rect x="16" y="34" width="8" height="8" rx="1" strokeDasharray="3 2" />
        <rect x="40" y="34" width="8" height="8" rx="1" strokeDasharray="3 2" />
        <path d="M30 8 L30 4 L36 4 L36 14" />
      </svg>
    ),
  },
  {
    title: "Belong",
    desc: "Be part of a like-minded community that values nature and simplicity.",
    sketch: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="20" r="6" />
        <circle cx="42" cy="20" r="6" />
        <path d="M10 44 C10 34 18 28 22 28 C26 28 28 30 32 30 C36 30 38 28 42 28 C46 28 54 34 54 44" />
        <path d="M20 50 Q32 58 44 50" strokeDasharray="3 2" />
      </svg>
    ),
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">More Than Land. A Way of Living.</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              {item.sketch}
            </div>
            <h3 className="text-xl font-heading mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
