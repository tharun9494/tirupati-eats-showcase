import { Clock, Flame, ShieldCheck, Star, Truck, MapPin } from "lucide-react";

const stats = [
  { value: "4900+", label: "Google Reviews", icon: Star },
  { value: "10+", label: "Years Serving", icon: Clock },
  { value: "₹200", label: "Starting Price", icon: Flame },
  { value: "100+", label: "Daily Families", icon: ShieldCheck },
];

const specialties = [
  {
    title: "Authentic South Indian Meals",
    desc: "Our signature unlimited meals feature sambar, rasam, kootu, poriyal, curd rice, and much more — all freshly prepared daily with traditional recipes.",
  },
  {
    title: "North Indian Thali",
    desc: "Rich curries, soft rotis, fragrant biryani, and flavorful dal — our North Indian menu brings the best of Punjab and Hyderabad to Tirupati.",
  },
  {
    title: "Non-Veg Specials",
    desc: "Juicy tandoori chicken, spicy mutton curry, crispy fried fish, and flavorful egg dishes — cooked with authentic spices and served fresh.",
  },
];

const HighlightsSection = () => (
  <section className="py-24 px-4 bg-muted relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/20 hover:shadow-sm transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-14">
        <span className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Why Choose Us
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
          What Makes Us Special
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {specialties.map((s, i) => (
          <div
            key={s.title}
            className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-maroon transition-all duration-500 hover:-translate-y-1 group"
          >
            <span className="block text-5xl font-heading font-black text-primary/10 mb-3 group-hover:text-primary/20 transition-colors">0{i + 1}</span>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="mt-16 bg-gradient-maroon rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-maroon">
        <div className="flex items-center gap-3 text-primary-foreground/80">
          <MapPin className="w-4 h-4 text-accent shrink-0" />
          <span className="text-sm">Chenji Plaza, KT Road, Tirupati</span>
        </div>
        <div className="flex items-center gap-3 text-primary-foreground/80">
          <Clock className="w-4 h-4 text-accent shrink-0" />
          <span className="text-sm">Open Daily until 11 PM</span>
        </div>
        <div className="flex items-center gap-3 text-primary-foreground/80">
          <Truck className="w-4 h-4 text-accent shrink-0" />
          <span className="text-sm">Dine-in &amp; Takeaway</span>
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
