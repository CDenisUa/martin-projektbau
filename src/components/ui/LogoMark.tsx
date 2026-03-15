// Building icon matching the top-right reference logo style:
// Grey building (left) + tall navy building (right) + sweeping arc below
export default function LogoMark({ size = 40 }: { size?: number }) {
  const h = size;
  const w = Math.round(size * 1.05); // slightly wider than tall

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 42 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Martin Projektbau logo mark"
    >
      {/* ── LEFT building — grey ── */}
      <rect x="2" y="14" width="17" height="22" fill="#7A8FA6" />
      {/* floor lines */}
      <rect x="2" y="19" width="17" height="1.8" fill="white" opacity="0.45" />
      <rect x="2" y="24" width="17" height="1.8" fill="white" opacity="0.45" />
      <rect x="2" y="29" width="17" height="1.8" fill="white" opacity="0.45" />

      {/* ── RIGHT building — tall navy ── */}
      <rect x="23" y="4" width="17" height="32" fill="#1B3060" />
      {/* floor lines */}
      <rect x="23" y="9"  width="17" height="1.8" fill="white" opacity="0.35" />
      <rect x="23" y="14" width="17" height="1.8" fill="white" opacity="0.35" />
      <rect x="23" y="19" width="17" height="1.8" fill="white" opacity="0.35" />
      <rect x="23" y="24" width="17" height="1.8" fill="white" opacity="0.35" />
      <rect x="23" y="29" width="17" height="1.8" fill="white" opacity="0.35" />

      {/* ── Sweeping arc below both buildings ── */}
      <path
        d="M0 37 Q21 43 42 37"
        stroke="#1B3060"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
