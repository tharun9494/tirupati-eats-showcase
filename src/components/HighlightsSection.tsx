import { Clock, MapPin, Flame, ShieldCheck, Star, Truck } from "lucide-react";

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
  <section className="py-24 px-4 bg-gradient-warm relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-gradient-maroon">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-14">
        <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Why Manju Foods
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-gradient-maroon mb-4">
          What Makes Us Special
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {specialties.map((s, i) => (
          <div
            key={s.title}
            className="relative bg-card rounded-2xl p-8 border border-border hover:shadow-maroon transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="inline-block text-4xl font-heading font-black text-primary/10 mb-4">0{i + 1}</span>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Quick Info Bar */}
      <div className="mt-16 bg-gradient-maroon rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-primary-foreground">
          <MapPin className="w-5 h-5 text-accent shrink-0" />
          <span className="text-sm">Chenji Plaza, KT Road, Tirupati</span>
        </div>
        <div className="flex items-center gap-3 text-primary-foreground">
          <Clock className="w-5 h-5 text-accent shrink-0" />
          <span className="text-sm">Open Daily until 11 PM</span>
        </div>
        <div className="flex items-center gap-3 text-primary-foreground">
          <Truck className="w-5 h-5 text-accent shrink-0" />
          <span className="text-sm">Dine-in & Takeaway Available</span>
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
