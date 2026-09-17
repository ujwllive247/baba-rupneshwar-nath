/** Small inline trishul-and-crescent mark used beside the wordmark in the header/footer. */
export function TempleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="19" fill="#1A2440" stroke="#D9B26A" strokeWidth="1" />
      <path
        d="M20 8 L20 30 M13 13 L20 8 L27 13 M14 20 L26 20"
        stroke="#F07B1D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="20" cy="30" r="1.6" fill="#F07B1D" />
    </svg>
  );
}
