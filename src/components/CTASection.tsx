import { Phone, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section className="py-24 px-4 bg-primary relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary-foreground/[0.06]" />

    <div className="container mx-auto max-w-2xl text-center relative z-10">
      <ScrollReveal>
        <Sparkles className="w-8 h-8 text-accent mx-auto mb-6 animate-float" />
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Dine With Us?
        </h2>
        <p className="text-primary-foreground/60 text-base sm:text-lg mb-10 max-w-md mx-auto">
          Walk in anytime before 11 PM. No reservations needed.
        </p>
        <a
          href="tel:09949653899"
          className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground px-10 py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-gold hover:scale-105 transition-all duration-300"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <p className="text-primary-foreground/40 text-sm mt-6 tracking-wide">📞 099496 53899</p>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
