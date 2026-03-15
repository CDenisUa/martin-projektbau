export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Martin Projektbau logo"
    >
      {/* Background */}
      <rect width="40" height="40" rx="6" fill="#3B82F6" />
      {/* M constructed from building/geometric shapes */}
      <path
        d="M8 30V14L15 22L20 14L25 22L32 14V30"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Base line representing ground/foundation */}
      <rect x="8" y="28" width="24" height="2.5" fill="white" rx="0" />
    </svg>
  );
}
