/**
 * @file poetdata.js
 * @description This file contains the extended Shayari data object, organized by poet and language.
 * It serves as the central database for all shayaris available on the website.
 */

// Export the shayariData object so it can be imported and used in other modules (e.g., main.js)
export const shayariData = {
  // Mirza Ghalib's Shayari collection
  ghalib: {
    urdu: [
      "دل ہی تو ہے نہ سنگ و خشت، درد سے بھر نہ آئے کیوں\nروئیں گے ہم بھی اگر تیری آنکھوں میں آنسو آئے",
      "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے میرے ارمان لیکن پھر بھی کم نکلے",
      "دل کو میرے ہوا ہے کچھ ایسا غمگین سا\nکہ ہر خوشی میں بھی لگتا ہے کچھ کمی سی ہے",
      "ہوئی مدت کہ غالب مر گیا لیکن یاد آتا ہے\nوہ ہر اک بات پہ کہنا کہ یوں ہوتا تو کیا ہوتا"
    ],
    hindi: [
      "दिल ही तो है न संग-ओ-ख़िश्त, दर्द से भर न आए क्यों\nरोएंगे हम भी अगर तेरी आँखों में आँसू आएं",
      "हजारों ख्वाहिशें ऐसी कि हर ख्वाहिश पे दम निकले\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले",
      "दिल को मेरे हुआ है कुछ ऐसा ग़मगीन सा\nकि हर खुशी में भी लगता है कुछ कमी सी है",
      "होई मु्द्दत कि ग़ालिब मर गया लेकिन याद आता है\nवो हर इक बात पे कहना कि यूँ होता तो क्या होता"
    ],
    english: [
      "The heart is not stone or brick, why shouldn't it fill with pain?\nI too will cry if tears come to your eyes.",
      "Thousands of desires, each so strong that it could take my breath away.\nMany of my wishes were fulfilled, yet still, they were too few.",
      "My heart feels somewhat sorrowful,\nEven in happiness, it feels incomplete.",
      "It has been long since Ghalib died, but I remember him still,\nHe used to say on every matter, 'What if it had happened this way?'"
    ],
    arabic: [
      "القلب ليس حجراً أو طوباً، فلماذا لا يمتلئ بالألم؟\nسأبكي أيضاً إذا جاءت الدموع إلى عينيك.",
      "آلاف الرغبات، كل واحدة قوية لدرجة أنها قد تأخذ أنفاسي.\nتحققت العديد من أمنيتي، ومع ذلك كانت قليلة جداً.",
      "قلبي يشعر بالحزن قليلاً،\nحتى في السعادة، يبدو ناقصاً.",
      "لقد مضى وقت طويل منذ وفاة غالب، لكنني ما زلت أتذكره،\nكان يقول في كل مسألة، 'ماذا لو حدث هذا؟'"
    ]
  },
  // Allama Iqbal's Shayari collection
  iqbal: {
    urdu: [
      "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
      "ستاروں سے آگے جہاں اور بھی ہیں\nابھی عشق کے امتحاں اور بھی ہیں",
      "نہ تھا کچھ تو خدا تھا، کچھ نہ ہوتا تو خدا ہوتا\nڈوب کے میں جویا ہوں تو ساحل بھی ہوتا",
      "خودی کا سرِ نہاں لا الہ الا اللہ\nخودی ہے تیغ، فساں لا الہ الا اللہ"
    ],
    hindi: [
      "ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले\nख़ुदा बंदे से खुद पूछे बता तेरी रज़ा क्या है",
      "सितारों से आगे जहाँ और भी हैं\nअभी इश्क़ के इम्तिहाँ और भी हैं",
      "न था कुछ तो ख़ुदा था, कुछ न होता तो ख़ुदा होता\nडूब के मैं जिया हूँ तो साहिल भी होता",
      "ख़ुदी का सर-निहाँ ला इलाहा इल्लल्लाह\nख़ुदी है तग़, फ़साँ ला इलाहा इल्लल्लाह"
    ],
    english: [
      "Elevate your selfhood so high that before every destiny,\nGod Himself will ask you what is your wish.",
      "Beyond the stars, there are more worlds,\nThere are still more tests of love.",
      "When there was nothing, God was there; if nothing existed, God would be there.\nIf I have drowned, then the shore must also exist.",
      "The hidden secret of selfhood is 'There is no god but Allah',\nSelfhood is the sword, the tale 'There is no god but Allah'."
    ],
    arabic: [
      "ارفع ذاتك عالياً حتى قبل كل قدر\nيسأل الله العبد بنفسه ما هي رغبتك.",
      "ما وراء النجوم عوالم أخرى\nلا تزال هناك اختبارات للحب.",
      "عندما لم يكن هناك شيء، كان الله موجودًا؛ إذا لم يكن هناك شيء، فالله سيكون موجودًا.\nإذا غرقت، فلا بد أن يكون الشاطئ موجودًا أيضًا.",
      "السر الخفي للذات هو 'لا إله إلا الله'\nالذات هي السيف، والقصة 'لا إله إلا الله'."
    ]
  },
  // Jaun Elia's Shayari collection
  jaun: {
    urdu: [
      "شام کے سائے میں تنہا بیٹھا ہوں میں\nیادوں کے دیپ جلا رہا ہوں میں",
      "یہ دنیا اگرچہ ہے فانی، مگر\nدل کے زخموں کا ہے یہ پانی",
      "کچھ اس طرح سے تیری یاد آتی ہے\nجیسے چاندنی رات میں بارش کی بوندیں",
      "میں ہوں تنہا، تنہا ہی رہوں گا\nیہی میرا مقدر ہے، یہی میرا فسانہ"
    ],
    hindi: [
      "शाम के साये में तन्हा बैठा हूँ मैं\nयादों के दीप जला रहा हूँ मैं",
      "यह दुनिया हालांकि है फानी, मगर\nदिल के जख्मों का है यह पानी",
      "कुछ इस तरह से तेरी याद आती है\nजैसे चाँदनी रात में बारिश की बूंदें",
      "मैं हूँ तन्हा, तन्हा ही रहूँगा\nयही मेरा मुक़द्दर है, यही मेरा फ़साना"
    ],
    english: [
      "I sit alone in the shadows of the evening,\nLighting lamps of memories.",
      "Though this world is transient,\nIt is the water for the wounds of the heart.",
      "Your memory comes to me in such a way,\nLike raindrops in a moonlit night.",
      "I am alone, and alone I shall remain,\nThis is my destiny, this is my tale."
    ],
    arabic: [
      "أجلس وحيدًا في ظلال المساء،\nأشعل مصابيح الذكريات.",
      "على الرغم من أن هذا العالم زائل،\nلكنه ماء لجروح القلب.",
      "تأتيني ذكراك بهذه الطريقة،\nمثل قطرات المطر في ليلة مضيئة بالقمر.",
      "أنا وحيد، وسأبقى وحيدًا،\nهذا قدري، هذه حكايتي."
    ]
  },
  // Mir Taqi Mir's Shayari collection
  mir: {
    urdu: [
      "پتا پتا، بوٹا بوٹا حال ہمارا جانے ہے\nجانے نہ جانے گل ہی نہ جانے باغ تو سارا جانے ہے",
      "دل کی ویرانی کا سبب پوچھتے ہو تم\nکچھ تو تھا جو دل میں، کچھ تو تھا جو زبان پر",
      "میر تقی میر کی شاعری میں درد کی گہرائی ہے\nجو دل کے زخموں کو لفظوں میں بیاں کرتی ہے",
      "ہوا ہے کچھ ایسا کہ دل کو قرار نہیں آتا\nمیر کی غزل سن کے آنکھوں میں نمی آتی ہے"
    ],
    hindi: [
      "पत्ता पत्ता, बूटा बूटा हाल हमारा जाने है\nजाने न जाने गुल ही न जाने बाग तो सारा जाने है",
      "दिल की वीरानी का सबब पूछते हो तुम\nकुछ तो था जो दिल में, कुछ तो था जो ज़ुबान पर",
      "मीर तकी मीर की शायरी में दर्द की गहराई है\nजो दिल के ज़ख्मों को लफ़्ज़ों में बयां करती है",
      "हुआ है कुछ ऐसा कि दिल को करार नहीं आता\nमीर की ग़ज़ल सुन के आँखों में नमी आती है"
    ],
    english: [
      "Every leaf, every shrub knows my condition,\nThe flower may not know, but the whole garden does.",
      "You ask the reason for the desolation of my heart,\nSomething was in the heart, something was on the tongue.",
      "Mir Taqi Mir's poetry holds the depth of pain,\nExpressing the wounds of the heart in words.",
      "Something has happened that my heart finds no peace,\nListening to Mir's ghazal brings tears to my eyes."
    ],
    arabic: [
      "كل ورقة، كل شجيرة تعرف حالتي،\nقد لا يعرف الزهرة، لكن الحديقة كلها تعرف.",
      "تسأل عن سبب خراب قلبي،\nكان هناك شيء في القلب، وكان هناك شيء على اللسان.",
      "شعر مير تقي مير يحمل عمق الألم،\nيعبر عن جروح القلب بالكلمات.",
      "حدث شيء يجعل قلبي لا يجد السلام،\nالاستماع إلى غزل مير يجلب الدموع إلى عيني."
    ]
  },
  // Gulzar's Shayari collection
  gulzar: {
    urdu: [
      "دل کے ارمان آنسوؤں میں بہا دیے ہم نے\nیہ زندگی کے رنگ بھی کیا خوب چُنا ہے ہم نے",
      "شام کے سائے میں چاندنی کی طرح چمکتا ہے دل\nیادوں کے دیپ جلا کے ہم نے دل کو روشن کیا ہے",
      "گزرے ہوئے لمحے کبھی لوٹ کے نہیں آتے\nبس یادوں کے دیپ جلتے ہیں دل کے اندر",
      "تم ملے تو لگا جیسے بہار آ گئی ہو\nخوشبوؤں نے بھی ہمیں گلے لگا لیا ہے"
    ],
    hindi: [
      "दिल के अरमान आँसुओं में बहा दिए हमने\nयह ज़िंदगी के रंग भी क्या खूब चुना है हमने",
      "शाम के साये में चाँदनी की तरह चमकता है दिल\nयादों के दीप जला के हमने दिल को रोशन किया है",
      "गुज़रे हुए लम्हे कभी लौट के नहीं आते\nबस यादों के दीप जलते हैं दिल के अंदर",
      "तुम मिले तो लगा जैसे बहार आ गई हो\nखुशबुओं ने भी हमें गले लगा लिया है"
    ],
    english: [
      "I let the desires of my heart flow away in tears,\nWhat a beautiful color of life I have chosen.",
      "In the shadows of evening, the heart shines like moonlight,\nLighting lamps of memories, I have brightened my heart.",
      "The moments gone never return,\nOnly lamps of memories burn inside the heart.",
      "When you met me, it felt like spring had arrived,\nEven the fragrances have embraced me."
    ],
    arabic: [
      "تركت رغبات قلبي تتدفق في الدموع،\nيا له من لون جميل للحياة اخترته.",
      "في ظلال المساء، يلمع القلب كضوء القمر،\nأشعلت مصابيح الذكريات، أضاءت قلبي.",
      "اللحظات التي مضت لا تعود أبداً،\nفقط مصابيح الذكريات تحترق داخل القلب.",
      "عندما التقيت بك، شعرت وكأن الربيع قد وصل،\nحتى العطور احتضنتني."
    ]
  },
  // Rahat Indori's Shayari collection
  rahat: {
    urdu: [
      "बोल कि لب آزاد ہیں تیرے\nबोल زباں اب تک تیری ہے",
      "تم آؤ تو یہ دل کہتا ہے\nیہ دنیا بہت حسین ہے",
      "دھوپ میں نکل کے دیکھو تو سہی\nیہ زندگی بھی کیا چیز ہے",
      "رہت کی شاعری میں درد بھی ہے\nمحبت بھی ہے، انقلاب بھی ہے"
    ],
    hindi: [
      "बोल कि लब आज़ाद हैं तेरे\nबोल ज़ुबां अब तक तेरी है",
      "तुम आओ तो यह दिल कहता है\nयह दुनिया बहुत हसीन है",
      "धूप में निकल के देखो तो सही\nयह ज़िंदगी भी क्या चीज़ है",
      "राहत की शायरी में दर्द भी है\nमोहब्बत भी है, इंक़लाब भी है"
    ],
    english: [
      "Speak, for your lips are free,\nSpeak, your tongue is still yours.",
      "When you come, this heart says,\nThis world is very beautiful.",
      "Step out into the sunlight and see,\nThis life is something indeed.",
      "Rahat's poetry holds pain,\nLove and revolution too."
    ],
    arabic: [
      "تحدث، فشفتيك حرتان،\nتحدث، ولسانك لا يزال لك.",
      "عندما تأتي، يقول هذا القلب،\nهذا العالم جميل جداً.",
      "اخرج إلى ضوء الشمس وانظر،\nهذه الحياة شيء حقاً.",
      "شعر رهت يحمل الألم،\nالحب والثورة أيضاً."
    ]
  },
  // Javed Akhtar's Shayari collection
  javed: {
    urdu: [
      "آزادی کا مطلب ہے کہ ہم اپنے خوابوں کو جیتے ہیں\nیہ شاعری ہے جو ہمیں زندہ رکھتی ہے",
      "زندگی کی راہوں میں کبھی کبھی درد بھی آتا ہے\nلیکن شاعری سے دل کو سکون ملتا ہے",
      "جواد اختر کی شاعری میں محبت کی خوشبو ہے\nجو دلوں کو جوڑتی ہے اور امید دیتی ہے",
      "الفاظ کے ذریعے ہم اپنی دنیا بناتے ہیں\nشاعری وہ زبان ہے جو دل سے نکلتی ہے"
    ],
    hindi: [
      "आज़ादी का मतलब है कि हम अपने ख्वाबों को जीते हैं\nयह शायरी है जो हमें ज़िंदा रखती है",
      "ज़िंदगी की राहों में कभी कभी दर्द भी आता है\nलेकिन शायरी से दिल को सुकून मिलता है",
      "जावेद अख़्तर की शायरी में मोहब्बत की खुशबू है\nजो दिलों को जोड़ती है और उम्मीद देती है",
      "अल्फ़ाज़ के जरिए हम अपनी दुनिया बनाते हैं\nशायरी वह ज़ुबान है जो दिल से निकलती है"
    ],
    english: [
      "Freedom means we live our dreams,\nIt is poetry that keeps us alive.",
      "Sometimes pain comes on the paths of life,\nBut poetry soothes the heart.",
      "Javed Akhtar's poetry has the fragrance of love,\nIt connects hearts and gives hope.",
      "Through words, we create our world,\nPoetry is the language that comes from the heart."
    ],
    arabic: [
      "الحرية تعني أننا نعيش أحلامنا،\nإنها الشعر الذي يبقينا على قيد الحياة.",
      "أحيانًا يأتي الألم في طرق الحياة،\nلكن الشعر يهدئ القلب.",
      "شعر جaved Akhtar يحمل عبير الحب،\nيربط القلوب ويعطي الأمل.",
      "من خلال الكلمات، نخلق عالمنا،\nالشعر هو اللغة التي تأتي من القلب."
    ]
  },
  // Bashir Badr's Shayari collection
  bashir: {
    urdu: [
      "کچھ لوگ دل کے بہت قریب ہوتے ہیں\nجو کبھی نظر سے اوجھل نہیں ہوتے",
      "بشیر بدر کی شاعری میں درد چھپا ہوتا ہے\nجو دل کے زخموں کو چھو جاتا ہے",
      "زندگی کی راہوں میں کبھی کبھی تنہائی بھی آتی ہے\nلیکن شاعری سے دل کو سکون ملتا ہے",
      "الفاظ کے ذریعے ہم اپنے جذبات کو بیان کرتے ہیں\nشاعری وہ زبان ہے جو دل سے نکلتی ہے"
    ],
    hindi: [
      "कुछ लोग दिल के बहुत करीब होते हैं\nजो कभी नज़र से ओझल नहीं होते",
      "बशीर बद्र की शायरी में दर्द छुपा होता है\nजो दिल के ज़ख्मों को छू जाता है",
      "ज़िंदगी की राहों में कभी कभी तन्हाई भी आती है\nलेकिन शायरी से दिल को सुकून मिलता है",
      "अल्फ़ाज़ के जरिए हम अपने जज़्बात को बयान करते हैं\nशायरी वह ज़ुबान है जो दिल से निकलती है"
    ],
    english: [
      "Some people are very close to the heart,\nWho never disappear from sight.",
      "Bashir Badr's poetry hides pain,\nThat touches the wounds of the heart.",
      "Sometimes loneliness comes on the paths of life,\nBut poetry soothes the heart.",
      "Through words, we express our emotions,\nPoetry is the language that comes from the heart."
    ],
    arabic: [
      "بعض الناس قريبون جداً من القلب،\nلا يختفون أبداً من النظر.",
      "شعر بشير بدر يخفي الألم،\nيلمس جروح القلب.",
      "أحيانًا تأتي الوحدة في طرق الحياة،\nلكن الشعر يهدئ القلب.",
      "من خلال الكلمات، نعبر عن مشاعرنا،\nالشعر هو اللغة التي تأتي من القلب."
    ]
  },
  // Faiz Ahmed Faiz's Shayari collection
  faiz: {
    urdu: [
      "گلوں میں رنگ بھرے باد نو بہار چلے\nچلے بھی آؤ کہ گلشن کا کاروبار چلے",
      "دشتِ تنہائی میں ہم نے دیکھا ہے خواب\nکہ چاندنی رات میں بھی تنہا نہیں ہوتا",
      "فیض احمد فیض کی شاعری میں انقلاب ہے\nجو دلوں کو جگاتی ہے اور امید دیتی ہے",
      "الفاظ کے ذریعے ہم اپنی دنیا بناتے ہیں\nشاعری وہ زبان ہے جو دل سے نکلتی ہے"
    ],
    hindi: [
      "गुलों में रंग भरे बाद-ए-नौ बहार चले\nचले भी आओ कि गुलशन का कारोबार चले",
      "दश्त-ए-तन्हाई में हमने देखा है ख़्वाब\nकि चाँदनी रात में भी तन्हा नहीं होता",
      "फ़ैज़ अहमद फ़ैज़ की शायरी में इंक़लाब है\nजो दिलों को जगाती है और उम्मीद देती है",
      "अल्फ़ाज़ के जरिए हम अपनी दुनिया बनाते हैं\nशायरी वह ज़ुबान है जो दिल से निकलती है"
    ],
    english: [
      "Let the breeze of new spring fill the flowers with color,\nCome too, so the garden's business may flourish.",
      "In the desert of loneliness, I have seen a dream,\nThat even in a moonlit night, one is not alone.",
      "Faiz Ahmed Faiz's poetry carries revolution,\nIt awakens hearts and gives hope.",
      "Through words, we create our world,\nPoetry is the language that comes from the heart."
    ],
    arabic: [
      "دع نسيم الربيع الجديد يملأ الأزهار بالألوان،\nتعال أيضاً، لكي يزدهر عمل الحديقة.",
      "في صحراء الوحدة، رأيت حلماً،\nأنه حتى في ليلة مضيئة بالقمر، لا يكون المرء وحيداً.",
      "شعر فيض أحمد فيض يحمل الثورة،\nيوقظ القلوب ويعطي الأمل.",
      "من خلال الكلمات، نخلق عالمنا،\nالشعر هو اللغة التي تأتي من القلب."
    ]
  }
};
