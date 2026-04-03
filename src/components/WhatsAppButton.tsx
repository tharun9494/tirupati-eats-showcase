import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919949653899?text=Hi%20Manju%20Foods!%20I'd%20like%20to%20know%20more."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 right-6 z-50 md:bottom-6 md:right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
    style={{ background: '#25D366' }}
    aria-label="Chat on WhatsApp"
  >
    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#25D366' }} />
    <MessageCircle className="w-6 h-6 text-primary-foreground relative z-10" />
  </a>
);

export default WhatsAppButton;
