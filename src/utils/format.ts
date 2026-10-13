import type { Bilingual, Language } from '@/types';

const LOCALES: Record<Language, string> = {
  hi: 'hi-IN',
  en: 'en-IN',
};

/** Picks the active-language half of a bilingual pair. */
export function pick(value: Bilingual, lang: Language): string {
  return value[lang];
}

/** ISO date (YYYY-MM-DD) → "14 September 2026" / "१४ सितम्बर २०२६" style long date. */
export function formatDate(iso: string, lang: Language): string {
  const date = parseIsoDate(iso);
  if (!date) return iso;
  return new Intl.DateTimeFormat(LOCALES[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Compact form for cards and lists — "14 Sep 2026". */
export function formatDateShort(iso: string, lang: Language): string {
  const date = parseIsoDate(iso);
  if (!date) return iso;
  return new Intl.DateTimeFormat(LOCALES[lang], {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/** Split day and short month for a calendar-tile badge — { day: "18", month: "Feb" }. */
export function formatDayMonth(iso: string, lang: Language): { day: string; month: string } {
  const date = parseIsoDate(iso);
  if (!date) return { day: iso, month: '' };
  const locale = LOCALES[lang];
  return {
    day: new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date),
    month: new Intl.DateTimeFormat(locale, { month: 'short' }).format(date),
  };
}

/** Multi-day events read as a range; single-day events fall back to one date. */
export function formatDateRange(start: string, end: string | undefined, lang: Language): string {
  if (!end || end === start) return formatDate(start, lang);
  return `${formatDateShort(start, lang)} – ${formatDateShort(end, lang)}`;
}

/** 24-hour "HH:mm" → localised 12-hour time. */
export function formatTime(hhmm: string, lang: Language): string {
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm.trim());
  if (!match) return hhmm;
  const date = new Date(2000, 0, 1, Number(match[1]), Number(match[2]));
  return new Intl.DateTimeFormat(LOCALES[lang], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

/** Machine-readable datetime for <time datetime="…"> attributes. */
export function toDateTimeAttr(iso: string, time?: string): string {
  return time ? `${iso}T${time}` : iso;
}

function parseIsoDate(iso: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return null;
  // Construct in local time so the day never shifts across time zones.
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

/** Whole calendar days from `today` until the ISO date; negative once it has passed. */
export function daysUntil(iso: string, today: Date = new Date()): number | null {
  const date = parseIsoDate(iso);
  if (!date) return null;
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((date.getTime() - start.getTime()) / 86_400_000);
}
