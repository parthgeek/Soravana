import { MapPin, Ruler, Shield, TreePine, Building, Home } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Total Land Area", value: "11 Acres" },
  { icon: Ruler, label: "Plot Size", value: "5,000 sq. ft. onwards" },
  { icon: Shield, label: "Layout", value: "Gated Community" },
  { icon: TreePine, label: "Green Spaces", value: "Internal Roads & Parks" },
  { icon: Building, label: "Community Hall", value: "Shared Gathering Space" },
  { icon: Home, label: "Stay Cottages", value: "Weekend Retreat Ready" },
];

const OverviewSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">Project Highlights</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div key={h.label} className="bg-background rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <h.icon className="w-5 h-5 text-primary" />
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
