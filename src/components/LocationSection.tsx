import { Car } from "lucide-react";

const distances = [
  { time: "120", label: "Minutes from Bengaluru Airport" },
  { time: "85", label: "Minutes from MG Road" },
  { time: "105", label: "Minutes from Whitefield" },
  { time: "25", label: "Minutes to Kanakapura Town" },
  { time: "65", label: "Minutes to The Art of Living Ashram" },
];

const LocationSection = () => (
  <section id="location" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
        Close to the City. Far from the Chaos.
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        CHANDUSURYA HOUSE, 9C3H+PQ2, Nallahalli Doddi, Karnataka 562117.
        A serene location with practical access to key Bengaluru zones.
      </p>

      {/* Distance highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
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
          src="https://www.google.com/maps?q=CHANDUSURYA+HOUSE,+9C3H%2BPQ2,+Nallahalli+Doddi,+Karnataka+562117&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-[11px] text-muted-foreground/80 text-center mt-4">
        Travel times are approximate and can vary by traffic and time of day.
      </p>
    </div>
  </section>
);

export default LocationSection;
