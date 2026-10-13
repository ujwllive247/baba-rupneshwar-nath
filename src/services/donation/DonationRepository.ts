import type { Donation } from '@/types/donation';

/**
 * Where donations are kept. The demo uses sessionStorage; a backend build
 * swaps in an API-backed implementation of this same interface.
 */
export interface DonationRepository {
  save(donation: Donation): Promise<void>;
  get(id: string): Promise<Donation | null>;
  findByIdempotencyKey(key: string): Promise<Donation | null>;
}

const STORAGE_PREFIX = 'brn:donation:';

/**
 * sessionStorage, not localStorage: it survives a refresh on the payment page
 * but is cleared when the tab closes, so donor details never linger on a
 * shared device. Falls back to memory when storage is unavailable.
 */
export class SessionDonationRepository implements DonationRepository {
  private memory = new Map<string, Donation>();

  private storage(): Storage | null {
    try {
      return window.sessionStorage;
    } catch {
      return null;
    }
  }

  async save(donation: Donation): Promise<void> {
    this.memory.set(donation.id, donation);
    try {
      this.storage()?.setItem(STORAGE_PREFIX + donation.id, JSON.stringify(donation));
    } catch {
      // Memory copy still serves this page view.
    }
  }

  async get(id: string): Promise<Donation | null> {
    try {
      const raw = this.storage()?.getItem(STORAGE_PREFIX + id);
      if (raw) return JSON.parse(raw) as Donation;
    } catch {
      // Fall through to memory.
    }
    return this.memory.get(id) ?? null;
  }

  async findByIdempotencyKey(key: string): Promise<Donation | null> {
    for (const donation of this.memory.values()) {
      if (donation.idempotencyKey === key) return donation;
    }
    const storage = this.storage();
    if (!storage) return null;
    try {
      for (let index = 0; index < storage.length; index += 1) {
        const storageKey = storage.key(index);
        if (!storageKey?.startsWith(STORAGE_PREFIX)) continue;
        const donation = JSON.parse(storage.getItem(storageKey) ?? 'null') as Donation | null;
        if (donation?.idempotencyKey === key) return donation;
      }
    } catch {
      // Treat unreadable storage as "not found".
    }
    return null;
  }
}
