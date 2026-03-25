import farmhouseImg from "@/assets/farmhouse.jpg";

const points = [
  "Flexible design options",
  "Build at your convenience",
  "Eco-friendly design guidance available",
];

const BuildSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Build Your Space, Your Way</h2>
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Create a farmhouse that reflects your lifestyle.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2 rounded-lg overflow-hidden">
          <img
            src={farmhouseImg}
            alt="Modern eco-friendly farmhouse"
            className="w-full h-80 lg:h-[28rem] object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
      </div>
    </div>
  </section>
);

export default BuildSection;
