/**
 * Temple profile and long-form page copy.
 *
 * SAMPLE / PLACEHOLDER DATA. Address, phone, email and every historical claim
 * below are placeholders awaiting confirmation from the temple committee.
 * Sections marked `placeholder: true` render a visible notice in the UI so a
 * reader is never shown unverified history as fact.
 */
import type { Bilingual } from '@/types';
import type { TranslationKey } from '@/i18n';

export interface PageSection {
  /** Anchor id — also used by the "On this page" navigation. */
  id: string;
  headingKey: TranslationKey;
  paragraphs: Bilingual[];
  list?: Bilingual[];
  /** True when the copy is placeholder text rather than verified information. */
  placeholder?: boolean;
}

export interface SourceReference {
  id: string;
  label: Bilingual;
  note: Bilingual;
}

export const templeInfo = {
  address: {
    hi: 'बाबा रुपनेश्वर नाथ मंदिर, एयरपोर्ट रोड, भौवाड़ा, मधुबनी, बिहार — 847212',
    en: 'Baba Rupneshwar Nath Temple, Airport road, Bhauwara, Madhubani, Bihar — 847212',
  } satisfies Bilingual,
  landmark: {
    hi: '[निकटतम चौराहा / बस स्टैंड का नाम] से लगभग 1 किलोमीटर',
    en: 'About 1 km from [nearest crossing / bus stand]',
  } satisfies Bilingual,
  phone: '+91 9472507877',
  email: 'info@babarupneshwarnath.com',
  officeHours: {
    hi: 'प्रतिदिन प्रातः 8:00 से सायं 6:00 तक',
    en: 'Daily, 8:00 AM to 6:00 PM',
  } satisfies Bilingual,
  /** Used to build a Google Maps search link until exact coordinates are confirmed. */
  mapQuery: 'Baba Rupneshwar Nath Temple, Airport Road, Bhauwara, Madhubani, Bihar 847212',
} as const;

export const directions: { id: string; labelKey: TranslationKey; detail: Bilingual }[] = [
  {
    id: 'road',
    labelKey: 'reach.byRoad',
    detail: {
      hi: 'मुख्य मार्ग से मंदिर तक पक्की सड़क है। निजी वाहन के लिए मंदिर परिसर के पास पार्किंग उपलब्ध है। स्थानीय बस एवं ऑटो सेवा दिनभर उपलब्ध रहती है।',
      en: 'A metalled road runs from the main highway to the temple. Parking is available near the temple compound, and local buses and autos run through the day.',
    },
  },
  {
    id: 'rail',
    labelKey: 'reach.byRail',
    detail: {
      hi: 'निकटतम रेलवे स्टेशन [स्टेशन का नाम] है, जो मंदिर से लगभग [दूरी] की दूरी पर है। स्टेशन से ऑटो एवं टैक्सी उपलब्ध हैं।',
      en: 'The nearest railway station is [station name], roughly [distance] from the temple. Autos and taxis are available outside the station.',
    },
  },
  {
    id: 'air',
    labelKey: 'reach.byAir',
    detail: {
      hi: 'निकटतम हवाई अड्डा [हवाई अड्डे का नाम] है, जो लगभग [दूरी] दूर है। वहाँ से टैक्सी द्वारा मंदिर तक पहुँचा जा सकता है।',
      en: 'The nearest airport is [airport name], about [distance] away, from where the temple is reachable by taxi.',
    },
  },
];

export const socialPlaceholders: { id: string; label: string }[] = [
  { id: 'facebook', label: 'Facebook' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'instagram', label: 'Instagram' },
];

// ---------------------------------------------------------------- About page

export const aboutSections: PageSection[] = [
  {
    id: 'intro',
    headingKey: 'about.introHeading',
    paragraphs: [
      {
        hi: 'बाबा रुपनेश्वर नाथ मंदिर शिव उपासना का एक स्थानीय केंद्र है। गर्भगृह में शिवलिंग स्थापित है और परिसर में नंदी, गणेश तथा नवग्रह के छोटे मंदिर हैं। प्रतिदिन प्रातः एवं संध्या आरती होती है, जिसमें आसपास के गाँवों तथा नगर से श्रद्धालु सम्मिलित होते हैं।',
        en: 'Baba Rupneshwar Nath Temple is a local centre of Shiva worship. A Shivling stands in the sanctum, and the compound holds smaller shrines to Nandi, Ganesha and the Navagraha. Morning and evening aarti are offered every day, drawing devotees from the town and the villages around it.',
      },
      {
        hi: 'मंदिर सभी आगंतुकों के लिए खुला है। दर्शन के लिए किसी शुल्क या पूर्व अनुमति की आवश्यकता नहीं है। सावन मास, महाशिवरात्रि और प्रदोष के दिनों में यहाँ विशेष भीड़ रहती है।',
        en: 'The temple is open to all visitors. Darshan requires no fee and no prior permission. The month of Sawan, Mahashivratri and Pradosh days see the largest gatherings.',
      },
    ],
  },
  {
    id: 'history',
    headingKey: 'about.historyHeading',
    paragraphs: [
      {
        hi: 'मंदिर की स्थापना तिथि, संस्थापक और प्रारंभिक निर्माण से जुड़ा विवरण अभी प्रमाणित नहीं है। मंदिर समिति द्वारा अभिलेखों की जाँच की जा रही है। सत्यापन के बाद यह अनुभाग वास्तविक जानकारी से बदला जाएगा।',
        en: 'The date of establishment, the founder, and details of the earliest construction are not yet verified. The temple committee is reviewing available records, and this section will be replaced with confirmed information once that work is complete.',
      },
    ],
    placeholder: true,
  },
  {
    id: 'significance',
    headingKey: 'about.significanceHeading',
    paragraphs: [
      {
        hi: 'शैव परंपरा में शिवलिंग निराकार ब्रह्म का प्रतीक माना जाता है। जल, दूध, बेलपत्र और भस्म से किया गया अभिषेक शिव पूजन का मूल अंग है — यह विधि शिव पुराण तथा लिंग पुराण में वर्णित है।',
        en: 'In the Shaiva tradition the Shivling is understood as a symbol of the formless absolute. Abhishek with water, milk, bilva leaves and ash is central to Shiva worship, a practice described in the Shiva Purana and the Linga Purana.',
      },
      {
        hi: 'सोमवार शिव को समर्पित माना जाता है, और सावन मास के सोमवार विशेष रूप से महत्वपूर्ण हैं। इन दिनों मंदिर में रुद्राभिषेक एवं जलाभिषेक के लिए श्रद्धालुओं की संख्या बढ़ जाती है।',
        en: 'Monday is held to be dedicated to Shiva, and the Mondays of Sawan are considered especially significant. On these days the temple sees many more devotees for rudrabhishek and jalabhishek.',
      },
    ],
  },
  {
    id: 'traditions',
    headingKey: 'about.traditionsHeading',
    paragraphs: [
      {
        hi: 'मंदिर में प्रतिदिन निभाई जाने वाली परंपराएँ इस प्रकार हैं:',
        en: 'The practices followed at the temple each day are:',
      },
    ],
    list: [
      {
        hi: 'प्रातःकालीन शृंगार एवं आरती, जिसके पश्चात दर्शन आरंभ होते हैं।',
        en: 'The morning shringar and aarti, after which darshan begins.',
      },
      {
        hi: 'जलाभिषेक — श्रद्धालु स्वयं शिवलिंग पर जल एवं बेलपत्र अर्पित कर सकते हैं।',
        en: 'Jalabhishek — devotees may themselves offer water and bilva leaves at the Shivling.',
      },
      {
        hi: 'सोमवार एवं प्रदोष के दिन विशेष रुद्राभिषेक।',
        en: 'A special rudrabhishek on Mondays and on Pradosh days.',
      },
      {
        hi: 'संध्या आरती के उपरांत भजन एवं प्रसाद वितरण।',
        en: 'Bhajans and the distribution of prasad after the evening aarti.',
      },
    ],
  },
  {
    id: 'devotees',
    headingKey: 'about.devoteesHeading',
    paragraphs: [
      {
        hi: 'कई परिवारों के लिए यह मंदिर पीढ़ियों से नित्य उपासना का स्थान रहा है। विवाह, नामकरण और गृह प्रवेश जैसे अवसरों पर यहाँ आकर आशीर्वाद लेने की परंपरा है।',
        en: 'For many families this temple has been part of daily practice across generations. Visiting for a blessing at the time of a marriage, a naming ceremony or a housewarming is a long-held custom here.',
      },
      {
        hi: 'मंदिर परिसर का प्रांगण दिनभर शांत रहता है और आगंतुक बिना किसी व्यवधान के कुछ समय बैठकर ध्यान कर सकते हैं।',
        en: 'The courtyard stays quiet through the day, and visitors are free to sit a while undisturbed.',
      },
    ],
  },
  {
    id: 'trust',
    headingKey: 'about.trustHeading',
    paragraphs: [
      {
        hi: 'मंदिर का संचालन एक स्थानीय समिति द्वारा किया जाता है। समिति के सदस्यों के नाम, पंजीकरण विवरण और संपर्क जानकारी यहाँ प्रकाशित की जाएगी। यह विवरण अभी उपलब्ध नहीं है।',
        en: 'The temple is managed by a local committee. Member names, registration details and contact information will be published here. This information is not yet available.',
      },
    ],
    placeholder: true,
  },
];

// ---------------------------------------------------------------- History page

export const historySections: PageSection[] = [
  {
    id: 'origin',
    headingKey: 'history.originHeading',
    paragraphs: [
      {
        hi: 'मंदिर की उत्पत्ति, "रुपनेश्वर" नाम का स्रोत और प्रारंभिक निर्माण काल — इनमें से किसी के लिए भी अभी तक कोई प्रमाणित अभिलेख, शिलालेख अथवा दस्तावेज़ सार्वजनिक रूप से उपलब्ध नहीं है।',
        en: 'The origin of the temple, the source of the name “Rupneshwar”, and the period of its earliest construction — for none of these is a verified record, inscription or document publicly available at present.',
      },
      {
        hi: 'स्थानीय स्मृति में प्रचलित कथाएँ अवश्य हैं, किंतु उन्हें इतिहास के रूप में प्रस्तुत करना उचित नहीं होगा। मंदिर समिति द्वारा पुराने अभिलेखों, भूमि दस्तावेज़ों एवं परिवारों की स्मृति के आधार पर जानकारी एकत्र की जा रही है। सत्यापन के पश्चात ही यहाँ तिथियाँ एवं विवरण प्रकाशित किए जाएँगे।',
        en: 'Accounts do circulate in local memory, but presenting them as history would be inaccurate. The temple committee is gathering information from old records, land documents and family recollection. Dates and details will be published here only once they have been verified.',
      },
    ],
    placeholder: true,
  },
  {
    id: 'significance',
    headingKey: 'history.significanceHeading',
    paragraphs: [
      {
        hi: 'शिव उपासना की परंपरा भारत में अत्यंत प्राचीन है और शिव पुराण, लिंग पुराण तथा स्कंद पुराण में लिंग पूजन की विधि एवं महत्व का विस्तृत वर्णन मिलता है। इस मंदिर में निभाई जाने वाली पूजा पद्धति इसी व्यापक शैव परंपरा का अंग है।',
        en: 'Shiva worship is among the oldest continuous traditions in India, and the Shiva Purana, Linga Purana and Skanda Purana describe the method and meaning of linga worship in detail. The rituals followed at this temple belong to that wider Shaiva tradition.',
      },
      {
        hi: 'यह सामान्य धार्मिक पृष्ठभूमि है, न कि इस विशेष मंदिर के विषय में कोई ऐतिहासिक दावा।',
        en: 'This is general religious background, not a historical claim about this particular temple.',
      },
    ],
  },
  {
    id: 'local',
    headingKey: 'history.localHeading',
    paragraphs: [
      {
        hi: 'मंदिर आसपास के क्षेत्र के लिए एक सामाजिक केंद्र भी है। सावन मास, महाशिवरात्रि और कार्तिक पूर्णिमा पर यहाँ मेले जैसा वातावरण रहता है, और आयोजनों में स्थानीय परिवार सहयोग करते हैं।',
        en: 'The temple also serves as a social centre for the surrounding area. Sawan, Mahashivratri and Kartik Purnima bring a fair-like atmosphere, and local families take part in organising the gatherings.',
      },
      {
        hi: 'आगंतुकों की संख्या, मेले की अवधि और भागीदार गाँवों का विवरण समिति द्वारा संकलित किया जा रहा है।',
        en: 'Figures for attendance, the duration of the fair, and the villages that participate are being compiled by the committee.',
      },
    ],
    placeholder: true,
  },
  {
    id: 'traditions',
    headingKey: 'history.traditionsHeading',
    paragraphs: [
      {
        hi: 'मंदिर में वर्षभर निभाई जाने वाली मुख्य परंपराएँ:',
        en: 'The main observances kept at the temple through the year:',
      },
    ],
    list: [
      {
        hi: 'सावन मास के प्रत्येक सोमवार को विशेष जलाभिषेक एवं रुद्राभिषेक।',
        en: 'Special jalabhishek and rudrabhishek on every Monday of Sawan.',
      },
      {
        hi: 'महाशिवरात्रि पर रात्रि जागरण एवं चार प्रहर की पूजा।',
        en: 'A night vigil and the four-prahar puja on Mahashivratri.',
      },
      {
        hi: 'प्रत्येक मास की शिवरात्रि एवं प्रदोष तिथि पर संध्या पूजन।',
        en: 'Evening worship on the monthly Shivratri and on Pradosh days.',
      },
      {
        hi: 'कार्तिक पूर्णिमा पर दीपदान।',
        en: 'The offering of lamps on Kartik Purnima.',
      },
    ],
  },
  {
    id: 'beliefs',
    headingKey: 'history.beliefsHeading',
    paragraphs: [
      {
        hi: 'श्रद्धालुओं में यह आस्था है कि सच्चे मन से किया गया जलाभिषेक मन को शांति देता है और बाधाओं को दूर करता है। ऐसी मान्यताएँ भक्ति परंपरा का अंग हैं और इन्हें आस्था के रूप में ही प्रस्तुत किया जा रहा है — इनका कोई ऐतिहासिक अथवा वैज्ञानिक प्रमाण प्रस्तुत नहीं किया जा रहा।',
        en: 'Devotees hold that jalabhishek offered with sincerity brings calm and clears obstacles. Beliefs of this kind belong to devotional practice and are presented here as belief — no historical or scientific claim is being made for them.',
      },
    ],
  },
];

export const historySources: SourceReference[] = [
  {
    id: 'shiva-purana',
    label: { hi: 'शिव पुराण', en: 'Shiva Purana' },
    note: {
      hi: 'लिंग पूजन की विधि, महाशिवरात्रि एवं शिव से जुड़ी कथाओं का प्रमुख स्रोत। विभिन्न संस्करणों में पाठभेद मिलते हैं।',
      en: 'Principal source for linga worship, Mahashivratri and the narratives connected with Shiva. Recensions differ in their readings.',
    },
  },
  {
    id: 'linga-purana',
    label: { hi: 'लिंग पुराण', en: 'Linga Purana' },
    note: {
      hi: 'शिवलिंग के स्वरूप एवं उपासना पद्धति का विवेचन।',
      en: 'Discusses the form of the Shivling and the method of its worship.',
    },
  },
  {
    id: 'skanda-purana',
    label: { hi: 'स्कंद पुराण', en: 'Skanda Purana' },
    note: {
      hi: 'कार्तिकेय से संबंधित कथाओं तथा अनेक तीर्थ माहात्म्यों का स्रोत।',
      en: 'Source for narratives concerning Kartikeya and for many accounts of sacred places.',
    },
  },
  {
    id: 'committee',
    label: { hi: 'मंदिर समिति के अभिलेख', en: 'Temple committee records' },
    note: {
      hi: 'मंदिर विशेष की जानकारी — संकलन एवं सत्यापन प्रक्रियाधीन।',
      en: 'Temple-specific information — collection and verification in progress.',
    },
  },
];

// ---------------------------------------------------------------- Contact page

export const visitingNotes: Bilingual[] = [
  {
    hi: 'दर्शन निःशुल्क है। किसी भी प्रकार के शुल्क की माँग की सूचना मंदिर कार्यालय को दें।',
    en: 'Darshan is free of charge. Please report any demand for a fee to the temple office.',
  },
  {
    hi: 'मंदिर परिसर में प्रवेश से पूर्व पादुकाएँ निर्धारित स्थान पर रखें।',
    en: 'Footwear should be left at the designated stand before entering the compound.',
  },
  {
    hi: 'दिव्यांग एवं वृद्ध आगंतुकों के लिए प्रवेश द्वार के पास सहायता उपलब्ध है।',
    en: 'Assistance is available near the entrance for elderly visitors and visitors with disabilities.',
  },
  {
    hi: 'बड़े आयोजनों में समूह दर्शन हेतु कृपया कम से कम एक सप्ताह पूर्व कार्यालय से संपर्क करें।',
    en: 'For group darshan during large gatherings, please contact the office at least a week in advance.',
  },
];
