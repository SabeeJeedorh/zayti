export default function PalmFrond({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M100 190 C 95 140, 110 90, 100 20" />
        <path d="M100 60 C 70 45, 40 40, 10 20" />
        <path d="M100 60 C 75 30, 60 15, 35 -5" />
        <path d="M100 60 C 95 25, 100 5, 100 -20" />
        <path d="M100 60 C 125 30, 140 15, 165 -5" />
        <path d="M100 60 C 130 45, 160 40, 190 20" />
        <path d="M100 90 C 65 80, 35 85, 0 75" />
        <path d="M100 90 C 130 80, 165 85, 200 75" />
      </g>
    </svg>
  );
}
