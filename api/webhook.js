export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const intentName = req.body.queryResult?.intent?.displayName || "";
  const userQuery = (req.body.queryResult?.queryText || "").toLowerCase();

  // Default fallback message for unmatched queries or intents
  const defaultFallbackAnswer = "Sorry, I didn't understand your question. Please ask about crop water needs or related topics.";

  let answerText = defaultFallbackAnswer;
  if (intentName === "CI_SM_1_Best Planting Time_QA") {
    const answersMap = [
      {
        keywords: ["best time to plant tomatoes", "when should i plant tomatoes", "tomato planting season"],
        answer: "🌱 The best time to plant tomatoes is during early spring after the last frost, typically February to April. Tomatoes need warm soil and plenty of sunlight to thrive."
      },
      {
        keywords: ["ideal planting period for carrots", "when to sow carrots", "carrot planting time"],
        answer: "🌱 Carrots grow best when sown from late summer to early fall, around August to September, in cool and loose soil for straight roots."
      },
      {
        keywords: ["when should i plant spinach", "spinach sowing season", "spinach planting time"],
        answer: "🌱 Spinach does best in cool weather; plant seeds in early spring or autumn, from February to March or September to October."
      },
      {
        keywords: ["planting time for potatoes", "when to plant potatoes", "potato sowing period"],
        answer: "🌱 Potatoes are typically planted in early spring, around March to April, when the soil temperature reaches about 7°C."
      },
      {
        keywords: ["when to sow onions", "onion planting season", "onion sowing time"],
        answer: "🌱 Onions can be planted from January to March depending on the region. Early planting gives larger bulbs with good storage life."
      },
      {
        keywords: ["best time to plant maize", "maize planting season", "when to sow maize"],
        answer: "🌱 Plant maize in late spring after the soil warms, typically from April to June, to insure against frost damage."
      },
      {
        keywords: ["when should i plant cucumbers", "cucumber planting time", "cucumber sowing season"],
        answer: "🌱 Cucumbers prefer warm soil and air; plant them in late spring from April to June post-frost."
      },
      {
        keywords: ["best season to plant beans", "bean planting time", "when to sow beans"],
        answer: "🌱 Beans grow best when sown after danger of frost passes, usually late spring to early summer (May to July)."
      },
      {
        keywords: ["best time to plant peas", "pea planting season", "when to sow peas"],
        answer: "🌱 Peas prefer cool weather; sow seeds early spring or late summer for fall harvest, typically February to March."
      },
      {
        keywords: ["best time to plant lettuce", "lettuce planting season", "when to sow lettuce"],
        answer: "🌱 Lettuce should be sown in early spring or late summer for best results, avoiding hot weather."
      },
      {
        keywords: ["when should i plant broccoli", "broccoli planting time", "broccoli sowing period"],
        answer: "🌱 Broccoli can be planted in early spring or late summer for fall harvest, favoring cool weather."
      },
      {
        keywords: ["best planting time for eggplants", "eggplant planting season", "when to plant brinjal"],
        answer: "🌱 Eggplants prefer warm seasons; sow indoors in late winter and transplant after the last frost, around March-April."
      },
      {
        keywords: ["when to sow radishes", "radish planting time", "radish sowing season"],
        answer: "🌱 Radishes are quick-growing and can be sown in early spring or fall, ideally from March to April or September to October."
      },
      {
        keywords: ["best time to plant chillies", "chilli planting season", "when to plant chillies"],
        answer: "🌱 Chillies are warm-season crops; sow seeds indoors in late winter and transplant in spring after frost."
      },
      {
        keywords: ["when to plant garlic", "garlic planting time", "garlic sowing season"],
        answer: "🌱 Garlic is typically planted in late fall or early winter so bulbs mature in summer."
      },
      {
        keywords: ["planting season for pumpkin", "when to plant pumpkin", "pumpkin sowing time"],
        answer: "🌱 Pumpkins are sown in late spring to early summer, around May-June, with warm soil conditions."
      },
      {
        keywords: ["when should i sow coriander", "coriander planting time", "coriander sowing season"],
        answer: "🌱 Coriander grows best in cool weather; sow seeds in early spring or fall."
      },
      {
        keywords: ["best time to plant fenugreek", "fenugreek planting season", "when to sow methi"],
        answer: "🌱 Fenugreek is sown in early spring or fall, usually from February to April or September to November."
      },
      {
        keywords: ["when to plant mustard greens", "mustard greens planting time", "mustard greens sowing season"],
        answer: "🌱 Mustard greens grow best in cool weather; sow seeds early spring or late summer/fall."
      },
      {
        keywords: ["best time to plant sweet corn", "sweet corn planting season", "when to sow sweet corn"],
        answer: "🌱 Sweet corn is planted in late spring when the soil temperature is warm, usually May to June."
      }
    ];
    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CI_SM_2_WaterNeeds_QA") {
    const answersMap = [
      {
        keywords: ["how much water does wheat need during flowering", "water need wheat flowering"],
        answer:
          "💧 Wheat requires adequate water during flowering to maintain optimal growth. Drip and sprinkler irrigation are effective methods. Use soil moisture sensors to monitor water needs precisely."
      },
      {
        keywords: ["what is the water requirement for basmati rice at transplanting", "basmati rice water transplanting"],
        answer:
          "💧 For basmati rice at transplanting, sufficient water is essential; methods like flood irrigation or alternate wetting and drying are commonly effective. Soil type and local weather conditions affect irrigation needs."
      },
      {
        keywords: ["which irrigation method should i use for potatoes at the vegetative stage", "potatoes vegetative irrigation method"],
        answer:
          "💧 For potatoes at the vegetative stage, drip and sprinkler irrigation provide efficient and targeted watering, improving growth and water use."
      },
      {
        keywords: ["how do i determine water needs for corn for tomorrow", "corn water needs tomorrow"],
        answer:
          "💧 To determine water needs for corn on a given date, consider local weather forecasts, soil moisture data, and crop development stage for accurate irrigation scheduling."
      },
      {
        keywords: ["how much water is needed for high-quality sugarcane", "sugarcane water quality"],
        answer:
          "💧 High-quality sugarcane requires consistent irrigation through appropriate methods such as drip or furrow irrigation to enhance crop quality and sugar content."
      },
      {
        keywords: ["does pesticide application affect water requirements for paddy", "pesticide effect paddy irrigation"],
        answer:
          "💧 Pesticide applications can alter soil conditions affecting irrigation needs; monitor soil moisture carefully when managing paddy irrigation."
      },
      {
        keywords: ["what are the water requirements for drip irrigation applied to grapes", "grapes drip irrigation water needs"],
        answer:
          "💧 Drip irrigation for grapes allows precise water delivery during sensitive stages such as flowering and berry formation; soil texture and weather conditions impact water demand."
      },
      {
        keywords: ["what’s the water need if my soil is sandy", "sandy soil water requirements"],
        answer:
          "💧 Sandy soils drain rapidly, necessitating frequent, small-volume irrigation to maintain adequate moisture without water waste."
      },
      {
        keywords: ["do crops need irrigation if the soil condition is poor", "poor soil irrigation needs"],
        answer:
          "💧 Crops grown in poor soil conditions require tailored irrigation plans to prevent water loss and optimize root absorption; improving soil health can enhance water use efficiency."
      },
      {
        keywords: ["suggest irrigation method for maize in california during dry weather", "maize california dry weather irrigation"],
        answer:
          "💧 In California during dry weather, maize benefits significantly from drip or sprinkler irrigation tailored by crop growth stage and local soil properties."
      },
      {
        keywords: ["how much water does wheat need during the boot stage", "wheat boot stage water needs"],
        answer:
          "💧 Wheat requires increased water during key development phases such as the boot stage to support yield formation; irrigation frequency and amount should be adjusted accordingly."
      },
      {
        keywords: ["how do temperature and weather affect water needs for soybeans", "soybeans temperature weather water needs"],
        answer:
          "💧 Temperature and weather fluctuations drastically affect water needs for soybeans; hot and dry conditions increase evapotranspiration, requiring more frequent irrigation."
      },
      {
        keywords: ["what is the ideal irrigation schedule for potatoes at flowering", "potatoes flowering irrigation schedule"],
        answer:
          "💧 During flowering of potatoes, consistent and balanced moisture is critical to avoid disease; drip or sprinkler irrigation systems are recommended."
      },
      {
        keywords: ["how much water is recommended for organic farming of tomatoes", "organic tomatoes water needs"],
        answer:
          "💧 Organic cultivation of tomatoes typically requires carefully managed irrigation—drip systems are preferred to conserve water and maintain plant health."
      },
      {
        keywords: ["does irrigation method affect nutrient uptake in corn", "corn irrigation nutrient uptake"],
        answer:
          "💧 Efficient irrigation practices, especially using drip systems, can enhance nutrient uptake and overall growth performance in corn."
      },
      {
        keywords: ["what is the water requirement for hybrid maize during tasseling", "hybrid maize tasseling water needs"],
        answer:
          "💧 Hybrid varieties of maize demand ample water during critical stages like tasseling to ensure optimal pollination and grain development."
      },
      {
        keywords: ["how does farming practice influence irrigation frequency", "farming practice irrigation frequency"],
        answer:
          "💧 Farming practices such as conservation tillage improve soil moisture retention and can reduce irrigation frequency needed for crops."
      },
      {
        keywords: ["what adjustments to irrigation are needed for saline soils", "saline soil irrigation adjustments"],
        answer:
          "💧 Saline soils require frequent, light irrigations with adequate drainage using methods like drip irrigation to prevent salt buildup and protect crop roots."
      },
      {
        keywords: ["how to schedule irrigation for corn during silking under hot weather", "corn silking hot weather irrigation"],
        answer:
          "💧 During sensitive stages such as silking, corn is vulnerable to water stress; increasing irrigation frequency, especially under hot weather conditions, is crucial."
      },
      {
        keywords: ["what water management practices improve sugar content in sugarcane", "sugarcane water management sugar content"],
        answer:
          "💧 Maintaining consistent irrigation supports stalk growth and improves sugar accumulation in sugarcane; combining irrigation with nutrient management maximizes yield."
      }
    ];


    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CI_SM_3_Diseases and pests_QA") {
    const answersMap = [
      {
        keywords: ["symptoms of leaf spot disease", "identify leaf spot", "leaf spot on plants"],
        answer: "🍂 Leaf spot disease causes discolored spots with yellow halos on leaves, leading to defoliation. Common in tomatoes and peppers. Control by crop rotation and fungicides."
      },
      {
        keywords: ["control powdery mildew grapes", "manage powdery mildew", "fungus on grape leaves"],
        answer: "🍇 Powdery mildew appears as white powdery coating on grape leaves. Improve air circulation and use fungicides preventively."
      },
      {
        keywords: ["mosaic virus symptoms", "prevent mosaic virus", "virus on cucurbits"],
        answer: "🌿 Mosaic virus causes mottled and distorted leaves, stunting growth. Use resistant varieties and control aphid vectors."
      },
      {
        keywords: ["causes of blight on potatoes", "potato blight symptoms", "prevent potato blight"],
        answer: "🥔 Blight causes dark lesions and wilting in potatoes. Use resistant varieties and fungicides."
      },
      {
        keywords: ["identify bacterial wilt tomatoes", "bacterial wilt symptoms", "control bacterial wilt"],
        answer: "🍅 Bacterial wilt causes sudden tomato wilting and yellowing. Use clean seeds and crop rotation."
      },
      {
        keywords: ["aphid damage", "effects of aphids", "control aphids"],
        answer: "🐛 Aphids suck sap causing leaf distortion and transmit viruses. Control with insecticidal soaps and ladybugs."
      },
      {
        keywords: ["manage fruit flies citrus", "fruit fly damage", "fruit flies in orchards"],
        answer: "🍊 Fruit flies lay eggs in fruit causing maggots. Use pheromone traps and insecticides."
      },
      {
        keywords: ["signs of mite infestation", "detect mites", "control mites"],
        answer: "🕷️ Mites cause stippling and webbing on leaves. Use miticides and encourage predatory mites."
      },
      {
        keywords: ["control stem borers maize", "maize stem borer", "damage by stem borers"],
        answer: "🌽 Stem borers bore into stalks weakening maize. Use resistant hybrids and insecticides."
      },
      {
        keywords: ["root rot in beans", "bean root disease", "control root rot"],
        answer: "🌱 Root rot causes wilting and decayed roots. Improve drainage and use fungicides."
      },
      {
        keywords: ["white mold beans", "identify white mold", "white mold control"],
        answer: "🏵️ White mold causes cottony growth on stems and pods. Use crop rotation and fungicides."
      },
      {
        keywords: ["scale insects on fruit trees", "damage by scale insects", "control scales"],
        answer: "🐞 Scale insects suck sap causing yellowing and leaf drop. Use horticultural oils and insecticides."
      },
      {
        keywords: ["nematode damage crops", "detect nematodes", "control nematodes"],
        answer: "🥕 Nematodes cause root galls and stunting. Use nematicides and resistant varieties."
      },
      {
        keywords: ["rust disease on wheat", "wheat rust symptoms", "control rust disease"],
        answer: "🌾 Rust causes reddish pustules on wheat leaves. Use resistant varieties and fungicides."
      },
      {
        keywords: ["bacterial canker stone fruits", "symptoms bacterial canker", "control bacterial canker"],
        answer: "🍒 Bacterial canker causes dead bark areas. Prune infected branches and apply copper sprays."
      },
      {
        keywords: ["thrips damage crops", "control thrips", "thrips infestation"],
        answer: "🐜 Thrips cause distorted growth and silver streaks. Use insecticides and encourage predators."
      },
      {
        keywords: ["leaf miner damage", "control leaf miners", "leaf miner symptoms"],
        answer: "🐛 Leaf miners tunnel inside leaves creating trails. Use systemic insecticides and remove affected leaves."
      },
      {
        keywords: ["black root rot symptoms", "control black root rot", "root rot disease"],
        answer: "🌱 Black root rot causes blackened roots and stunted growth. Improve drainage and use fungicides."
      },
      {
        keywords: ["powdery mildew cucumber", "fungicide for powdery mildew", "identify powdery mildew"],
        answer: "🥒 White powdery spots on leaves indicate powdery mildew. Use sulfur sprays and remove infected parts."
      },
      {
        keywords: ["prevent crop pests", "crop pest control methods", "manage crop pests"],
        answer: "🌾 Use crop rotation, resistant varieties, biological controls, and timely insecticide applications to control pests."
      }
    ];
    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CI_SM_4_Fertilizer advice_QA") {
    const answersMap = [
      {
        keywords: [
          "which fertilizer is recommended for tomatoes",
          "best fertilizer for tomatoes",
          "fertilizer for tomato plants",
          "what fertilizer to use for tomatoes"
        ],
        answer: "Use a balanced NPK fertilizer (e.g., 10-10-10) or a tomato-specific fertilizer rich in phosphorus for healthy fruit development."
      },
      {
        keywords: [
          "how frequently do plants need fertilizer",
          "how often should I fertilize",
          "fertilizer application frequency",
          "plant fertilizing schedule"
        ],
        answer: "Generally, fertilize every 2-4 weeks during active growth; follow product instructions for dose and frequency."
      },
      {
        keywords: [
          "which is better organic or chemical fertilizer",
          "organic vs chemical fertilizer",
          "should I use organic or chemical fertilizer",
          "advantages of organic fertilizer over chemical"
        ],
        answer: "Both have pros and cons; organics improve soil health, chemicals offer fast results. Use based on your crop and soil condition."
      },
      {
        keywords: [
          "recommended quantity of fertilizer",
          "how much fertilizer to use",
          "fertilizer dosage per plant",
          "fertilizer amount guidelines"
        ],
        answer: "Test your soil first; if unsure, use 2-3lb of NPK per 100sqft as a general guideline."
      },
      {
        keywords: [
          "are there any risks in using fertilizer",
          "can fertilizer harm plants",
          "fertilizer side effects on plants",
          "fertilizer dangers"
        ],
        answer: "Too much fertilizer can cause root burn, dehydration, and even kill plants. Always follow recommended rates."
      },
      {
        keywords: [
          "what is the optimal time for fertilizing",
          "best time to apply fertilizer",
          "when should I fertilize plants",
          "fertilizing timing"
        ],
        answer: "Apply fertilizer just before active growth or flowering. For most crops, before monsoon or new growth is ideal."
      },
      {
        keywords: [
          "what do the letters NPK stand for",
          "explain NPK in fertilizer",
          "meaning of NPK fertilizer",
          "NPK definition"
        ],
        answer: "NPK stands for Nitrogen (N), Phosphorus (P), and Potassium (K) – essential nutrients for plant growth."
      },
      {
        keywords: [
          "my fertilizer isn't effective what should I do",
          "fertilizer not working",
          "why is fertilizer ineffective",
          "fertilizer results not visible"
        ],
        answer: "Check for correct NPK balance, soil pH, watering, and ensure you are not over- or under-applying."
      },
      {
        keywords: [
          "is it safe to use chemical fertilizers",
          "chemical fertilizer safety",
          "are chemical fertilizers harmful",
          "using chemical fertilizers risks"
        ],
        answer: "Chemical fertilizers are generally safe if used correctly; overuse can pollute soil and water."
      },
      {
        keywords: [
          "which fertilizer do I use for rice fields",
          "best fertilizer for rice crop",
          "rice fertilizer recommendation",
          "fertilizer advice for rice"
        ],
        answer: "Use NPK and apply 10-12kg/ha zinc sulfate before planting to correct deficiencies."
      },
      {
        keywords: [
          "are animal manures good fertilizers",
          "use of animal manure as fertilizer",
          "benefits of animal manure",
          "can manure replace chemical fertilizer"
        ],
        answer: "Yes, composted animal manure enriches soil and provides nutrients naturally."
      },
      {
        keywords: [
          "what's the best fertilizer application technique",
          "how to apply fertilizer",
          "fertilizer application methods",
          "proper way to use fertilizer"
        ],
        answer: "Apply fertilizer evenly, avoid direct contact with plants, and water well after application."
      },
      {
        keywords: [
          "what does fertigation mean",
          "explain fertigation",
          "fertigation definition",
          "fertilizer application via irrigation"
        ],
        answer: "Fertigation is the application of fertilizer via the irrigation system for efficient nutrient delivery."
      },
      {
        keywords: [
          "what are the effects of over-fertilization",
          "over-fertilizing consequences",
          "dangers of too much fertilizer",
          "overuse of fertilizer risks"
        ],
        answer: "Over-fertilizing can lead to root damage, soil hardening, and water pollution."
      },
      {
        keywords: [
          "best fertilizer for promoting flowers",
          "fertilizer to boost flowering",
          "which fertilizer helps flowers",
          "fertilizer for flower growth"
        ],
        answer: "Phosphorus-rich fertilizers stimulate flowering and fruit production."
      },
      {
        keywords: [
          "is it okay to blend two types of fertilizer",
          "mixing fertilizers safely",
          "can I combine different fertilizers",
          "fertilizer mixing advice"
        ],
        answer: "You can mix fertilizers, but ensure compatibility. Always follow recommended rates to avoid toxicity."
      },
      {
        keywords: [
          "how does green manure help",
          "benefits of green manure",
          "green manure explanation",
          "green manure use in farming"
        ],
        answer: "Green manure is plants grown and incorporated into soil to add organic matter and nutrients, improving fertility."
      },
      {
        keywords: [
          "can fertilizer pollute groundwater",
          "fertilizer groundwater contamination",
          "does fertilizer cause water pollution",
          "fertilizer effects on water"
        ],
        answer: "Overuse of chemical fertilizers can contaminate groundwater. Use as per guidance and test soil regularly."
      },
      {
        keywords: [
          "best fertilizer for fruit trees",
          "fertilizer recommendation for fruit trees",
          "fertilizing fruit trees",
          "what fertilizer to use on fruit trees"
        ],
        answer: "Use a balanced fertilizer and apply before flowering and fruit set for best results."
      },
      {
        keywords: [
          "does fertilizer deficiency cause yellow leaves",
          "yellow leaves due to fertilizer",
          "fertilizer causing leaf yellowing",
          "plants have yellow leaves because of fertilizer"
        ],
        answer: "Yellowing can indicate nitrogen deficiency; use a fertilizer with sufficient nitrogen."
      }
    ];
    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  }
  else if (intentName === "Default Fallback Intent") {
    answerText = defaultFallbackAnswer;
  } else {
    answerText = `Sorry, I didn't understand your question. Please ask about related topics.`;
  }

  res.status(200).json({
    fulfillmentMessages: [
      {
        text: {
          text: [answerText]
        }
      }
    ]
  });
}
