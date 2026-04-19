import Image from 'next/image';

const LOGO_ASPECT_RATIO = 70 / 96;

export default function LogoMark({ width = 100 }: { width?: number }) {
  return (
    <Image
      src="/images/martin_logo.png"
      alt="Martin Projekt Group"
      width={width}
      height={Math.round(width * LOGO_ASPECT_RATIO)}
      className="h-auto object-contain"
      priority
    />
  );
}
