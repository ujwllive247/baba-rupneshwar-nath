/** Temple announcements. SAMPLE DATA — highest-priority item shows on the home page. */
import type { Announcement } from '@/types';
import { PATHS } from '@/routes/paths';

export const announcements: Announcement[] = [
  {
    id: 'ann-katha-week',
    titleHindi: 'शिव महापुराण कथा — सप्ताह भर का आयोजन',
    titleEnglish: 'Shiva Mahapurana Katha — a week-long recital',
    bodyHindi:
      'मंदिर प्रांगण में प्रतिदिन सायं 5:00 बजे से शिव महापुराण कथा का आयोजन हो रहा है। सभी श्रद्धालु सादर आमंत्रित हैं।',
    bodyEnglish:
      'A recital of the Shiva Mahapurana is being held in the temple courtyard each evening from 5:00 PM. All devotees are warmly invited.',
    date: '2026-09-11',
    link: PATHS.eventDetail('shiv-mahapuran-katha'),
    priority: 'high',
  },
  {
    id: 'ann-timing-change',
    titleHindi: 'संध्या आरती के समय में अस्थायी परिवर्तन',
    titleEnglish: 'Temporary change to the evening aarti time',
    bodyHindi:
      'कथा आयोजन की अवधि में संध्या आरती 7:00 के स्थान पर 7:30 बजे होगी। दर्शन का समय यथावत रहेगा।',
    bodyEnglish:
      'For the duration of the katha, the evening aarti will be at 7:30 PM instead of 7:00 PM. Darshan hours remain unchanged.',
    date: '2026-09-10',
    link: PATHS.darshan,
    priority: 'normal',
  },
];
