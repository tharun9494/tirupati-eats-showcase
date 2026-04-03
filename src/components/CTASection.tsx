import { Phone } from "lucide-react";

const CTASection = () => (
  <section className="py-20 px-4 bg-primary">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
        Ready to Dine With Us?
      </h2>
      <p className="text-primary-foreground/80 mb-8">
        Walk in anytime before 11 PM. No reservations needed.
      </p>
      <a
        href="tel:09949653899"
        className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
      >
        <Phone className="w-5 h-5" /> Call Now
      </a>
      <p className="text-primary-foreground/70 text-sm mt-4">📞 099496 53899</p>
    </div>
  </section>
);

export default CTASection;
