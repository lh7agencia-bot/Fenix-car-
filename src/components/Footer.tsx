import { BUSINESS_INFO } from '../data/fenixcar';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-start">
          <div className="max-w-md">
            <p className="font-display text-lg font-bold text-white">
              {BUSINESS_INFO.name}
            </p>
            <p className="mt-1 text-sm font-medium text-[#93C5FD]">
              {BUSINESS_INFO.slogan}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#CBD5E1]">
              {BUSINESS_INFO.address}
            </p>
            <p className="mt-1 font-mono text-xs tabular-nums text-[#CBD5E1]">
              Telefone / WhatsApp: {BUSINESS_INFO.phoneDisplay}
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#CBD5E1]"
          >
            <a href="#inicio" className="hover:text-white transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#estrutura" className="hover:text-white transition-colors">
              Estrutura
            </a>
            <a href="#depoimentos" className="hover:text-white transition-colors">
              Depoimentos
            </a>
            <a href="#duvidas" className="hover:text-white transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-xs text-[#94A3B8] sm:flex-row sm:items-center">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </p>
          <p>Goiás - GO · CEP {BUSINESS_INFO.cep}</p>
        </div>
      </div>
    </footer>
  );
}
