import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-accent text-accent-foreground text-xs sm:text-sm font-medium text-center py-2 px-4">
        🎨 Demo Website — All data, prices &amp; photos taken from your Google Maps listing. Final version will use your own photos and can be updated anytime.
      </div>

      <nav
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-maroon shadow-maroon py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-heading text-lg font-bold text-accent-foreground">M</span>
            </div>
            <span className="font-heading text-xl font-bold text-primary-foreground">
              Manju Foods
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <a
              href="tel:09949653899"
              className="ml-4 inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden glass-dark mx-4 mt-2 rounded-2xl px-6 pb-6 pt-4 space-y-2 animate-slide-up">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-primary-foreground/80 hover:text-accent py-2 border-b border-primary-foreground/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:09949653899"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold mt-3"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
