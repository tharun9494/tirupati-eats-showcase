const highlights = [
  { icon: "🍛", title: "All You Can Eat", desc: "Always unlimited meals" },
  { icon: "👨‍👩‍👧", title: "Family Friendly", desc: "Comfortable seating for all" },
  { icon: "💰", title: "₹200–₹400", desc: "Affordable for everyone" },
];

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
        About Us
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
        Manju Foods has been Tirupati's favorite family dining destination, offering unlimited
        all-you-can-eat meals in a comfortable and welcoming atmosphere. Located in the heart
        of Bhavani Nagar at Chenji Plaza, we serve authentic South Indian and North Indian
        meals for the whole family — starting at just ₹200.
      </p>
      <div className="grid sm:grid-cols-3 gap-6">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <span className="text-4xl mb-4 block">{h.icon}</span>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {h.title}
            </h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
