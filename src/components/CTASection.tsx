import { Phone, Sparkles } from "lucide-react";

const CTASection = () => (
  <section className="py-24 px-4 bg-gradient-maroon-radial relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/5 rounded-full animate-pulse-soft" />
    <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/5 rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-maroon-glow/10 blur-3xl" />

    <div className="container mx-auto max-w-2xl text-center relative z-10">
      <Sparkles className="w-10 h-10 text-accent mx-auto mb-6 animate-float" />
      <h2 className="font-heading text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
        Ready to Dine With Us?
      </h2>
      <p className="text-primary-foreground/70 text-lg mb-10 max-w-md mx-auto">
        Walk in anytime before 11 PM. No reservations needed.
      </p>
      <a
        href="tel:09949653899"
        className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold text-lg hover:shadow-gold hover:scale-105 transition-all duration-300"
      >
        <Phone className="w-5 h-5" /> Call Now
      </a>
      <p className="text-primary-foreground/50 text-sm mt-6 tracking-wide">📞 099496 53899</p>
    </div>
  </section>
);

export default CTASection;
