import { useState } from 'react';
import { Facebook, Link2, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ShareButtonsProps {
  title: string;
  url: string;
}

/** WhatsApp / Facebook share links plus a copy-link button with a confirmed state. */
export function ShareButtons({ title, url }: ShareButtonsProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard API can be unavailable (older browsers, insecure context); fail silently.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="text-sm font-medium text-ink-700">{t('common.share')}</span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t('katha.shareWhatsapp')}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#128C4A] transition hover:bg-[#25D366]/20"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t('katha.shareFacebook')}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] transition hover:bg-[#1877F2]/20"
      >
        <Facebook aria-hidden="true" size={18} />
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? t('katha.linkCopied') : t('katha.copyLink')}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-200 text-ink-700 transition hover:bg-sand-300"
      >
        {copied ? <Check aria-hidden="true" size={18} /> : <Link2 aria-hidden="true" size={18} />}
      </button>
      <span role="status" className="sr-only">
        {copied ? t('katha.linkCopied') : ''}
      </span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm5.82 14.02c-.25.7-1.24 1.28-2.03 1.45-.55.11-1.26.2-3.66-.78-2.87-1.19-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.27.53-.34.71-.34.18 0 .35.001.5.008.16.007.38-.06.6.46.24.56.81 1.96.88 2.1.07.14.11.31.02.5-.09.19-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.87.27.13.44.19.51.3.07.11.07.63-.18 1.33Z" />
    </svg>
  );
}
