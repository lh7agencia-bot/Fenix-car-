export type ServiceCategory =
  | 'todos'
  | 'preventiva'
  | 'rodagem'
  | 'mecanica';

export interface MechanicalService {
  id: string;
  code: string;
  title: string;
  category: Exclude<ServiceCategory, 'todos'>;
  categoryLabel: string;
  summary: string;
  highlights: string[];
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  detail: string;
  aspectClass: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  context: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'FenixCar',
  slogan: 'Manutenção inteligente',
  niche: 'Centro Automotivo & Mecânica Especializada',
  address: 'GO-070, SN - QD 3 LT 3 - BAIRRO DO BACALHAU, Goiás - GO, 76600-000',
  streetShort: 'GO-070, SN - QD 3 LT 3',
  districtCity: 'Bairro do Bacalhau · Goiás - GO',
  cep: '76600-000',
  phoneDisplay: '(62) 98567-1459',
  whatsappDigits: '5562985671459',
  email: 'contato@fenixcar.com.br',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=GO-070+SN+QD+3+LT+3+Bairro+do+Bacalhau+Goias+GO+76600-000',
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const HERO_PHOTO: GalleryPhoto = {
  id: 'fachada-principal',
  src: '/images/fenixcar-1.jpg',
  alt: 'Fachada do Centro Automotivo FenixCar na GO-070 em Goiás - GO com veículos em atendimento',
  caption: 'Unidade Goiás · GO-070',
  detail: 'Estrutura preparada para carros de passeio, SUVs e caminhonetes.',
  aspectClass: 'aspect-video',
  width: 1024,
  height: 576,
};

export const TOTEM_PHOTO: GalleryPhoto = {
  id: 'totem-especialidades',
  src: '/images/fenixcar-4.jpg',
  alt: 'Totem da FenixCar exibindo especialidades: Mecânica em Geral, Alinhamento 3D, Injeção Eletrônica, Suspensão, Freios em Geral e Escapamento',
  caption: 'Especialidades Oficiais FenixCar',
  detail: 'Sinalização externa da unidade na entrada pelo Bairro do Bacalhau.',
  aspectClass: 'aspect-[9/16]',
  width: 900,
  height: 1600,
};

export const WORKSHOP_GALLERY: GalleryPhoto[] = [
  {
    id: 'interior-elevadores',
    src: '/images/fenixcar-2.jpg',
    alt: 'Área interna da oficina FenixCar com veículos nos elevadores automotivos e mecânicos realizando manutenção',
    caption: 'Área Técnica e Elevadores',
    detail: 'Múltiplos boxes com elevadores hidráulicos para atendimento simultâneo de passeio e utilitários.',
    aspectClass: 'aspect-[1024/484]',
    width: 1024,
    height: 484,
  },
  {
    id: 'fachada-atendimento',
    src: '/images/fenixcar-1.jpg',
    alt: 'Fachada principal da FenixCar Centro Automotivo com pátio de recepção na GO-070',
    caption: 'Recepção e Pátio de Acesso',
    detail: 'Acesso amplo pela rodovia GO-070 com estacionamento para entrada e saída de veículos.',
    aspectClass: 'aspect-video',
    width: 1024,
    height: 576,
  },
  {
    id: 'estrutura-externa',
    src: '/images/fenixcar-3.jpg',
    alt: 'Vista externa da estrutura da oficina FenixCar Centro Automotivo e entrada dos boxes',
    caption: 'Estrutura da Oficina',
    detail: 'Boxes cobertos para diagnóstico, alinhamento, suspensão e mecânica em geral.',
    aspectClass: 'aspect-video',
    width: 1024,
    height: 576,
  },
];

export const SERVICES: MechanicalService[] = [
  {
    id: 'troca-oleo',
    code: '01.',
    title: 'Troca de Óleo e Filtros',
    category: 'preventiva',
    categoryLabel: 'Manutenção Preventiva',
    summary:
      'Substituição de lubrificante conforme especificação da montadora com troca completa de filtros de óleo, ar, combustível e cabine.',
    highlights: ['Óleos sintéticos e semissintéticos', 'Inspeção de vazamentos no cárter'],
  },
  {
    id: 'alinhamento-balanceamento',
    code: '02.',
    title: 'Alinhamento 3D e Balanceamento',
    category: 'rodagem',
    categoryLabel: 'Rodagem & Geometria',
    summary:
      'Leitura óptica tridimensional para ajuste preciso de convergência, cambagem e cáster, além de balanceamento computadorizado das rodas.',
    highlights: ['Estabilidade em rodovias', 'Maior durabilidade dos pneus'],
  },
  {
    id: 'freios',
    code: '03.',
    title: 'Revisão de Freios em Geral',
    category: 'rodagem',
    categoryLabel: 'Segurança & Frenagem',
    summary:
      'Verificação completa de pastilhas, discos, lonas, tambores, pinças e teste de ponto de ebulição com troca do fluido de freio.',
    highlights: ['Diagnóstico de sistema ABS', 'Sangria completa do circuito'],
  },
  {
    id: 'suspensao',
    code: '04.',
    title: 'Suspensão e Direção',
    category: 'rodagem',
    categoryLabel: 'Estabilidade & Conforto',
    summary:
      'Troca e análise de amortecedores, molas, pivôs, bandejas, terminais de direção, bieletas e buchas para rodagem silenciosa.',
    highlights: ['Passeio, SUVs e caminhonetes', 'Testes de folga em elevador'],
  },
  {
    id: 'injecao-eletronica',
    code: '05.',
    title: 'Injeção Eletrônica e Scanner',
    category: 'mecanica',
    categoryLabel: 'Diagnóstico Inteligente',
    summary:
      'Varredura eletrônica com scanner automotivo para identificar códigos de falha, leitura de sensores, limpeza de bicos e corpo de borboleta.',
    highlights: ['Redução no consumo de combustível', 'Partida e marcha lenta estáveis'],
  },
  {
    id: 'mecanica-geral',
    code: '06.',
    title: 'Mecânica Geral e Motor',
    category: 'mecanica',
    categoryLabel: 'Conjunto Motriz',
    summary:
      'Manutenção corretiva e preventiva de motor, troca de correia dentada, sistema de arrefecimento, embreagem e revisão completa.',
    highlights: ['Limpeza e aditivação de radiador', 'Substituição de kits de sincronismo'],
  },
  {
    id: 'escapamento',
    code: '07.',
    title: 'Escapamento e Emissões',
    category: 'mecanica',
    categoryLabel: 'Exaustão',
    summary:
      'Inspeção, solda e substituição de abafadores, silenciosos, flexíveis, coletores e catalisadores com foco em vedação acústica.',
    highlights: ['Eliminação de ruídos metálicos', 'Conferência de sondas e fluxo'],
  },
  {
    id: 'autopeças-revisao',
    code: '08.',
    title: 'Autopeças e Revisão Pré-Viagem',
    category: 'preventiva',
    categoryLabel: 'Inspeção Completa',
    summary:
      'Checklist inteligente antes de pegar a estrada com reposição imediata de componentes essenciais diretamente na oficina.',
    highlights: ['Checagem de bateria, correias e fluidos', 'Orçamento claro antes da execução'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    name: 'Carlos Eduardo Mendes',
    context: 'Alinhamento 3D e Suspensão · Goiás - GO',
    rating: 5,
    quote:
      'Levei minha caminhonete puxando para a direita e com barulho na dianteira. Fizeram o diagnóstico no elevador na hora, explicaram cada peça e o carro saiu firme na GO-070.',
  },
  {
    id: 'dep-2',
    name: 'Fernanda Alves Pereira',
    context: 'Troca de Óleo e Revisão de Freios',
    rating: 5,
    quote:
      'Atendimento direto, sem empurrar serviço desnecessário. Mostraram as pastilhas gastas antes da troca e entregaram o carro no horário combinado pelo WhatsApp.',
  },
  {
    id: 'dep-3',
    name: 'Rogério Batista da Silva',
    context: 'Injeção Eletrônica e Arrefecimento',
    rating: 5,
    quote:
      'Meu carro estava falhando na subida e acendendo a luz da injeção. Passaram o scanner, resolveram o problema no bico e na vela com preço justo e transparência total.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Com qual quilometragem devo fazer a troca de óleo e dos filtros?',
    answer:
      'A recomendação varia conforme o manual do veículo e o tipo de lubrificante (mineral, semissintético ou sintético), ficando geralmente entre 5.000 km e 10.000 km ou a cada 6 meses. Quem roda muito em trechos curtos ou estradas de terra deve antecipar também a inspeção do filtro de ar.',
  },
  {
    id: 'faq-2',
    question: 'Quando é necessário fazer o alinhamento 3D e o balanceamento?',
    answer:
      'Indicamos alinhamento e balanceamento a cada 10.000 km, após troca de pneus, serviços na suspensão/direção ou sempre que notar o volante torto, o veículo puxando para um lado ou vibrações no volante acima de 80 km/h.',
  },
  {
    id: 'faq-3',
    question: 'Vocês passam o orçamento antes de executar o serviço?',
    answer:
      'Sim. Fazemos a avaliação técnica no veículo e enviamos o detalhamento das peças e da mão de obra — inclusive pelo WhatsApp — para que você aprove tudo antes do início de qualquer reparo.',
  },
  {
    id: 'faq-4',
    question: 'Quais sinais indicam que os freios precisam de revisão urgente?',
    answer:
      'Chiado metálico ao frear, pedal muito baixo ou duro, trepidação no volante durante a frenagem, aumento da distância para parar ou luz de alerta no painel são sinais claros de desgaste em pastilhas, discos ou fluido.',
  },
  {
    id: 'faq-5',
    question: 'A FenixCar atende apenas carros de passeio ou também SUVs e caminhonetes?',
    answer:
      'Nossa estrutura na GO-070 conta com elevadores e equipamentos dimensionados tanto para veículos leves de passeio quanto para SUVs e picapes a diesel ou flex.',
  },
  {
    id: 'faq-6',
    question: 'Como funciona o agendamento pelo WhatsApp?',
    answer:
      'Basta clicar em qualquer botão de WhatsApp da página ou enviar sua mensagem pelo formulário abaixo informando o modelo do carro e o sintoma ou serviço desejado. Nossa equipe confirma o melhor horário de recebimento pelo (62) 98567-1459.',
  },
];
