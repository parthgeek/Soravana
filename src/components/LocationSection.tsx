"use client";

import { Car, Smartphone } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=CHANDUSURYA+HOUSE,+9C3H%2BPQ2,+Nallahalli+Doddi,+Karnataka+562117";

const distances = [
  { time: "120", label: "Minutes from Bengaluru Airport" },
  { time: "85", label: "Minutes from MG Road" },
  { time: "105", label: "Minutes from Whitefield" },
  { time: "25", label: "Minutes to Kanakapura Town" },
  { time: "65", label: "Minutes to The Art of Living Ashram" },
];

const LocationSection = () => (
  <section id="location" className="pb-14 md:pb-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
        Close to the City. Far from the Chaos.
      </h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
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

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 max-w-4xl mx-auto items-stretch">
        <div className="rounded-lg overflow-hidden shadow-md">
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

        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border/60 bg-background p-5 shadow-sm md:w-56">
          <div className="flex items-start gap-2 text-accent">
            <Smartphone className="mt-0.5 h-4 w-4 shrink-0" />
            <div className="text-xs font-semibold uppercase tracking-[0.12em] leading-snug">
              <div>Scan to open in</div>
              <div className="text-center">Google Maps</div>
            </div>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Soravana location in Google Maps"
            className="rounded-md bg-white p-2 ring-1 ring-border/50 transition-transform hover:scale-[1.02]"
          >
            <QRCodeSVG
              value={mapsUrl}
              size={160}
              level="M"
              marginSize={2}
              fgColor="#0f172a"
              bgColor="#ffffff"
            />
          </a>
          <p className="text-[11px] text-muted-foreground text-center leading-snug">
            Point your phone camera here to open directions in Google Maps.
          </p>
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground/80 text-center mt-4">
        Travel times are approximate and can vary by traffic and time of day.
      </p>
    </div>
  </section>
);

export default LocationSection;
