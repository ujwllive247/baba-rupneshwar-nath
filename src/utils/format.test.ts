import { describe, expect, it } from 'vitest';
import { daysUntil } from './format';

describe('daysUntil', () => {
  const today = new Date(2026, 9, 13, 21, 30);

  it('counts whole calendar days regardless of the time of day', () => {
    expect(daysUntil('2026-10-13', today)).toBe(0);
    expect(daysUntil('2026-10-14', today)).toBe(1);
    expect(daysUntil('2026-11-02', today)).toBe(20);
  });

  it('is negative for past dates and null for malformed input', () => {
    expect(daysUntil('2026-10-10', today)).toBe(-3);
    expect(daysUntil('not-a-date', today)).toBeNull();
  });
});
