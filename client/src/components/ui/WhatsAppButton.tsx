import { companyInfo } from "@/lib/data";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={companyInfo.whatsappLink("Olá! Gostaria de um orçamento.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#C3195D] rounded-full shadow-lg hover:bg-[#A81450] transition-all duration-300 animate-pulse-brand"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white fill-white" />
      <span className="absolute right-full mr-3 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
}
