const links = ["Home", "About", "Menu", "Gallery", "Reviews", "Location"];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12 px-4">
    <div className="container mx-auto max-w-5xl text-center space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold">Manju Foods Family Restaurant</h3>
        <p className="text-primary-foreground/60 text-sm mt-1">All You Can Eat — Always</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 space-y-1">
        <p className="text-primary-foreground/40 text-xs">
          © 2025 Manju Foods Family Restaurant. All rights reserved.
        </p>
        <p className="text-primary-foreground/30 text-xs">
          Chenji Plaza, KT Road, Bhavani Nagar, Tirupati, AP 517501
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
