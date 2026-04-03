import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";

const images = [
  { src: gallery1, alt: "Restaurant celebration setup" },
  { src: gallery2, alt: "Manju Foods storefront" },
  { src: gallery3, alt: "Chicken starter dish" },
  { src: gallery4, alt: "Tandoori platter with salad" },
  { src: gallery5, alt: "Biryani with sides" },
  { src: gallery6, alt: "Restaurant interior seating" },
  { src: gallery7, alt: "Cozy dining area" },
  { src: gallery8, alt: "Fried rice dish" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Gallery
      </h2>
      <p className="text-muted-foreground mb-10">A Glimpse of Our Restaurant</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
