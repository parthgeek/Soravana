import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Thank you!",
        description: "We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-24 bg-[#FDFAF4]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: animated brand visual */}
          <div className="flex flex-col items-center justify-center gap-6 order-2 lg:order-1">
            <div className="w-full max-w-sm overflow-hidden" style={{ height: "500px" }}>
              <img
                src="/Soravana-animated.gif"
                alt="Soravana Farmland"
                className="w-full h-auto object-cover object-center"
                style={{ mixBlendMode: "multiply", opacity: 0.75, marginTop: "-10%" }}
              />
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading text-foreground leading-snug">
                Experience Soravana<br />Before You Own It
              </p>
              <p className="text-muted-foreground mt-3 text-sm">
                Visit the site, feel the space, and discover a better way of living.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-center mb-8">
              Fill in your details and our team will reach out to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5 bg-background rounded-xl p-8 shadow-sm">
              <div>
                <Input
                  name="name"
                  placeholder="Full Name"
                  required
                  maxLength={100}
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  maxLength={15}
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  maxLength={255}
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message (optional)"
                  rows={4}
                  maxLength={1000}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
