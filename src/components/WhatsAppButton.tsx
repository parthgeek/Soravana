import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // Replace with actual number
const MESSAGE = encodeURIComponent("Hi, I'm interested in Soravana Farmland. Please share more details.");

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
