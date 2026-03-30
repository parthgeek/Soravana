import { MapPin, Home, BedDouble, TreePine, Shield, Sprout } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "Well Within Reach",
    desc: "90 mins from Bangalore Airport • 60 mins from MG Road • 30 mins from Whitefield",
  },
  {
    icon: Home,
    title: "Designed. Built. Ready.",
    desc: "Curated farmhouses designed and constructed as per your needs and preferences.",
  },
  {
    icon: BedDouble,
    title: "Relax & Recharge",
    desc: "Curated cottages designed for peaceful weekend stays near the clubhouse.",
  },
  {
    icon: TreePine,
    title: "Green Corridors",
    desc: "Existing plantation within a fully operational and maintained farm project.",
  },
  {
    icon: Shield,
    title: "Top-Tier Care",
    desc: "Managed by professionals ensuring premium quality and meticulous attention to detail.",
  },
  {
    icon: Sprout,
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
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <a.icon className="w-5 h-5 text-primary" />
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
