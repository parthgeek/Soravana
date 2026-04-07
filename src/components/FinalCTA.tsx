import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => (
  <section id="contact" className="py-24 bg-primary/5">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
        Experience Soravana Before You Own It
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-10">
        Visit the site, feel the space, and discover a better way of living.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg">Book Site Visit</Button>
        <Button variant="hero-outline" size="lg" className="border-accent text-foreground">
          <Phone className="w-4 h-4" />
          Call Now
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCTA;
