const Footer = () => (
  <footer className="py-10 bg-section-alt border-t border-border">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4">
      <div className="overflow-hidden" style={{ width: "220px", height: "200px" }}>
        <img
          src="/Soravana-animated.gif"
          alt="Soravana"
          className="w-full h-auto object-contain"
          style={{ mixBlendMode: "darken", opacity: 0.95, marginTop: "-35%" }}
        />
      </div>
      <p className="text-muted-foreground text-xs font-body tracking-wide">
        © {new Date().getFullYear()} Soravana Farmland. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
