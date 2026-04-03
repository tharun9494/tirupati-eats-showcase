import { Camera } from "lucide-react";

const GallerySection = () => (
  <section id="gallery" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Gallery
      </h2>
      <p className="text-muted-foreground mb-10">A Glimpse of Our Restaurant</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-muted rounded-xl flex flex-col items-center justify-center gap-2 border border-border"
          >
            <Camera className="w-8 h-8 text-muted-foreground/50" />
            <span className="text-xs text-muted-foreground">Food Photo {i + 1}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm mt-8">
        📸 Photos will be added soon — visit us at Chenji Plaza, Tirupati!
      </p>
    </div>
  </section>
);

export default GallerySection;
