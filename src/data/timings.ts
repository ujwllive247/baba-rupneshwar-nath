/**
 * Darshan and aarti timings.
 *
 * SAMPLE VALUES. Times are stored as 24-hour `HH:mm` strings and formatted for
 * display per language, so changing a timing means editing one line here.
 */
import type { Bilingual, SpecialTiming, Timing } from '@/types';

export const darshanTimings: Timing[] = [
  {
    id: 'darshan-morning',
    kind: 'darshan',
    label: { hi: 'प्रातःकालीन दर्शन', en: 'Morning darshan' },
    time: { hi: '05:00–12:00', en: '05:00–12:00' },
    note: {
      hi: 'मंगला आरती के पश्चात पट खुलते हैं।',
      en: 'The sanctum opens after the morning aarti.',
    },
  },
  {
    id: 'darshan-evening',
    kind: 'darshan',
    label: { hi: 'सायंकालीन दर्शन', en: 'Evening darshan' },
    time: { hi: '16:00–21:00', en: '16:00–21:00' },
    note: {
      hi: 'संध्या आरती के समय कुछ मिनट के लिए पंक्ति रोकी जाती है।',
      en: 'The queue pauses for a few minutes during the evening aarti.',
    },
  },
];

export const aartiTimings: Timing[] = [
  {
    id: 'aarti-morning',
    kind: 'aarti',
    label: { hi: 'प्रातःकालीन आरती', en: 'Morning aarti' },
    time: { hi: '06:00', en: '06:00' },
    note: {
      hi: 'शृंगार के उपरांत मंगला आरती।',
      en: 'The mangala aarti, following the shringar.',
    },
  },
  {
    id: 'aarti-evening',
    kind: 'aarti',
    label: { hi: 'सायंकालीन आरती', en: 'Evening aarti' },
    time: { hi: '19:00', en: '19:00' },
    note: {
      hi: 'आरती के पश्चात भजन एवं प्रसाद वितरण।',
      en: 'Bhajans and prasad follow the aarti.',
    },
  },
];

/** Parsed by the UI to render the 24-hour value as localised 12-hour time. */
export const timingRanges: Record<string, { start: string; end?: string }> = {
  'darshan-morning': { start: '05:00', end: '12:00' },
  'darshan-evening': { start: '16:00', end: '21:00' },
  'aarti-morning': { start: '06:00' },
  'aarti-evening': { start: '19:00' },
};

export const specialTimings: SpecialTiming[] = [
  {
    id: 'mahashivratri',
    occasion: { hi: 'महाशिवरात्रि', en: 'Mahashivratri' },
    timing: { hi: 'पूरी रात्रि — प्रातः 4:00 से अगले दिन प्रातः 6:00 तक', en: 'Through the night — 4:00 AM to 6:00 AM the next day' },
    note: {
      hi: 'चार प्रहर की पूजा एवं रात्रि जागरण।',
      en: 'The four-prahar puja and night vigil.',
    },
  },
  {
    id: 'sawan-monday',
    occasion: { hi: 'सावन सोमवार', en: 'Mondays of Sawan' },
    timing: { hi: 'प्रातः 4:00 से रात्रि 10:00 तक', en: '4:00 AM to 10:00 PM' },
    note: {
      hi: 'जलाभिषेक हेतु अलग पंक्ति लगाई जाती है।',
      en: 'A separate queue is arranged for jalabhishek.',
    },
  },
  {
    id: 'pradosh',
    occasion: { hi: 'प्रदोष व्रत', en: 'Pradosh Vrat' },
    timing: { hi: 'सायं 4:00 से रात्रि 9:30 तक', en: '4:00 PM to 9:30 PM' },
    note: {
      hi: 'प्रदोष काल में विशेष रुद्राभिषेक।',
      en: 'A special rudrabhishek during the pradosh hour.',
    },
  },
  {
    id: 'kartik-purnima',
    occasion: { hi: 'कार्तिक पूर्णिमा', en: 'Kartik Purnima' },
    timing: { hi: 'प्रातः 5:00 से रात्रि 10:00 तक', en: '5:00 AM to 10:00 PM' },
    note: {
      hi: 'संध्या को दीपदान।',
      en: 'The offering of lamps in the evening.',
    },
  },
  {
    id: 'amavasya',
    occasion: { hi: 'अमावस्या एवं पूर्णिमा', en: 'Amavasya & Purnima' },
    timing: { hi: 'सामान्य समय, संध्या आरती 7:30 बजे', en: 'Regular hours; evening aarti at 7:30 PM' },
  },
];

export const visitorGuidelines: Bilingual[] = [
  {
    hi: 'मंदिर में प्रवेश से पूर्व पादुकाएँ बाहर निर्धारित स्थान पर रखें।',
    en: 'Leave footwear at the stand outside before entering the temple.',
  },
  {
    hi: 'गर्भगृह के भीतर फ़ोटोग्राफ़ी एवं वीडियोग्राफ़ी वर्जित है। परिसर में अनुमति है।',
    en: 'Photography and video are not permitted inside the sanctum. They are allowed in the compound.',
  },
  {
    hi: 'जलाभिषेक हेतु जल, बेलपत्र एवं पुष्प परिसर के भीतर उपलब्ध रहते हैं।',
    en: 'Water, bilva leaves and flowers for jalabhishek are available within the compound.',
  },
  {
    hi: 'आरती के समय पंक्ति में शांति बनाए रखें और मोबाइल फ़ोन मौन रखें।',
    en: 'Please keep the queue quiet during aarti and silence mobile phones.',
  },
  {
    hi: 'प्रसाद केवल मंदिर द्वारा निर्धारित स्थान से ही लें।',
    en: 'Take prasad only from the counter designated by the temple.',
  },
  {
    hi: 'परिसर को स्वच्छ रखें — पॉलिथीन एवं प्लास्टिक का प्रयोग न करें।',
    en: 'Help keep the compound clean — please avoid polythene and plastic.',
  },
];
