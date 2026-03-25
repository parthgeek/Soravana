import cottageImg from "@/assets/cottage.jpg";

const points = [
  "Book in-house cottages",
  "Perfect for weekend getaways",
  "Stay even if your farmhouse isn't built yet",
];

const StaySection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden">
          <img
            src={cottageImg}
            alt="Cozy cottage at Soravana"
            className="w-full h-80 lg:h-[28rem] object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Stay Anytime, Even Before You Build</h2>
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Enjoy the Soravana experience from day one.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default StaySection;
