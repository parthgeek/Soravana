import { Button } from "@/components/ui/button";

const PricingCTA = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-10 md:p-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Limited Plots Available</h2>
        <p className="text-muted-foreground mb-8">
          Own your 5,000 sq. ft. farmland in a premium community setting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">Book Site Visit</Button>
          <Button variant="hero-outline" size="lg">Talk to Advisor</Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingCTA;
