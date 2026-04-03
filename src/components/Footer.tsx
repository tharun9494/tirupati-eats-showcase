import { Heart } from "lucide-react";

const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Location"];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-14 px-4 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

    <div className="container mx-auto max-w-5xl text-center space-y-8">
      <div>
        <h3 className="font-heading text-xl font-bold">
          Manju Foods <span className="text-accent">Family Restaurant</span>
        </h3>
        <p className="text-primary-foreground/40 text-sm mt-2">All You Can Eat — Always</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-primary-foreground/40 text-sm hover:text-accent transition-colors duration-300"
          >
            {l}
          </a>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 space-y-2">
        <p className="text-primary-foreground/25 text-xs flex items-center justify-center gap-1">
          © 2025 Manju Foods Family Restaurant. Made with <Heart className="w-3 h-3 fill-primary text-primary" /> in Tirupati
        </p>
        <p className="text-primary-foreground/15 text-xs">
          Chenji Plaza, KT Road, Bhavani Nagar, Tirupati, AP 517501
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
