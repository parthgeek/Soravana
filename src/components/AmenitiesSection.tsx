import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import playgroundImg from "@/assets/amenity-playground.jpg";
import diningImg from "@/assets/amenity-dining.jpg";
import bonfireImg from "@/assets/amenity-bonfire.jpg";
import gardenImg from "@/assets/amenity-garden.jpg";
import clubhouseImg from "@/assets/amenity-clubhouse.jpg";
import retreatImg from "@/assets/amenity-retreat.jpg";

const amenities = [
  { img: playgroundImg, label: "Children's Play Area" },
  { img: diningImg, label: "Outdoor Dining" },
  { img: bonfireImg, label: "Camping & Bonfire" },
  { img: gardenImg, label: "Community Vegetable Garden" },
  { img: clubhouseImg, label: "Clubhouse & Events" },
  { img: retreatImg, label: "Yoga & Retreat Area" },
];

const AmenitiesSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
        Amenities That Elevate Your Lifestyle
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />
      <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto">
        <CarouselContent className="-ml-4">
          {amenities.map((a) => (
            <CarouselItem key={a.label} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={a.img}
                    alt={a.label}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={640}
                    height={512}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                    <p className="text-primary-foreground font-heading text-sm">{a.label}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-12" />
        <CarouselNext className="hidden sm:flex -right-12" />
      </Carousel>
    </div>
  </section>
);

export default AmenitiesSection;
