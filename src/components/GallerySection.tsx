import { motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

const images = [
  { src: "/assets/gallery-aerial.jpg", alt: "Aerial view of Soravana farmland" },
  { src: "/assets/hero-farmland.jpg", alt: "Lush green farmland at sunset" },
  { src: "/assets/farming.jpg", alt: "Farming activities" },
  { src: "/assets/community.jpg", alt: "Community gathering" },
  { src: "/assets/cottage.jpg", alt: "Stay cottages" },
  { src: "/assets/farmhouse.jpg", alt: "Modern farmhouse" },
  { src: "/assets/experience.jpg", alt: "Life at Soravana" },
  { src: "/assets/gallery-trail.jpg", alt: "Walking trails through nature" },
];

const GallerySection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <AnimateIn variant="fadeUp" className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-heading mb-4">Gallery</h2>
        <motion.div
          className="w-16 h-0.5 bg-accent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </AnimateIn>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`rounded-lg overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={640}
              height={512}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
