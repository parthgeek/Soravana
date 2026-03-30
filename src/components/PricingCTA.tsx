import { Button } from "@/components/ui/button";
import { Ruler, IndianRupee } from "lucide-react";

const plots = [
  { size: "5,000 sq. ft.", label: "Standard Plot" },
  { size: "10,000 sq. ft.", label: "Premium Plot" },
  { size: "Half Acre", label: "Estate Plot" },
];

const PricingCTA = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          Limited Plots Available
        </h2>
        <p className="text-muted-foreground mb-8">
          Own your farmland in a premium community setting.
        </p>

        {/* Plot sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          {plots.map((p) => (
            <div
              key={p.label}
              className="bg-background rounded-lg p-4 border border-border"
            >
              <Ruler className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="font-heading text-lg">{p.size}</p>
              <p className="text-muted-foreground text-xs">{p.label}</p>
            </div>
          ))}
        </div>

        {/* Starting price */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <IndianRupee className="w-5 h-5 text-accent" />
          <span className="text-2xl md:text-3xl font-heading">
            Starting at ₹XX Lakhs*
          </span>
        </div>
        <p className="text-muted-foreground text-xs mb-8">
          *Price varies based on plot size and location within the community
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Book Site Visit
          </Button>
          <Button variant="hero-outline" size="lg">
            Talk to Advisor
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingCTA;
