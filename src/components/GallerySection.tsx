import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";

const images = [
  { src: gallery1, alt: "Restaurant celebration setup", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Manju Foods storefront", span: "" },
  { src: gallery3, alt: "Chicken starter dish", span: "" },
  { src: gallery4, alt: "Tandoori platter with salad", span: "" },
  { src: gallery5, alt: "Biryani with sides", span: "" },
  { src: gallery6, alt: "Restaurant interior seating", span: "md:col-span-2" },
  { src: gallery7, alt: "Cozy dining area", span: "" },
  { src: gallery8, alt: "Fried rice dish", span: "" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Visual Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-gradient-maroon mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground">A Glimpse of Our Restaurant</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} group relative rounded-2xl overflow-hidden cursor-pointer`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary-foreground text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-maroon-deep/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain animate-slide-up"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
