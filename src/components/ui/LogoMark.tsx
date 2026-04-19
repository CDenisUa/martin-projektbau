import Image from 'next/image';

export default function LogoMark({ width = 100 }: { width?: number }) {
  return (
    <Image
      src="/images/martin_logo.png"
      alt="Martin Projekt Group"
      width={width}
      height={Math.round(width / 2.5)}
      className="object-contain"
      priority
    />
  );
}
