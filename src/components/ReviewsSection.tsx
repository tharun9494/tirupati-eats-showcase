import { Star, Quote } from "lucide-react";

const reviews = [
  { text: "Great food and unlimited servings. Best value in Tirupati!", name: "Ramesh K.", stars: 5 },
  { text: "Family loved the meals. Clean place, friendly staff.", name: "Priya S.", stars: 5 },
  { text: "Tasty South Indian food at very reasonable prices.", name: "Venkat R.", stars: 4 },
];

const platforms = [
  { name: "Zomato", rating: "3.6", color: "bg-maroon-rich" },
  { name: "Swiggy", rating: "3.9", color: "bg-accent" },
  { name: "Google", rating: "3.4", extra: "4942 reviews", color: "bg-maroon-light" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 px-4 bg-gradient-warm relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="text-center mb-14">
        <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Testimonials
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-gradient-maroon mb-4">
          What Our Customers Say
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-14">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-maroon transition-all duration-500 hover:-translate-y-2"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              {Array.from({ length: 5 - r.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-border" />
              ))}
            </div>
            <p className="text-foreground text-base leading-relaxed mb-6 italic">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-maroon-glow flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">{r.name[0]}</span>
              </div>
              <span className="text-foreground text-sm font-semibold">{r.name}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 ${p.color} rounded-xl flex items-center justify-center`}>
              <Star className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-foreground text-sm font-bold">{p.name}</p>
              <p className="text-accent text-lg font-bold leading-none">
                {p.rating}★
                {p.extra && <span className="text-muted-foreground text-xs font-normal ml-1">({p.extra})</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
