const items = [
  {
    title: "Own",
    desc: "Individually owned 5,000 sq. ft. farmland plots with clear titles.",
    sketch: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Land plot with flag */}
        <path d="M12 62 L12 20" />
        <path d="M12 20 Q20 16 28 20 Q36 24 44 20 L44 36 Q36 40 28 36 Q20 32 12 36" />
        <path d="M8 62 H72" strokeDasharray="4 3" />
        {/* Plot boundary markers */}
        <rect x="20" y="48" width="40" height="14" rx="1" strokeDasharray="3 2" />
        <path d="M28 48 V62" strokeDasharray="2 2" />
        <path d="M40 48 V62" strokeDasharray="2 2" />
        <path d="M52 48 V62" strokeDasharray="2 2" />
        {/* Trees on plot */}
        <circle cx="24" cy="43" r="4" strokeDasharray="2 1" />
        <path d="M24 47 V52" />
        <circle cx="46" cy="41" r="5" strokeDasharray="2 1" />
        <path d="M46 46 V52" />
        {/* Sun */}
        <circle cx="64" cy="16" r="5" />
        <path d="M64 8 V6" /><path d="M64 26 V24" />
        <path d="M56 16 H54" /><path d="M74 16 H72" />
        <path d="M58 10 L56.5 8.5" /><path d="M70 22 L71.5 23.5" />
      </svg>
    ),
  },
  {
    title: "Farm",
    desc: "Grow your own food or opt for managed farming support.",
    sketch: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Main plant/tree */}
        <path d="M40 68 V34" />
        <path d="M40 34 C40 24 30 18 26 22 C22 26 30 34 40 34" />
        <path d="M40 34 C40 24 50 18 54 22 C58 26 50 34 40 34" />
        <path d="M40 46 C36 40 26 38 22 42 C18 46 30 48 40 46" />
        <path d="M40 46 C44 40 54 38 58 42 C62 46 50 48 40 46" />
        {/* Small leaves */}
        <path d="M40 54 C38 50 32 49 30 52 C28 55 36 55 40 54" />
        <path d="M40 54 C42 50 48 49 50 52 C52 55 44 55 40 54" />
        {/* Ground with crops */}
        <path d="M10 68 H70" strokeDasharray="4 3" />
        <path d="M14 68 V64" /><circle cx="14" cy="62" r="2" strokeDasharray="1 1" />
        <path d="M22 68 V65" /><circle cx="22" cy="63" r="2" strokeDasharray="1 1" />
        <path d="M58 68 V64" /><circle cx="58" cy="62" r="2" strokeDasharray="1 1" />
        <path d="M66 68 V65" /><circle cx="66" cy="63" r="2" strokeDasharray="1 1" />
        {/* Butterflies */}
        <path d="M16 28 Q14 24 12 28 Q14 32 16 28" />
        <path d="M16 28 Q18 24 20 28 Q18 32 16 28" />
        <path d="M62 18 Q60 14 58 18 Q60 22 62 18" />
        <path d="M62 18 Q64 14 66 18 Q64 22 62 18" />
      </svg>
    ),
  },
  {
    title: "Build",
    desc: "Design and build your farmhouse at your own pace.",
    sketch: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* House */}
        <path d="M10 38 L40 14 L70 38" />
        <rect x="16" y="36" width="48" height="30" rx="1" />
        {/* Door */}
        <rect x="32" y="48" width="16" height="18" rx="1" />
        <circle cx="44" cy="58" r="1.5" />
        {/* Windows */}
        <rect x="20" y="42" width="10" height="10" rx="1" />
        <path d="M25 42 V52" /><path d="M20 47 H30" />
        <rect x="50" y="42" width="10" height="10" rx="1" />
        <path d="M55 42 V52" /><path d="M50 47 H60" />
        {/* Chimney smoke */}
        <rect x="52" y="20" width="6" height="14" />
        <path d="M55 20 Q53 14 55 10 Q57 6 55 2" strokeDasharray="2 2" />
        {/* Garden elements */}
        <path d="M8 66 H72" strokeDasharray="4 3" />
        <path d="M12 66 V62" /><circle cx="12" cy="60" r="2.5" strokeDasharray="2 1" />
        <path d="M68 66 V62" /><circle cx="68" cy="60" r="2.5" strokeDasharray="2 1" />
        {/* Birds */}
        <path d="M18 10 Q22 6 26 10" /><path d="M24 12 Q28 8 32 12" />
      </svg>
    ),
  },
  {
    title: "Belong",
    desc: "Be part of a like-minded community that values nature and simplicity.",
    sketch: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Tree */}
        <path d="M40 68 V40" />
        <ellipse cx="40" cy="28" rx="18" ry="16" strokeDasharray="3 2" />
        <path d="M40 40 Q30 36 26 28" /><path d="M40 40 Q50 36 54 28" />
        {/* Bench */}
        <path d="M18 60 H34" />
        <path d="M20 60 V66" /><path d="M32 60 V66" />
        <path d="M17 56 L19 60" /><path d="M35 56 L33 60" />
        {/* Another bench */}
        <path d="M46 60 H62" />
        <path d="M48 60 V66" /><path d="M60 60 V66" />
        <path d="M45 56 L47 60" /><path d="M63 56 L61 60" />
        {/* Birds in sky */}
        <path d="M20 12 Q24 8 28 12" />
        <path d="M30 8 Q34 4 38 8" />
        <path d="M52 10 Q56 6 60 10" />
        {/* Ground */}
        <path d="M8 68 H72" strokeDasharray="4 3" />
        {/* Flowers */}
        <circle cx="12" cy="64" r="2" strokeDasharray="1.5 1" />
        <path d="M12 66 V68" />
        <circle cx="68" cy="63" r="2" strokeDasharray="1.5 1" />
        <path d="M68 65 V68" />
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
            <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
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
