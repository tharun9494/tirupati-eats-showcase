import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Delicious South Indian thali"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide">
        ⭐ 4900+ Google Reviews
      </span>
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
        Manju Foods Family Restaurant
      </h1>
      <p className="text-primary-foreground/80 text-lg sm:text-xl font-body mb-8 max-w-xl mx-auto">
        Unlimited Meals. Unmatched Taste. Always All You Can Eat.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#menu"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
        >
          View Menu
        </a>
        <a
          href="tel:09949653899"
          className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-base hover:bg-primary-foreground/20 transition-colors"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
