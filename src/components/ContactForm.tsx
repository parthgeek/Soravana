"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Mail, MessageSquare, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const isValidPhoneNumber = (value: string) => {
  if (!/^\+?[0-9()\-\s]+$/.test(value)) {
    return false;
  }

  const digitsOnly = value.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
};

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .max(100, "Name must be 100 characters or fewer.")
    .refine((value) => value.length >= 2, "Name must be at least 2 characters."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .refine(isValidPhoneNumber, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(255, "Email must be 255 characters or fewer."),
  message: z.string().trim().max(1000, "Message must be 1000 characters or fewer."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const handleSubmit = async () => {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 1000);
    });

    toast({
      title: "Thank you!",
      description: "We'll get back to you shortly.",
    });

    form.reset(defaultValues);
  };

  const isSubmitting = form.formState.isSubmitting;
  const messageValue = form.watch("message") ?? "";

  const fieldStatusClass = (invalid: boolean, isDirty: boolean, error: boolean) => {
    if (error) return "border-destructive focus-visible:ring-destructive pr-10";
    if (isDirty && !invalid) return "border-emerald-500 focus-visible:ring-emerald-500 pr-10";
    return "";
  };

  return (
    <section id="contact-form" className="pb-14 md:pb-24 bg-[#FDFAF4]">
      <div className="container mx-auto px-4 max-w-[72rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Left: animated brand visual */}
          <div className="flex flex-col items-center justify-start gap-5 order-2 lg:order-1 lg:justify-between lg:pb-8">
            <div className="w-full max-w-[17rem] md:max-w-[20rem] lg:max-w-[24rem] -mt-20 md:-mt-24 lg:-mt-32 -mb-20 md:-mb-24 lg:-mb-32">
              <img
                src="/Soravana-animated.gif"
                alt="Soravana Farmland"
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: "darken" }}
              />
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-heading text-foreground leading-snug">
                Experience Soravana
                <br />
                Before You Own It
              </p>
              <p className="text-muted-foreground mt-3 text-sm">
                Visit the site, feel the space, and discover a better way of living.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="order-1 lg:order-2 lg:max-w-[46rem] lg:ml-auto">
            <h2 className="text-2xl md:text-4xl font-heading text-center mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-center mb-8">
              Fill in your details and our team will reach out to you.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                noValidate
                className="space-y-4 bg-background rounded-xl p-6 md:p-7 shadow-sm"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => {
                    const showSuccess = fieldState.isDirty && !fieldState.invalid;
                    return (
                      <FormItem>
                        <FormLabel className="sr-only">Full Name</FormLabel>
                        <div className="relative">
                          <User
                            className={cn(
                              "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors",
                              fieldState.error ? "text-destructive" : showSuccess ? "text-emerald-500" : "text-muted-foreground",
                            )}
                          />
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Full Name"
                              autoComplete="name"
                              maxLength={100}
                              className={cn(
                                "bg-background pl-10 pr-10 transition-colors",
                                fieldStatusClass(fieldState.invalid, fieldState.isDirty, !!fieldState.error),
                              )}
                            />
                          </FormControl>
                          {fieldState.error ? (
                            <AlertCircle className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                          ) : showSuccess ? (
                            <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                          ) : null}
                        </div>
                        <FormMessage className="flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200" />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field, fieldState }) => {
                    const showSuccess = fieldState.isDirty && !fieldState.invalid;
                    return (
                      <FormItem>
                        <FormLabel className="sr-only">Phone Number</FormLabel>
                        <div className="relative">
                          <Phone
                            className={cn(
                              "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors",
                              fieldState.error ? "text-destructive" : showSuccess ? "text-emerald-500" : "text-muted-foreground",
                            )}
                          />
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              inputMode="tel"
                              placeholder="Phone Number"
                              autoComplete="tel"
                              maxLength={20}
                              className={cn(
                                "bg-background pl-10 pr-10 transition-colors",
                                fieldStatusClass(fieldState.invalid, fieldState.isDirty, !!fieldState.error),
                              )}
                            />
                          </FormControl>
                          {fieldState.error ? (
                            <AlertCircle className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                          ) : showSuccess ? (
                            <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                          ) : null}
                        </div>
                        <FormMessage className="flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200" />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => {
                    const showSuccess = fieldState.isDirty && !fieldState.invalid;
                    return (
                      <FormItem>
                        <FormLabel className="sr-only">Email Address</FormLabel>
                        <div className="relative">
                          <Mail
                            className={cn(
                              "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors",
                              fieldState.error ? "text-destructive" : showSuccess ? "text-emerald-500" : "text-muted-foreground",
                            )}
                          />
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Email Address"
                              autoComplete="email"
                              maxLength={255}
                              className={cn(
                                "bg-background pl-10 pr-10 transition-colors",
                                fieldStatusClass(fieldState.invalid, fieldState.isDirty, !!fieldState.error),
                              )}
                            />
                          </FormControl>
                          {fieldState.error ? (
                            <AlertCircle className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-destructive" />
                          ) : showSuccess ? (
                            <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500" />
                          ) : null}
                        </div>
                        <FormMessage className="flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200" />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Your Message</FormLabel>
                      <div className="relative">
                        <MessageSquare
                          className={cn(
                            "pointer-events-none absolute left-3 top-3 h-4 w-4 transition-colors",
                            fieldState.error ? "text-destructive" : "text-muted-foreground",
                          )}
                        />
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Your Message (optional)"
                            rows={4}
                            maxLength={1000}
                            className={cn(
                              "bg-background pl-10 resize-none transition-colors",
                              fieldState.error && "border-destructive focus-visible:ring-destructive",
                            )}
                          />
                        </FormControl>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <FormMessage className="flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200" />
                        <span
                          className={cn(
                            "ml-auto text-xs tabular-nums text-muted-foreground",
                            messageValue.length >= 1000 && "text-destructive",
                          )}
                        >
                          {messageValue.length}/1000
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
