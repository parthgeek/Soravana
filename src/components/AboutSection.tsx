const items = [
  {
    title: "Own",
    desc: "Individually owned 5,000 sq. ft. farmland plots with clear titles.",
    sketch: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-28 md:h-28" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Land plot with boundary stakes */}
        <path d="M20 95 H100" strokeDasharray="5 4" />
        {/* Plot boundary with stakes */}
        <rect x="25" y="55" width="70" height="40" rx="2" strokeDasharray="4 3" />
        <path d="M25 55 L25 50" /><circle cx="25" cy="48" r="2" />
        <path d="M95 55 L95 50" /><circle cx="95" cy="48" r="2" />
        <path d="M25 95 L25 100" /><circle cx="25" cy="102" r="2" />
        <path d="M95 95 L95 100" /><circle cx="95" cy="102" r="2" />
        {/* Flag on plot */}
        <path d="M60 55 V20" />
        <path d="M60 20 Q70 24 60 30 Q70 36 60 40" />
        {/* Trees inside */}
        <circle cx="40" cy="70" r="6" strokeDasharray="2 1.5" />
        <path d="M40 76 V82" />
        <circle cx="80" cy="68" r="7" strokeDasharray="2 1.5" />
        <path d="M80 75 V82" />
        {/* Sun */}
        <circle cx="100" cy="18" r="7" />
        <path d="M100 8 V5" /><path d="M100 28 V31" />
        <path d="M90 18 H87" /><path d="M110 18 H113" />
        <path d="M93 11 L91 9" /><path d="M107 25 L109 27" />
        <path d="M107 11 L109 9" /><path d="M93 25 L91 27" />
      </svg>
    ),
  },
  {
    title: "Farm",
    desc: "Grow your own food or opt for managed farming support.",
    sketch: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-28 md:h-28" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Main tree/plant */}
        <path d="M60 105 V50" />
        <path d="M60 50 C60 36 46 28 40 33 C34 38 46 50 60 50" />
        <path d="M60 50 C60 36 74 28 80 33 C86 38 74 50 60 50" />
        <path d="M60 65 C54 57 40 54 34 60 C28 66 48 66 60 65" />
        <path d="M60 65 C66 57 80 54 86 60 C92 66 72 66 60 65" />
        {/* Small leaves */}
        <path d="M60 80 C56 74 46 72 42 76 C38 80 54 79 60 80" />
        <path d="M60 80 C64 74 74 72 78 76 C82 80 66 79 60 80" />
        {/* Fruits */}
        <circle cx="48" cy="40" r="3" />
        <circle cx="72" cy="40" r="3" />
        <circle cx="38" cy="62" r="2.5" />
        <circle cx="82" cy="62" r="2.5" />
        {/* Ground with crop rows */}
        <path d="M15 105 H105" strokeDasharray="5 4" />
        <path d="M20 105 V100" /><circle cx="20" cy="97" r="3" strokeDasharray="1.5 1" />
        <path d="M35 105 V101" /><circle cx="35" cy="98" r="3" strokeDasharray="1.5 1" />
        <path d="M85 105 V100" /><circle cx="85" cy="97" r="3" strokeDasharray="1.5 1" />
        <path d="M100 105 V101" /><circle cx="100" cy="98" r="3" strokeDasharray="1.5 1" />
        {/* Butterflies */}
        <path d="M24 30 Q20 24 16 30 Q20 36 24 30" />
        <path d="M24 30 Q28 24 32 30 Q28 36 24 30" />
        <path d="M96 22 Q92 16 88 22 Q92 28 96 22" />
        <path d="M96 22 Q100 16 104 22 Q100 28 96 22" />
        {/* Watering can */}
        <path d="M14 80 H26 L28 90 H12 Z" />
        <path d="M26 80 L32 74" />
        <path d="M32 74 L34 76" /><path d="M32 74 L30 72" /><path d="M32 74 L34 72" />
      </svg>
    ),
  },
  {
    title: "Build",
    desc: "Design and build your farmhouse at your own pace.",
    sketch: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-28 md:h-28" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        {/* House roof */}
        <path d="M15 55 L60 18 L105 55" />
        {/* House body */}
        <rect x="22" y="52" width="76" height="48" rx="2" />
        {/* Door */}
        <rect x="46" y="72" width="18" height="28" rx="2" />
        <circle cx="60" cy="88" r="2" />
        {/* Door arch */}
        <path d="M46 72 Q55 62 64 72" />
        {/* Windows */}
        <rect x="28" y="60" width="14" height="14" rx="1.5" />
        <path d="M35 60 V74" /><path d="M28 67 H42" />
        <rect x="72" y="60" width="14" height="14" rx="1.5" />
        <path d="M79 60 V74" /><path d="M72 67 H86" />
        {/* Chimney */}
        <rect x="78" y="28" width="10" height="22" />
        <path d="M83 28 Q80 20 83 14 Q86 8 83 4" strokeDasharray="3 2" />
        {/* Garden path */}
        <path d="M55 100 Q50 108 45 112" strokeDasharray="3 2" />
        <path d="M65 100 Q70 108 75 112" strokeDasharray="3 2" />
        {/* Trees beside house */}
        <path d="M12 100 V88" /><ellipse cx="12" cy="82" rx="7" ry="8" strokeDasharray="2 1.5" />
        <path d="M108 100 V88" /><ellipse cx="108" cy="82" rx="7" ry="8" strokeDasharray="2 1.5" />
        {/* Ground */}
        <path d="M8 100 H112" strokeDasharray="5 4" />
        {/* Birds */}
        <path d="M26 12 Q32 6 38 12" />
        <path d="M34 8 Q40 2 46 8" />
      </svg>
    ),
  },
  {
    title: "Belong",
    desc: "Be part of a like-minded community that values nature and simplicity.",
    sketch: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-28 md:h-28" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Big tree */}
        <path d="M60 105 V55" />
        <ellipse cx="60" cy="36" rx="28" ry="24" strokeDasharray="3 2" />
        <path d="M60 55 Q46 48 38 36" /><path d="M60 55 Q74 48 82 36" />
        {/* Swing on tree */}
        <path d="M48 48 V72" /><path d="M58 48 V72" />
        <path d="M46 72 H60" />
        {/* Bench left */}
        <path d="M14 88 H40" />
        <path d="M17 88 V96" /><path d="M37 88 V96" />
        <path d="M12 84 L16 88" /><path d="M42 84 L38 88" />
        {/* Bench right */}
        <path d="M80 88 H106" />
        <path d="M83 88 V96" /><path d="M103 88 V96" />
        <path d="M78 84 L82 88" /><path d="M108 84 L104 88" />
        {/* Birds */}
        <path d="M24 14 Q30 8 36 14" />
        <path d="M40 10 Q46 4 52 10" />
        <path d="M76 12 Q82 6 88 12" />
        {/* Ground */}
        <path d="M8 105 H112" strokeDasharray="5 4" />
        {/* Flowers */}
        <circle cx="16" cy="100" r="3" strokeDasharray="2 1" />
        <path d="M16 103 V105" />
        <circle cx="104" cy="99" r="3" strokeDasharray="2 1" />
        <path d="M104 102 V105" />
        <circle cx="30" cy="101" r="2.5" strokeDasharray="2 1" />
        <path d="M30 103 V105" />
        <circle cx="90" cy="101" r="2.5" strokeDasharray="2 1" />
        <path d="M90 103 V105" />
        {/* Lantern */}
        <path d="M60 105 V108" />
        <rect x="56" y="108" width="8" height="6" rx="1" />
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
            <div className="w-32 h-32 md:w-36 md:h-36 mx-auto mb-5 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
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
