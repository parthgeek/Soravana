import { User, Landmark, Sprout, HardHat, Scale, Droplets } from "lucide-react";

const team = [
  { icon: Landmark, role: "Architect", desc: "Masterplans blending eco-luxury with long-term land value." },
  { icon: Scale, role: "Legal Advisor", desc: "Clear titles, verified documents, and complete compliance." },
  { icon: Sprout, role: "Agronomist", desc: "Expert guidance on orchards, organic gardens & soil health." },
  { icon: HardHat, role: "Site Manager", desc: "Daily operations, infrastructure, and quality oversight." },
  { icon: Droplets, role: "Sustainability Lead", desc: "Rainwater harvesting, greywater systems & green design." },
  { icon: User, role: "Community Manager", desc: "Events, workshops, and a vibrant owner community." },
];

const TeamSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent font-body text-sm tracking-widest uppercase mb-3 block">
          Expert Team
        </span>
        <h2 className="text-3xl md:text-5xl font-heading mb-4">
          Land That Comes With a Full-Spectrum Team
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From legal to agronomy — every aspect of your farmland is managed by dedicated professionals.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((t) => (
          <div
            key={t.role}
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all group text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <t.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg mb-2">{t.role}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
