import { useEffect, useState } from 'react';
import { Expand, X } from 'lucide-react';
import { GalleryPhoto, WORKSHOP_GALLERY } from '../data/fenixcar';
import { ResilientImage } from './ResilientImage';

export function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const [featuredWide, ...pairPhotos] = WORKSHOP_GALLERY;

  return (
    <section
      id="estrutura"
      className="border-b border-white/10 bg-[#1A1A1A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#93C5FD]">Estrutura real em Goiás - GO</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Conheça os boxes, elevadores e fachada da FenixCar
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
            Registros reais do nosso pátio de atendimento e área técnica na rodovia
            GO-070. Clique em qualquer foto para ampliar.
          </p>
        </div>

        {/* Foto Panorâmica Interna (1024x484) */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setSelectedPhoto(featuredWide)}
            className="group block w-full overflow-hidden rounded-xl border border-white/10 bg-[#222222] text-left transition-colors duration-150 hover:border-[#0B3D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
          >
            <div className="relative aspect-[1024/484] w-full overflow-hidden">
              <ResilientImage
                src={featuredWide.src}
                alt={featuredWide.alt}
                width={featuredWide.width}
                height={featuredWide.height}
                loading="lazy"
                fallbackTitle={featuredWide.caption}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent"
              />
              <span className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A1A]/80 text-white border border-white/15 transition-colors group-hover:bg-[#0B3D91]">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-display text-lg font-semibold text-white">
                  {featuredWide.caption}
                </p>
                <p className="mt-1 max-w-2xl text-sm text-[#E2E8F0]">
                  {featuredWide.detail}
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Par de Fotos Externas (16:9 - 1024x576) */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pairPhotos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#222222] text-left transition-colors duration-150 hover:border-[#0B3D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <ResilientImage
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  fallbackTitle={photo.caption}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A1A1A]/80 text-white border border-white/15 transition-colors group-hover:bg-[#0B3D91]">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <div className="p-5">
                <p className="font-display text-base font-semibold text-white">
                  {photo.caption}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#CBD5E1]">
                  {photo.detail}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.caption}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/15 bg-[#1A1A1A]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
              <div>
                <p className="font-display text-base font-semibold text-white">
                  {selectedPhoto.caption}
                </p>
                <p className="text-xs text-[#CBD5E1]">{selectedPhoto.detail}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Fechar visualização"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#222222] text-white transition-colors hover:bg-[#0B3D91]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-[#141414] p-2 sm:p-4">
              <ResilientImage
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                className="mx-auto max-h-[75vh] w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
