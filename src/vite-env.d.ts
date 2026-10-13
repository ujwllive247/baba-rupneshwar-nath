/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "true" to show the donation module in a production build. Always on in dev. */
  readonly VITE_DONATIONS_ENABLED?: string;
  /** Payment provider id. Only "dummy" exists today. Never put secrets in VITE_ variables. */
  readonly VITE_PAYMENT_PROVIDER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
