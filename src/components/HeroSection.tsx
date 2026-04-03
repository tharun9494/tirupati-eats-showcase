import { Phone, ChevronDown } from "lucide-react";
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
    {/* Maroon gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/80 via-maroon-rich/60 to-maroon-deep/90" />

    {/* Decorative circles */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-soft" />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-maroon-glow/15 blur-3xl animate-float" />

    {/* Decorative pattern overlay */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, hsl(38, 75%, 50%) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent px-5 py-2 rounded-full mb-8 animate-float">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
        <span className="text-sm font-semibold tracking-wide">4900+ Google Reviews</span>
      </div>

      <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground leading-[1.1] mb-6">
        Manju Foods
        <span className="block mt-3">
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-accent via-gold-light to-accent bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold italic animate-shimmer" style={{ backgroundSize: '200% auto' }}>
              Family Restaurant
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </span>
        </span>
      </h1>

      <p className="text-primary-foreground/70 text-lg sm:text-xl font-body mb-10 max-w-lg mx-auto leading-relaxed">
        Unlimited Meals. Unmatched Taste.
        <span className="block text-accent font-semibold mt-1">Always All You Can Eat.</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#menu"
          className="group relative bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-gold hover:scale-105"
        >
          <span className="relative z-10">Explore Menu</span>
        </a>
        <a
          href="tel:09949653899"
          className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-10 py-4 rounded-full font-bold text-base hover:bg-primary-foreground/10 hover:border-accent transition-all duration-300"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/50 animate-bounce">
      <ChevronDown className="w-6 h-6" />
    </a>
  </section>
);

export default HeroSection;
