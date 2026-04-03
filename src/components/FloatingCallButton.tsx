import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:09949653899"
    className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
    aria-label="Call Manju Foods"
  >
    <Phone className="w-6 h-6" />
  </a>
);

export default FloatingCallButton;
