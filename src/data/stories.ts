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
      'भारत भर में स्थित बारह ज्योतिर्लिंग शिव के प्रकाश-स्वरूप के प्रतीक माने जाते हैं। जानिए ज्योतिर्लिंग की उत्पत्ति और प्रत्येक ज्योतिर्लिंग से जुड़ी कथा व सीख।',
    excerptEnglish:
      'The twelve Jyotirlingas spread across India are held to be manifestations of Shiva as light. The story of their origin, and the tale and lesson of each one.',
    image: '/images/story-jyotirlinga-jyoti.svg',
    imageAlt: {
      hi: 'कैलाश के समक्ष शिवलिंग से उठता अनंत प्रकाश-स्तंभ, चारों ओर बारह दीप',
      en: 'An endless pillar of light rising from a Shivling before Mount Kailash, ringed by twelve lamps',
    },
    category: 'jyotirlinga',
    publishedAt: '2026-08-05',
    readingMinutes: 8,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, लिंग पुराण', en: 'Shiva Purana, Linga Purana' },
    featured: true,
    popular: true,
    body: [
      {
        type: 'quote',
        hi: 'ॐ नमः शिवाय।',
        en: 'Om Namah Shivaya.',
      },
      {
        type: 'paragraph',
        hi: 'सनातन धर्म में भगवान शिव को सृष्टि का कल्याण करने वाला, भक्तों की मनोकामनाएँ सुनने वाला और अज्ञान के अंधकार को दूर करने वाला देवता माना जाता है। भगवान शिव के बारह प्रमुख ज्योतिर्लिंग भारत के विभिन्न पवित्र स्थानों पर स्थित हैं। ये श्रद्धालुओं के लिए आस्था, भक्ति और आध्यात्मिक चेतना के महत्वपूर्ण केंद्र हैं।',
        en: 'In Sanatana Dharma, Lord Shiva is revered as the one who works for the welfare of creation, who hears the prayers of his devotees and who dispels the darkness of ignorance. His twelve principal Jyotirlingas stand at sacred places across India, and are important centres of faith, devotion and spiritual awareness for pilgrims.',
      },
      {
        type: 'paragraph',
        hi: 'शिवपुराण में भगवान शिव की महिमा, उनके दिव्य स्वरूप और ज्योतिर्लिंगों से संबंधित कथाओं का वर्णन मिलता है।',
        en: 'The Shiva Purana describes the glory of Lord Shiva, his divine form and the stories connected with the Jyotirlingas.',
      },
      {
        type: 'heading',
        hi: 'ज्योतिर्लिंग क्या है?',
        en: 'What is a Jyotirlinga?',
      },
      {
        type: 'paragraph',
        hi: '\'ज्योतिर्लिंग\' दो शब्दों से मिलकर बना है—\'ज्योति\' अर्थात प्रकाश और \'लिंग\' अर्थात भगवान शिव का प्रतीकात्मक स्वरूप।',
        en: '“Jyotirlinga” joins two words — “jyoti”, meaning light, and “linga”, the symbolic form of Lord Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक मान्यता के अनुसार, ज्योतिर्लिंग भगवान शिव के अनंत और दिव्य स्वरूप का प्रतीक है। शिव का वास्तविक स्वरूप किसी सीमा में बँधा हुआ नहीं है। ज्योतिर्लिंग इसी अनंत चेतना और दिव्यता का स्मरण कराता है।',
        en: 'In religious belief, a Jyotirlinga symbolises the infinite, divine form of Lord Shiva. Shiva’s true nature is bound by no limit, and the Jyotirlinga is a reminder of that boundless consciousness and divinity.',
      },
      {
        type: 'heading',
        hi: 'ज्योतिर्लिंग की उत्पत्ति की कथा',
        en: 'The Story of the Jyotirlinga’s Origin',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध शिवपुराणीय कथा के अनुसार, एक बार भगवान ब्रह्मा और भगवान विष्णु के बीच इस बात को लेकर विवाद हुआ कि दोनों में श्रेष्ठ कौन है।',
        en: 'A well-known story from the Shiva Purana tells that Lord Brahma and Lord Vishnu once argued over which of them was greater.',
      },
      {
        type: 'paragraph',
        hi: 'तभी उनके सामने एक विशाल, अग्निमय प्रकाश-स्तंभ प्रकट हुआ। उसका न तो आरंभ दिखाई देता था और न ही अंत।',
        en: 'Just then a vast, fiery pillar of light appeared before them. Neither its beginning nor its end could be seen.',
      },
      {
        type: 'paragraph',
        hi: 'भगवान विष्णु उस प्रकाश-स्तंभ का निचला सिरा खोजने के लिए नीचे की ओर गए। भगवान ब्रह्मा उसका ऊपरी सिरा खोजने के लिए ऊपर की ओर चले गए। दोनों ने बहुत प्रयास किया, लेकिन उस दिव्य स्तंभ की सीमा का पता नहीं लगा सके।',
        en: 'Lord Vishnu went downward to find the pillar’s lower end, and Lord Brahma rose upward to find its top. Both tried hard, but neither could find where the divine pillar ended.',
      },
      {
        type: 'paragraph',
        hi: 'इस कथा का मुख्य संदेश यह है कि भगवान शिव का परम स्वरूप अनंत है और उसे किसी सीमित माप से नहीं समझा जा सकता।',
        en: 'The heart of this story is that Lord Shiva’s supreme form is infinite and cannot be grasped by any limited measure.',
      },
      {
        type: 'paragraph',
        hi: 'यह दिव्य प्रकाश-स्तंभ ज्योतिर्लिंग की अवधारणा को समझाने वाली प्रमुख कथाओं में से एक है।',
        en: 'This divine pillar of light is one of the principal stories that explain the idea of the Jyotirlinga.',
      },
      {
        type: 'heading',
        hi: 'भगवान शिव के बारह ज्योतिर्लिंग',
        en: 'The Twelve Jyotirlingas of Lord Shiva',
      },
      {
        type: 'heading',
        level: 3,
        hi: '1. सोमनाथ ज्योतिर्लिंग',
        en: '1. Somnath Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'प्रभास पाटन, गुजरात।',
        en: 'Prabhas Patan, Gujarat.',
      },
      {
        type: 'paragraph',
        hi: 'सोमनाथ को बारह ज्योतिर्लिंगों में प्रथम स्थान पर स्मरण किया जाता है।',
        en: 'Somnath is remembered first among the twelve Jyotirlingas.',
      },
      {
        type: 'paragraph',
        hi: 'पौराणिक कथा के अनुसार, चंद्रदेव का विवाह दक्ष प्रजापति की अनेक पुत्रियों से हुआ था। लेकिन चंद्रदेव रोहिणी से विशेष स्नेह रखते थे। इससे नाराज होकर दक्ष प्रजापति ने उन्हें क्षीण होने का शाप दिया।',
        en: 'According to the Puranic story, Chandradev, the Moon, was married to many daughters of Daksha Prajapati, but he favoured Rohini above the rest. Angered by this, Daksha cursed him to waste away.',
      },
      {
        type: 'paragraph',
        hi: 'शाप से मुक्ति पाने के लिए चंद्रदेव ने भगवान शिव की आराधना की। उनकी तपस्या से प्रसन्न होकर भगवान शिव ने उन्हें अनुग्रह प्रदान किया। इसी परंपरा में प्रभास क्षेत्र के सोमनाथ ज्योतिर्लिंग की महिमा का वर्णन मिलता है।',
        en: 'To be freed from the curse, Chandradev worshipped Lord Shiva. Pleased by his penance, Shiva granted him his grace. The glory of the Somnath Jyotirlinga at Prabhas is described in this tradition.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'श्रद्धा, तपस्या और धैर्य कठिन परिस्थितियों में भी आशा बनाए रखने की प्रेरणा देते हैं।',
        en: 'Faith, penance and patience inspire us to keep hope alive even in hard times.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '2. मल्लिकार्जुन ज्योतिर्लिंग',
        en: '2. Mallikarjuna Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'श्रीशैलम, आंध्र प्रदेश।',
        en: 'Srisailam, Andhra Pradesh.',
      },
      {
        type: 'paragraph',
        hi: 'मल्लिकार्जुन ज्योतिर्लिंग की कथा भगवान शिव, माता पार्वती और उनके पुत्रों कार्तिकेय तथा गणेश से जुड़ी है।',
        en: 'The story of the Mallikarjuna Jyotirlinga involves Lord Shiva, Mata Parvati and their sons Kartikeya and Ganesha.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध पौराणिक कथा के अनुसार, विवाह के विषय में उत्पन्न परिस्थिति से अप्रसन्न होकर कार्तिकेय क्रौंच पर्वत की ओर चले गए। अपने पुत्र को मनाने के लिए भगवान शिव और माता पार्वती भी वहाँ पहुँचे।',
        en: 'A well-known Puranic story tells that Kartikeya, unhappy with how the question of marriage was settled, went away to Mount Krauncha. Lord Shiva and Mata Parvati followed him there to win back their son.',
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक परंपरा में माना जाता है कि भगवान शिव और माता पार्वती ने श्रीशैलम क्षेत्र में निवास किया। इसी से मल्लिकार्जुन ज्योतिर्लिंग की महिमा जुड़ी हुई है।',
        en: 'Tradition holds that Lord Shiva and Mata Parvati made their dwelling in the Srisailam region, and the glory of the Mallikarjuna Jyotirlinga is tied to this.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'परिवार में प्रेम, अपनापन और एक-दूसरे की भावनाओं को समझना महत्वपूर्ण है।',
        en: 'Love, belonging and understanding one another’s feelings matter within a family.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '3. महाकालेश्वर ज्योतिर्लिंग',
        en: '3. Mahakaleshwar Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'उज्जैन, मध्य प्रदेश।',
        en: 'Ujjain, Madhya Pradesh.',
      },
      {
        type: 'paragraph',
        hi: 'उज्जैन स्थित महाकालेश्वर ज्योतिर्लिंग भगवान शिव के महाकाल स्वरूप से जुड़ा है।',
        en: 'The Mahakaleshwar Jyotirlinga at Ujjain is connected with Lord Shiva’s form as Mahakala.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध कथा के अनुसार, उज्जैन में एक धर्मपरायण ब्राह्मण और उसके पुत्र शिवभक्ति में लीन रहते थे। उस क्षेत्र के लोगों को दूषण नामक दुष्ट से कष्ट पहुँचने लगा।',
        en: 'A well-known story tells of a pious Brahmin in Ujjain and his sons, who were absorbed in devotion to Shiva. The people of the region began to suffer at the hands of a wicked being named Dushana.',
      },
      {
        type: 'paragraph',
        hi: 'जब शिवभक्तों पर संकट आया, तब भगवान शिव ने प्रकट होकर दुष्ट का संहार किया और अपने भक्तों की रक्षा की। इस कथा में भगवान शिव के महाकाल स्वरूप की महिमा बताई जाती है।',
        en: 'When Shiva’s devotees were in danger, Lord Shiva appeared, destroyed the wrongdoer and protected his devotees. The story tells of the glory of Shiva as Mahakala.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'अन्याय और अहंकार के सामने सत्य तथा धर्म के मार्ग पर दृढ़ रहने की प्रेरणा मिलती है।',
        en: 'It inspires us to stand firm on the path of truth and dharma in the face of injustice and arrogance.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '4. ओंकारेश्वर ज्योतिर्लिंग',
        en: '4. Omkareshwar Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'मांधाता द्वीप, मध्य प्रदेश।',
        en: 'Mandhata Island, Madhya Pradesh.',
      },
      {
        type: 'paragraph',
        hi: 'ओंकारेश्वर की महिमा नर्मदा नदी और पवित्र ॐकार से जुड़ी हुई है।',
        en: 'The glory of Omkareshwar is linked with the river Narmada and the sacred syllable Om.',
      },
      {
        type: 'paragraph',
        hi: 'एक पौराणिक परंपरा के अनुसार, विंध्य पर्वत ने भगवान शिव को प्रसन्न करने के लिए कठोर तपस्या की। भगवान शिव उसकी आराधना से प्रसन्न हुए और वहाँ दिव्य स्वरूप में प्रकट हुए।',
        en: 'According to one Puranic tradition, the Vindhya mountain performed severe penance to please Lord Shiva. Pleased by its worship, Shiva appeared there in his divine form.',
      },
      {
        type: 'paragraph',
        hi: 'इसी क्षेत्र में ओंकारेश्वर की महिमा प्रतिष्ठित हुई। नर्मदा नदी के पवित्र तट पर स्थित यह तीर्थ भगवान शिव की उपासना का प्रमुख केंद्र है।',
        en: 'It is in this region that the glory of Omkareshwar was established. Standing on the sacred bank of the Narmada, this tirtha is a major centre of Shiva worship.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'विनम्रता, एकाग्रता और साधना मनुष्य को अपने लक्ष्य की ओर बढ़ने की प्रेरणा देते हैं।',
        en: 'Humility, focus and spiritual practice help a person move towards their goal.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '5. केदारनाथ ज्योतिर्लिंग',
        en: '5. Kedarnath Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'रुद्रप्रयाग जिला, उत्तराखंड।',
        en: 'Rudraprayag district, Uttarakhand.',
      },
      {
        type: 'paragraph',
        hi: 'केदारनाथ हिमालय में स्थित भगवान शिव का प्रसिद्ध तीर्थ है।',
        en: 'Kedarnath is a renowned tirtha of Lord Shiva high in the Himalaya.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रचलित पौराणिक कथा के अनुसार, महाभारत युद्ध के बाद पांडव अपने कर्मों के प्रायश्चित और भगवान शिव के दर्शन के लिए निकले। भगवान शिव उनसे मिलने के इच्छुक नहीं थे और उन्होंने बैल का रूप धारण कर लिया।',
        en: 'A popular Puranic story tells that after the Mahabharata war, the Pandavas set out to atone for their deeds and to seek Lord Shiva’s darshan. Shiva did not wish to meet them and took the form of a bull.',
      },
      {
        type: 'paragraph',
        hi: 'पांडवों ने उन्हें पहचानने का प्रयास किया। कथा की एक प्रसिद्ध परंपरा में भीम द्वारा बैल को पकड़ने के प्रयास और उसके धरती में विलीन होने का वर्णन मिलता है। इसके बाद भगवान शिव के विभिन्न स्वरूपों की पूजा हिमालय के अलग-अलग तीर्थों में स्थापित हुई।',
        en: 'The Pandavas tried to recognise him. A well-known version tells of Bhima trying to seize the bull as it sank into the earth. After this, the worship of Shiva’s different forms was established at various tirthas across the Himalaya.',
      },
      {
        type: 'paragraph',
        hi: 'केदारनाथ को इस परंपरा में भगवान शिव के पवित्र ज्योतिर्लिंग के रूप में पूजा जाता है।',
        en: 'In this tradition, Kedarnath is worshipped as a sacred Jyotirlinga of Lord Shiva.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'अपने कर्मों के प्रति जिम्मेदारी स्वीकार करना और आत्मशुद्धि के लिए प्रयास करना महत्वपूर्ण है।',
        en: 'It is important to take responsibility for our actions and to strive for inner purification.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '6. भीमाशंकर ज्योतिर्लिंग',
        en: '6. Bhimashankar Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'महाराष्ट्र।',
        en: 'Maharashtra.',
      },
      {
        type: 'paragraph',
        hi: 'भीमाशंकर की कथा भीम नामक एक शक्तिशाली असुर से संबंधित है।',
        en: 'The story of Bhimashankar concerns a powerful asura named Bhima.',
      },
      {
        type: 'paragraph',
        hi: 'पौराणिक कथा के अनुसार, भीम नामक असुर ने अपनी शक्ति के अहंकार में भगवान के भक्तों को कष्ट देना शुरू कर दिया। जब भक्तों पर संकट बढ़ा, तब भगवान शिव ने प्रकट होकर भीम का संहार किया।',
        en: 'According to the Puranic story, the asura Bhima, proud of his strength, began to torment the Lord’s devotees. When their suffering grew, Lord Shiva appeared and destroyed Bhima.',
      },
      {
        type: 'paragraph',
        hi: 'इस घटना के बाद उस क्षेत्र में भगवान शिव की भीमाशंकर स्वरूप में आराधना की जाने लगी।',
        en: 'After this, Lord Shiva came to be worshipped in that region in his form as Bhimashankar.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'शक्ति का उपयोग दूसरों को कष्ट देने के लिए नहीं, बल्कि उनकी रक्षा और कल्याण के लिए होना चाहिए।',
        en: 'Strength should be used not to cause others pain, but to protect them and work for their good.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '7. काशी विश्वनाथ ज्योतिर्लिंग',
        en: '7. Kashi Vishwanath Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'वाराणसी, उत्तर प्रदेश।',
        en: 'Varanasi, Uttar Pradesh.',
      },
      {
        type: 'paragraph',
        hi: 'काशी को भगवान शिव की प्रिय नगरी माना जाता है। यहाँ स्थित काशी विश्वनाथ मंदिर भगवान शिव के प्रमुख तीर्थों में से एक है।',
        en: 'Kashi is held to be Lord Shiva’s beloved city, and the Kashi Vishwanath temple there is one of his foremost tirthas.',
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक परंपरा के अनुसार, भगवान शिव काशी में विश्वनाथ अर्थात संपूर्ण विश्व के स्वामी के रूप में विराजमान हैं। काशी को ज्ञान, भक्ति और आध्यात्मिक मुक्ति की नगरी के रूप में भी जाना जाता है।',
        en: 'Tradition holds that in Kashi, Lord Shiva abides as Vishwanath — Lord of the whole universe. Kashi is also known as the city of knowledge, devotion and spiritual liberation.',
      },
      {
        type: 'paragraph',
        hi: 'शिवपुराण की परंपरा में काशी की महिमा और भगवान शिव की कृपा का विशेष वर्णन मिलता है।',
        en: 'The Shiva Purana tradition gives special place to the glory of Kashi and the grace of Lord Shiva.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'ज्ञान, आत्मचिंतन और भक्ति मनुष्य को जीवन के गहरे प्रश्नों पर विचार करने की प्रेरणा देते हैं।',
        en: 'Knowledge, self-reflection and devotion lead a person to think about life’s deeper questions.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '8. त्र्यंबकेश्वर ज्योतिर्लिंग',
        en: '8. Trimbakeshwar Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'त्र्यंबक, नासिक जिला, महाराष्ट्र।',
        en: 'Trimbak, Nashik district, Maharashtra.',
      },
      {
        type: 'paragraph',
        hi: 'त्र्यंबकेश्वर ज्योतिर्लिंग की महिमा गौतम ऋषि, माता अहिल्या और गोदावरी नदी से जुड़ी पौराणिक परंपराओं में वर्णित है।',
        en: 'The glory of the Trimbakeshwar Jyotirlinga is described in Puranic traditions connected with the sage Gautama, Mata Ahalya and the river Godavari.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध कथा के अनुसार, गौतम ऋषि पर एक कठिन परिस्थिति आई। उससे मुक्ति पाने और पवित्र गंगा को पृथ्वी पर लाने के लिए उन्होंने भगवान शिव की आराधना की।',
        en: 'A well-known story tells that the sage Gautama faced a grave difficulty. To be freed from it, and to bring the sacred Ganga down to earth, he worshipped Lord Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव की कृपा से गोदावरी नदी के प्रकट होने की कथा इस तीर्थ की महिमा से जुड़ी है। त्र्यंबकेश्वर को भगवान शिव के पवित्र ज्योतिर्लिंगों में गिना जाता है।',
        en: 'The story of the Godavari appearing through Lord Shiva’s grace is bound up with the glory of this tirtha. Trimbakeshwar is counted among Shiva’s sacred Jyotirlingas.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'कठिन परिस्थितियों में धैर्य, प्रार्थना और आत्मचिंतन का महत्व समझ में आता है।',
        en: 'Hard times teach the value of patience, prayer and self-reflection.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '9. वैद्यनाथ ज्योतिर्लिंग',
        en: '9. Vaidyanath Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'इस ज्योतिर्लिंग का स्थान विभिन्न धार्मिक परंपराओं में अलग-अलग बताया जाता है। देवघर, झारखंड, इसकी एक प्रमुख मान्यताप्राप्त परंपरा है।',
        en: 'Different religious traditions place this Jyotirlinga in different locations. Deoghar, Jharkhand, is one widely recognised tradition.',
      },
      {
        type: 'paragraph',
        hi: 'वैद्यनाथ की कथा रावण की शिवभक्ति से जुड़ी है।',
        en: 'The story of Vaidyanath is linked with Ravana’s devotion to Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध पौराणिक कथा के अनुसार, रावण भगवान शिव को प्रसन्न करने के लिए कठोर तपस्या करता है। उसकी भक्ति से प्रसन्न होकर भगवान शिव उसे वरदान देते हैं।',
        en: 'According to a well-known Puranic story, Ravana performs severe penance to please Lord Shiva. Pleased by his devotion, Shiva grants him a boon.',
      },
      {
        type: 'paragraph',
        hi: 'इस कथा की विभिन्न परंपराओं में शिवलिंग को लंका ले जाने के प्रयास और मार्ग में उसके स्थापित हो जाने का वर्णन मिलता है।',
        en: 'Various versions of the story describe Ravana’s attempt to carry the Shivalinga to Lanka, and how it became fixed in place along the way.',
      },
      {
        type: 'paragraph',
        hi: 'वैद्यनाथ नाम भगवान शिव के आरोग्य प्रदान करने वाले स्वरूप से भी जुड़ा है।',
        en: 'The name Vaidyanath — “Lord of physicians” — also refers to Shiva’s form as the giver of health.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'भक्ति और तपस्या के साथ विवेक तथा विनम्रता भी आवश्यक हैं।',
        en: 'Alongside devotion and penance, wisdom and humility are also needed.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '10. नागेश्वर ज्योतिर्लिंग',
        en: '10. Nageshwar Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'द्वारका के निकट गुजरात को एक प्रमुख परंपरा में नागेश्वर ज्योतिर्लिंग का स्थान माना जाता है। इसके स्थान को लेकर अन्य परंपराएँ भी हैं।',
        en: 'One major tradition places the Nageshwar Jyotirlinga in Gujarat, near Dwarka. Other traditions name other locations.',
      },
      {
        type: 'paragraph',
        hi: 'नागेश्वर की कथा भगवान शिव के भक्तों की रक्षा से जुड़ी है।',
        en: 'The story of Nageshwar is about Lord Shiva protecting his devotees.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध पौराणिक परंपरा के अनुसार, सुप्रिय नामक शिवभक्त को दारुक नामक असुर ने बंदी बना लिया। संकट के समय सुप्रिय ने भगवान शिव का स्मरण किया और अन्य बंदियों को भी शिवभक्ति के लिए प्रेरित किया।',
        en: 'According to a well-known Puranic tradition, a devotee of Shiva named Supriya was taken captive by an asura named Daruka. In his distress Supriya remembered Lord Shiva and inspired his fellow captives to worship Shiva too.',
      },
      {
        type: 'paragraph',
        hi: 'भक्तों की प्रार्थना सुनकर भगवान शिव प्रकट हुए और उनकी रक्षा की। इस कथा को नागेश्वर ज्योतिर्लिंग की महिमा से जोड़ा जाता है।',
        en: 'Hearing their prayers, Lord Shiva appeared and protected them. This story is linked with the glory of the Nageshwar Jyotirlinga.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'कठिन परिस्थितियों में विश्वास, साहस और आशा बनाए रखना महत्वपूर्ण है।',
        en: 'It is important to hold on to faith, courage and hope in difficult times.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '11. रामेश्वरम ज्योतिर्लिंग',
        en: '11. Rameshwaram Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'रामेश्वरम, तमिलनाडु।',
        en: 'Rameshwaram, Tamil Nadu.',
      },
      {
        type: 'paragraph',
        hi: 'रामेश्वरम का संबंध भगवान श्रीराम की कथा से जुड़ा है।',
        en: 'Rameshwaram is connected with the story of Lord Shri Rama.',
      },
      {
        type: 'paragraph',
        hi: 'प्रचलित धार्मिक परंपरा के अनुसार, लंका जाने से पहले भगवान श्रीराम ने भगवान शिव की आराधना की। भगवान शिव के प्रति उनकी भक्ति के कारण इस स्थान को रामेश्वरम नाम से जाना जाता है।',
        en: 'Popular tradition holds that before crossing to Lanka, Lord Shri Rama worshipped Lord Shiva. Because of Rama’s devotion to Shiva, the place came to be known as Rameshwaram.',
      },
      {
        type: 'paragraph',
        hi: 'रामेश्वरम मंदिर भगवान शिव और भगवान श्रीराम की भक्ति के संगम का महत्वपूर्ण तीर्थ है।',
        en: 'The Rameshwaram temple is an important tirtha where devotion to Lord Shiva and to Lord Shri Rama meet.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'महान कार्य करने से पहले भी विनम्रता, श्रद्धा और ईश्वर के प्रति समर्पण का महत्व बना रहता है।',
        en: 'Even before undertaking a great task, humility, faith and surrender to God remain important.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '12. घृष्णेश्वर ज्योतिर्लिंग',
        en: '12. Grishneshwar Jyotirlinga',
      },
      {
        type: 'paragraph',
        label: { hi: 'स्थान', en: 'Location' },
        hi: 'वेरुल, महाराष्ट्र, एलोरा की गुफाओं के निकट।',
        en: 'Verul, Maharashtra, near the Ellora caves.',
      },
      {
        type: 'paragraph',
        hi: 'घृष्णेश्वर ज्योतिर्लिंग की कथा घुश्मा नामक शिवभक्त महिला से जुड़ी है।',
        en: 'The story of the Grishneshwar Jyotirlinga is about a devotee of Shiva named Ghushma.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध कथा के अनुसार, घुश्मा नियमित रूप से शिवलिंगों की पूजा करती थीं। उन्हें अनेक कठिनाइयों का सामना करना पड़ा, लेकिन उनकी श्रद्धा बनी रही।',
        en: 'A well-known story tells that Ghushma worshipped Shivalingas every day. She faced many hardships, yet her faith never wavered.',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव उनकी भक्ति से प्रसन्न हुए और उन्हें दर्शन दिए। इस कथा को घृष्णेश्वर ज्योतिर्लिंग की महिमा से जोड़ा जाता है।',
        en: 'Pleased by her devotion, Lord Shiva gave her his darshan. This story is linked with the glory of the Grishneshwar Jyotirlinga.',
      },
      {
        type: 'paragraph',
        label: { hi: 'कथा से मिलने वाली सीख', en: 'Lesson from the story' },
        hi: 'सच्ची श्रद्धा, धैर्य और कठिन समय में भी विश्वास बनाए रखना महत्वपूर्ण है।',
        en: 'True faith, patience and holding on to belief even in hard times are what matter.',
      },
      {
        type: 'heading',
        hi: 'द्वादश ज्योतिर्लिंग का आध्यात्मिक महत्व',
        en: 'The Spiritual Significance of the Twelve Jyotirlingas',
      },
      {
        type: 'paragraph',
        hi: 'बारह ज्योतिर्लिंगों की परंपरा भगवान शिव के विभिन्न दिव्य स्वरूपों और उनकी महिमा का स्मरण कराती है।',
        en: 'The tradition of the twelve Jyotirlingas recalls Lord Shiva’s many divine forms and his glory.',
      },
      {
        type: 'paragraph',
        hi: 'इन तीर्थों से जुड़ी कथाओं में भक्ति, तपस्या, विनम्रता, सत्य, करुणा और आत्मचिंतन जैसे विषय बार-बार सामने आते हैं।',
        en: 'Devotion, penance, humility, truth, compassion and self-reflection return again and again in the stories of these tirthas.',
      },
      {
        type: 'paragraph',
        hi: 'श्रद्धालुओं के लिए ज्योतिर्लिंगों के दर्शन केवल धार्मिक यात्रा नहीं, बल्कि अपनी आस्था और आध्यात्मिक जीवन से जुड़ने का अवसर भी हैं।',
        en: 'For devotees, darshan at the Jyotirlingas is not only a religious journey but also a chance to connect with their faith and spiritual life.',
      },
      {
        type: 'heading',
        hi: 'द्वादश ज्योतिर्लिंग के नाम',
        en: 'Names of the Twelve Jyotirlingas',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          { hi: 'सोमनाथ', en: 'Somnath' },
          { hi: 'मल्लिकार्जुन', en: 'Mallikarjuna' },
          { hi: 'महाकालेश्वर', en: 'Mahakaleshwar' },
          { hi: 'ओंकारेश्वर', en: 'Omkareshwar' },
          { hi: 'केदारनाथ', en: 'Kedarnath' },
          { hi: 'भीमाशंकर', en: 'Bhimashankar' },
          { hi: 'काशी विश्वनाथ', en: 'Kashi Vishwanath' },
          { hi: 'त्र्यंबकेश्वर', en: 'Trimbakeshwar' },
          { hi: 'वैद्यनाथ', en: 'Vaidyanath' },
          { hi: 'नागेश्वर', en: 'Nageshwar' },
          { hi: 'रामेश्वरम', en: 'Rameshwaram' },
          { hi: 'घृष्णेश्वर', en: 'Grishneshwar' },
        ],
      },
      {
        type: 'heading',
        hi: 'निष्कर्ष',
        en: 'Conclusion',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव के द्वादश ज्योतिर्लिंग भारतीय धार्मिक परंपरा में विशेष स्थान रखते हैं। इनसे जुड़ी कथाएँ भक्तों को श्रद्धा, धैर्य, विनम्रता और धर्म के मार्ग पर चलने की प्रेरणा देती हैं।',
        en: 'The twelve Jyotirlingas of Lord Shiva hold a special place in India’s religious tradition. Their stories inspire devotees to walk the path of faith, patience, humility and dharma.',
      },
      {
        type: 'quote',
        hi: 'हर हर महादेव! ॐ नमः शिवाय!',
        en: 'Har Har Mahadev! Om Namah Shivaya!',
      },
      {
        type: 'heading',
        hi: 'स्रोत और संपादकीय टिप्पणी',
        en: 'Sources and Editorial Note',
      },
      {
        type: 'paragraph',
        hi: 'यह लेख द्वादश ज्योतिर्लिंगों से जुड़ी प्रचलित पौराणिक परंपराओं का सरल हिंदी में परिचय है। इसे शिवपुराण के किसी एक संस्करण का शब्दशः अनुवाद न माना जाए।',
        en: 'This article is a simple introduction to the popular Puranic traditions of the twelve Jyotirlingas. It should not be read as a word-for-word translation of any single edition of the Shiva Purana.',
      },
      {
        type: 'paragraph',
        hi: 'अलग-अलग पुराणों, संस्करणों और क्षेत्रीय परंपराओं में कुछ विवरण भिन्न हो सकते हैं।',
        en: 'Some details may differ between Puranas, editions and regional traditions.',
      },
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
    titleHindi: 'भगवान शिव का तांडव नृत्य: अर्थ, महत्व और पौराणिक कथा',
    titleEnglish: 'Lord Shiva’s Tandava: Meaning, Significance and Story',
    excerptHindi:
      'शिव तांडव का आध्यात्मिक अर्थ, रौद्र एवं आनंद तांडव, नटराज प्रतिमा के प्रतीक और इससे मिलने वाली सीख।',
    excerptEnglish:
      'The spiritual meaning of Shiva’s tandava, its Raudra and Ananda forms, the symbols of the Nataraja image, and what it teaches.',
    image: '/images/story-shiv-tandav.svg',
    imageAlt: { hi: 'नटराज स्वरूप में शिव के तांडव नृत्य का चित्रण', en: 'A depiction of Shiva as Nataraja performing the tandava' },
    category: 'mahadev',
    publishedAt: '2026-08-27',
    readingMinutes: 4,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, नाट्यशास्त्र-आधारित परंपरा', en: 'Shiva Purana, and tradition informed by the Natyashastra' },
    body: [
      {
        type: 'heading',
        hi: '1. शिव तांडव क्या है?',
        en: '1. What Is Shiva’s Tandava?',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव का तांडव नृत्य हिंदू धर्म में एक अत्यंत महत्वपूर्ण आध्यात्मिक प्रतीक है। भगवान शिव को नटराज, अर्थात् नृत्य के स्वामी, के रूप में भी जाना जाता है। उनका तांडव केवल एक नृत्य नहीं, बल्कि सृष्टि की गति, परिवर्तन, ऊर्जा और ब्रह्मांडीय चक्र का प्रतीक माना जाता है।',
        en: 'Lord Shiva’s tandava is one of the most important spiritual symbols in Hinduism. Shiva is also known as Nataraja — the Lord of Dance. His tandava is not merely a dance; it is understood as a symbol of the movement of creation, of change, of energy and of the cosmic cycle.',
      },
      {
        type: 'paragraph',
        hi: 'हिंदू परंपरा में शिव को सृष्टि के संहार और परिवर्तन से जोड़ा जाता है। यहाँ संहार का अर्थ केवल विनाश नहीं, बल्कि पुरानी व्यवस्था के अंत और नए सृजन के लिए मार्ग तैयार होने से भी है।',
        en: 'Hindu tradition associates Shiva with dissolution and transformation. Here, dissolution does not mean destruction alone — it also means the end of an old order, clearing the way for new creation.',
      },
      {
        type: 'heading',
        hi: '2. तांडव नृत्य का आध्यात्मिक अर्थ',
        en: '2. The Spiritual Meaning of the Tandava',
      },
      {
        type: 'paragraph',
        hi: 'शिव के तांडव को विभिन्न प्रतीकों के माध्यम से समझा जाता है:',
        en: 'Shiva’s tandava is understood through several symbols:',
      },
      {
        type: 'list',
        items: [
          { label: { hi: 'सृष्टि', en: 'Srishti (creation)' }, hi: 'ब्रह्मांड में नई शुरुआत और सृजन की प्रक्रिया।', en: 'The process of new beginnings and creation in the universe.' },
          { label: { hi: 'स्थिति', en: 'Sthiti (sustenance)' }, hi: 'संसार का निरंतर संचालन और संतुलन।', en: 'The continuous running and balance of the world.' },
          { label: { hi: 'संहार', en: 'Samhara (dissolution)' }, hi: 'समय पूरा होने पर पुरानी व्यवस्था का अंत।', en: 'The end of an old order when its time is complete.' },
          { label: { hi: 'परिवर्तन', en: 'Parivartan (change)' }, hi: 'जीवन में कुछ भी स्थायी नहीं है; परिवर्तन प्रकृति का नियम है।', en: 'Nothing in life is permanent; change is the law of nature.' },
          { label: { hi: 'अज्ञान का अंत', en: 'The end of ignorance' }, hi: 'शिव का नृत्य अज्ञान, अहंकार और नकारात्मकता पर विजय का प्रतीक भी माना जाता है।', en: 'Shiva’s dance is also seen as a symbol of victory over ignorance, ego and negativity.' },
        ],
      },
      {
        type: 'paragraph',
        hi: 'शैव परंपराओं में शिव के नृत्य को ब्रह्मांडीय गतिविधि और चेतना से जोड़कर देखा जाता है।',
        en: 'In Shaiva traditions, Shiva’s dance is linked with cosmic activity and consciousness.',
      },
      {
        type: 'heading',
        hi: '3. भगवान शिव के तांडव के प्रकार',
        en: '3. The Forms of Shiva’s Tandava',
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक और सांस्कृतिक परंपराओं में शिव के नृत्य के विभिन्न रूपों का वर्णन मिलता है।',
        en: 'Religious and cultural traditions describe several forms of Shiva’s dance.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'रौद्र तांडव',
        en: 'Raudra Tandava',
      },
      {
        type: 'paragraph',
        hi: 'रौद्र तांडव को शिव के उग्र और प्रचंड स्वरूप से जोड़ा जाता है। यह अन्याय, अहंकार और अधर्म के अंत की शक्ति का प्रतीक माना जाता है।',
        en: 'The Raudra Tandava is associated with Shiva’s fierce and tempestuous form. It is seen as a symbol of the power that ends injustice, arrogance and adharma.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'आनंद तांडव',
        en: 'Ananda Tandava',
      },
      {
        type: 'paragraph',
        hi: 'आनंद तांडव शिव के आनंदमय नृत्य का रूप है। दक्षिण भारतीय शैव परंपरा में भगवान नटराज की प्रसिद्ध प्रतिमा इसी आनंद तांडव से संबंधित है। इसमें शिव का नृत्य ब्रह्मांडीय संतुलन, ऊर्जा और मुक्ति का प्रतीक बन जाता है।',
        en: 'The Ananda Tandava is Shiva’s dance of bliss. In the South Indian Shaiva tradition, the famous image of Lord Nataraja belongs to this Ananda Tandava. Here Shiva’s dance becomes a symbol of cosmic balance, energy and liberation.',
      },
      {
        type: 'paragraph',
        hi: 'ध्यान रहे कि तांडव के प्रकारों के नाम और उनकी व्याख्या अलग-अलग धार्मिक ग्रंथों तथा परंपराओं में भिन्न हो सकती है।',
        en: 'Keep in mind that the names of the forms of tandava, and how they are explained, can differ between religious texts and traditions.',
      },
      {
        type: 'heading',
        hi: '4. भगवान नटराज की प्रतिमा का रहस्य',
        en: '4. The Secrets of the Nataraja Image',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव की नटराज प्रतिमा में कई गहरे प्रतीक दिखाई देते हैं।',
        en: 'The Nataraja image of Lord Shiva holds many deep symbols.',
      },
      {
        type: 'paragraph',
        label: { hi: 'अग्नि का घेरा', en: 'The ring of fire' },
        hi: 'ब्रह्मांड की ऊर्जा और निरंतर परिवर्तन का प्रतीक माना जाता है।',
        en: 'Seen as a symbol of the energy of the universe and of constant change.',
      },
      {
        type: 'paragraph',
        label: { hi: 'डमरू', en: 'The damaru' },
        hi: 'सृजन, ध्वनि और ब्रह्मांडीय लय से जुड़ा है।',
        en: 'Linked with creation, sound and the rhythm of the cosmos.',
      },
      {
        type: 'paragraph',
        label: { hi: 'अग्नि', en: 'The flame' },
        hi: 'संहार और परिवर्तन का प्रतीक है।',
        en: 'A symbol of dissolution and transformation.',
      },
      {
        type: 'paragraph',
        label: { hi: 'उठा हुआ पैर', en: 'The raised foot' },
        hi: 'मुक्ति और आध्यात्मिक उत्थान से जोड़ा जाता है।',
        en: 'Associated with liberation and spiritual upliftment.',
      },
      {
        type: 'paragraph',
        label: { hi: 'पैर के नीचे स्थित आकृति', en: 'The figure beneath the foot' },
        hi: 'अज्ञान और आध्यात्मिक अंधकार पर विजय का प्रतीक मानी जाती है।',
        en: 'Seen as a symbol of victory over ignorance and spiritual darkness.',
      },
      {
        type: 'paragraph',
        label: { hi: 'नृत्य की मुद्रा', en: 'The dancing pose' },
        hi: 'यह दर्शाती है कि ब्रह्मांड स्थिर नहीं, बल्कि निरंतर गति और परिवर्तन में है।',
        en: 'It shows that the universe is never still, but always in motion and change.',
      },
      {
        type: 'paragraph',
        hi: 'इन प्रतीकों की व्याख्या शैव दर्शन और भारतीय कला परंपराओं में विस्तार से मिलती है।',
        en: 'These symbols are explained in detail in Shaiva philosophy and Indian art traditions.',
      },
      {
        type: 'heading',
        hi: '5. क्या शिव तांडव का संबंध रावण से है?',
        en: '5. Is the Shiva Tandava Connected with Ravana?',
      },
      {
        type: 'paragraph',
        hi: 'लोकप्रिय धार्मिक परंपरा में शिव तांडव स्तोत्र का संबंध रावण से जोड़ा जाता है। मान्यता है कि रावण ने भगवान शिव की स्तुति में इस स्तोत्र की रचना की थी।',
        en: 'Popular religious tradition connects the Shiva Tandava Stotram with Ravana. It is believed that Ravana composed this hymn in praise of Lord Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'हालाँकि, शिव तांडव स्तोत्र और शिव के तांडव नृत्य को एक ही विषय नहीं समझना चाहिए। तांडव शिव के नृत्य का नाम है, जबकि शिव तांडव स्तोत्र भगवान शिव की स्तुति में रचित एक प्रसिद्ध संस्कृत स्तोत्र है।',
        en: 'However, the Shiva Tandava Stotram and Shiva’s tandava dance should not be taken as the same thing. Tandava is the name of Shiva’s dance, while the Shiva Tandava Stotram is a famous Sanskrit hymn composed in his praise.',
      },
      {
        type: 'paragraph',
        hi: 'इस स्तोत्र में भगवान शिव के स्वरूप, उनकी जटाओं, गंगा, चंद्रमा, सर्पों और उनके अद्भुत तेज का काव्यात्मक वर्णन मिलता है।',
        en: 'The hymn gives a poetic description of Lord Shiva’s form — his matted locks, the Ganga, the moon, the serpents and his wondrous radiance.',
      },
      {
        type: 'heading',
        hi: '6. शिव तांडव से हमें क्या सीख मिलती है?',
        en: '6. What Does Shiva’s Tandava Teach Us?',
      },
      {
        type: 'paragraph',
        hi: 'शिव तांडव को आध्यात्मिक दृष्टि से समझने पर जीवन के कई महत्वपूर्ण संदेश सामने आते हैं:',
        en: 'Seen spiritually, Shiva’s tandava brings out several important messages for life:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          { label: { hi: 'परिवर्तन को स्वीकार करें', en: 'Accept change' }, hi: 'जीवन में परिस्थितियाँ हमेशा एक जैसी नहीं रहतीं।', en: 'Circumstances in life never stay the same.' },
          { label: { hi: 'अहंकार का त्याग करें', en: 'Let go of ego' }, hi: 'शक्ति और ज्ञान के साथ विनम्रता भी आवश्यक है।', en: 'Along with strength and knowledge, humility is needed too.' },
          { label: { hi: 'नकारात्मकता का अंत करें', en: 'End negativity' }, hi: 'पुरानी बुरी आदतों को छोड़कर नई शुरुआत की जा सकती है।', en: 'We can leave old bad habits behind and make a fresh start.' },
          { label: { hi: 'संतुलन बनाए रखें', en: 'Keep your balance' }, hi: 'जीवन में गति के साथ स्थिरता और अनुशासन भी जरूरी हैं।', en: 'Alongside movement, life needs steadiness and discipline.' },
          { label: { hi: 'आत्मज्ञान की ओर बढ़ें', en: 'Move towards self-knowledge' }, hi: 'बाहरी उपलब्धियों के साथ आंतरिक विकास भी महत्वपूर्ण है।', en: 'Inner growth matters as much as outer achievement.' },
        ],
      },
      {
        type: 'heading',
        hi: '7. निष्कर्ष',
        en: '7. Conclusion',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव का तांडव नृत्य हिंदू आध्यात्मिक परंपरा का एक गहरा प्रतीक है। यह सृजन, संरक्षण, संहार, परिवर्तन और मुक्ति जैसे विचारों को एक साथ प्रस्तुत करता है।',
        en: 'Lord Shiva’s tandava is a profound symbol of Hindu spiritual tradition. It brings together the ideas of creation, preservation, dissolution, transformation and liberation.',
      },
      {
        type: 'paragraph',
        hi: 'भगवान नटराज का नृत्य हमें याद दिलाता है कि परिवर्तन जीवन और ब्रह्मांड का अभिन्न हिस्सा है। शिव का तांडव केवल शक्ति का प्रदर्शन नहीं, बल्कि उस शाश्वत लय का प्रतीक भी है जिसके माध्यम से अस्तित्व निरंतर आगे बढ़ता है।',
        en: 'Lord Nataraja’s dance reminds us that change is an inseparable part of life and of the universe. Shiva’s tandava is not just a display of power, but a symbol of the eternal rhythm through which existence keeps moving forward.',
      },
      {
        type: 'quote',
        hi: 'हर हर महादेव!',
        en: 'Har Har Mahadev!',
      },
      sourceNote,
    ],
  },
  {
    id: 'st-rudraksha',
    slug: 'rudraksha-ka-mahatva',
    titleHindi: 'रुद्राक्ष का महत्व: भगवान शिव से जुड़ा पवित्र प्रतीक',
    titleEnglish: 'The Significance of Rudraksha: A Sacred Symbol of Lord Shiva',
    excerptHindi:
      'रुद्राक्ष क्या है, इसकी पौराणिक कथा, मुखों के प्रकार और शिवभक्त इसे क्यों धारण करते हैं।',
    excerptEnglish:
      'What the rudraksha is, the Puranic story behind it, its kinds of mukhi, and why devotees of Shiva wear it.',
    image: '/images/story-rudraksha.svg',
    imageAlt: { hi: 'रुद्राक्ष की माला का चित्रण', en: 'A depiction of a rudraksha mala' },
    category: 'adhyatmik-gyan',
    publishedAt: '2026-09-01',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'शिव पुराण, रुद्राक्ष जाबालोपनिषद्', en: 'Shiva Purana, Rudraksha Jabala Upanishad' },
    body: [
      {
        type: 'quote',
        hi: 'ॐ नमः शिवाय।',
        en: 'Om Namah Shivaya.',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष को सनातन धर्म में भगवान शिव से जुड़ा एक पवित्र प्रतीक माना जाता है। अनेक शिवभक्त रुद्राक्ष की माला धारण करते हैं और उसका उपयोग मंत्र जाप, ध्यान तथा आध्यात्मिक साधना में करते हैं।',
        en: 'In Sanatana Dharma, the rudraksha is regarded as a sacred symbol connected with Lord Shiva. Many devotees of Shiva wear a rudraksha mala and use it in mantra japa, meditation and spiritual practice.',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष केवल एक बीज नहीं, बल्कि करोड़ों श्रद्धालुओं के लिए आस्था, भक्ति और भगवान शिव के प्रति समर्पण का प्रतीक है।',
        en: 'For millions of devotees the rudraksha is not just a seed, but a symbol of faith, devotion and surrender to Lord Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'आइए जानते हैं रुद्राक्ष क्या है, इसका धार्मिक महत्व क्या है और शिवभक्त इसे क्यों धारण करते हैं।',
        en: 'Let us look at what the rudraksha is, what it means religiously, and why devotees of Shiva wear it.',
      },
      {
        type: 'heading',
        hi: '1. रुद्राक्ष क्या है?',
        en: '1. What Is a Rudraksha?',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष एक वृक्ष का बीज है। यह वृक्ष मुख्यतः Elaeocarpus ganitrus प्रजाति से संबंधित है। इसके बीज की सतह पर प्राकृतिक धारियाँ या खाँचें होती हैं, जिन्हें मुख कहा जाता है।',
        en: 'The rudraksha is the seed of a tree, mainly of the species Elaeocarpus ganitrus. The surface of the seed has natural lines or grooves, which are called mukhi (faces).',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष के वृक्ष भारत के कुछ क्षेत्रों और नेपाल सहित दक्षिण तथा दक्षिण-पूर्व एशिया के विभिन्न हिस्सों में पाए जाते हैं।',
        en: 'Rudraksha trees grow in some regions of India and in various parts of South and Southeast Asia, including Nepal.',
      },
      {
        type: 'paragraph',
        hi: 'सनातन धार्मिक परंपरा में रुद्राक्ष को भगवान शिव की उपासना से विशेष रूप से जोड़ा गया है।',
        en: 'In Sanatana tradition the rudraksha is especially associated with the worship of Lord Shiva.',
      },
      {
        type: 'heading',
        hi: '2. रुद्राक्ष नाम का अर्थ',
        en: '2. The Meaning of the Name',
      },
      {
        type: 'paragraph',
        hi: '\'रुद्राक्ष\' शब्द संस्कृत के दो भागों से मिलकर बना माना जाता है:',
        en: 'The word “rudraksha” is understood to join two Sanskrit parts:',
      },
      {
        type: 'list',
        items: [
          { label: { hi: 'रुद्र', en: 'Rudra' }, hi: 'भगवान शिव का एक प्रसिद्ध नाम।', en: 'A well-known name of Lord Shiva.' },
          { label: { hi: 'अक्ष', en: 'Aksha' }, hi: 'आँख या नेत्र के अर्थ में प्रयुक्त शब्द।', en: 'A word used to mean “eye”.' },
        ],
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक मान्यता के अनुसार, रुद्राक्ष का संबंध भगवान शिव के दिव्य अश्रुओं से है। इसी कारण इसे शिवभक्तों के लिए विशेष पवित्रता वाला माना जाता है।',
        en: 'Religious belief connects the rudraksha with Lord Shiva’s divine tears, which is why devotees regard it as especially sacred.',
      },
      {
        type: 'heading',
        hi: '3. रुद्राक्ष की पौराणिक कथा',
        en: '3. The Puranic Story of the Rudraksha',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष की उत्पत्ति के संबंध में एक प्रसिद्ध पौराणिक परंपरा प्रचलित है।',
        en: 'There is a well-known Puranic tradition about how the rudraksha came to be.',
      },
      {
        type: 'paragraph',
        hi: 'कथा के अनुसार, भगवान शिव ने संसार के कल्याण के लिए लंबे समय तक गहन तपस्या की। जब उन्होंने अपने नेत्र खोले, तो उनकी आँखों से कुछ अश्रु पृथ्वी पर गिरे।',
        en: 'The story tells that Lord Shiva performed deep penance for a long time for the welfare of the world. When he opened his eyes, a few tears fell from them to the earth.',
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक मान्यता के अनुसार, उन अश्रुओं से रुद्राक्ष के वृक्ष उत्पन्न हुए।',
        en: 'According to belief, rudraksha trees grew from those tears.',
      },
      {
        type: 'paragraph',
        hi: 'इसी कारण रुद्राक्ष को भगवान शिव की कृपा और करुणा से जुड़ा पवित्र प्रतीक माना जाता है।',
        en: 'This is why the rudraksha is regarded as a sacred symbol of Lord Shiva’s grace and compassion.',
      },
      {
        type: 'paragraph',
        hi: 'यह कथा रुद्राक्ष के आध्यात्मिक महत्व को समझाने वाली एक प्रचलित धार्मिक मान्यता है।',
        en: 'This story is a popular religious belief that explains the spiritual importance of the rudraksha.',
      },
      {
        type: 'heading',
        hi: '4. शिवभक्त रुद्राक्ष क्यों धारण करते हैं?',
        en: '4. Why Do Devotees of Shiva Wear Rudraksha?',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष धारण करने के पीछे विभिन्न धार्मिक और आध्यात्मिक मान्यताएँ हैं।',
        en: 'There are various religious and spiritual reasons for wearing a rudraksha.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'भगवान शिव के प्रति समर्पण',
        en: 'Devotion to Lord Shiva',
      },
      {
        type: 'paragraph',
        hi: 'कई श्रद्धालु रुद्राक्ष धारण करके भगवान शिव के प्रति अपनी भक्ति और आस्था व्यक्त करते हैं।',
        en: 'Many devotees wear a rudraksha to express their devotion and faith in Lord Shiva.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'मंत्र जाप में उपयोग',
        en: 'Use in Mantra Japa',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष की माला का उपयोग \'ॐ नमः शिवाय\' सहित विभिन्न मंत्रों के जाप में किया जाता है। माला के मनकों की सहायता से जाप की संख्या गिनना आसान होता है।',
        en: 'A rudraksha mala is used for chanting various mantras, including “Om Namah Shivaya”. The beads make it easy to keep count of the repetitions.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'ध्यान और साधना',
        en: 'Meditation and Practice',
      },
      {
        type: 'paragraph',
        hi: 'कुछ साधक रुद्राक्ष की माला को ध्यान और नियमित आध्यात्मिक अभ्यास का हिस्सा बनाते हैं।',
        en: 'Some practitioners make the rudraksha mala part of their meditation and regular spiritual practice.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'अनुशासन और स्मरण',
        en: 'Discipline and Remembrance',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष धारण करना कुछ लोगों के लिए अपने आध्यात्मिक संकल्पों और दैनिक साधना को याद रखने का माध्यम भी होता है।',
        en: 'For some people, wearing a rudraksha is also a way to remember their spiritual resolutions and daily practice.',
      },
      {
        type: 'paragraph',
        hi: 'ध्यान रहे कि रुद्राक्ष से मिलने वाले चमत्कारिक या चिकित्सकीय लाभों के दावों को वैज्ञानिक रूप से सिद्ध तथ्य नहीं मानना चाहिए।',
        en: 'Keep in mind that claims of miraculous or medical benefits from the rudraksha should not be taken as scientifically proven facts.',
      },
      {
        type: 'heading',
        hi: '5. रुद्राक्ष के मुख कितने प्रकार के होते हैं?',
        en: '5. How Many Kinds of Mukhi Are There?',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष के बीजों पर प्राकृतिक रूप से दिखाई देने वाली धारियों को उनके मुख कहा जाता है।',
        en: 'The natural lines visible on rudraksha seeds are called their mukhi.',
      },
      {
        type: 'paragraph',
        hi: 'परंपरागत रूप से एकमुखी से लेकर अनेक मुखों वाले रुद्राक्षों का वर्णन मिलता है। धार्मिक बाजार में विशेष रूप से एकमुखी से चौदहमुखी रुद्राक्ष का उल्लेख अधिक सुनने को मिलता है। कुछ परंपराएँ इससे अधिक मुखों वाले रुद्राक्षों को भी महत्व देती हैं।',
        en: 'Tradition describes rudrakshas ranging from one mukhi to many. In the religious market, one- to fourteen-mukhi rudrakshas are the ones most often mentioned, and some traditions also value those with more.',
      },
      {
        type: 'paragraph',
        hi: 'विभिन्न मुखों वाले रुद्राक्षों को अलग-अलग धार्मिक प्रतीकों और मान्यताओं से जोड़ा जाता है।',
        en: 'Rudrakshas with different numbers of mukhi are linked with different religious symbols and beliefs.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'एकमुखी रुद्राक्ष',
        en: 'Ek Mukhi (One-faced) Rudraksha',
      },
      {
        type: 'paragraph',
        hi: 'इसे कुछ परंपराओं में भगवान शिव के अद्वितीय स्वरूप से जोड़ा जाता है।',
        en: 'Some traditions associate it with the singular, unique form of Lord Shiva.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'पंचमुखी रुद्राक्ष',
        en: 'Panch Mukhi (Five-faced) Rudraksha',
      },
      {
        type: 'paragraph',
        hi: 'पंचमुखी रुद्राक्ष सबसे अधिक प्रचलित प्रकारों में से एक है। इसका उपयोग सामान्यतः जाप की मालाओं में किया जाता है।',
        en: 'The five-mukhi rudraksha is one of the most common kinds, and is generally used in japa malas.',
      },
      {
        type: 'heading',
        level: 3,
        hi: 'गौरीशंकर रुद्राक्ष',
        en: 'Gauri Shankar Rudraksha',
      },
      {
        type: 'paragraph',
        hi: 'प्राकृतिक रूप से जुड़े हुए दो रुद्राक्षों को गौरीशंकर रुद्राक्ष कहा जाता है। धार्मिक परंपराओं में इसे भगवान शिव और माता पार्वती के प्रतीक के रूप में देखा जाता है।',
        en: 'Two rudrakshas naturally joined together are called a Gauri Shankar rudraksha. Religious tradition sees it as a symbol of Lord Shiva and Mata Parvati.',
      },
      {
        type: 'paragraph',
        label: { hi: 'महत्वपूर्ण', en: 'Important' },
        hi: 'रुद्राक्ष के मुखों से जुड़े विशेष फल और शक्तियाँ धार्मिक मान्यताएँ हैं। उन्हें निश्चित या वैज्ञानिक रूप से प्रमाणित परिणाम के रूप में प्रस्तुत नहीं करना चाहिए।',
        en: 'The particular results and powers linked with each kind of mukhi are religious beliefs. They should not be presented as certain or scientifically proven outcomes.',
      },
      {
        type: 'heading',
        hi: '6. रुद्राक्ष धारण करने के नियम',
        en: '6. Guidelines for Wearing Rudraksha',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष धारण करने के संबंध में अलग-अलग धार्मिक परंपराओं में अलग-अलग नियम मिलते हैं।',
        en: 'Different religious traditions give different rules for wearing a rudraksha.',
      },
      {
        type: 'paragraph',
        hi: 'कुछ सामान्य सुझाव इस प्रकार हैं:',
        en: 'Some general suggestions:',
      },
      {
        type: 'list',
        items: [
          { hi: 'रुद्राक्ष को श्रद्धा और स्वच्छता के साथ रखें।', en: 'Keep your rudraksha with reverence and cleanliness.' },
          { hi: 'जाप के लिए रुद्राक्ष की माला का उपयोग किया जा सकता है।', en: 'A rudraksha mala can be used for japa.' },
          { hi: 'यदि आप किसी विशेष साधना या परंपरा का पालन करते हैं, तो उसके अनुसार नियम जानें।', en: 'If you follow a particular practice or tradition, learn its rules.' },
          { hi: 'रुद्राक्ष खरीदते समय उसकी प्रामाणिकता और विक्रेता की विश्वसनीयता पर ध्यान दें।', en: 'When buying a rudraksha, pay attention to its authenticity and the seller’s reliability.' },
          { hi: 'किसी विशेष प्रकार का रुद्राक्ष धारण न करने पर भयभीत न हों। भक्ति का मूल्य केवल किसी वस्तु को धारण करने से निर्धारित नहीं होता।', en: 'Do not be afraid if you do not wear a particular kind of rudraksha. The worth of devotion is not decided by wearing any object.' },
        ],
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष को धारण करने के लिए सभी लोगों पर लागू होने वाला एक ही सार्वभौमिक धार्मिक नियम नहीं है।',
        en: 'There is no single universal religious rule for wearing a rudraksha that applies to everyone.',
      },
      {
        type: 'heading',
        hi: '7. क्या रुद्राक्ष पहनने से समस्याएँ दूर हो जाती हैं?',
        en: '7. Does Wearing a Rudraksha Remove Problems?',
      },
      {
        type: 'paragraph',
        hi: 'धार्मिक मान्यताओं में रुद्राक्ष को आध्यात्मिक साधना, शिवभक्ति और सकारात्मक संकल्प से जोड़ा जाता है।',
        en: 'Religious belief links the rudraksha with spiritual practice, devotion to Shiva and positive resolve.',
      },
      {
        type: 'paragraph',
        hi: 'हालाँकि, यह दावा करना उचित नहीं होगा कि रुद्राक्ष पहनने से हर समस्या दूर हो जाएगी, भाग्य निश्चित रूप से बदल जाएगा या कोई बीमारी ठीक हो जाएगी।',
        en: 'However, it would not be right to claim that wearing a rudraksha will remove every problem, surely change one’s fortune or cure any illness.',
      },
      {
        type: 'paragraph',
        hi: 'जीवन की कठिनाइयों के समाधान के लिए आध्यात्मिक अभ्यास के साथ व्यावहारिक प्रयास, उचित सलाह और आवश्यकता पड़ने पर चिकित्सा सहायता भी महत्वपूर्ण हैं।',
        en: 'To deal with life’s difficulties, practical effort, sound advice and, when needed, medical help matter alongside spiritual practice.',
      },
      {
        type: 'heading',
        hi: '8. रुद्राक्ष और भगवान शिव की उपासना',
        en: '8. Rudraksha and the Worship of Lord Shiva',
      },
      {
        type: 'paragraph',
        hi: 'भगवान शिव की उपासना में रुद्राक्ष की माला का उपयोग लंबे समय से प्रचलित है।',
        en: 'The rudraksha mala has long been used in the worship of Lord Shiva.',
      },
      {
        type: 'paragraph',
        hi: 'श्रद्धालु अपनी आस्था के अनुसार रुद्राक्ष की माला से \'ॐ नमः शिवाय\' मंत्र का जाप कर सकते हैं।',
        en: 'Devotees may chant the mantra “Om Namah Shivaya” on a rudraksha mala according to their faith.',
      },
      {
        type: 'paragraph',
        hi: 'मंत्र जाप का उद्देश्य मन को एकाग्र करना, नियमित साधना करना और अपने आराध्य के प्रति श्रद्धा व्यक्त करना हो सकता है।',
        en: 'The purpose of mantra japa can be to focus the mind, keep a regular practice and express reverence for one’s chosen deity.',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष की माला धारण करना अनिवार्य नहीं है। कोई व्यक्ति बिना रुद्राक्ष धारण किए भी भगवान शिव की पूजा, ध्यान और मंत्र जाप कर सकता है।',
        en: 'Wearing a rudraksha mala is not compulsory. Anyone can worship Lord Shiva, meditate and chant mantras without wearing a rudraksha.',
      },
      {
        type: 'heading',
        hi: 'निष्कर्ष',
        en: 'Conclusion',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष सनातन धर्म में भगवान शिव से जुड़ा एक महत्वपूर्ण धार्मिक प्रतीक है। इसकी पौराणिक उत्पत्ति की कथाएँ, मंत्र जाप में उपयोग और शिवभक्तों की परंपराएँ इसे विशेष स्थान प्रदान करती हैं।',
        en: 'The rudraksha is an important religious symbol connected with Lord Shiva in Sanatana Dharma. The stories of its Puranic origin, its use in mantra japa and the traditions of Shiva’s devotees give it a special place.',
      },
      {
        type: 'paragraph',
        hi: 'रुद्राक्ष का वास्तविक आध्यात्मिक महत्व श्रद्धा, अनुशासन, साधना और भगवान शिव के प्रति समर्पण की भावना में देखा जा सकता है।',
        en: 'The true spiritual significance of the rudraksha lies in faith, discipline, practice and a spirit of surrender to Lord Shiva.',
      },
      {
        type: 'quote',
        hi: 'हर हर महादेव! ॐ नमः शिवाय!',
        en: 'Har Har Mahadev! Om Namah Shivaya!',
      },
      {
        type: 'heading',
        hi: 'स्रोत और संपादकीय टिप्पणी',
        en: 'Sources and Editorial Note',
      },
      {
        type: 'paragraph',
        hi: 'यह लेख रुद्राक्ष से संबंधित प्रचलित धार्मिक मान्यताओं और सामान्य जानकारी का सरल हिंदी में परिचय है। इसे किसी एक ग्रंथ का शब्दशः अनुवाद न माना जाए।',
        en: 'This article is a simple introduction to popular religious beliefs and general information about the rudraksha. It should not be read as a word-for-word translation of any single text.',
      },
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
    titleHindi: 'भगवान कार्तिकेय के जन्म की कथा',
    titleEnglish: 'The Story of Lord Kartikeya’s Birth',
    excerptHindi:
      'भगवान शिव और माता पार्वती के पुत्र के जन्म की अद्भुत पौराणिक कथा।',
    excerptEnglish:
      'The wondrous Puranic story of the birth of the son of Lord Shiva and Mata Parvati.',
    image: '/images/story-kartikeya.svg',
    imageAlt: { hi: 'कार्तिकेय का चित्रण, मयूर के साथ', en: 'A depiction of Kartikeya with a peacock' },
    category: 'kartikeya',
    publishedAt: '2026-09-08',
    readingMinutes: 5,
    author: { hi: 'मंदिर समिति', en: 'Temple committee' },
    source: { hi: 'स्कंद पुराण', en: 'Skanda Purana' },
    body: [
      {
        type: 'quote',
        hi: 'ॐ श्री गणेशाय नमः। ॐ नमः शिवाय।',
        en: 'Om Shri Ganeshaya Namah. Om Namah Shivaya.',
      },
      {
        type: 'paragraph',
        hi: 'भगवान कार्तिकेय, जिन्हें स्कंद, कुमार और मुरुगन के नाम से भी जाना जाता है, भगवान शिव और माता पार्वती के पुत्र हैं। वे देवताओं के सेनापति और अद्भुत पराक्रम के प्रतीक माने जाते हैं। उनकी जन्मकथा का संबंध देवताओं पर आए एक बड़े संकट और असुर तारकासुर के अत्याचार से जुड़ा है।',
        en: 'Lord Kartikeya — also known as Skanda, Kumara and Murugan — is the son of Lord Shiva and Mata Parvati. He is revered as the commander of the devas and a symbol of extraordinary valour. The story of his birth is bound up with a great crisis that befell the devas and the tyranny of the asura Tarakasura.',
      },
      {
        type: 'heading',
        hi: '1. तारकासुर का अत्याचार',
        en: '1. The Tyranny of Tarakasura',
      },
      {
        type: 'paragraph',
        hi: 'प्राचीन काल में तारकासुर नाम का एक शक्तिशाली असुर था। उसने कठोर तपस्या करके ब्रह्माजी को प्रसन्न किया और उनसे वरदान प्राप्त किया।',
        en: 'Long ago there lived a powerful asura named Tarakasura. Through severe penance he pleased Lord Brahma and obtained a boon from him.',
      },
      {
        type: 'paragraph',
        hi: 'वरदान के कारण वह स्वयं को अत्यंत शक्तिशाली समझने लगा। धीरे-धीरे उसका अत्याचार बढ़ने लगा। उसने देवताओं को परेशान करना शुरू कर दिया और स्वर्ग में उनका रहना कठिन कर दिया।',
        en: 'The boon made him believe himself all-powerful. Little by little his cruelty grew. He began to torment the devas and made it hard for them to remain in heaven.',
      },
      {
        type: 'paragraph',
        hi: 'तारकासुर को यह विश्वास था कि उसका वध केवल भगवान शिव के पुत्र के हाथों ही हो सकता है। उसे लगता था कि भगवान शिव तपस्या में लीन हैं और उनका विवाह तथा पुत्र का जन्म होना अत्यंत कठिन है। इसी विश्वास के कारण वह स्वयं को लगभग अजेय समझने लगा।',
        en: 'Tarakasura believed he could be slain only by a son of Lord Shiva. Since Shiva was absorbed in penance, he thought it most unlikely that Shiva would marry or have a son — and so he came to think of himself as all but invincible.',
      },
      {
        type: 'paragraph',
        hi: 'असुर के अत्याचारों से परेशान होकर देवता ब्रह्माजी के पास पहुँचे और उनसे सहायता माँगी।',
        en: 'Distressed by the asura’s cruelty, the devas went to Lord Brahma and asked for his help.',
      },
      {
        type: 'paragraph',
        hi: 'ब्रह्माजी ने बताया कि तारकासुर का अंत भगवान शिव के पुत्र द्वारा ही संभव है। इसलिए देवताओं को भगवान शिव और माता पार्वती के मिलन तथा उनके पुत्र के जन्म की प्रतीक्षा करनी होगी।',
        en: 'Brahma told them that Tarakasura could be ended only by a son of Lord Shiva. The devas would therefore have to wait for the union of Shiva and Parvati and the birth of their son.',
      },
      {
        type: 'heading',
        hi: '2. माता पार्वती की तपस्या',
        en: '2. Mata Parvati’s Penance',
      },
      {
        type: 'paragraph',
        hi: 'माता पार्वती पर्वतराज हिमालय की पुत्री थीं। उन्होंने भगवान शिव को अपने पति के रूप में प्राप्त करने के लिए कठोर तपस्या की।',
        en: 'Mata Parvati was the daughter of Himalaya, king of the mountains. She performed severe penance to win Lord Shiva as her husband.',
      },
      {
        type: 'paragraph',
        hi: 'उनकी भक्ति, समर्पण और दृढ़ संकल्प से भगवान शिव प्रसन्न हुए। अंततः भगवान शिव और माता पार्वती का विवाह हुआ।',
        en: 'Her devotion, dedication and firm resolve pleased Lord Shiva, and in the end Shiva and Parvati were married.',
      },
      {
        type: 'paragraph',
        hi: 'देवताओं को आशा जगी कि अब ऐसा दिव्य पुत्र जन्म लेगा जो तारकासुर के अत्याचारों का अंत कर सकेगा।',
        en: 'Hope rose among the devas that a divine son would now be born who could put an end to Tarakasura’s tyranny.',
      },
      {
        type: 'paragraph',
        hi: 'हालाँकि, कार्तिकेय के जन्म से पहले की घटनाओं का वर्णन अलग-अलग पुराणों और परंपराओं में कुछ भिन्न रूपों में मिलता है।',
        en: 'The events leading up to Kartikeya’s birth, however, are told somewhat differently in different Puranas and traditions.',
      },
      {
        type: 'heading',
        hi: '3. दिव्य तेज से हुआ कार्तिकेय का प्राकट्य',
        en: '3. Kartikeya Appears from Divine Radiance',
      },
      {
        type: 'paragraph',
        hi: 'कार्तिकेय के जन्म से जुड़ी एक प्रसिद्ध पौराणिक परंपरा के अनुसार, भगवान शिव के दिव्य तेज को धारण करना अत्यंत कठिन था। उस तेज को अग्निदेव ने ग्रहण किया और फिर उसे गंगा से संबंधित दिव्य घटनाक्रम के माध्यम से आगे पहुँचाया गया।',
        en: 'According to one well-known Puranic tradition of Kartikeya’s birth, Lord Shiva’s divine radiance was almost impossible to bear. Agnidev, the god of fire, received it, and it was then carried onward through a divine sequence of events involving the Ganga.',
      },
      {
        type: 'paragraph',
        hi: 'अंततः यह दिव्य तेज सरकंडों से युक्त एक स्थान पर पहुँचा, जहाँ से एक दिव्य बालक का प्राकट्य हुआ।',
        en: 'At last the radiance came to rest in a bed of reeds, and from there a divine child appeared.',
      },
      {
        type: 'paragraph',
        hi: 'इस बालक में असाधारण तेज, शक्ति और वीरता थी। उसके जन्म से देवताओं को आशा मिली कि तारकासुर के अत्याचारों से मुक्ति का मार्ग खुल गया है।',
        en: 'The child shone with extraordinary radiance, strength and courage. His birth gave the devas hope that the way to freedom from Tarakasura had opened.',
      },
      {
        type: 'paragraph',
        hi: 'कार्तिकेय के जन्म का यह वर्णन उनकी दिव्य उत्पत्ति और देवताओं की रक्षा के लिए उनके प्राकट्य को दर्शाता है।',
        en: 'This account of Kartikeya’s birth shows his divine origin and that he appeared in order to protect the devas.',
      },
      {
        type: 'heading',
        hi: '4. छह कृत्तिकाओं ने किया पालन-पोषण',
        en: '4. Raised by the Six Krittikas',
      },
      {
        type: 'paragraph',
        hi: 'कार्तिकेय की कथा में छह कृत्तिका देवियों का विशेष स्थान है।',
        en: 'The six Krittika goddesses hold a special place in Kartikeya’s story.',
      },
      {
        type: 'paragraph',
        hi: 'एक प्रसिद्ध कथा के अनुसार, इन छह दिव्य माताओं ने बालक का पालन-पोषण किया। उनके स्नेह और देखभाल से बालक का संबंध कृत्तिकाओं से जुड़ गया और वे कार्तिकेय कहलाए।',
        en: 'A well-known story tells that these six divine mothers raised the child. Through their love and care he became bound to the Krittikas, and so he was called Kartikeya.',
      },
      {
        type: 'paragraph',
        hi: 'कुछ परंपराओं में वर्णन मिलता है कि बालक के छह मुख प्रकट हुए, जिससे वे छहों माताओं का एक साथ स्नेह प्राप्त कर सके।',
        en: 'Some traditions say the child grew six faces, so that he could receive the love of all six mothers at once.',
      },
      {
        type: 'paragraph',
        hi: 'इसी कारण भगवान कार्तिकेय को षण्मुख और षडानन भी कहा जाता है, जिनका अर्थ है छह मुखों वाला।',
        en: 'This is why Lord Kartikeya is also called Shanmukha and Shadanana — both meaning “the six-faced one”.',
      },
      {
        type: 'paragraph',
        hi: 'उनके अन्य प्रसिद्ध नाम हैं:',
        en: 'His other well-known names are:',
      },
      {
        type: 'list',
        items: [
          { label: { hi: 'स्कंद', en: 'Skanda' }, hi: 'भगवान कार्तिकेय का प्रसिद्ध नाम।', en: 'A well-known name of Lord Kartikeya.' },
          { label: { hi: 'कुमार', en: 'Kumara' }, hi: 'दिव्य युवा देवता के रूप में उनका नाम।', en: 'His name as the divine youthful god.' },
          { label: { hi: 'मुरुगन', en: 'Murugan' }, hi: 'दक्षिण भारत में विशेष रूप से पूजित नाम।', en: 'The name under which he is especially worshipped in South India.' },
          { label: { hi: 'देवसेनापति', en: 'Devasenapati' }, hi: 'देवताओं की सेना के सेनापति।', en: 'Commander of the army of the devas.' },
        ],
      },
      {
        type: 'heading',
        hi: '5. भगवान कार्तिकेय बने देवताओं के सेनापति',
        en: '5. Kartikeya Becomes Commander of the Devas',
      },
      {
        type: 'paragraph',
        hi: 'कार्तिकेय बड़े होकर असाधारण पराक्रम और युद्ध-कौशल वाले देवता बने।',
        en: 'Kartikeya grew into a god of extraordinary valour and skill in battle.',
      },
      {
        type: 'paragraph',
        hi: 'देवताओं ने उन्हें अपनी सेना का सेनापति नियुक्त किया। अब तारकासुर के अत्याचारों का सामना करने के लिए उनके पास एक शक्तिशाली नेतृत्व था।',
        en: 'The devas made him commander of their army. At last they had a mighty leader to stand against Tarakasura’s tyranny.',
      },
      {
        type: 'paragraph',
        hi: 'कार्तिकेय ने देवताओं की सेना का नेतृत्व किया और तारकासुर के विरुद्ध युद्ध किया।',
        en: 'Kartikeya led the army of the devas into battle against Tarakasura.',
      },
      {
        type: 'paragraph',
        hi: 'प्रचलित पौराणिक कथा के अनुसार, इस युद्ध में भगवान कार्तिकेय ने तारकासुर का वध किया और देवताओं को उसके अत्याचारों से मुक्ति दिलाई।',
        en: 'According to the popular Puranic account, Lord Kartikeya slew Tarakasura in this battle and freed the devas from his cruelty.',
      },
      {
        type: 'paragraph',
        hi: 'इस प्रकार उनका जन्म केवल एक दिव्य बालक के आगमन की कथा नहीं है, बल्कि धर्म की रक्षा और अन्याय के अंत से जुड़ी एक महत्वपूर्ण पौराणिक गाथा भी है।',
        en: 'So his birth is not only the story of a divine child’s arrival, but also an important Puranic saga of the protection of dharma and the end of injustice.',
      },
      {
        type: 'heading',
        hi: '6. भगवान कार्तिकेय की कथा से क्या शिक्षा मिलती है?',
        en: '6. What Does Kartikeya’s Story Teach Us?',
      },
      {
        type: 'paragraph',
        hi: 'भगवान कार्तिकेय की जन्मकथा हमें कई महत्वपूर्ण बातें समझाती है:',
        en: 'The story of Lord Kartikeya’s birth teaches us several important things:',
      },
      {
        type: 'heading',
        level: 3,
        hi: '1. अहंकार का अंत निश्चित है।',
        en: '1. Arrogance is sure to fall.',
      },
      {
        type: 'paragraph',
        hi: 'तारकासुर अपनी शक्ति और वरदान के कारण अहंकारी हो गया था। उसकी कथा बताती है कि शक्ति का दुरुपयोग अंततः विनाश का कारण बन सकता है।',
        en: 'Tarakasura grew arrogant because of his power and his boon. His story shows that the misuse of power can lead, in the end, to ruin.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '2. तपस्या और संकल्प का महत्व है।',
        en: '2. Penance and resolve matter.',
      },
      {
        type: 'paragraph',
        hi: 'माता पार्वती की तपस्या दृढ़ निश्चय, समर्पण और धैर्य का प्रतीक है।',
        en: 'Mata Parvati’s penance stands for firm determination, dedication and patience.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '3. शक्ति का उद्देश्य रक्षा होना चाहिए।',
        en: '3. Strength should serve to protect.',
      },
      {
        type: 'paragraph',
        hi: 'भगवान कार्तिकेय का सेनापति स्वरूप बताता है कि पराक्रम का उपयोग दूसरों की रक्षा और अन्याय का सामना करने के लिए किया जाना चाहिए।',
        en: 'Lord Kartikeya’s role as commander shows that valour should be used to protect others and to stand against injustice.',
      },
      {
        type: 'heading',
        level: 3,
        hi: '4. हर व्यक्ति की भूमिका महत्वपूर्ण है।',
        en: '4. Every role matters.',
      },
      {
        type: 'paragraph',
        hi: 'देवताओं, दिव्य शक्तियों और कृत्तिका माताओं से जुड़ी घटनाएँ दिखाती हैं कि एक बड़े उद्देश्य की पूर्ति में अनेक भूमिकाएँ जुड़ी हो सकती हैं।',
        en: 'The parts played by the devas, the divine powers and the Krittika mothers show that many roles can come together to fulfil a great purpose.',
      },
      {
        type: 'heading',
        hi: 'निष्कर्ष',
        en: 'Conclusion',
      },
      {
        type: 'paragraph',
        hi: 'भगवान कार्तिकेय का जन्म देवताओं की आशा और धर्म की रक्षा से जुड़ी एक महत्वपूर्ण पौराणिक घटना है। वे साहस, अनुशासन, पराक्रम और कर्तव्य के प्रतीक माने जाते हैं।',
        en: 'The birth of Lord Kartikeya is an important Puranic event tied to the hopes of the devas and the protection of dharma. He is revered as a symbol of courage, discipline, valour and duty.',
      },
      {
        type: 'paragraph',
        hi: 'उनकी कथा हमें प्रेरित करती है कि कठिन परिस्थितियों में धैर्य बनाए रखें, अपनी शक्ति का सदुपयोग करें और अन्याय के सामने दृढ़ता से खड़े रहें।',
        en: 'His story inspires us to stay patient in hard times, to use our strength well and to stand firm against injustice.',
      },
      {
        type: 'quote',
        hi: 'जय भगवान कार्तिकेय! जय महादेव!',
        en: 'Jai Bhagwan Kartikeya! Jai Mahadev!',
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
