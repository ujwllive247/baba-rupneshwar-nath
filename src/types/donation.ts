/**
 * Donation domain models — Temple Construction Seva.
 *
 * These shapes are deliberately backend-ready: the Phase 1 demo stores them in
 * sessionStorage, and a future API returns the same records. Keep UI code
 * dependent on these types only, never on a payment provider's own objects.
 */
import type { Bilingual } from './index';

/** Amounts are always integer paise (₹1 = 100) — never floating-point rupees. */
export type Paise = number;

export type CampaignStatus = 'active' | 'paused' | 'closed';

export type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

export interface ConstructionMilestone {
  id: string;
  title: Bilingual;
  description: Bilingual;
  status: MilestoneStatus;
  /** Free-form period label, e.g. "2025" or "Planned". */
  period: Bilingual;
}

export interface CampaignPurpose {
  id: string;
  title: Bilingual;
  description: Bilingual;
}

export interface CampaignFigures {
  goalAmount: Paise;
  raisedAmount: Paise;
  contributorCount: number;
  /** ISO date the figures were last updated. */
  asOf: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: Bilingual;
  tagline: Bilingual;
  message: Bilingual;
  purposes: CampaignPurpose[];
  milestones: ConstructionMilestone[];
  /** `null` until the temple committee publishes real figures. */
  figures: CampaignFigures | null;
  status: CampaignStatus;
  /** True while any of the above is illustrative sample content. */
  isSample: boolean;
}

export interface Donor {
  name: string;
  /** 10-digit Indian mobile number, digits only. */
  mobile: string;
  email?: string;
  /** Name is not shown publicly (contact details are still kept for the confirmation). */
  isAnonymous: boolean;
}

/** Lifecycle of the donation itself — independent of any single payment attempt. */
export type DonationStatus = 'CREATED' | 'PAYMENT_PENDING' | 'CONFIRMED' | 'FAILED' | 'CANCELLED';

/** Lifecycle of one payment attempt. INITIATED is the "created" state. */
export type PaymentStatus = 'INITIATED' | 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';

export interface PaymentAttempt {
  id: string;
  donationId: string;
  /** Provider id, e.g. "dummy". */
  provider: string;
  status: PaymentStatus;
  /** Gateway transaction / UTR reference, once known. */
  providerReference?: string;
  failureReason?: string;
  /** What the payment screen renders for this attempt — kept so a refresh can redraw it. */
  session: PaymentSession;
  createdAt: string;
  completedAt?: string;
}

export interface Donation {
  id: string;
  campaignId: string;
  amount: Paise;
  currency: 'INR';
  donor: Donor;
  status: DonationStatus;
  /** Prevents a double-submitted form from creating two donations. */
  idempotencyKey: string;
  /** ISO time the donor accepted the consent notice. */
  consentAt: string;
  createdAt: string;
  updatedAt: string;
  paymentAttempts: PaymentAttempt[];
  /** True for every donation created through the demo provider. */
  isDemo: boolean;
}

/** What the donor submits from the form. */
export interface DonationRequest {
  campaignId: string;
  amount: Paise;
  donor: Donor;
  consentAt: string;
  idempotencyKey: string;
}

/** Outcome reported by a provider for one attempt. */
export interface PaymentResult {
  attemptId: string;
  status: PaymentStatus;
  providerReference?: string;
  failureReason?: string;
  /**
   * True only when the result was verified server-side (gateway signature or
   * webhook). A live donation is never confirmed from an unverified result.
   */
  verified: boolean;
}

/** What the payment screen needs to render — QR, redirect or embedded checkout. */
export interface PaymentSession {
  attemptId: string;
  method: 'qr' | 'redirect';
  qr?: {
    imageSrc: string;
    /** True for the non-scannable demo image. */
    isDemo: boolean;
  };
  redirectUrl?: string;
  expiresAt: string;
}

/**
 * Data behind the Seva Confirmation — and, later, a numbered Donation Receipt.
 * `receiptNumber` stays null until the temple office issues one server-side.
 */
export interface SevaConfirmation {
  donationId: string;
  receiptNumber: string | null;
  campaignTitle: Bilingual;
  amount: Paise;
  donorName: string;
  isAnonymous: boolean;
  maskedMobile: string;
  email?: string;
  paymentStatus: PaymentStatus;
  paymentReference?: string;
  confirmedAt: string;
  isDemo: boolean;
}
