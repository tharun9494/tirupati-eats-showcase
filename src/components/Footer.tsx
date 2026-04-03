import { Heart } from "lucide-react";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Location"];

const Footer = () => (
  <footer className="bg-maroon-deep text-primary-foreground py-14 px-4 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-maroon-deep/50 to-transparent" />

    <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
      <div>
        <h3 className="font-heading text-2xl font-bold">
          Manju Foods <span className="text-accent">Family Restaurant</span>
        </h3>
        <p className="text-primary-foreground/50 text-sm mt-2 italic">All You Can Eat — Always</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-primary-foreground/50 text-sm hover:text-accent transition-colors duration-300"
          >
            {l}
          </a>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 space-y-2">
        <p className="text-primary-foreground/30 text-xs flex items-center justify-center gap-1">
          © 2025 Manju Foods Family Restaurant. Made with <Heart className="w-3 h-3 fill-maroon-glow text-maroon-glow" /> in Tirupati
        </p>
        <p className="text-primary-foreground/20 text-xs">
          Chenji Plaza, KT Road, Bhavani Nagar, Tirupati, AP 517501
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
