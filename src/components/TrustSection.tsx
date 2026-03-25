import { ShieldCheck, FileText, User, HeadphonesIcon } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Clear land titles" },
  { icon: FileText, label: "Verified documentation" },
  { icon: User, label: "Individual ownership" },
  { icon: HeadphonesIcon, label: "End-to-end support" },
];

const TrustSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-heading mb-4">Transparency You Can Trust</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
      <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
        We believe in complete clarity and security.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
