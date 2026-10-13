/**
 * Reference IDs for the demo. Every one carries "DEMO" so it can never be
 * mistaken for a real order. Real donation/order IDs must be issued by the
 * server once a backend exists.
 */
const ALPHABET = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // no 0/O/1/I — easy to read aloud

function randomCode(length: number): string {
  const bytes = new Uint8Array(length);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join('');
}

function datePart(now: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
}

/** BRN-DEMO-20261003-7K3F9Q */
export function createDemoDonationId(now = new Date()): string {
  return `BRN-DEMO-${datePart(now)}-${randomCode(6)}`;
}

export function createDemoAttemptId(): string {
  return `PAY-DEMO-${randomCode(10)}`;
}

export function createDemoTransactionRef(): string {
  return `DEMO-TXN-${randomCode(12)}`;
}

export function createIdempotencyKey(): string {
  return `idem-${randomCode(16)}`;
}

/** Shape check before an ID from the URL is used as a storage key. */
export const DONATION_ID_PATTERN = /^BRN-[A-Z]+-\d{8}-[A-Z0-9]{6}$/;
