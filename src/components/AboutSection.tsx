import { Utensils, Users, IndianRupee } from "lucide-react";

const highlights = [
  {
    icon: Utensils,
    title: "All You Can Eat",
    desc: "Always unlimited meals — eat to your heart's content",
    gradient: "from-maroon-rich to-maroon-glow",
  },
  {
    icon: Users,
    title: "Family Friendly",
    desc: "Comfortable seating and warm atmosphere for everyone",
    gradient: "from-accent to-gold-light",
  },
  {
    icon: IndianRupee,
    title: "₹200–₹400",
    desc: "Premium dining experience at affordable prices",
    gradient: "from-maroon-light to-accent",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-maroon-rich/5 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Our Story
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-gradient-maroon mb-6">
          About Us
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Manju Foods has been Tirupati's favorite family dining destination, offering unlimited
          all-you-can-eat meals in a comfortable and welcoming atmosphere. Located in the heart
          of Bhavani Nagar at Chenji Plaza, we serve authentic South Indian and North Indian
          meals for the whole family — starting at just ₹200.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <div
              key={h.title}
              className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-maroon transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover gradient reveal */}
              <div className={`absolute inset-0 bg-gradient-to-br ${h.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:bg-primary-foreground/20 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary-foreground transition-colors duration-500">
                  {h.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-500">
                  {h.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
