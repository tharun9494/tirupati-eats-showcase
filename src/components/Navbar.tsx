import { useState, useEffect } from "react";
import { Menu, X, Phone, Palette } from "lucide-react";

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
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Demo Banner — distinct blue-gray so it doesn't mix with restaurant maroon/gold */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-primary-foreground text-[10px] sm:text-xs font-medium text-center py-1.5 sm:py-2 px-4 sm:px-6 flex items-center justify-center gap-2">
          <Palette className="w-3.5 h-3.5 text-gold-light shrink-0 hidden sm:block" />
          <span className="opacity-80 leading-tight">
            <span className="hidden sm:inline">Demo Website — All data, prices &amp; photos taken from your Google Maps listing. Final version will use your own photos &amp; can be updated anytime.</span>
            <span className="sm:hidden">🎨 Demo Website — Final version will use your own photos.</span>
          </span>
          <button onClick={() => setShowBanner(false)} className="ml-1 text-primary-foreground/50 hover:text-primary-foreground shrink-0">
            <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      )}

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          showBanner ? "top-[38px]" : "top-0"
        } ${
          scrolled
            ? "bg-gradient-maroon shadow-maroon py-2"
            : "bg-maroon-deep/40 backdrop-blur-md py-3"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-gold">
              <span className="font-heading text-base font-black text-accent-foreground">M</span>
            </div>
            <div className="leading-tight">
              <span className="font-heading text-lg font-bold text-primary-foreground block">
                Manju Foods
              </span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <a
              href="tel:09949653899"
              className="ml-3 inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-bold hover:shadow-gold transition-all duration-300 hover:scale-105"
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
