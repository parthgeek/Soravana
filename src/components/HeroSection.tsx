import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-farmland.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Aerial view of Soravana farmland at sunset"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-foreground/55" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight text-primary-foreground mb-6">
        Soravana Farmland
      </h1>
      <p className="font-heading italic text-lg md:text-2xl text-primary-foreground/90 mb-4">
        Where Land Becomes Life
      </p>
      <p className="text-sm md:text-base text-primary-foreground/75 font-body max-w-xl mx-auto mb-10 leading-relaxed">
        Own a 5,000 sq. ft. farmland in a thoughtfully planned 11-acre community near Bangalore.
        Build your home, grow your food, and experience nature — your way.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg">Book Site Visit</Button>
        <Button variant="hero-outline" size="lg">Download Brochure</Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
