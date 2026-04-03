import { UtensilsCrossed, Soup, Cookie, Coffee, Wheat, Salad, Flame } from "lucide-react";

const categories = [
  { name: "South Indian Meals", icon: UtensilsCrossed, color: "text-maroon-rich" },
  { name: "North Indian Thali", icon: Salad, color: "text-accent" },
  { name: "Starters & Snacks", icon: Soup, color: "text-maroon-glow" },
  { name: "Rotis & Breads", icon: Wheat, color: "text-gold-warm" },
  { name: "Rice & Biryani", icon: Flame, color: "text-maroon-light" },
  { name: "Desserts & Sweets", icon: Cookie, color: "text-accent" },
  { name: "Cool Drinks & Lassi", icon: Coffee, color: "text-maroon-rich" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 px-4 bg-gradient-maroon relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/5 rounded-full" />
    <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground/5 rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-maroon-glow/10 blur-3xl" />

    <div className="container mx-auto max-w-5xl text-center relative z-10">
      <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
        What We Serve
      </span>
      <h2 className="font-heading text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
        Our Menu
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold-light mx-auto rounded-full mb-14" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={c.name}
              className="group glass-dark rounded-2xl p-7 hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Icon className={`w-7 h-7 text-accent group-hover:text-gold-light transition-colors`} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-3">
                {c.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-accent/20 text-accent px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Unlimited
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-primary-foreground/50 text-sm mt-10 italic">
        * All items are part of our All You Can Eat plan. Menu may vary by day.
      </p>
    </div>
  </section>
);

export default MenuSection;
