import { Button } from "@/components/ui/button";
import AnimateIn, { StaggerChild, StaggerParent } from "@/components/AnimateIn";
import { Download, Map } from "lucide-react";
const aerialImg = "/assets/gallery-aerial.jpg";

const BrochureSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <StaggerParent>
          <StaggerChild>
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Project Brochure & Master Plan
            </h2>
          </StaggerChild>
          <StaggerChild>
            <div className="w-12 h-0.5 bg-accent mb-6" />
          </StaggerChild>
          <StaggerChild>
            <p className="text-muted-foreground leading-relaxed mb-8">
              View and select your plot from the comfort of your home. Explore
              plot facing, views, sizes and more in our detailed master plan.
            </p>
          </StaggerChild>
          <StaggerChild className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              <Download className="w-4 h-4" />
              Download Brochure
            </Button>
            <Button variant="hero-outline" size="lg">
              <Map className="w-4 h-4" />
              View Master Plan
            </Button>
          </StaggerChild>
        </StaggerParent>
        <AnimateIn variant="fadeLeft" duration={0.75} className="rounded-lg overflow-hidden shadow-md">
          <img
            src={aerialImg}
            alt="Soravana master plan aerial view"
            className="w-full h-72 lg:h-80 object-cover"
            loading="lazy"
            width={640}
            height={512}
          />
        </AnimateIn>
      </div>
    </div>
  </section>
);

export default BrochureSection;
