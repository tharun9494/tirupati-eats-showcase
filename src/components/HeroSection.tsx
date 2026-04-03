import { Phone, ChevronDown, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Delicious non-veg feast"
      className="absolute inset-0 w-full h-full object-cover scale-105"
      width={1920}
      height={1080}
    />
    {/* Deep dark overlay for contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-maroon-deep/70 to-foreground/95" />

    {/* Decorative accents */}
    <div className="absolute top-32 right-10 w-72 h-72 rounded-full bg-accent/8 blur-3xl" />
    <div className="absolute bottom-32 left-10 w-64 h-64 rounded-full bg-maroon-glow/10 blur-3xl animate-float" />

    {/* Subtle dot pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, hsl(0, 0%, 100%) 1px, transparent 0)`,
      backgroundSize: '32px 32px'
    }} />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 text-primary-foreground px-5 py-2 rounded-full mb-10">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">4900+ Google Reviews · Tirupati's Favorite</span>
      </div>

      {/* Restaurant Name — large, clean, white */}
      <h1 className="font-heading font-black leading-[1.05] mb-3">
        <span className="text-5xl sm:text-6xl md:text-8xl text-primary-foreground block">
          Manju Foods
        </span>
      </h1>

      {/* Family Restaurant — highlighted with warm accent box */}
      <div className="inline-block mb-8">
        <span className="relative inline-block bg-accent px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-gold">
          <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-accent-foreground tracking-wide">
            Family Restaurant
          </span>
        </span>
      </div>

      {/* Location tag */}
      <div className="flex items-center justify-center gap-1.5 text-primary-foreground/50 text-sm mb-6">
        <MapPin className="w-3.5 h-3.5" />
        <span>Chenji Plaza, KT Road, Tirupati</span>
      </div>

      {/* Tagline */}
      <p className="text-primary-foreground/60 text-base sm:text-lg font-body mb-10 max-w-md mx-auto leading-relaxed">
        Unlimited Meals · Unmatched Taste · Always All You Can Eat
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="#menu"
          className="bg-primary text-primary-foreground px-10 py-3.5 rounded-full font-bold text-sm sm:text-base hover:shadow-maroon hover:scale-105 transition-all duration-300"
        >
          Explore Our Menu
        </a>
        <a
          href="tel:09949653899"
          className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-10 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all duration-300"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </div>

      {/* Price tag */}
      <p className="text-primary-foreground/40 text-xs mt-8 tracking-wider uppercase">
        Starting from ₹200 per person
      </p>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/30 animate-bounce">
      <ChevronDown className="w-6 h-6" />
    </a>
  </section>
);

export default HeroSection;
