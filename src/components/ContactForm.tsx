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
    <section id="contact-form" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-4">
          Get in Touch
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
        <p className="text-muted-foreground text-center mb-10">
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
    </section>
  );
};

export default ContactForm;
