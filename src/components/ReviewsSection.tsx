import { Star } from "lucide-react";

const reviews = [
  { text: "Great food and unlimited servings. Best value in Tirupati!", name: "Ramesh K.", stars: 5 },
  { text: "Family loved the meals. Clean place, friendly staff.", name: "Priya S.", stars: 5 },
  { text: "Tasty South Indian food at very reasonable prices.", name: "Venkat R.", stars: 4 },
];

const platforms = [
  { name: "Zomato", rating: "3.6★" },
  { name: "Swiggy", rating: "3.9★" },
  { name: "Google", rating: "3.4★ (4942 reviews)" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 px-4 bg-muted/50">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
        What Our Customers Say
      </h2>
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-card rounded-xl p-6 shadow-sm border border-border text-left"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              {Array.from({ length: 5 - r.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-border" />
              ))}
            </div>
            <p className="text-foreground text-sm mb-4">"{r.text}"</p>
            <p className="text-muted-foreground text-xs font-semibold">— {r.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((p) => (
          <span
            key={p.name}
            className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground"
          >
            {p.name} {p.rating}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
