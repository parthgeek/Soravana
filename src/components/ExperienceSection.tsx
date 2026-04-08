import sketchImg from "@/assets/sketch-tree.jpg";

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-heading mb-6">A Life You Can Step Into</h2>
          <div className="w-16 h-0.5 bg-accent mb-8 mx-auto md:mx-0" />
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
            Wake up to fresh air.<br />
            Spend your mornings in nature.<br />
            Unwind with your family by the evening fire.
          </p>
          <p className="text-muted-foreground/70 font-body italic text-sm md:text-base">
            A life rooted in nature, designed for you.
          </p>
        </div>

        {/* Right: Sketch illustration */}
        <div className="flex justify-center">
          <img
            src={sketchImg}
            alt="Sketch of a tree and bench in nature"
            className="w-full max-w-md opacity-80"
            loading="lazy"
            width={800}
            height={640}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
