import { Car } from "lucide-react";

const distances = [
  { time: "90", label: "Minutes from Bangalore Airport" },
  { time: "60", label: "Minutes from MG Road" },
  { time: "30", label: "Minutes from Whitefield" },
  { time: "15", label: "Minutes to Nearest Town" },
];

const LocationSection = () => (
  <section id="location" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
        Close to the City. Far from the Chaos.
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Located within comfortable driving distance from Bangalore, Soravana
        offers the perfect balance of accessibility and escape.
      </p>

      {/* Distance highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
        {distances.map((d) => (
          <div key={d.label} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Car className="w-4 h-4 text-accent" />
              <span className="text-3xl font-heading text-primary">{d.time}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-tight">{d.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto">
        <iframe
          title="Soravana Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2317498727!2d77.30126097656249!3d12.95384772064498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default LocationSection;
