import { Utensils, Users, IndianRupee } from "lucide-react";

const highlights = [
  {
    icon: Utensils,
    title: "All You Can Eat",
    desc: "Always unlimited meals — eat to your heart's content",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Family Friendly",
    desc: "Comfortable seating and warm atmosphere for everyone",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: IndianRupee,
    title: "₹200–₹400",
    desc: "Premium dining experience at affordable prices",
    accent: "bg-maroon-light/10 text-maroon-light",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative overflow-hidden bg-background">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Our Story
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-6">
          About Us
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-8" />
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Manju Foods has been Tirupati's favorite family dining destination, offering unlimited
          all-you-can-eat meals in a comfortable and welcoming atmosphere. Located in the heart
          of Bhavani Nagar at Chenji Plaza, we serve authentic South Indian and North Indian
          meals for the whole family — starting at just ₹200.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {highlights.map((h) => {
          const Icon = h.icon;
          return (
            <div
              key={h.title}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-maroon transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${h.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
