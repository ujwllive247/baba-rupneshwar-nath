import { useLanguage } from '@/hooks/useLanguage';
import type { PageSection } from '@/data/temple';
import { PlaceholderNotice } from './PlaceholderNotice';

interface PageSectionListProps {
  sections: PageSection[];
}

/** Renders the shared shape used by the About and History pages — heading, paragraphs, optional list. */
export function PageSectionList({ sections }: PageSectionListProps) {
  const { t, pick } = useLanguage();

  return (
    <div className="space-y-14">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{t(section.headingKey)}</h2>
          <div className="prose-temple mt-4">
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{pick(paragraph)}</p>
            ))}
            {section.list && (
              <ul className="list-disc space-y-1.5 pl-5">
                {section.list.map((item, index) => (
                  <li key={index}>{pick(item)}</li>
                ))}
              </ul>
            )}
          </div>
          {section.placeholder && <PlaceholderNotice className="mt-5" />}
        </section>
      ))}
    </div>
  );
}
