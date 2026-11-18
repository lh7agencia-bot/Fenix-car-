import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getWhatsAppUrl } from '../data/fenixcar';

interface ContactSectionProps {
  selectedService: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({ selectedService }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedChannel, setSubmittedChannel] = useState<'whatsapp' | 'email' | null>(
    null
  );

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setMessage((prev) =>
        prev.trim().length === 0
          ? `Olá! Gostaria de solicitar um orçamento para ${selectedService}.`
          : prev
      );
      setSubmittedChannel(null);
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = 'Digite um e-mail válido.';
    }
    if (message.trim().length < 8) {
      nextErrors.message = 'Descreva brevemente o serviço ou dúvida (mínimo 8 caracteres).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildFormattedMessage = () => {
    const lines = [
      `Olá FenixCar! Meu nome é ${name.trim()}.`,
      `E-mail: ${email.trim()}`,
      service ? `Serviço de interesse: ${service}` : null,
      `Mensagem: ${message.trim()}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const whatsappPreparedUrl = getWhatsAppUrl(buildFormattedMessage());
  const mailtoPreparedUrl = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Contato pelo site FenixCar${service ? ` — ${service}` : ''}`
  )}&body=${encodeURIComponent(buildFormattedMessage())}`;

  const handleSubmit = (event: FormEvent, channel: 'whatsapp' | 'email') => {
    event.preventDefault();
    if (!validate()) return;
    setSubmittedChannel(channel);
  };

  return (
    <section
      id="contato"
      className="border-b border-white/10 bg-[#141414] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna de Informações Oficiais */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#93C5FD]">Contato e Localização</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white text-balance">
              Agende sua revisão ou tire suas dúvidas
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
              Preencha o formulário para preparar sua solicitação via WhatsApp ou
              e-mail, ou visite nossa unidade diretamente na GO-070.
            </p>

            <div className="mt-8 space-y-5 rounded-xl border border-white/10 bg-[#1A1A1A] p-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B3D91] text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#94A3B8]">Endereço completo</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-semibold text-[#93C5FD] hover:underline"
                  >
                    Ver localização no Google Maps
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5 flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0B3D91] text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#94A3B8]">Telefone / WhatsApp</p>
                  <a
                    href={getWhatsAppUrl('Olá! Gostaria de falar com a equipe FenixCar.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-mono text-base font-semibold tabular-nums text-white hover:text-[#93C5FD] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Estático Validado */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={(e) => handleSubmit(e, 'whatsapp')}
              className="rounded-xl border border-white/10 bg-[#1A1A1A] p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-white"
                  >
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Seu nome completo"
                    className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/15 bg-[#222222] px-3.5 py-2.5 text-sm text-white placeholder-[#94A3B8] focus:border-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-white"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="voce@exemplo.com"
                    className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/15 bg-[#222222] px-3.5 py-2.5 text-sm text-white placeholder-[#94A3B8] focus:border-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-service"
                  className="block text-sm font-medium text-white"
                >
                  Serviço de interesse (opcional)
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/15 bg-[#222222] px-3.5 py-2.5 text-sm text-white focus:border-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                >
                  <option value="">Selecione um serviço ou descreva abaixo</option>
                  {SERVICES.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-white"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Informe o modelo/ano do veículo e o que você precisa..."
                  className="mt-2 block w-full rounded-lg border border-white/15 bg-[#222222] px-3.5 py-2.5 text-sm text-white placeholder-[#94A3B8] focus:border-[#0B3D91] focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs text-rose-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#0B3D91] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E4BB5] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, 'email')}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#222222] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-[#2A2A2A] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar por E-mail</span>
                </button>
              </div>

              {submittedChannel && (
                <div
                  role="status"
                  className="mt-6 rounded-lg border border-[#0B3D91] bg-[#0B3D91]/20 p-4 text-sm text-white"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#93C5FD]"
                      aria-hidden="true"
                    />
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">
                          Dados validados e prontos para envio!
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#E2E8F0]">
                          Clique no botão abaixo para abrir o{' '}
                          {submittedChannel === 'whatsapp'
                            ? 'WhatsApp da FenixCar'
                            : 'seu aplicativo de e-mail'}{' '}
                          com a mensagem já preenchida.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={
                            submittedChannel === 'whatsapp'
                              ? whatsappPreparedUrl
                              : mailtoPreparedUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#0B3D91] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0E4BB5]"
                        >
                          {submittedChannel === 'whatsapp'
                            ? 'Abrir conversa no WhatsApp'
                            : 'Abrir aplicativo de E-mail'}
                        </a>

                        <button
                          type="button"
                          onClick={() => setSubmittedChannel(null)}
                          className="inline-flex min-h-[40px] items-center rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-[#CBD5E1] hover:text-white"
                        >
                          Editar mensagem
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
