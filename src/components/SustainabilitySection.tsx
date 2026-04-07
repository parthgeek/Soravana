import { Globe, Heart, Scale } from "lucide-react";

const principles = [
  {
    icon: Globe,
    title: "Earth Care",
    desc: "Ensuring all living systems can continue and multiply through regenerative farming practices.",
  },
  {
    icon: Heart,
    title: "People Care",
    desc: "Ensuring people have access to the resources necessary for a fulfilling and healthy existence.",
  },
  {
    icon: Scale,
    title: "Fair Share",
    desc: "Governing our own needs and setting limits to consumption for a balanced ecosystem.",
  },
];

const SustainabilitySection = () => (
  <section className="py-24 bg-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-heading text-foreground mb-4 max-w-2xl mx-auto leading-snug">
        By Applying the Principles of Conventional Farming, We Create a More
        Sustainable Future
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {principles.map((p, i) => (
          <div key={p.title} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <p.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading text-lg text-primary-foreground mb-2">
              {p.title}
            </h3>
            {i < principles.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 w-px h-12 bg-primary-foreground/20 -translate-y-1/2" />
            )}
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SustainabilitySection;
