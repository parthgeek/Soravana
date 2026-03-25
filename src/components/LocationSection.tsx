const LocationSection = () => (
  <section id="location" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">Close to the City. Far from the Chaos.</h2>
      <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Located within comfortable driving distance from Bangalore, Soravana offers the perfect balance of accessibility and escape.
      </p>
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
