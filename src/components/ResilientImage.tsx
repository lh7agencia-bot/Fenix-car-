import { useState } from 'react';
import { Wrench } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fallbackTitle = 'FenixCar Centro Automotivo',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#222222] via-[#1A1A1A] to-[#0B3D91]/30 p-6 text-center ${className}`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-[#0B3D91]">
          <Wrench className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold text-white/90">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
