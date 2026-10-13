import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LanguageProvider } from '@/context/LanguageProvider';
import { STORAGE_KEY } from '@/i18n';
import { events } from '@/data/events';
import { EventCarousel } from './EventCarousel';

// jsdom has no layout: fake a track that is 300px wide with 1000px of content.
const scrollTo = vi.fn();
const originals = {
  clientWidth: Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth'),
  scrollWidth: Object.getOwnPropertyDescriptor(Element.prototype, 'scrollWidth'),
};

beforeEach(() => {
  window.localStorage.setItem(STORAGE_KEY, 'en');
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, get: () => 300 });
  Object.defineProperty(Element.prototype, 'scrollWidth', { configurable: true, get: () => 1000 });
  Element.prototype.scrollTo = scrollTo as unknown as typeof Element.prototype.scrollTo;
});

afterEach(() => {
  window.localStorage.clear();
  scrollTo.mockClear();
  if (originals.clientWidth) Object.defineProperty(HTMLElement.prototype, 'clientWidth', originals.clientWidth);
  if (originals.scrollWidth) Object.defineProperty(Element.prototype, 'scrollWidth', originals.scrollWidth);
});

const sample = events.slice(0, 4);

function renderCarousel() {
  return render(
    <MemoryRouter>
      <LanguageProvider>
        <EventCarousel events={sample} />
      </LanguageProvider>
    </MemoryRouter>
  );
}

describe('EventCarousel', () => {
  it('renders every event as a labelled slide with its details and a View Details link', () => {
    renderCarousel();
    const carousel = screen.getByRole('region', { name: 'Upcoming events carousel' });
    const slides = within(carousel).getAllByRole('group', { name: /^Event \d of 4$/ });
    expect(slides).toHaveLength(4);

    const first = within(slides[0]);
    expect(first.getByRole('heading', { level: 3 })).toHaveTextContent(sample[0].titleHindi);
    expect(first.getByText(sample[0].titleEnglish)).toBeInTheDocument();
    expect(first.getByRole('img')).toHaveAttribute('alt', sample[0].imageAlt.en);
    expect(first.getByRole('link', { name: new RegExp(`View details.*${sample[0].titleEnglish}`, 'i') }))
      .toHaveAttribute('href', `/events/${sample[0].slug}`);
  });

  it('does not hide visible slides from assistive technology', () => {
    renderCarousel();
    screen.getAllByRole('group', { name: /^Event \d of 4$/ }).forEach((slide) => {
      expect(slide).not.toHaveAttribute('aria-hidden');
    });
  });

  it('has labelled previous/next buttons; previous is unavailable at the start', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const previous = screen.getAllByRole('button', { name: 'Previous event' })[0];
    const next = screen.getAllByRole('button', { name: 'Next event' })[0];
    await waitFor(() => expect(previous).toHaveAttribute('aria-disabled', 'true'));
    expect(next).toHaveAttribute('aria-disabled', 'false');

    await user.click(previous);
    expect(scrollTo).not.toHaveBeenCalled();

    await user.click(next);
    expect(scrollTo).toHaveBeenCalledTimes(1);
  });

  it('moves with the arrow keys when the track has focus', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const track = screen.getByRole('group', { name: /arrow keys/i });
    await waitFor(() =>
      expect(screen.getAllByRole('button', { name: 'Next event' })[0]).toHaveAttribute('aria-disabled', 'false')
    );
    track.focus();
    await user.keyboard('{ArrowRight}');
    expect(scrollTo).toHaveBeenCalledTimes(1);
    await user.keyboard('{End}');
    expect(scrollTo).toHaveBeenCalledTimes(2);
  });

  it('does not auto-advance', () => {
    vi.useFakeTimers();
    try {
      renderCarousel();
      vi.advanceTimersByTime(30_000);
      expect(scrollTo).not.toHaveBeenCalled();
      expect(screen.queryByRole('button', { name: /pause|resume/i })).not.toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it('has a dot per event that scrolls to it, with the visible ones marked', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const dots = await screen.findAllByRole('button', { name: /^Go to event \d$/ });
    expect(dots).toHaveLength(4);
    await waitFor(() => expect(dots[0]).toHaveAttribute('aria-current', 'true'));

    await user.click(dots[2]);
    expect(scrollTo).toHaveBeenCalledTimes(1);
  });

  it('makes the whole slide one link and shows a countdown for upcoming events', () => {
    renderCarousel();
    const slides = screen.getAllByRole('group', { name: /^Event \d of 4$/ });
    expect(within(slides[0]).getAllByRole('link')).toHaveLength(1);
    const upcoming = sample.findIndex((event) => event.status === 'upcoming');
    expect(upcoming).toBeGreaterThanOrEqual(0);
    expect(
      within(slides[upcoming]).getByText(/^(Today|Tomorrow|In \d+ days)$/)
    ).toBeInTheDocument();
  });
});
