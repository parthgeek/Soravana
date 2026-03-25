const Footer = () => (
  <footer className="py-8 bg-foreground border-t border-primary-foreground/10">
    <div className="container mx-auto px-4 text-center">
      <p className="text-primary-foreground/50 text-xs font-body">
        © {new Date().getFullYear()} Soravana Farmland. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
