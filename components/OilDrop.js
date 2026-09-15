export default function OilDrop({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 460"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="oilGradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFFCF5" />
          <stop offset="55%" stopColor="#F3E3C1" />
          <stop offset="100%" stopColor="#B8863E" />
        </radialGradient>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8C5E23" />
          <stop offset="100%" stopColor="#B8863E" />
        </linearGradient>
      </defs>

      <path
        d="M200 40 C 260 130 320 210 320 290 C 320 380 268 420 200 420 C 132 420 80 380 80 290 C 80 210 140 130 200 40 Z"
        fill="url(#oilGradient)"
      />
      <ellipse cx="160" cy="180" rx="34" ry="46" fill="#FFFCF5" opacity="0.55" />

      <circle
        cx="200"
        cy="290"
        r="150"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="6"
        strokeDasharray="6 14"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
