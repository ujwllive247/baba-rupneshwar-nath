/**
 * Shared domain models.
 *
 * Every content record carries Hindi and English fields side by side so the two
 * languages stay in sync and a CMS/API (Phase 2) can map onto the same shape.
 */

export type Language = 'hi' | 'en';

/** A pair of strings, one per supported language. */
export interface Bilingual {
  hi: string;
  en: string;
}

export type EventCategory =
  | 'mahashivratri'
  | 'sawan'
  | 'puja'
  | 'festival'
  | 'cultural'
  | 'other';

export type EventStatus = 'upcoming' | 'ongoing' | 'past';

export interface TempleEvent {
  id: string;
  /** URL segment, e.g. /events/maha-shivratri */
  slug: string;
  titleHindi: string;
  titleEnglish: string;
  descriptionHindi: string;
  descriptionEnglish: string;
  /** Long-form body, one paragraph per array item. */
  contentHindi: string[];
  contentEnglish: string[];
  image: string;
  imageAlt: Bilingual;
  /** ISO date, YYYY-MM-DD */
  date: string;
  /** ISO end date for multi-day events; optional. */
  endDate?: string;
  startTime: string;
  endTime: string;
  location: Bilingual;
  category: EventCategory;
  status: EventStatus;
  featured?: boolean;
}

export type StoryCategory =
  | 'shiv-katha'
  | 'shiv-puran'
  | 'mahadev'
  | 'shiv-parvati'
  | 'jyotirlinga'
  | 'ganesh'
  | 'kartikeya'
  | 'sawan-vishesh'
  | 'mahashivratri-vishesh'
  | 'adhyatmik-gyan';

/** One block of article body copy. Keeps content data free of raw HTML. */
export type StoryBlock =
  | { type: 'paragraph'; hi: string; en: string }
  | { type: 'heading'; hi: string; en: string }
  | { type: 'quote'; hi: string; en: string; attribution?: Bilingual }
  | { type: 'list'; items: Bilingual[] };

export interface Story {
  id: string;
  slug: string;
  titleHindi: string;
  titleEnglish: string;
  excerptHindi: string;
  excerptEnglish: string;
  image: string;
  imageAlt: Bilingual;
  category: StoryCategory;
  /** ISO date, YYYY-MM-DD */
  publishedAt: string;
  readingMinutes: number;
  author: Bilingual;
  /** Scriptural or scholarly source for Puranic content. */
  source: Bilingual;
  body: StoryBlock[];
  featured?: boolean;
  popular?: boolean;
}

/** One line of spoken dialogue attributed to a character within a comic scene. */
export interface ComicDialogueLine {
  speaker: Bilingual;
  line: Bilingual;
}

/** One panel of an immersive, scroll-based Katha comic experience. */
export interface ComicSceneData {
  id: string;
  sceneNumber: number;
  heading: Bilingual;
  narration: Bilingual;
  dialogue?: ComicDialogueLine[];
  /** A short, italicised visual/sensory detail rendered beneath the narration. */
  detail?: Bilingual;
  image: string;
  imageAlt: Bilingual;
}

/**
 * An immersive comic-style Katha chapter. Distinct from `Story` (the plain
 * article format): a chapter is scene-by-scene, scroll-driven, and always
 * names which parts are scripture-based versus creative narration.
 */
export interface KathaChapter {
  id: string;
  slug: string;
  titleHindi: string;
  titleEnglish: string;
  /** Short cinematic hook shown before Scene 1, meant to create curiosity fast. */
  hook: Bilingual;
  introduction: Bilingual;
  coverImage: string;
  coverImageAlt: Bilingual;
  /** Scriptural source(s), same convention as `Story.source`. */
  source: Bilingual;
  /** Names which elements are scripture-based vs. original creative narration. */
  scriptureNote: Bilingual;
  creativeNote: Bilingual;
  /** Note on variant tellings across recensions/regional traditions, where relevant. */
  versionsNote?: Bilingual;
  scenes: ComicSceneData[];
  /** 2–4 concise spiritual takeaways shown at the end of the chapter. */
  takeaways: Bilingual[];
  /** Slug of the matching plain-article Story, if one exists, for cross-linking. */
  relatedStorySlug?: string;
}

export type GalleryCategory =
  | 'temple'
  | 'shivling'
  | 'aarti'
  | 'festivals'
  | 'puja'
  | 'events';

export interface GalleryImage {
  id: string;
  src: string;
  /** Descriptive alt text — required, never decorative. */
  alt: Bilingual;
  caption: Bilingual;
  category: GalleryCategory;
  width: number;
  height: number;
}

export interface Announcement {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  bodyHindi: string;
  bodyEnglish: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  /** Internal route the "view details" CTA points to. */
  link?: string;
  priority: 'normal' | 'high';
}
