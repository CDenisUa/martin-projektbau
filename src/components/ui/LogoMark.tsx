import Image from 'next/image';

export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/images/martin_logo.png"
      alt="Martin Projekt Group"
      width={size * 2.5}
      height={size}
      className="object-contain"
      priority
    />
  );
}
