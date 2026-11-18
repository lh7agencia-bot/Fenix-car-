import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/fenixcar';

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1A1A1A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zona 1: Apenas marca textual limpa */}
        <a
          href="#inicio"
          className="font-display text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] rounded-sm"
        >
          {BUSINESS_INFO.name}
        </a>

        {/* Zona 2: Links de navegação */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#CBD5E1]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 text-[#CBD5E1] transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal + botão de menu mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de agendar uma manutenção na FenixCar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#0B3D91] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0E4BB5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
          >
            Agendar WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#222222] text-white transition-colors hover:bg-[#2A2A2A] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-[#1A1A1A] px-4 py-4 md:hidden"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#E2E8F0] transition-colors hover:bg-[#222222] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl('Olá! Gostaria de agendar uma manutenção na FenixCar.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#0B3D91] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E4BB5]"
            >
              Agendar via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
