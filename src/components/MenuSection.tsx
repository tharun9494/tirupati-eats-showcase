import { UtensilsCrossed, Soup, Cookie, Coffee, Wheat, Salad, Flame } from "lucide-react";

const categories = [
  { name: "South Indian Meals", icon: UtensilsCrossed },
  { name: "North Indian Thali", icon: Salad },
  { name: "Starters & Snacks", icon: Soup },
  { name: "Rotis & Breads", icon: Wheat },
  { name: "Rice & Biryani", icon: Flame },
  { name: "Desserts & Sweets", icon: Cookie },
  { name: "Cool Drinks & Lassi", icon: Coffee },
];

const MenuSection = () => (
  <section id="menu" className="py-24 px-4 bg-foreground relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
    {/* Subtle large circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-foreground/[0.03]" />

    <div className="container mx-auto max-w-5xl text-center relative z-10">
      <span className="inline-block text-accent text-xs font-bold tracking-[0.25em] uppercase mb-3">
        What We Serve
      </span>
      <h2 className="font-heading text-3xl sm:text-5xl font-bold text-primary-foreground mb-4">
        Our Menu
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto rounded-full mb-14" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.name}
              className="group bg-primary-foreground/[0.05] border border-primary-foreground/[0.08] rounded-2xl p-7 hover:bg-primary-foreground/[0.08] hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/[0.08] flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-base font-semibold text-primary-foreground mb-3">
                {c.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent/80 bg-accent/10 px-3 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-accent" />
                Unlimited
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-primary-foreground/30 text-sm mt-10 italic">
        * All items are part of our All You Can Eat plan. Menu may vary by day.
      </p>
    </div>
  </section>
);

export default MenuSection;
