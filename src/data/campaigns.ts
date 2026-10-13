/**
 * Donation campaigns. SAMPLE DATA.
 *
 * Every figure, purpose and milestone below is illustrative only, so the page
 * design can be reviewed. The UI labels it as sample while `isSample` is true.
 * Before launch, replace this file with temple-committee-approved content (or
 * a CMS/API response of the same `Campaign` shape). Set `figures` to null to
 * show "to be published" instead of numbers.
 */
import type { Campaign } from '@/types/donation';
import { rupeesToPaise } from '@/utils/money';

export const constructionCampaign: Campaign = {
  id: 'cmp-temple-construction',
  slug: 'temple-construction',
  title: { hi: 'मंदिर निर्माण सेवा', en: 'Temple Construction Seva' },
  tagline: {
    hi: 'बाबा रुपनेश्वर नाथ मंदिर के निर्माण में सहभागी बनें',
    en: 'Be part of building Baba Rupneshwar Nath Temple',
  },
  message: {
    hi: 'मंदिर का निर्माण कार्य प्रगति पर है। हर श्रद्धालु का छोटा-बड़ा सहयोग इस धाम को आने वाली पीढ़ियों के लिए संजोने में भागीदार है।',
    en: 'Construction of the temple is under way. Every offering, small or large, helps preserve this seat of worship for the generations to come.',
  },
  purposes: [
    {
      id: 'garbhagriha',
      title: { hi: 'गर्भगृह', en: 'Garbhagriha' },
      description: {
        hi: 'शिवलिंग के चारों ओर पत्थर का गर्भगृह एवं परिक्रमा पथ।',
        en: 'The stone sanctum around the Shivling, with its circumambulation path.',
      },
    },
    {
      id: 'shikhara',
      title: { hi: 'शिखर', en: 'Shikhara' },
      description: {
        hi: 'गर्भगृह के ऊपर उठता मंदिर का शिखर एवं कलश।',
        en: 'The spire that rises above the sanctum, crowned by the kalash.',
      },
    },
    {
      id: 'mandap',
      title: { hi: 'सभा मंडप', en: 'Sabha Mandap' },
      description: {
        hi: 'आरती, कथा एवं उत्सवों के लिए छायादार सभा मंडप।',
        en: 'A covered hall for aarti, katha recitals and festivals.',
      },
    },
    {
      id: 'facilities',
      title: { hi: 'श्रद्धालु सुविधाएँ', en: 'Devotee facilities' },
      description: {
        hi: 'पेयजल, जूता-घर, रैंप तथा वृद्धजनों हेतु बैठने की व्यवस्था।',
        en: 'Drinking water, footwear stand, ramps and seating for elderly devotees.',
      },
    },
  ],
  milestones: [
    {
      id: 'foundation',
      title: { hi: 'भूमि पूजन एवं नींव', en: 'Bhoomi puja & foundation' },
      description: {
        hi: 'भूमि पूजन के पश्चात मंदिर की नींव का कार्य।',
        en: 'Foundation work following the bhoomi puja.',
      },
      status: 'completed',
      period: { hi: 'पूर्ण', en: 'Completed' },
    },
    {
      id: 'garbhagriha',
      title: { hi: 'गर्भगृह निर्माण', en: 'Garbhagriha construction' },
      description: {
        hi: 'गर्भगृह की दीवारें एवं पत्थर का कार्य।',
        en: 'Sanctum walls and stonework.',
      },
      status: 'in-progress',
      period: { hi: 'प्रगति पर', en: 'In progress' },
    },
    {
      id: 'shikhara',
      title: { hi: 'शिखर एवं कलश', en: 'Shikhara & kalash' },
      description: {
        hi: 'शिखर का निर्माण एवं कलश स्थापना।',
        en: 'Raising the spire and installing the kalash.',
      },
      status: 'planned',
      period: { hi: 'आगामी', en: 'Planned' },
    },
    {
      id: 'mandap',
      title: { hi: 'सभा मंडप एवं प्रांगण', en: 'Sabha mandap & courtyard' },
      description: {
        hi: 'सभा मंडप, प्रांगण एवं श्रद्धालु सुविधाएँ।',
        en: 'The hall, courtyard and devotee facilities.',
      },
      status: 'planned',
      period: { hi: 'आगामी', en: 'Planned' },
    },
  ],
  figures: {
    goalAmount: rupeesToPaise(25100000),
    raisedAmount: rupeesToPaise(3840000),
    contributorCount: 412,
    asOf: '2026-10-01',
  },
  status: 'active',
  isSample: true,
};

export const campaigns: Campaign[] = [constructionCampaign];

export function getCampaignById(id: string): Campaign | undefined {
  return campaigns.find((campaign) => campaign.id === id);
}
