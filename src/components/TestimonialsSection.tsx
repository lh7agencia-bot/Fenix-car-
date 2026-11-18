import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/fenixcar';

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="border-b border-white/10 bg-[#141414] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#93C5FD]">Confiança comprovada</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            O que dizem os motoristas atendidos na FenixCar
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
            Avaliações de clientes que realizaram revisões, alinhamento 3D e reparos
            mecânicos em nossa oficina na GO-070.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#1A1A1A] p-6"
            >
              <div>
                {/* Estrelas de avaliação */}
                <div
                  className="flex items-center gap-1"
                  aria-label={`Avaliação ${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-[#E2E8F0]">
                  “{item.quote}”
                </blockquote>
              </div>

              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-sm font-semibold text-white">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-[#94A3B8]">{item.context}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
