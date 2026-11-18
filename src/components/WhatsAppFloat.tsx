import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/fenixcar';

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl('Olá! Gostaria de agendar um atendimento na FenixCar.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a FenixCar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-[#0B3D91] px-4 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:scale-[1.03] hover:bg-[#0E4BB5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
