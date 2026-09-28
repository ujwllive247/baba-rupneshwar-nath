import type { Bilingual } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface KathaSourceNoteProps {
  source: Bilingual;
  scriptureNote: Bilingual;
  creativeNote: Bilingual;
  versionsNote?: Bilingual;
}

/** Names the scripture(s) drawn upon, and — unlike a plain article footer — explicitly separates scripture-based content from creative narration. */
export function KathaSourceNote({ source, scriptureNote, creativeNote, versionsNote }: KathaSourceNoteProps) {
  const { t, pick } = useLanguage();

  return (
    <div className="space-y-4 rounded-2xl border border-sand-200 bg-sand-100/70 px-5 py-5 text-sm text-ink-600 sm:px-6">
      <p className="font-semibold text-ink-800">
        {t('katha.source')}: <span className="font-normal text-ink-600">{pick(source)}</span>
      </p>
      <div>
        <p className="eyebrow">{t('kathaAnubhav.sourceScriptureLabel')}</p>
        <p className="mt-1.5 leading-relaxed">{pick(scriptureNote)}</p>
      </div>
      <div>
        <p className="eyebrow">{t('kathaAnubhav.sourceCreativeLabel')}</p>
        <p className="mt-1.5 leading-relaxed">{pick(creativeNote)}</p>
      </div>
      {versionsNote && <p className="border-t border-sand-200 pt-3 italic leading-relaxed text-ink-500">{pick(versionsNote)}</p>}
    </div>
  );
}
