import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/258873100999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20inscri%C3%A7%C3%B5es%20na%20Rindzela."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-whatsapp-foreground rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-soft"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
