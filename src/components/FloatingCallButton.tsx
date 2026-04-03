import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:09949653899"
    className="fixed bottom-6 right-6 z-50 md:hidden bg-gradient-to-r from-primary to-maroon-glow text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-maroon hover:scale-110 transition-all duration-300"
    aria-label="Call Manju Foods"
  >
    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
    <Phone className="w-6 h-6 relative z-10" />
  </a>
);

export default FloatingCallButton;
