import { Sprout, Home, Leaf, Users } from "lucide-react";

const items = [
  { icon: Sprout, title: "Own", desc: "Individually owned 5,000 sq. ft. farmland plots with clear titles." },
  { icon: Home, title: "Build", desc: "Design and build your farmhouse at your own pace." },
  { icon: Leaf, title: "Farm", desc: "Grow your own food or opt for managed farming support." },
  { icon: Users, title: "Belong", desc: "Be part of a like-minded community that values nature and simplicity." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">More Than Land. A Way of Living.</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-7 h-7 text-primary" />
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
