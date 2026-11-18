import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  SERVICES,
  ServiceCategory,
  TOTEM_PHOTO,
  getWhatsAppUrl,
} from '../data/fenixcar';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const FILTER_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os serviços' },
  { id: 'preventiva', label: 'Troca de óleo e revisão' },
  { id: 'rodagem', label: 'Alinhamento, freios e suspensão' },
  { id: 'mecanica', label: 'Motor, injeção e escapamento' },
];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('todos');

  const filteredServices =
    activeFilter === 'todos'
      ? SERVICES
      : SERVICES.filter((item) => item.category === activeFilter);

  return (
    <section
      id="servicos"
      className="border-b border-white/10 bg-[#141414] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#93C5FD]">Serviços especializados</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Cuidado técnico completo da revisão preventiva ao motor
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
              Cada serviço na FenixCar segue inspeção criteriosa em elevador e scanner,
              com orçamento transparente antes da execução.
            </p>
          </div>

          {/* Filtro interativo funcional */}
          <div
            role="tablist"
            aria-label="Filtrar serviços por categoria"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#1A1A1A] p-1.5"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? 'bg-[#0B3D91] text-white'
                      : 'text-[#CBD5E1] hover:bg-[#222222] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Assimétrico: Cards de Serviços + Totem Real Vertical 9:16 */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#1A1A1A] p-6 transition-colors duration-150 hover:border-[#0B3D91]/80"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-[#94A3B8]">
                    <span className="font-mono font-semibold tabular-nums text-[#93C5FD]">
                      {service.code}
                    </span>
                    <span>{service.categoryLabel}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#CBD5E1]">
                    {service.summary}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {service.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs text-[#CBD5E1]"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#93C5FD]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#0B3D91] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#0E4BB5] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de um orçamento para ${service.title} na FenixCar.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#CBD5E1] underline-offset-4 hover:text-white hover:underline whitespace-nowrap"
                  >
                    Via WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Totem Real da FenixCar preservando proporção original 9:16 */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A]">
              <div className="aspect-[9/16] w-full overflow-hidden">
                <ResilientImage
                  src={TOTEM_PHOTO.src}
                  alt={TOTEM_PHOTO.alt}
                  width={TOTEM_PHOTO.width}
                  height={TOTEM_PHOTO.height}
                  loading="lazy"
                  fallbackTitle="Especialidades FenixCar"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="border-t border-white/10 p-5">
                <p className="font-display text-sm font-semibold text-white">
                  {TOTEM_PHOTO.caption}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#CBD5E1]">
                  {TOTEM_PHOTO.detail}
                </p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
