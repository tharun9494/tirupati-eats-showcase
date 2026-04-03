import { UtensilsCrossed, Soup, Cookie, Coffee, Wheat, Salad } from "lucide-react";

const categories = [
  { name: "South Indian Meals", icon: UtensilsCrossed },
  { name: "North Indian Thali", icon: Salad },
  { name: "Starters & Snacks", icon: Soup },
  { name: "Rotis & Breads", icon: Wheat },
  { name: "Rice & Biryani", icon: UtensilsCrossed },
  { name: "Desserts & Sweets", icon: Cookie },
  { name: "Cool Drinks & Lassi", icon: Coffee },
];

const MenuSection = () => (
  <section id="menu" className="py-20 px-4 bg-muted/50">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
        Our Menu
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.name}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {c.name}
              </h3>
              <span className="text-xs font-medium bg-accent/15 text-accent px-3 py-1 rounded-full">
                Included in unlimited meal
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-muted-foreground text-sm mt-8">
        * All items are part of our All You Can Eat plan. Menu may vary by day.
      </p>
    </div>
  </section>
);

export default MenuSection;
