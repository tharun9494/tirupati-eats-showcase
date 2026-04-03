import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="py-24 px-4 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="text-center mb-14">
        <span className="inline-block text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
          Visit Us
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Find Us
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-8 border border-border space-y-6 hover:shadow-sm transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground text-sm leading-relaxed pt-2">
              Ground Floor, Chenji Plaza, KT Road, Opposite SBI, Bhavani Nagar,
              Tirupati – 517501
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <a href="tel:09949653899" className="text-foreground text-sm hover:text-primary transition-colors font-medium">
              099496 53899
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground text-sm font-medium">Open daily until 11 PM</p>
          </div>
          <a
            href="https://www.google.com/maps?q=Manju+Foods+Family+Restaurant+Tirupati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-bold hover:shadow-maroon hover:scale-105 transition-all duration-300 mt-2"
          >
            <Navigation className="w-4 h-4" /> Get Directions
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border h-72 md:h-auto">
          <iframe
            title="Manju Foods Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.6!2d79.4195!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sManju+Foods+Family+Restaurant!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full min-h-[288px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
