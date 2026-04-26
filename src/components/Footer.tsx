const Footer = () => (
  <footer className="py-10 bg-section-alt border-t border-border">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4">
      <div className="w-44">
        <img
          src="/assets/Soravana_Logo.png"
          alt="Soravana"
          className="w-full h-auto object-contain"
        />
      </div>
      <p className="text-muted-foreground text-xs font-body tracking-wide">
        © {new Date().getFullYear()} Soravana Farmland. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
