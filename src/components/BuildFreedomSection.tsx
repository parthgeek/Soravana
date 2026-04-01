import { Home, Paintbrush, Ruler, Clock, TreePine, Hammer } from "lucide-react";

const freedoms = [
  { icon: Home, title: "Your Design, Your Rules", desc: "No cookie-cutter layouts. Build the home you've always imagined." },
  { icon: Paintbrush, title: "Any Architecture Style", desc: "Modern, rustic, traditional, or minimalist — it's entirely your call." },
  { icon: Ruler, title: "No Size Restrictions", desc: "Build a cozy cottage or a sprawling estate — your plot, your choice." },
  { icon: Clock, title: "Build on Your Timeline", desc: "No pressure to start immediately. Construct when you're ready." },
  { icon: TreePine, title: "Landscape Freely", desc: "Design your gardens, pathways, and outdoor spaces however you wish." },
  { icon: Hammer, title: "Choose Your Builder", desc: "Hire any contractor or use our recommended partners — no lock-ins." },
];

const BuildFreedomSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-widest uppercase mb-3 block">
          Total Creative Freedom
        </span>
        <h2 className="text-3xl md:text-5xl font-heading mb-4">
          Your Land. Your Vision. Zero Restrictions.
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Unlike gated communities with rigid guidelines, Soravana gives you <strong className="text-foreground">complete freedom</strong> to
          design and build your dream home — no architectural committees, no mandatory templates, no compromises.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {freedoms.map((f) => (
          <div
            key={f.title}
            className="relative bg-card rounded-xl p-8 border border-border hover:border-accent/40 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <f.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-lg font-heading text-foreground">
          "It's not just farmland — it's a blank canvas for the life you want to build."
        </p>
      </div>
    </div>
  </section>
);

export default BuildFreedomSection;
