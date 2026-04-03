import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
        Find Us
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-5">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <p className="text-foreground text-sm">
              Ground Floor, Chenji Plaza, KT Road, Opposite SBI, Bhavani Nagar,
              Tirupati – 517501
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <a href="tel:09949653899" className="text-foreground text-sm hover:text-primary transition-colors">
              099496 53899
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <p className="text-foreground text-sm">Open daily until 11 PM</p>
          </div>
          <a
            href="https://www.google.com/maps?q=Manju+Foods+Family+Restaurant+Tirupati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
          >
            Get Directions
          </a>
        </div>
        <div className="rounded-xl overflow-hidden border border-border h-72 md:h-auto">
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
