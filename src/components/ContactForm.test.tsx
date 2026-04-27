import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import ContactForm from "@/components/ContactForm";

const { toastSpy } = vi.hoisted(() => ({
  toastSpy: vi.fn(),
}));

vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: toastSpy,
  }),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    toastSpy.mockReset();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows validation messages and blocks submission for invalid input", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "A" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "not-an-email" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /send enquiry/i }).closest("form")!);

    expect(await screen.findByText("Name must be at least 2 characters.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid phone number.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(toastSpy).not.toHaveBeenCalled();
  });

  it("submits valid details, shows a success toast, and resets the form", async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/phone number/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/your message/i) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "Parth Sharma" } });
    fireEvent.change(phoneInput, { target: { value: "+91 98765 43210" } });
    fireEvent.change(emailInput, { target: { value: "parth@example.com" } });
    fireEvent.change(messageInput, { target: { value: "I would like to schedule a visit." } });

    fireEvent.submit(screen.getByRole("button", { name: /send enquiry/i }).closest("form")!);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
    });

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith({
        title: "Thank you!",
        description: "We'll get back to you shortly.",
      });
    }, { timeout: 2000 });

    expect(nameInput).toHaveValue("");
    expect(phoneInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
    expect(screen.getByRole("button", { name: /send enquiry/i })).not.toBeDisabled();
  });
});
