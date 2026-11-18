import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/fenixcar';

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? '' : id));
  };

  return (
    <section
      id="duvidas"
      className="border-b border-white/10 bg-[#1A1A1A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#93C5FD]">Perguntas frequentes</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance">
              Dúvidas comuns sobre manutenção automotiva
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
              Respostas rápidas sobre prazos de troca de óleo, alinhamento 3D, revisão
              de freios e agendamento na FenixCar.
            </p>
          </div>

          <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#222222] lg:col-span-8">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${item.id}-panel`;
              const buttonId = `${item.id}-button`;

              return (
                <div key={item.id}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleToggle(item.id)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0B3D91] sm:px-6"
                    >
                      <span className="font-display text-base font-semibold text-white">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#93C5FD] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-5 text-sm leading-relaxed text-[#CBD5E1] sm:px-6"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
