import { Leaf } from "lucide-react";
import farmingImg from "@/assets/farming-sketch.jpg";

const points = [
  "Organic & natural farming practices",
  "Seasonal plantation opportunities",
  "Hands-on or assisted approach",
];

const FarmingSection = () => (
  <section id="farming" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden">
          <img
            src={farmingImg}
            alt="Community farming activity"
            className="w-full h-80 lg:h-[28rem] object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Reconnect With the Land</h2>
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Experience the joy of growing your own food.
            Participate in farming activities or choose managed farming support for a hassle-free experience.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <Leaf className="w-4 h-4 text-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FarmingSection;
