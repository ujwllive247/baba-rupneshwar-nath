/**
 * Mahadev Katha articles. SAMPLE / DEVOTIONAL RETELLINGS — not presented as
 * historical fact. Every story names a `source` and each body closes with a
 * plain note that Puranic accounts vary between recensions.
 */
import type { Story, StoryBlock } from '@/types';

const sourceNote: StoryBlock = {
  type: 'paragraph',
  hi: 'पौराणिक कथाओं का वर्णन विभिन्न संस्करणों एवं क्षेत्रीय परंपराओं में भिन्न-भिन्न मिलता है। यह पुनर्कथन ऊपर उल्लिखित स्रोत के अनुसार है और इसे भक्ति साहित्य के रूप में प्रस्तुत किया गया है, ऐतिहासिक अभिलेख के रूप में नहीं।',
  en: 'Puranic accounts differ between recensions and regional traditions. This retelling follows the source named above and is offered as devotional literature, not as historical record.',
};

const storiesSeed: Story[] = [
  {
    id: 'st-samudra-manthan',
    slug: 'samudra-manthan-neelkanth',
    titleHindi: 'समुद्र मंथन और नीलकंठ महादेव',
    titleEnglish: 'The Churning of the Ocean and Neelkanth Mahadev',
    excerptHindi:
      'जब समुद्र मंथन से हलाहल विष निकला, तो सृष्टि की रक्षा के लिए भगवान शिव ने उसे अपने कंठ में धारण किया।',
    excerptEnglish:
      'When the churning of the ocean brought forth the poison Halahala, Shiva held it in his throat to protect all creation.',
    image: '/images/story-samudra-manthan.svg',
    imageAlt: {
      hi: 'समुद्र मंथन का चित्रण, वासुकि नाग एवं मंदराचल पर्वत के साथ',
      en: 'A depiction of the churning of the ocean, with the serpent Vasuki and Mount Mandara',
    },
    category: 'shiv-puran',
    publishedAt: '2026-08-01',
    readingMinutes: 6,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, भागवत पुराण', en: 'Shiva Purana, Bhagavata Purana' },
    featured: true,
    popular: true,
    body: [
      {
        type: 'paragraph',
        hi: 'देवताओं एवं असुरों ने अमृत प्राप्ति हेतु क्षीरसागर का मंथन किया। मंदराचल पर्वत को मथनी और वासुकि नाग को रस्सी बनाया गया। मंथन जैसे-जैसे आगे बढ़ा, सागर से एक के बाद एक अनेक रत्न प्रकट होने लगे।',
        en: 'The devas and asuras churned the cosmic ocean in search of amrita, the nectar of immortality. Mount Mandara served as the churning rod and the serpent Vasuki as the rope. As the churning continued, one treasure after another rose from the waters.',
      },
      {
        type: 'paragraph',
        hi: 'किंतु अमृत से पूर्व सागर से हलाहल नामक भीषण विष निकला, जिसकी ज्वाला से संपूर्ण सृष्टि भस्म होने का भय उत्पन्न हो गया। भयभीत देवता एवं असुर भगवान शिव की शरण में गए।',
        en: 'Before the nectar appeared, the ocean gave up a terrible poison, Halahala, whose fumes threatened to consume all creation. Devas and asuras alike, in fear, turned to Shiva for refuge.',
      },
      {
        type: 'quote',
        hi: 'करुणा से भरकर महादेव ने वह विष अपने हाथों में लिया और कंठ में धारण कर लिया, किंतु उसे निगला नहीं।',
        en: 'Moved by compassion, Mahadev took the poison in his hands and held it in his throat — neither swallowing it nor letting it pass.',
      },
      {
        type: 'paragraph',
        hi: 'विष के प्रभाव से उनका कंठ नीला पड़ गया, और तभी से वे नीलकंठ कहलाए। माता पार्वती ने भी उस विष के प्रभाव को शांत करने में सहयोग किया, ऐसा वर्णन मिलता है।',
        en: 'The poison turned his throat blue, and from that day he came to be known as Neelkanth — the blue-throated one. Parvati, it is said, also helped still the poison’s force.',
      },
      {
        type: 'heading',
        hi: 'कथा का भाव',
        en: 'What the story holds',
      },
      {
        type: 'paragraph',
        hi: 'इस कथा को भक्त प्रायः इस भाव से देखते हैं कि शिव संसार के संकट को स्वयं धारण करने वाले देवता हैं — न वे उसे टालते हैं, न उसे औरों पर छोड़ते हैं।',
        en: 'Devotees often read this story as pointing to Shiva as the one who takes the world’s danger upon himself — neither turning it away nor passing it to others.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-dwadash-jyotirlinga',
    slug: 'dwadash-jyotirlinga',
    titleHindi: 'द्वादश ज्योतिर्लिंगों की कथा',
    titleEnglish: 'The Tale of the Twelve Jyotirlingas',
    excerptHindi:
      'भारत भर में स्थित बारह ज्योतिर्लिंग शिव के प्रकाश-स्वरूप के प्रतीक माने जाते हैं। जानिए उनकी उत्पत्ति की संक्षिप्त कथा।',
    excerptEnglish:
      'The twelve Jyotirlingas spread across India are held to be manifestations of Shiva as light. A short account of their origin.',
    image: '/images/story-jyotirlinga.svg',
    imageAlt: {
      hi: 'ज्योतिर्लिंग का प्रकाशमान प्रतीकात्मक चित्रण',
      en: 'A symbolic depiction of a glowing Jyotirlinga',
    },
    category: 'jyotirlinga',
    publishedAt: '2026-08-05',
    readingMinutes: 7,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, लिंग पुराण', en: 'Shiva Purana, Linga Purana' },
    featured: true,
    popular: true,
    body: [
      {
        type: 'paragraph',
        hi: 'शिव पुराण के अनुसार एक बार ब्रह्मा और विष्णु के मध्य श्रेष्ठता को लेकर विवाद हुआ। विवाद शांत करने हेतु उनके समक्ष एक अनंत ज्योतिस्तंभ प्रकट हुआ, जिसका आदि और अंत कोई नहीं जान सका।',
        en: 'The Shiva Purana relates that Brahma and Vishnu once disputed who among them was supreme. To settle it, an endless pillar of light appeared before them, whose beginning and end neither could find.',
      },
      {
        type: 'paragraph',
        hi: 'यह ज्योतिस्तंभ स्वयं शिव का प्रकाश-स्वरूप था। इसी घटना की स्मृति में देश भर के बारह स्थानों पर ज्योतिर्लिंग की स्थापना की मान्यता है, जहाँ शिव प्रकाश-रूप में सदा विराजमान माने जाते हैं।',
        en: 'That pillar of light was understood to be Shiva himself in his form as radiance. In memory of this, twelve places across the country are held to house a Jyotirlinga — a site where Shiva is believed to abide always in his form of light.',
      },
      {
        type: 'list',
        items: [
          { hi: 'सोमनाथ — गुजरात', en: 'Somnath — Gujarat' },
          { hi: 'मल्लिकार्जुन — आंध्र प्रदेश', en: 'Mallikarjuna — Andhra Pradesh' },
          { hi: 'महाकालेश्वर — मध्य प्रदेश', en: 'Mahakaleshwar — Madhya Pradesh' },
          { hi: 'ओंकारेश्वर — मध्य प्रदेश', en: 'Omkareshwar — Madhya Pradesh' },
          { hi: 'केदारनाथ — उत्तराखंड', en: 'Kedarnath — Uttarakhand' },
          { hi: 'भीमाशंकर — महाराष्ट्र', en: 'Bhimashankar — Maharashtra' },
          { hi: 'काशी विश्वनाथ — उत्तर प्रदेश', en: 'Kashi Vishwanath — Uttar Pradesh' },
          { hi: 'त्र्यंबकेश्वर — महाराष्ट्र', en: 'Trimbakeshwar — Maharashtra' },
          { hi: 'वैद्यनाथ — झारखंड', en: 'Vaidyanath — Jharkhand' },
          { hi: 'नागेश्वर — गुजरात', en: 'Nageshwar — Gujarat' },
          { hi: 'रामेश्वरम् — तमिलनाडु', en: 'Rameshwaram — Tamil Nadu' },
          { hi: 'घृष्णेश्वर — महाराष्ट्र', en: 'Grishneshwar — Maharashtra' },
        ],
      },
      {
        type: 'paragraph',
        hi: 'प्रत्येक ज्योतिर्लिंग से जुड़ी अपनी स्वतंत्र स्थानीय कथा है। यहाँ केवल संक्षिप्त परिचय दिया गया है; विस्तृत विवरण के लिए मूल स्रोत ग्रंथ देखे जा सकते हैं।',
        en: 'Each Jyotirlinga carries its own local story. What is given here is only a brief introduction; the source texts may be consulted for fuller accounts.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-shiv-parvati-vivah',
    slug: 'shiv-parvati-vivah',
    titleHindi: 'भगवान शिव और माता पार्वती का विवाह',
    titleEnglish: 'The Marriage of Shiva and Parvati',
    excerptHindi:
      'हिमालय राज की पुत्री पार्वती की कठोर तपस्या और शिव से उनके विवाह की कथा, जो शिव-शक्ति के मिलन का प्रतीक मानी जाती है।',
    excerptEnglish:
      'The story of Parvati’s long penance and her marriage to Shiva, held to symbolise the union of Shiva and Shakti.',
    image: '/images/story-shiv-parvati.svg',
    imageAlt: {
      hi: 'शिव-पार्वती विवाह का चित्रण',
      en: 'A depiction of the marriage of Shiva and Parvati',
    },
    category: 'shiv-parvati',
    publishedAt: '2026-08-10',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण', en: 'Shiva Purana' },
    popular: true,
    body: [
      {
        type: 'paragraph',
        hi: 'सती के देहत्याग के पश्चात शिव गहन तप में लीन हो गए। हिमालय राज की पुत्री पार्वती ने, जो सती का ही अवतार मानी जाती हैं, शिव को पति रूप में पाने हेतु कठोर तपस्या आरंभ की।',
        en: 'After Sati gave up her body, Shiva withdrew into deep meditation. Parvati, daughter of the Himalayas and held to be Sati reborn, undertook a long penance in the hope of Shiva as her husband.',
      },
      {
        type: 'paragraph',
        hi: 'वर्षों की तपस्या के पश्चात शिव ने उनकी भक्ति परखने हेतु एक वृद्ध ब्राह्मण का रूप धारण किया और शिव की निंदा की। पार्वती अपने संकल्प पर दृढ़ रहीं, और अंततः शिव ने प्रसन्न होकर उन्हें दर्शन दिए।',
        en: 'After years of penance, Shiva, testing her resolve, appeared before her as an old Brahmin and spoke ill of himself. Parvati remained firm in her devotion, and Shiva, pleased, at last revealed himself to her.',
      },
      {
        type: 'paragraph',
        hi: 'विवाह हिमालय के भव्य वातावरण में संपन्न हुआ, जिसमें समस्त देवगण उपस्थित रहे। शिव-पार्वती के मिलन को शिव तथा शक्ति — चेतना और ऊर्जा — के संयोग का प्रतीक माना जाता है।',
        en: 'The marriage took place amid the grandeur of the Himalayas, attended by the whole assembly of gods. The union of Shiva and Parvati is held to symbolise the coming together of Shiva and Shakti — consciousness and energy.',
      },
      {
        type: 'heading',
        hi: 'कथा का भाव',
        en: 'What the story holds',
      },
      {
        type: 'paragraph',
        hi: 'यह कथा धैर्य और अटूट भक्ति के महत्व को दर्शाती है। इसे विवाह में सफलता का आश्वासन नहीं, अपितु समर्पण के मूल्य के रूप में देखा जाना उचित है।',
        en: 'This story is generally read as pointing to patience and unwavering devotion. It is better understood as speaking to the value of dedication than as a promise about the outcome of any particular marriage.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-mahashivratri-mahatva',
    slug: 'mahashivratri-ka-mahatva',
    titleHindi: 'महाशिवरात्रि का महत्व',
    titleEnglish: 'The Significance of Mahashivratri',
    excerptHindi:
      'फाल्गुन मास की चतुर्दशी को मनाई जाने वाली महाशिवरात्रि क्यों वर्ष की सबसे महत्वपूर्ण रात्रि मानी जाती है।',
    excerptEnglish:
      'Why the fourteenth night of Phalguna, Mahashivratri, is held to be the most significant night of the year for Shiva devotees.',
    image: '/images/story-mahashivratri.svg',
    imageAlt: { hi: 'महाशिवरात्रि पर रात्रि जागरण का दृश्य', en: 'A night vigil on Mahashivratri' },
    category: 'mahashivratri-vishesh',
    publishedAt: '2026-08-14',
    readingMinutes: 4,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, स्कंद पुराण', en: 'Shiva Purana, Skanda Purana' },
    body: [
      {
        type: 'paragraph',
        hi: 'महाशिवरात्रि फाल्गुन मास के कृष्ण पक्ष की चतुर्दशी को मनाई जाती है। इस रात्रि को शिव की उपासना के लिए विशेष रूप से शुभ माना जाता है।',
        en: 'Mahashivratri falls on the fourteenth night of the waning moon in Phalguna. This night is held to be especially auspicious for the worship of Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'शास्त्रों में इस रात्रि से जुड़ी अनेक कथाएँ मिलती हैं — कहीं इसे शिव-पार्वती विवाह की रात्रि कहा गया है, तो कहीं इसे शिव के तांडव नृत्य से जोड़ा गया है। भिन्न-भिन्न परंपराओं में भिन्न व्याख्याएँ प्रचलित हैं।',
        en: 'The scriptures connect several accounts to this night — some naming it the night of Shiva and Parvati’s marriage, others linking it to Shiva’s tandava. Different traditions hold different explanations.',
      },
      {
        type: 'paragraph',
        hi: 'भक्त इस रात्रि को उपवास रखते हैं, रात्रि जागरण करते हैं और चार प्रहर की पूजा में सम्मिलित होते हैं। यह साधना का, संयम का और शिव-स्मरण का दिन माना जाता है।',
        en: 'Devotees keep a fast on this night, stay awake through it, and take part in the four-prahar puja. It is held to be a day for discipline, restraint and remembrance of Shiva.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-sawan-mahatva',
    slug: 'sawan-mas-ka-mahatva',
    titleHindi: 'सावन मास का महत्व',
    titleEnglish: 'The Significance of the Month of Sawan',
    excerptHindi:
      'वर्षा ऋतु का यह मास शिव भक्तों के लिए वर्ष का सर्वाधिक प्रिय समय क्यों माना जाता है।',
    excerptEnglish:
      'Why this monsoon month is held to be the most cherished time of the year for devotees of Shiva.',
    image: '/images/story-sawan.svg',
    imageAlt: { hi: 'सावन मास में जलाभिषेक का दृश्य', en: 'Jalabhishek during the month of Sawan' },
    category: 'sawan-vishesh',
    publishedAt: '2026-08-18',
    readingMinutes: 4,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण', en: 'Shiva Purana' },
    popular: true,
    body: [
      {
        type: 'paragraph',
        hi: 'सावन, हिंदू पंचांग का पाँचवाँ मास, शिव भक्तों के लिए वर्ष का सर्वाधिक महत्वपूर्ण समय माना जाता है। इस मास के प्रत्येक सोमवार को विशेष पूजा की परंपरा है।',
        en: 'Sawan, the fifth month of the Hindu calendar, is held to be the most significant stretch of the year for devotees of Shiva. Each Monday of this month carries a tradition of special worship.',
      },
      {
        type: 'paragraph',
        hi: 'मान्यता है कि इसी मास में समुद्र मंथन से हलाहल विष निकला था, जिसे शिव ने धारण किया। इस स्मृति में सावन में जल अर्पण की परंपरा विशेष रूप से निभाई जाती है।',
        en: 'It is held that the poison Halahala emerged from the churning of the ocean during this month, and that Shiva took it upon himself. In memory of this, the offering of water carries particular weight through Sawan.',
      },
      {
        type: 'paragraph',
        hi: 'सावन में कावड़ यात्रा की भी परंपरा है, जिसमें भक्त पवित्र नदियों से जल भरकर पैदल यात्रा करते हुए शिवालयों में अर्पित करते हैं।',
        en: 'Sawan also carries the tradition of the kanwar yatra, in which devotees carry water drawn from a sacred river on foot to offer at a Shiva temple.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-nandi',
    slug: 'nandi-ki-katha',
    titleHindi: 'नंदी की कथा',
    titleEnglish: 'The Story of Nandi',
    excerptHindi:
      'शिव के वाहन एवं परम भक्त नंदी की कथा और मंदिरों में उनकी प्रतिमा गर्भगृह के समक्ष क्यों स्थापित की जाती है।',
    excerptEnglish:
      'The story of Nandi, Shiva’s mount and foremost devotee, and why his image is placed facing the sanctum in temples.',
    image: '/images/story-nandi.svg',
    imageAlt: { hi: 'गर्भगृह के समक्ष स्थापित नंदी की प्रतिमा', en: 'An image of Nandi placed facing the sanctum' },
    category: 'shiv-katha',
    publishedAt: '2026-08-22',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण', en: 'Shiva Purana' },
    body: [
      {
        type: 'paragraph',
        hi: 'नंदी को शिव का वाहन तथा उनके परम भक्त के रूप में जाना जाता है। कथाओं में उन्हें शिलाद ऋषि के तप से प्राप्त पुत्र बताया गया है, जिन्होंने बाल्यकाल से ही शिव की आराधना की।',
        en: 'Nandi is known as Shiva’s mount and his foremost devotee. Accounts describe him as the son granted to the sage Shilada through penance, and one who worshipped Shiva from childhood.',
      },
      {
        type: 'paragraph',
        hi: 'उनकी अटूट भक्ति से प्रसन्न होकर शिव ने उन्हें अपने गणों का प्रधान तथा अपना वाहन बनाया। यही कारण है कि शिव मंदिरों में गर्भगृह के ठीक सामने नंदी की प्रतिमा स्थापित की जाती है।',
        en: 'Pleased by his unwavering devotion, Shiva made him chief of his attendants and his own mount. This is why, in Shiva temples, an image of Nandi is placed directly facing the sanctum.',
      },
      {
        type: 'paragraph',
        hi: 'परंपरा के अनुसार नंदी के कानों में मनोकामना कहने की मान्यता है, यद्यपि यह मान्यता आस्था का विषय है, कोई शास्त्रोक्त नियम नहीं।',
        en: 'A common custom holds that a wish whispered into Nandi’s ear is heard, though this remains a matter of belief rather than a scriptural rule.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-shiv-tandav',
    slug: 'shiv-tandav-nritya',
    titleHindi: 'शिव तांडव नृत्य',
    titleEnglish: 'The Tandava of Shiva',
    excerptHindi:
      'सृष्टि, स्थिति और संहार के प्रतीक शिव के तांडव नृत्य के दो रूपों — आनंद तांडव एवं रुद्र तांडव — का परिचय।',
    excerptEnglish:
      'An introduction to the two forms of Shiva’s tandava — the Ananda Tandava and the Rudra Tandava — as symbols of creation, sustenance and dissolution.',
    image: '/images/story-shiv-tandav.svg',
    imageAlt: { hi: 'नटराज स्वरूप में शिव के तांडव नृत्य का चित्रण', en: 'A depiction of Shiva as Nataraja performing the tandava' },
    category: 'mahadev',
    publishedAt: '2026-08-27',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, नाट्यशास्त्र-आधारित परंपरा', en: 'Shiva Purana, and tradition informed by the Natyashastra' },
    body: [
      {
        type: 'paragraph',
        hi: 'नटराज स्वरूप में शिव का तांडव नृत्य सृष्टि, स्थिति एवं संहार के चक्र का प्रतीक माना जाता है। यह नृत्य दो प्रमुख रूपों में वर्णित है — आनंद तांडव और रुद्र तांडव।',
        en: 'Shiva’s tandava, danced in his form as Nataraja, is held to symbolise the cycle of creation, sustenance and dissolution. It is described in two principal forms — the Ananda Tandava and the Rudra Tandava.',
      },
      {
        type: 'paragraph',
        hi: 'आनंद तांडव आनंद एवं सृजन का प्रतीक है, जबकि रुद्र तांडव संहार तथा जीर्ण का अंत दर्शाता है — दोनों को सृष्टि-चक्र के आवश्यक अंग के रूप में देखा जाता है, विनाश मात्र के रूप में नहीं।',
        en: 'The Ananda Tandava symbolises joy and creation, while the Rudra Tandava speaks to dissolution and the end of what has grown old — both understood as necessary parts of the cycle of creation, not destruction for its own sake.',
      },
      {
        type: 'paragraph',
        hi: 'नटराज की प्रतिमा में शिव के चारों हाथों के प्रतीकों — डमरू, अग्नि, अभय मुद्रा एवं उठा हुआ चरण — की अपनी-अपनी व्याख्याएँ ग्रंथों में मिलती हैं।',
        en: 'In the Nataraja image, the symbols in Shiva’s four hands — the damaru, the flame, the gesture of reassurance, and the raised foot — each carry their own explanation in the texts.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-rudraksha',
    slug: 'rudraksha-ka-mahatva',
    titleHindi: 'रुद्राक्ष का महत्व',
    titleEnglish: 'The Significance of Rudraksha',
    excerptHindi:
      'रुद्राक्ष की उत्पत्ति की कथा और शिव उपासना में इसके प्रयोग की परंपरा का संक्षिप्त परिचय।',
    excerptEnglish:
      'A short account of the origin of the rudraksha and the tradition of its use in Shiva worship.',
    image: '/images/story-rudraksha.svg',
    imageAlt: { hi: 'रुद्राक्ष की माला का चित्रण', en: 'A depiction of a rudraksha mala' },
    category: 'adhyatmik-gyan',
    publishedAt: '2026-09-01',
    readingMinutes: 4,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, रुद्राक्ष जाबालोपनिषद्', en: 'Shiva Purana, Rudraksha Jabala Upanishad' },
    body: [
      {
        type: 'paragraph',
        hi: 'मान्यता है कि रुद्राक्ष की उत्पत्ति शिव के नेत्रों से गिरी अश्रु बूंदों से हुई। इसी कारण इसे रुद्र (शिव) तथा अक्ष (नेत्र/बीज) के संयोग से रुद्राक्ष कहा जाता है।',
        en: 'It is held that the rudraksha arose from tears that fell from Shiva’s eyes — hence the name, joining Rudra (Shiva) with aksha (eye, or seed).',
      },
      {
        type: 'paragraph',
        hi: 'शिव उपासकों में रुद्राक्ष धारण करने तथा जप हेतु रुद्राक्ष माला का प्रयोग करने की दीर्घकालीन परंपरा है। मुखों की संख्या के अनुसार रुद्राक्ष के विविध भेद बताए गए हैं।',
        en: 'Among Shiva devotees there is a long-standing custom of wearing rudraksha and using a rudraksha mala for japa. The texts describe several kinds, distinguished by the number of facets.',
      },
      {
        type: 'paragraph',
        hi: 'यह सामग्री सामान्य परिचय हेतु है। रुद्राक्ष धारण से जुड़े विशिष्ट विधि-विधान के लिए विद्वान पुरोहित से परामर्श उचित रहेगा।',
        en: 'This account is offered as a general introduction. For the specific rites connected with wearing rudraksha, consulting a knowledgeable priest would be appropriate.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-ganesh-utpatti',
    slug: 'ganesh-ji-ki-utpatti',
    titleHindi: 'श्री गणेश की उत्पत्ति की कथा',
    titleEnglish: 'The Story of Ganesha’s Origin',
    excerptHindi:
      'माता पार्वती द्वारा गणेश की रचना और शिव द्वारा उन्हें प्रथम पूज्य का वरदान मिलने की कथा।',
    excerptEnglish:
      'The story of Parvati creating Ganesha, and how Shiva came to grant him the place of the deity worshipped first.',
    image: '/images/story-ganesh.svg',
    imageAlt: { hi: 'गणेश जी की प्रतिमा का चित्रण', en: 'A depiction of Ganesha' },
    category: 'ganesh',
    publishedAt: '2026-09-04',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण', en: 'Shiva Purana' },
    body: [
      {
        type: 'paragraph',
        hi: 'कथा के अनुसार माता पार्वती ने स्नान के समय अपने उबटन से एक बालक की रचना की और उसे द्वार की रक्षा का भार सौंपा। जब शिव ने प्रवेश करना चाहा और बालक ने रोका, तो अनजाने में विवाद उत्पन्न हो गया।',
        en: 'The story tells that Parvati, while bathing, fashioned a child from the paste she used and set him to guard the door. When Shiva sought to enter and the boy barred his way, a conflict arose between them, neither recognising the other.',
      },
      {
        type: 'paragraph',
        hi: 'पश्चात, स्थिति के शांत होने पर तथा पार्वती के दुःख को देखकर, शिव ने बालक को गजमुख धारण कराकर जीवनदान दिया और उसे प्रथम पूज्य होने का वरदान दिया — जिससे किसी भी शुभ कार्य के आरंभ में सर्वप्रथम गणेश का पूजन होता है।',
        en: 'Afterward, once the matter had settled and seeing Parvati’s grief, Shiva restored the boy to life with the head of an elephant, and granted him the place of the deity worshipped first — which is why Ganesha is invoked at the start of any auspicious undertaking.',
      },
      {
        type: 'paragraph',
        hi: 'यह कथा शिव-पार्वती के पुत्र के रूप में गणेश के स्थान तथा उनकी विशिष्ट पहचान — गजमुख — के मूल को दर्शाती है।',
        en: 'The story speaks to Ganesha’s place as the son of Shiva and Parvati, and to the origin of his distinctive form, the elephant head.',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-kartikeya-janm',
    slug: 'kartikeya-ka-janm',
    titleHindi: 'कार्तिकेय के जन्म की कथा',
    titleEnglish: 'The Story of Kartikeya’s Birth',
    excerptHindi:
      'देवसेनापति कार्तिकेय के जन्म एवं तारकासुर वध की कथा का संक्षिप्त परिचय।',
    excerptEnglish:
      'A short account of the birth of Kartikeya, commander of the divine army, and the story of Tarakasura’s defeat.',
    image: '/images/story-kartikeya.svg',
    imageAlt: { hi: 'कार्तिकेय का चित्रण, मयूर के साथ', en: 'A depiction of Kartikeya with a peacock' },
    category: 'kartikeya',
    publishedAt: '2026-09-08',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'स्कंद पुराण', en: 'Skanda Purana' },
    body: [
      {
        type: 'paragraph',
        hi: 'स्कंद पुराण के अनुसार तारकासुर नामक असुर के अत्याचार से त्रस्त होकर देवताओं ने शिव-पार्वती के पुत्र से ही उसके वध की संभावना जानी। इसी प्रयोजन से कार्तिकेय का जन्म हुआ।',
        en: 'According to the Skanda Purana, the devas, oppressed by the asura Tarakasura, learned that only a son of Shiva and Parvati could defeat him. Kartikeya’s birth is set within this purpose.',
      },
      {
        type: 'paragraph',
        hi: 'छह कृत्तिकाओं द्वारा पालन-पोषण किए जाने के कारण उन्हें कार्तिकेय कहा गया। बड़े होकर उन्होंने देवसेना का नेतृत्व किया और तारकासुर का वध कर देवताओं को उसके अत्याचार से मुक्त कराया।',
        en: 'Raised by the six Krittikas, he came to be called Kartikeya. On reaching maturity he led the army of the devas and defeated Tarakasura, freeing them from his tyranny.',
      },
      {
        type: 'paragraph',
        hi: 'दक्षिण भारत में उन्हें मुरुगन के नाम से विशेष श्रद्धा प्राप्त है, और मयूर उनके वाहन के रूप में जाना जाता है।',
        en: 'In South India he is held in particular reverence as Murugan, and the peacock is known as his mount.',
      },
      sourceNote,
    ],
  },
];

/** Newest first. */
export const stories: Story[] = [...storiesSeed].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

export const featuredStory: Story | undefined = stories.find((story) => story.featured);
export const latestStories: Story[] = stories.slice(0, 6);
export const popularStories: Story[] = stories.filter((story) => story.popular);

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getRelatedStories(story: Story, limit = 3): Story[] {
  return stories
    .filter((candidate) => candidate.id !== story.id)
    .sort((a, b) => {
      const aMatch = a.category === story.category ? 0 : 1;
      const bMatch = b.category === story.category ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
      return b.publishedAt.localeCompare(a.publishedAt);
    })
    .slice(0, limit);
}
