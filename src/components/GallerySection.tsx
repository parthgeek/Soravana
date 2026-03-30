import heroImg from "@/assets/hero-farmland.jpg";
import farmingImg from "@/assets/farming.jpg";
import communityImg from "@/assets/community.jpg";
import cottageImg from "@/assets/cottage.jpg";
import farmhouseImg from "@/assets/farmhouse.jpg";
import experienceImg from "@/assets/experience.jpg";
import aerialImg from "@/assets/gallery-aerial.jpg";
import trailImg from "@/assets/gallery-trail.jpg";

const images = [
  { src: aerialImg, alt: "Aerial view of Soravana farmland" },
  { src: heroImg, alt: "Lush green farmland at sunset" },
  { src: farmingImg, alt: "Farming activities" },
  { src: communityImg, alt: "Community gathering" },
  { src: cottageImg, alt: "Stay cottages" },
  { src: farmhouseImg, alt: "Modern farmhouse" },
  { src: experienceImg, alt: "Life at Soravana" },
  { src: trailImg, alt: "Walking trails through nature" },
];

const GallerySection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">Gallery</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`rounded-lg overflow-hidden ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={640}
              height={512}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
