import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const amenities = [
  { img: "/assets/amenity-playground.jpg", label: "Children's Play Area" },
  { img: "/assets/amenity-dining.jpg", label: "Outdoor Dining" },
  { img: "/assets/amenity-garden.jpg", label: "Community Vegetable Garden" },
  { img: "/assets/amenity-clubhouse.jpg", label: "Nature Lounge & Events" },
];

const AmenitiesSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-heading mb-2">
          Amenities That Elevate Your Lifestyle
        </h2>
        <p className="font-heading italic text-lg md:text-xl text-muted-foreground mb-4">
          Soravana is not a place you visit — it's a life you return to.
        </p>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </AnimateIn>
      <AnimateIn variant="fadeUp" delay={0.2}>
        <Carousel opts={{ align: "start", loop: true }} className="max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {amenities.map((a) => (
              <CarouselItem key={a.label} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="rounded-lg overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </AnimateIn>
    </div>
  </section>
);

export default AmenitiesSection;
