import experienceImg from "@/assets/experience.jpg";

const ExperienceSection = () => (
  <section id="experience" className="relative py-32 overflow-hidden">
    <img
      src={experienceImg}
      alt="Morning walk through green fields"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      width={1920}
      height={720}
    />
    <div className="absolute inset-0 bg-foreground/60" />
    <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-heading text-primary-foreground mb-8">A Life You Can Step Into</h2>
      <p className="text-primary-foreground/85 font-body text-base md:text-lg leading-relaxed mb-4">
        Wake up to fresh air.<br />
        Spend your mornings in nature.<br />
        Unwind with your family by the evening fire.
      </p>
      <p className="text-primary-foreground/70 font-body italic text-sm md:text-base">
        Soravana is not a place you visit — it's a life you return to.
      </p>
    </div>
  </section>
);

export default ExperienceSection;
