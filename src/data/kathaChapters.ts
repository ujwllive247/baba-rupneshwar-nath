/**
 * Immersive comic-style Katha chapters.
 *
 * Distinct from `stories.ts` (plain devotional articles): a `KathaChapter` is
 * scene-by-scene, scroll-driven, and deliberately separates two kinds of
 * content in its own fields rather than blending them into one paragraph:
 *
 *  - `scriptureNote` — the elements drawn from the Puranas themselves.
 *  - `creativeNote`  — dialogue, pacing and sensory detail original to this
 *    retelling, written for this website and not copied from any modern
 *    comic, television serial, or translation.
 *
 * The first chapter retells the churning of the ocean and Shiva as
 * Neelkanth — already the site's featured Mahadev Katha article
 * (`st-samudra-manthan` in stories.ts) — so `relatedStorySlug` cross-links
 * the two.
 */
import type { KathaChapter } from '@/types';

export const kathaChapters: KathaChapter[] = [
  {
    id: 'kc-samudra-manthan',
    slug: 'samudra-manthan-neelkanth',
    titleHindi: 'समुद्र मंथन और नीलकंठ महादेव',
    titleEnglish: 'The Churning of the Ocean and Neelkanth Mahadev',
    hook: {
      hi: 'जब सम्पूर्ण सृष्टि एक ही रात में भस्म होने वाली थी — तब त्रिलोक के रक्षक कौन बने?',
      en: 'When all of creation stood one breath from being consumed — who came forward to bear it?',
    },
    introduction: {
      hi: 'यह उन क्षणों की कथा है जब अमृत की खोज ने एक ऐसे विष को जन्म दिया, जिसे न देवता सह सके, न असुर। यह कथा बताती है कि रक्षक कौन है — वह जो लाभ बांटता है, या वह जो संकट स्वयं ओढ़ लेता है।',
      en: 'This is the story of the moment the search for immortality gave rise to a poison neither devas nor asuras could bear. It asks who a true protector really is — the one who shares the reward, or the one who takes on the danger himself.',
    },
    coverImage: '/images/story-samudra-manthan.svg',
    coverImageAlt: {
      hi: 'समुद्र मंथन का चित्रण, वासुकि नाग एवं मंदराचल पर्वत के साथ',
      en: 'A depiction of the churning of the ocean, with the serpent Vasuki and Mount Mandara',
    },
    source: { hi: 'शिव पुराण, भागवत पुराण, विष्णु पुराण', en: 'Shiva Purana, Bhagavata Purana, Vishnu Purana' },
    scriptureNote: {
      hi: 'क्षीरसागर मंथन, मंदराचल एवं वासुकि का प्रयोग, हलाहल विष का उद्गम, देवताओं की शिव से प्रार्थना, तथा शिव द्वारा विष को कंठ में धारण करना — इन सबका उल्लेख भागवत पुराण (स्कन्ध 8), विष्णु पुराण एवं महाभारत (आदि पर्व) में मिलता है। नीलकंठ नाम की उत्पत्ति शिव पुराण की परंपरा में विशेष रूप से वर्णित है।',
      en: 'The churning of the cosmic ocean, the use of Mount Mandara and the serpent Vasuki, the emergence of the poison Halahala, the devas’ appeal to Shiva, and Shiva holding the poison in his throat are all recounted in the Bhagavata Purana (Skandha 8), the Vishnu Purana, and the Mahabharata (Adi Parva). The name Neelkanth is elaborated specifically within the Shiva Purana tradition.',
    },
    creativeNote: {
      hi: 'दृश्यों का क्रम, संवाद, तथा वातावरण का वर्णन — जैसे कैलाश की शांति, देवताओं की व्याकुलता के शब्द, माता पार्वती के संवाद — इस वेबसाइट हेतु मौलिक रूप से लिखे गए हैं। ये कथा के मूल भाव के अनुरूप कल्पित हैं, किसी शास्त्र से सीधे उद्धृत नहीं।',
      en: 'The scene sequencing, dialogue, and atmospheric description — such as the stillness of Kailash, the devas’ exact words of panic, or Parvati’s lines — are original creative writing for this website, imagined in keeping with the story’s spirit rather than quoted from any scripture.',
    },
    versionsNote: {
      hi: 'पुराणों के विभिन्न संस्करणों में विवरण थोड़ा भिन्न मिलता है — कहीं वासुकि द्वारा विष उगला जाना वर्णित है, तो कहीं यह सीधे सागर से प्रकट होना बताया गया है। माता पार्वती की भूमिका का विवरण भी परंपरा-भेद से भिन्न मिलता है। यह प्रस्तुति एक सुसंगत पाठ के रूप में इन्हें साथ लाती है।',
      en: 'Details vary slightly across recensions — some describe Vasuki spitting out the poison, others have it rise directly from the ocean. Parvati’s exact role is also described differently across traditions. This retelling brings these together into one coherent narrative.',
    },
    relatedStorySlug: 'samudra-manthan-neelkanth',
    takeaways: [
      {
        hi: 'सच्चा नेतृत्व वह है जो संकट में स्वयं आगे आए, उसे दूसरों पर न टाले।',
        en: 'True leadership steps forward in a crisis rather than passing it to someone else.',
      },
      {
        hi: 'करुणा और साहस साथ-साथ चलते हैं — महादेव ने विष को भय से नहीं, प्रेम से ग्रहण किया।',
        en: 'Compassion and courage move together — Mahadev took the poison not out of fear, but out of love.',
      },
      {
        hi: 'हर कठिनाई को पूर्णतः अस्वीकार या पूर्णतः स्वीकार करने के बीच भी एक मार्ग होता है, जैसे विष को न निगलना, न त्यागना।',
        en: 'Between wholly rejecting a difficulty and wholly succumbing to it, there is often a middle path — as when the poison was neither swallowed nor released.',
      },
      {
        hi: 'संकट के पीछे प्रायः अमृत छिपा होता है, जो धैर्य रखने वालों को ही प्राप्त होता है।',
        en: 'Nectar often lies just beyond hardship — reached only by those who hold steady through it.',
      },
    ],
    scenes: [
      {
        id: 'scene-1',
        sceneNumber: 1,
        heading: { hi: 'क्षीरसागर का मंथन', en: 'The Churning of the Ocean of Milk' },
        narration: {
          hi: 'देवताओं और असुरों के बीच अमरता को लेकर एक पुरानी होड़ थी। दुर्बल पड़ चुके देवताओं ने भगवान विष्णु से शरण मांगी, और उन्हीं के परामर्श से एक असंभव-सा कार्य ठाना गया — क्षीरसागर का मंथन। मंदराचल पर्वत मथनी बना, और नागराज वासुकि रस्सी।',
          en: 'An old rivalry over immortality stood between the devas and the asuras. Weakened, the devas sought refuge with Vishnu, and on his counsel they undertook an almost impossible task — churning the Ocean of Milk. Mount Mandara became the churning rod, and Vasuki, king of serpents, the rope.',
        },
        detail: {
          hi: 'एक ओर देवता खड़े थे, दूसरी ओर असुर — दोनों एक ही रस्सी थामे, एक ही लक्ष्य के लिए, पर भिन्न आशाओं से।',
          en: 'Devas stood on one side, asuras on the other — both holding the same rope, toward the same goal, but with very different hopes.',
        },
        dialogue: [
          {
            speaker: { hi: 'देवराज इन्द्र', en: 'Indra, king of the devas' },
            line: { hi: '“यदि अमृत मिल गया, तो हमारा बल फिर लौट आएगा। मंथन आरम्भ करो।”', en: '“If we win the amrita, our strength returns. Let the churning begin.”' },
          },
          {
            speaker: { hi: 'असुरराज', en: 'The asura king' },
            line: { hi: '“अमृत पर पहला अधिकार हमारा होगा!”', en: '“The first claim to the nectar will be ours!”' },
          },
        ],
        image: '/images/katha-scene-1.svg',
        imageAlt: {
          hi: 'मंदराचल पर्वत के चारों ओर वासुकि नाग लिपटा हुआ, एक ओर देवता तथा दूसरी ओर असुर रस्सी थामे हुए',
          en: 'The serpent Vasuki coiled around Mount Mandara, with devas on one side and asuras on the other holding the rope',
        },
      },
      {
        id: 'scene-2',
        sceneNumber: 2,
        heading: { hi: 'हलाहल — वह विष जो सब कुछ निगल जाता', en: 'Halahala — the Poison That Threatened Everything' },
        narration: {
          hi: 'मंथन जैसे-जैसे गहराता गया, सागर हिलने लगा। रत्नों के प्रकट होने से पहले, जल की गहराइयों से एक भीषण काली धुंध उठी — हलाहल विष। इसकी ज्वाला इतनी प्रचंड थी कि आकाश धुएँ से भर गया, और तीनों लोक कांप उठे।',
          en: 'As the churning deepened, the ocean itself began to shudder. Before any treasure could rise, a terrible black fume surged up from the depths — the poison Halahala. Its fumes were so fierce that the sky itself filled with smoke, and all three worlds trembled.',
        },
        detail: {
          hi: 'पक्षी आकाश से गिरने लगे, नदियाँ ठहर गईं — मानो सृष्टि स्वयं सांस रोके खड़ी हो।',
          en: 'Birds began falling from the sky, rivers stood still — as if creation itself was holding its breath.',
        },
        dialogue: [
          {
            speaker: { hi: 'एक भयभीत देवता', en: 'A terrified deva' },
            line: { hi: '“यह प्रलय है! यह विष सम्पूर्ण सृष्टि को भस्म कर देगा!”', en: '“This is doomsday! This poison will consume all of creation!”' },
          },
          {
            speaker: { hi: 'ब्रह्मा जी', en: 'Brahma' },
            line: { hi: '“इसे रोकने की शक्ति न हम में है, न असुरों में। हमें कैलाश चलना होगा — महादेव की शरण में।”', en: '“Neither we nor the asuras have the power to stop this. We must go to Kailash — to Mahadev’s refuge.”' },
          },
        ],
        image: '/images/katha-scene-2.svg',
        imageAlt: {
          hi: 'सागर से उठती काली विषैली ज्वाला, चारों ओर भयभीत देवता एवं असुर',
          en: 'A dark, poisonous cloud rising from the ocean, with frightened devas and asuras around it',
        },
      },
      {
        id: 'scene-3',
        sceneNumber: 3,
        heading: { hi: 'कैलाश पर देवताओं की पुकार', en: 'The Devas’ Cry Upon Kailash' },
        narration: {
          hi: 'भयभीत देवता, असुर और ऋषि — सभी दौड़ते हुए कैलाश पहुँचे, जहाँ महादेव माता पार्वती के संग शांत तप में लीन थे। उनकी करुण पुकार सुनकर महादेव ने नेत्र खोले, अविचलित, पर पूर्ण रूप से सजग।',
          en: 'Terrified devas, asuras and sages ran together to Kailash, where Mahadev sat in quiet meditation beside Parvati. Hearing their desperate plea, Mahadev opened his eyes — unshaken, yet fully present to their fear.',
        },
        detail: {
          hi: 'कैलाश की शांति उस पुकार से नहीं टूटी — उसने पुकार को अपने भीतर समा लिया।',
          en: 'The stillness of Kailash did not break at their cry — it simply made room for it.',
        },
        dialogue: [
          {
            speaker: { hi: 'देवगण', en: 'The devas, together' },
            line: { hi: '“हे भोलेनाथ! आप ही त्रिलोक के रक्षक हैं। यह विष हमसे संभल नहीं रहा — सृष्टि को बचा लीजिए!”', en: '“O Bholenath! You alone are the protector of the three worlds. This poison is beyond us — save all of creation!”' },
          },
          {
            speaker: { hi: 'महादेव', en: 'Mahadev' },
            line: { hi: '“जो सृष्टि की रक्षा हेतु मेरी शरण आया है, उसे लौटाना मेरा स्वभाव नहीं। चिंता मत करो।”', en: '“To turn away one who has come to me for the sake of creation’s safety is not in my nature. Do not fear.”' },
          },
        ],
        image: '/images/katha-scene-3.svg',
        imageAlt: {
          hi: 'कैलाश पर्वत पर ध्यानमग्न महादेव एवं माता पार्वती, समक्ष हाथ जोड़े खड़े देवगण',
          en: 'Mahadev and Parvati in meditation on Mount Kailash, with the devas standing before them, hands folded',
        },
      },
      {
        id: 'scene-4',
        sceneNumber: 4,
        heading: { hi: 'करुणा का सबसे बड़ा प्रमाण', en: 'The Greatest Proof of Compassion' },
        narration: {
          hi: 'महादेव कैलाश से उठे और सीधे उस दिशा में चल पड़े जहाँ हलाहल अपनी सम्पूर्ण भयंकरता के साथ फैल रहा था। बिना भय, बिना संकोच, उन्होंने अपनी दोनों हथेलियों में उस विष को समेट लिया।',
          en: 'Mahadev rose from Kailash and walked straight toward where Halahala raged in its full fury. Without fear, without hesitation, he gathered the poison into his own two palms.',
        },
        detail: {
          hi: 'उनके चलने में कोई शीघ्रता नहीं थी, कोई दिखावा नहीं — केवल एक निश्चय।',
          en: 'There was no haste in his stride, no display — only resolve.',
        },
        dialogue: [
          {
            speaker: { hi: 'माता पार्वती', en: 'Parvati' },
            line: { hi: '“स्वामी, यह विष प्राणघातक है। ऐसा मत कीजिए!”', en: '“My lord, this poison is deadly. Do not do this!”' },
          },
          {
            speaker: { hi: 'महादेव', en: 'Mahadev' },
            line: { hi: '“पार्वती, जो संसार का भार उठाना नहीं जानता, वह उसका रक्षक कैसे कहलाए? यह विष यहीं रुकेगा — न ऊपर जाएगा, न नीचे।”', en: '“Parvati, one who cannot carry the world’s burden cannot be called its protector. This poison will stop right here — going no further, up or down.”' },
          },
        ],
        image: '/images/katha-scene-4.svg',
        imageAlt: {
          hi: 'महादेव अपनी हथेलियों में काला विष थामे हुए, माता पार्वती व्याकुल होकर उनका हाथ थामने का प्रयास करती हुईं',
          en: 'Mahadev holding the dark poison in his palms, with Parvati reaching anxiously for his hand',
        },
      },
      {
        id: 'scene-5',
        sceneNumber: 5,
        heading: { hi: 'नीलकंठ का जन्म', en: 'The Birth of Neelkanth' },
        narration: {
          hi: 'महादेव ने विष को कंठ में रोक लिया — न उसे निगला, न बाहर जाने दिया। विष के प्रभाव से उनका कंठ नीला पड़ गया। माता पार्वती ने श्रद्धा और भय से भरकर उनका कंठ अपने हाथों में थाम लिया, मानो उस पीड़ा में स्वयं भी सम्मिलित हो रही हों।',
          en: 'Mahadev held the poison in his throat — neither swallowing it nor letting it pass. His throat turned blue with its force. Parvati, filled with reverence and fear, held his throat in her hands, as if to share in that pain herself.',
        },
        detail: {
          hi: 'उसी क्षण से महादेव ‘नीलकंठ’ कहलाए — वे जिन्होंने संसार का विष अपने भीतर, संतुलन में, धारण किया।',
          en: 'From that moment, Mahadev came to be called ‘Neelkanth’ — the one who held the world’s poison within himself, in perfect balance.',
        },
        dialogue: [
          {
            speaker: { hi: 'देवगण', en: 'The devas' },
            line: { hi: '“हर-हर महादेव! आपने वह सह लिया, जो कोई और सह न सकता था।”', en: '“Har-Har Mahadev! You bore what no one else could have borne.”' },
          },
          {
            speaker: { hi: 'महादेव', en: 'Mahadev' },
            line: { hi: '“यह विष मेरे लिए भार नहीं था — संसार के प्रति मेरा कर्तव्य था।”', en: '“This poison was never a burden to me — it was my duty toward the world.”' },
          },
        ],
        image: '/images/katha-scene-5.svg',
        imageAlt: {
          hi: 'महादेव का नीला पड़ा कंठ, माता पार्वती उनका कंठ थामे हुए, चारों ओर देवगण नतमस्तक',
          en: 'Mahadev’s throat turned blue, Parvati holding it in her hands, with the devas bowing around them',
        },
      },
      {
        id: 'scene-6',
        sceneNumber: 6,
        heading: { hi: 'कथा का सार', en: 'What This Story Holds' },
        narration: {
          hi: 'इसके पश्चात मंथन पुनः आरम्भ हुआ, और अंततः अमृत भी प्रकट हुआ। परन्तु उस दिन की सबसे बड़ी विजय अमृत का प्रकट होना नहीं थी — वह महादेव का विष धारण करना था।',
          en: 'The churning resumed after this, and in time the nectar too appeared. But the greatest triumph of that day was not the nectar’s arrival — it was Mahadev bearing the poison.',
        },
        detail: {
          hi: 'यही महादेव का स्वभाव है — वे संसार के संकट से मुख नहीं मोड़ते, उसे अपने भीतर समा लेते हैं।',
          en: 'This is Mahadev’s nature — he does not turn away from the world’s danger, he takes it into himself.',
        },
        image: '/images/katha-scene-6.svg',
        imageAlt: {
          hi: 'कैलाश पर्वत पर शांत बैठे महादेव एवं माता पार्वती, उगते सूर्य की स्वर्णिम आभा में',
          en: 'Mahadev and Parvati seated in peace on Kailash, bathed in the golden light of a rising sun',
        },
      },
    ],
  },
];

export function getKathaChapterBySlug(slug: string): KathaChapter | undefined {
  return kathaChapters.find((chapter) => chapter.slug === slug);
}

export function getKathaChapterByStorySlug(storySlug: string): KathaChapter | undefined {
  return kathaChapters.find((chapter) => chapter.relatedStorySlug === storySlug);
}
