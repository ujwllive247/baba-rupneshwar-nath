import type { StoryBlock } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface StoryBodyProps {
  blocks: StoryBlock[];
}

/** Renders a story's block-based body — paragraph/heading/quote/list — as semantic HTML. */
export function StoryBody({ blocks }: StoryBodyProps) {
  const { pick } = useLanguage();

  return (
    <div className="prose-temple">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={key} className="!mt-10 text-xl font-semibold text-ink-900">
                {pick(block)}
              </h2>
            );
          case 'quote':
            return (
              <blockquote
                key={key}
                className="border-l-4 border-saffron-400 pl-5 italic text-ink-700"
              >
                <p>{pick(block)}</p>
                {block.attribution && (
                  <cite className="mt-1.5 block text-sm not-italic text-ink-500">
                    — {pick(block.attribution)}
                  </cite>
                )}
              </blockquote>
            );
          case 'list':
            return (
              <ul key={key} className="list-disc space-y-1.5 pl-5">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{pick(item)}</li>
                ))}
              </ul>
            );
          case 'paragraph':
          default:
            return <p key={key}>{pick(block)}</p>;
        }
      })}
    </div>
  );
}
