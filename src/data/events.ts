/**
 * Temple events and festivals. SAMPLE DATA.
 *
 * `status` is derived from the dates rather than stored, so the listing never
 * goes stale as time passes. A Phase 2 CMS can either keep deriving it or send
 * an explicit status — the `TempleEvent` shape is unchanged either way.
 */
import type { TempleEvent } from '@/types';

type EventSeed = Omit<TempleEvent, 'status'>;

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function toDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** upcoming → before the start date · ongoing → within the range · past → after it. */
function withStatus(seed: EventSeed): TempleEvent {
  const today = startOfToday();
  const start = toDate(seed.date);
  const end = toDate(seed.endDate ?? seed.date);
  const status = today < start ? 'upcoming' : today > end ? 'past' : 'ongoing';
  return { ...seed, status };
}

const seeds: EventSeed[] = [
  {
    id: 'evt-shiv-mahapuran-katha',
    slug: 'shiv-mahapuran-katha',
    titleHindi: 'शिव महापुराण कथा सप्ताह',
    titleEnglish: 'Shiva Mahapurana Katha Week',
    descriptionHindi:
      'सात दिवसीय कथा आयोजन, जिसमें प्रतिदिन सायं शिव महापुराण के प्रसंगों का वाचन होता है।',
    descriptionEnglish:
      'A seven-day recital in which episodes from the Shiva Mahapurana are read each evening.',
    contentHindi: [
      'मंदिर प्रांगण में सात दिनों तक शिव महापुराण की कथा का वाचन किया जा रहा है। प्रतिदिन सायं 5:00 बजे कथा आरंभ होती है और लगभग 7:00 बजे संध्या आरती के साथ उस दिन का सत्र पूर्ण होता है।',
      'कथा में सृष्टि की उत्पत्ति, समुद्र मंथन, शिव-पार्वती विवाह तथा द्वादश ज्योतिर्लिंगों के प्रसंग क्रमशः सुनाए जाते हैं। वाचन हिंदी में होता है और मुख्य श्लोकों का अर्थ भी बताया जाता है।',
      'श्रद्धालुओं के लिए बैठने की व्यवस्था प्रांगण में की गई है। वृद्ध एवं दिव्यांग आगंतुकों के लिए आगे की पंक्ति आरक्षित रहती है।',
    ],
    contentEnglish: [
      'A recital of the Shiva Mahapurana is being held in the temple courtyard across seven days. Each session begins at 5:00 PM and closes around 7:00 PM with the evening aarti.',
      'The readings move in sequence through the creation of the world, the churning of the ocean, the marriage of Shiva and Parvati, and the accounts of the twelve Jyotirlingas. The recital is in Hindi, with the meaning of the principal verses explained alongside.',
      'Seating is arranged in the courtyard. The front rows are kept for elderly visitors and visitors with disabilities.',
    ],
    image: '/images/event-rudrabhishek.svg',
    imageAlt: {
      hi: 'मंदिर प्रांगण में कथा वाचन के लिए सजा मंच',
      en: 'A decorated platform set for the katha recital in the temple courtyard',
    },
    date: '2026-09-11',
    endDate: '2026-09-17',
    startTime: '17:00',
    endTime: '19:00',
    location: { hi: 'मंदिर प्रांगण', en: 'Temple courtyard' },
    category: 'cultural',
    featured: true,
  },
  {
    id: 'evt-masik-shivratri',
    slug: 'shivratri-vishesh-puja',
    titleHindi: 'शिवरात्रि विशेष पूजा',
    titleEnglish: 'Special Shivratri Puja',
    descriptionHindi:
      'मासिक शिवरात्रि पर रात्रि में विशेष अभिषेक एवं पूजन, जिसमें सभी श्रद्धालु सम्मिलित हो सकते हैं।',
    descriptionEnglish:
      'A special night abhishek and puja on the monthly Shivratri, open to all devotees.',
    contentHindi: [
      'प्रत्येक मास की कृष्ण पक्ष चतुर्दशी को मासिक शिवरात्रि मनाई जाती है। इस दिन मंदिर में संध्या से रात्रि तक विशेष पूजन होता है।',
      'पूजन में पंचामृत अभिषेक, बेलपत्र अर्पण एवं रुद्र पाठ सम्मिलित हैं। श्रद्धालु स्वयं जल एवं बेलपत्र अर्पित कर सकते हैं।',
      'व्रत रखने वाले श्रद्धालुओं के लिए रात्रि 9:30 बजे प्रसाद वितरण की व्यवस्था रहती है।',
    ],
    contentEnglish: [
      'The monthly Shivratri falls on the fourteenth day of the waning moon. On this day the temple holds a special worship from evening into the night.',
      'The rite includes the panchamrit abhishek, the offering of bilva leaves and a recitation of the Rudra. Devotees may make their own offering of water and leaves.',
      'Prasad is distributed at 9:30 PM for those keeping the fast.',
    ],
    image: '/images/event-shivratri-puja.svg',
    imageAlt: {
      hi: 'शिवरात्रि पूजा के लिए दीपों से सजा गर्भगृह',
      en: 'The sanctum lit with lamps for the Shivratri puja',
    },
    date: '2026-09-29',
    startTime: '18:30',
    endTime: '22:00',
    location: { hi: 'गर्भगृह एवं मुख्य मंडप', en: 'Sanctum and main hall' },
    category: 'puja',
    featured: true,
  },
  {
    id: 'evt-bhajan-sandhya',
    slug: 'bhajan-sandhya',
    titleHindi: 'भजन संध्या',
    titleEnglish: 'Bhajan Sandhya',
    descriptionHindi:
      'स्थानीय भजन मंडलियों द्वारा शिव भजनों की संध्या, जो संध्या आरती के पश्चात आरंभ होती है।',
    descriptionEnglish:
      'An evening of Shiva bhajans by local groups, beginning after the evening aarti.',
    contentHindi: [
      'मंदिर परिसर में मासिक भजन संध्या का आयोजन होता है, जिसमें क्षेत्र की भजन मंडलियाँ भाग लेती हैं।',
      'कार्यक्रम संध्या आरती के तुरंत पश्चात आरंभ होता है और लगभग दो घंटे चलता है। हारमोनियम, ढोलक और मंजीरे के साथ पारंपरिक शिव भजन प्रस्तुत किए जाते हैं।',
      'भाग लेने की इच्छुक मंडलियाँ मंदिर कार्यालय से संपर्क कर सकती हैं।',
    ],
    contentEnglish: [
      'The temple holds a monthly evening of bhajans in which singing groups from the area take part.',
      'The programme starts immediately after the evening aarti and runs for about two hours, with traditional Shiva bhajans accompanied by harmonium, dholak and manjira.',
      'Groups wishing to take part may contact the temple office.',
    ],
    image: '/images/event-bhajan-sandhya.svg',
    imageAlt: {
      hi: 'संध्या के समय भजन गाते श्रद्धालुओं का समूह',
      en: 'A group of devotees singing bhajans in the evening',
    },
    date: '2026-10-18',
    startTime: '19:30',
    endTime: '21:30',
    location: { hi: 'मंदिर प्रांगण', en: 'Temple courtyard' },
    category: 'cultural',
  },
  {
    id: 'evt-annakut',
    slug: 'annakut-mahotsav',
    titleHindi: 'अन्नकूट महोत्सव',
    titleEnglish: 'Annakut Mahotsav',
    descriptionHindi:
      'दीपावली के पश्चात होने वाला अन्नकूट, जिसमें विविध व्यंजनों का भोग अर्पित कर प्रसाद वितरित किया जाता है।',
    descriptionEnglish:
      'The Annakut following Diwali, when a wide offering of food is made and then shared as prasad.',
    contentHindi: [
      'अन्नकूट में श्रद्धालु अपने घरों से बने व्यंजन मंदिर में अर्पित करते हैं। भोग अर्पण के पश्चात यह समस्त सामग्री प्रसाद के रूप में वितरित की जाती है।',
      'आयोजन में सम्मिलित होने वाले परिवार प्रातः 9:00 बजे तक सामग्री मंदिर कार्यालय में पहुँचा सकते हैं।',
      'प्रसाद वितरण दोपहर 12:00 बजे से आरंभ होता है और सामग्री समाप्त होने तक चलता है।',
    ],
    contentEnglish: [
      'At Annakut, devotees bring food prepared at home to offer at the temple. After the offering, all of it is distributed as prasad.',
      'Families taking part may bring their contribution to the temple office by 9:00 AM.',
      'Distribution begins at noon and continues until the offering is finished.',
    ],
    image: '/images/event-annakut.svg',
    imageAlt: {
      hi: 'अन्नकूट के लिए सजाए गए भोग के थाल',
      en: 'Platters of food arranged for the Annakut offering',
    },
    date: '2026-11-09',
    startTime: '09:00',
    endTime: '15:00',
    location: { hi: 'मुख्य मंडप', en: 'Main hall' },
    category: 'festival',
  },
  {
    id: 'evt-kartik-purnima',
    slug: 'kartik-purnima',
    titleHindi: 'कार्तिक पूर्णिमा दीपदान',
    titleEnglish: 'Kartik Purnima Deepdan',
    descriptionHindi:
      'कार्तिक पूर्णिमा की संध्या को मंदिर परिसर में दीपदान एवं विशेष आरती।',
    descriptionEnglish:
      'The offering of lamps and a special aarti in the temple compound on the evening of Kartik Purnima.',
    contentHindi: [
      'कार्तिक पूर्णिमा की संध्या को मंदिर परिसर में दीप प्रज्वलित किए जाते हैं। श्रद्धालु स्वयं दीप अर्पित कर सकते हैं।',
      'दीपदान के पश्चात विशेष आरती होती है, जिसमें बड़ी संख्या में श्रद्धालु सम्मिलित होते हैं।',
      'दीप एवं बाती मंदिर परिसर में उपलब्ध रहते हैं। कृपया परिसर में प्लास्टिक की सामग्री न लाएँ।',
    ],
    contentEnglish: [
      'On the evening of Kartik Purnima, lamps are lit through the temple compound and devotees may place their own.',
      'A special aarti follows the lamp offering, attended by a large gathering.',
      'Lamps and wicks are available within the compound. Please do not bring plastic items into the grounds.',
    ],
    image: '/images/event-kartik-purnima.svg',
    imageAlt: {
      hi: 'कार्तिक पूर्णिमा पर प्रज्वलित दीपों की पंक्तियाँ',
      en: 'Rows of lit lamps on Kartik Purnima',
    },
    date: '2026-11-24',
    startTime: '17:30',
    endTime: '21:00',
    location: { hi: 'मंदिर परिसर', en: 'Temple compound' },
    category: 'festival',
  },
  {
    id: 'evt-mahashivratri',
    slug: 'maha-shivratri',
    titleHindi: 'महाशिवरात्रि महोत्सव',
    titleEnglish: 'Maha Shivratri Festival',
    descriptionHindi:
      'वर्ष का सबसे बड़ा आयोजन — रात्रि जागरण, चार प्रहर की पूजा एवं निरंतर जलाभिषेक।',
    descriptionEnglish:
      'The largest gathering of the year — a night vigil, the four-prahar puja and continuous jalabhishek.',
    contentHindi: [
      'महाशिवरात्रि पर मंदिर के पट प्रातः 4:00 बजे खुलते हैं और अगले दिन प्रातः तक दर्शन चलते रहते हैं। यह मंदिर का सबसे बड़ा वार्षिक आयोजन है।',
      'रात्रि को चार प्रहर की पूजा होती है — प्रत्येक प्रहर में क्रमशः जल, दूध, दही एवं मधु से अभिषेक किया जाता है। शिव पुराण में इस विधि का वर्णन मिलता है।',
      'श्रद्धालुओं की अधिक संख्या को देखते हुए पंक्ति व्यवस्था, पेयजल एवं प्राथमिक चिकित्सा की व्यवस्था की जाती है। कृपया बच्चों एवं वृद्धजनों का विशेष ध्यान रखें।',
    ],
    contentEnglish: [
      'On Mahashivratri the sanctum opens at 4:00 AM and darshan continues through the night until the following morning. This is the temple’s largest gathering of the year.',
      'The four-prahar puja is performed through the night, with abhishek of water, milk, curd and honey in turn. The Shiva Purana describes this sequence.',
      'Given the numbers, queue management, drinking water and first aid are arranged. Please keep children and elderly family members close.',
    ],
    image: '/images/event-mahashivratri.svg',
    imageAlt: {
      hi: 'महाशिवरात्रि पर दीपों एवं पुष्पों से सजा मंदिर',
      en: 'The temple decorated with lamps and flowers for Mahashivratri',
    },
    date: '2027-03-06',
    startTime: '04:00',
    endTime: '23:59',
    location: { hi: 'संपूर्ण मंदिर परिसर', en: 'The whole temple compound' },
    category: 'mahashivratri',
    featured: true,
  },
  {
    id: 'evt-sawan-somvar',
    slug: 'sawan-somvar',
    titleHindi: 'सावन सोमवार जलाभिषेक',
    titleEnglish: 'Sawan Somvar Jalabhishek',
    descriptionHindi:
      'सावन मास के प्रत्येक सोमवार को प्रातः से रात्रि तक जलाभिषेक एवं रुद्राभिषेक।',
    descriptionEnglish:
      'Jalabhishek and rudrabhishek from morning until night on each Monday of Sawan.',
    contentHindi: [
      'सावन मास के सोमवार शिव उपासना के लिए विशेष माने जाते हैं। इन दिनों मंदिर प्रातः 4:00 बजे से रात्रि 10:00 बजे तक खुला रहता है।',
      'जलाभिषेक के लिए अलग पंक्ति लगाई जाती है ताकि सामान्य दर्शन बाधित न हों। कावड़ लेकर आने वाले श्रद्धालुओं के लिए पृथक प्रवेश द्वार रहता है।',
      'यह आयोजन सावन मास के प्रत्येक सोमवार को दोहराया जाता है।',
    ],
    contentEnglish: [
      'The Mondays of Sawan are held to be particularly auspicious for Shiva worship. On these days the temple stays open from 4:00 AM to 10:00 PM.',
      'A separate queue is arranged for jalabhishek so that ordinary darshan is not held up. Devotees arriving with a kanwar use a separate entrance.',
      'This observance repeats on every Monday of the month of Sawan.',
    ],
    image: '/images/event-sawan-somvar.svg',
    imageAlt: {
      hi: 'सावन सोमवार पर शिवलिंग का जलाभिषेक करते श्रद्धालु',
      en: 'Devotees offering water at the Shivling on a Monday of Sawan',
    },
    date: '2026-07-27',
    startTime: '04:00',
    endTime: '22:00',
    location: { hi: 'गर्भगृह', en: 'Sanctum' },
    category: 'sawan',
  },
  {
    id: 'evt-nag-panchami',
    slug: 'nag-panchami',
    titleHindi: 'नाग पंचमी पूजन',
    titleEnglish: 'Nag Panchami Puja',
    descriptionHindi:
      'नाग पंचमी पर शिवलिंग एवं नाग देवता का विशेष पूजन तथा दुग्ध अर्पण।',
    descriptionEnglish:
      'Special worship and an offering of milk at the Shivling and the Nag shrine on Nag Panchami.',
    contentHindi: [
      'नाग पंचमी पर मंदिर में शिवलिंग तथा परिसर स्थित नाग प्रतिमा का विशेष पूजन किया जाता है।',
      'श्रद्धालु दूध, लावा एवं पुष्प अर्पित करते हैं। पूजन प्रातः 7:00 बजे आरंभ होकर दोपहर तक चलता है।',
      'यह आयोजन श्रावण मास के शुक्ल पक्ष की पंचमी को होता है।',
    ],
    contentEnglish: [
      'On Nag Panchami, special worship is offered at the Shivling and at the Nag shrine in the compound.',
      'Devotees offer milk, puffed grain and flowers. The worship begins at 7:00 AM and continues until midday.',
      'The observance falls on the fifth day of the waxing moon in the month of Shravan.',
    ],
    image: '/images/event-nag-panchami.svg',
    imageAlt: {
      hi: 'नाग पंचमी पर दुग्ध अर्पण करते श्रद्धालु',
      en: 'Devotees offering milk on Nag Panchami',
    },
    date: '2026-08-18',
    startTime: '07:00',
    endTime: '13:00',
    location: { hi: 'गर्भगृह एवं नाग मंदिर', en: 'Sanctum and Nag shrine' },
    category: 'puja',
  },
];

export const events: TempleEvent[] = seeds.map(withStatus);

const byDateAscending = (a: TempleEvent, b: TempleEvent) => a.date.localeCompare(b.date);
const byDateDescending = (a: TempleEvent, b: TempleEvent) => b.date.localeCompare(a.date);

/** Ongoing events lead, then the nearest upcoming ones. */
export const upcomingEvents: TempleEvent[] = events
  .filter((event) => event.status !== 'past')
  .sort((a, b) => {
    if (a.status !== b.status) return a.status === 'ongoing' ? -1 : 1;
    return byDateAscending(a, b);
  });

export const pastEvents: TempleEvent[] = events
  .filter((event) => event.status === 'past')
  .sort(byDateDescending);

export function getEventBySlug(slug: string): TempleEvent | undefined {
  return events.find((event) => event.slug === slug);
}

/** Other events to show on a detail page — same category first, then nearest by date. */
export function getRelatedEvents(event: TempleEvent, limit = 3): TempleEvent[] {
  return events
    .filter((candidate) => candidate.id !== event.id)
    .sort((a, b) => {
      const aMatch = a.category === event.category ? 0 : 1;
      const bMatch = b.category === event.category ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
      return byDateAscending(a, b);
    })
    .slice(0, limit);
}
