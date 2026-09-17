import { describe, expect, it } from 'vitest';
import { translate, type TranslationKey } from './index';

describe('translate', () => {
  it('returns the Hindi string by default for a known key', () => {
    expect(translate('hi', 'site.name')).toBe('बाबा रुपनेश्वर नाथ');
  });

  it('returns the English string for a known key', () => {
    expect(translate('en', 'site.name')).toBe('Baba Rupneshwar Nath');
  });

  it('substitutes a single {placeholder} with the supplied value', () => {
    expect(translate('en', 'katha.resultsCount', { count: 4 })).toBe('4 stories');
  });

  it('substitutes multiple {placeholders} in one string', () => {
    expect(translate('en', 'events.slideLabel', { current: 2, total: 7 })).toBe('Event 2 of 7');
  });

  it('leaves an unmatched {placeholder} untouched', () => {
    const result = translate('en', 'katha.resultsCount', { unused: 'x' });
    expect(result).toBe('{count} stories');
  });

  it('falls back to the key itself when the key is missing from the dictionary', () => {
    const missingKey = 'this.key.does.not.exist' as TranslationKey;
    expect(translate('en', missingKey)).toBe(missingKey);
    expect(translate('hi', missingKey)).toBe(missingKey);
  });
});
