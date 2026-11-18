import { ArrowRight, MapPin, Phone, Wrench } from 'lucide-react';
import { BUSINESS_INFO, HERO_PHOTO, getWhatsAppUrl } from '../data/fenixcar';
import { ResilientImage } from './ResilientImage';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative border-b border-white/10 bg-[#1A1A1A] pt-12 pb-14 sm:pt-16 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna de Proposta de Valor */}
          <div className="lg:col-span-6">
            <p className="text-sm font-medium tracking-wide text-[#93C5FD]">
              {BUSINESS_INFO.name} · {BUSINESS_INFO.districtCity}
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white text-balance">
              {BUSINESS_INFO.slogan} para o seu veículo rodar sem imprevistos.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
              Mecânica em geral, troca de óleo, alinhamento 3D, balanceamento, revisão de
              freios, suspensão e injeção eletrônica na GO-070. Diagnóstico preciso e
              atendimento direto com quem entende do seu carro.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(
                  'Olá! Vi o site da FenixCar e gostaria de solicitar um agendamento.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#0B3D91] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0E4BB5] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#servicos"
                className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-white/15 bg-[#222222] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-white/30 hover:bg-[#2A2A2A] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
              >
                Conhecer serviços
              </a>
            </div>
          </div>

          {/* Coluna Visual Real da Oficina */}
          <div className="lg:col-span-6">
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-[#222222]">
              <div className="relative aspect-video w-full overflow-hidden">
                <ResilientImage
                  src={HERO_PHOTO.src}
                  alt={HERO_PHOTO.alt}
                  width={HERO_PHOTO.width}
                  height={HERO_PHOTO.height}
                  loading="eager"
                  fallbackTitle="FenixCar — Unidade GO-070"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/75 via-transparent to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-3.5 text-xs text-[#E2E8F0]">
                  <span className="font-medium text-white">{HERO_PHOTO.caption}</span>
                  <span className="font-mono tabular-nums text-[#CBD5E1]">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        {/* Faixa de Informações Essenciais (4 colunas equilibradas abaixo do Hero) */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#222222] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          <div className="flex items-start gap-3.5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B3D91] text-white">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#94A3B8]">Localização</p>
              <p className="mt-1 text-sm font-semibold text-white">
                {BUSINESS_INFO.streetShort}
              </p>
              <p className="mt-0.5 text-xs text-[#CBD5E1]">{BUSINESS_INFO.districtCity}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B3D91] text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#94A3B8]">Telefone / WhatsApp</p>
              <a
                href={getWhatsAppUrl('Olá! Gostaria de falar com a FenixCar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-mono text-sm font-semibold tabular-nums text-white hover:text-[#93C5FD] transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <p className="mt-0.5 text-xs text-[#CBD5E1]">Atendimento direto</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B3D91] text-white">
              <Wrench className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#94A3B8]">Especialidades</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Mecânica e Alinhamento 3D
              </p>
              <p className="mt-0.5 text-xs text-[#CBD5E1]">
                Suspensão, freios e injeção
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-xs font-medium text-[#94A3B8]">CEP da Unidade</p>
              <p className="mt-1 font-mono text-sm font-semibold tabular-nums text-white">
                {BUSINESS_INFO.cep}
              </p>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block text-xs font-medium text-[#93C5FD] hover:underline"
              >
                Abrir rota no mapa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
