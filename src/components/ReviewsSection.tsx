import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { text: "Great food and unlimited servings. Best value in Tirupati!", name: "Ramesh K.", stars: 5 },
  { text: "Family loved the meals. Clean place, friendly staff.", name: "Priya S.", stars: 5 },
  { text: "Tasty South Indian food at very reasonable prices.", name: "Venkat R.", stars: 4 },
];

const platforms = [
  { name: "Zomato", rating: "3.6" },
  { name: "Swiggy", rating: "3.9" },
  { name: "Google", rating: "3.4", extra: "4942 reviews" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 px-4 bg-muted relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <ScrollReveal className="text-center mb-14">
        <span className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Testimonials
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
          What Our Customers Say
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto rounded-full" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-5 mb-14">
        {reviews.map((r, i) => (
          <ScrollReveal key={r.name} delay={i * 0.15}>
            <div className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-maroon transition-all duration-500 hover:-translate-y-1 h-full">
              <Quote className="w-7 h-7 text-primary/15 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                {Array.from({ length: 5 - r.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-border" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">{r.name[0]}</span>
                </div>
                <span className="text-foreground text-sm font-semibold">{r.name}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap justify-center gap-3">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 bg-card border border-border rounded-full px-5 py-2.5"
            >
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-foreground text-sm font-bold">{p.name}</span>
              <span className="text-accent font-bold text-sm">{p.rating}★</span>
              {p.extra && <span className="text-muted-foreground text-xs">({p.extra})</span>}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ReviewsSection;
