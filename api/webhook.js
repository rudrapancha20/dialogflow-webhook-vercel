
const OPENWEATHER_API_KEY = '6c31d21c9b09a63d0aecd99ce77c936a';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const intentName = req.body.queryResult?.intent?.displayName || "";
  const city = req.body.queryResult?.parameters?.['geo-city'] || '';
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
        keywords: [
          "symptoms of leaf spot disease",
          "identify leaf spot",
          "leaf spot on plants",
          "signs of leaf spot",
          "leaf spot symptoms",
          "how to detect leaf spot",
          "leaf spot disease control"
        ],
        answer: "🍂 Leaf spot disease causes discolored spots with yellow halos on leaves, leading to defoliation. Common in tomatoes and peppers. Control by crop rotation and fungicides."
      },
      {
        keywords: [
          "control powdery mildew grapes",
          "manage powdery mildew",
          "fungus on grape leaves",
          "powdery mildew on grapes",
          "how to prevent powdery mildew grapes",
          "treat powdery mildew on grapes"
        ],
        answer: "🍇 Powdery mildew appears as white powdery coating on grape leaves. Improve air circulation and use fungicides preventively."
      },
      {
        keywords: [
          "mosaic virus symptoms",
          "prevent mosaic virus",
          "virus on cucurbits",
          "what is mosaic virus",
          "mosaic virus definition",
          "how to control mosaic virus"
        ],
        answer: "🌿 Mosaic virus causes mottled and distorted leaves, stunting growth. Use resistant varieties and control aphid vectors."
      },
      {
        keywords: [
          "causes of blight on potatoes",
          "potato blight symptoms",
          "prevent potato blight",
          "what causes blight disease potatoes",
          "manage blight disease in potatoes"
        ],
        answer: "🥔 Blight causes dark lesions and wilting in potatoes. Use resistant varieties and fungicides."
      },
      {
        keywords: [
          "identify bacterial wilt tomatoes",
          "bacterial wilt symptoms",
          "control bacterial wilt",
          "how to detect bacterial wilt in tomatoes",
          "bacterial wilt disease tomatoes"
        ],
        answer: "🍅 Bacterial wilt causes sudden tomato wilting and yellowing. Use clean seeds and crop rotation."
      },
      {
        keywords: [
          "aphid damage",
          "effects of aphids",
          "control aphids",
          "aphid damage to crops",
          "how to manage aphids"
        ],
        answer: "🐛 Aphids suck sap causing leaf distortion and transmit viruses. Control with insecticidal soaps and ladybugs."
      },
      {
        keywords: [
          "manage fruit flies citrus",
          "fruit fly damage",
          "fruit flies in orchards",
          "how to control fruit flies in citrus",
          "prevent fruit flies citrus"
        ],
        answer: "🍊 Fruit flies lay eggs in fruit causing maggots. Use pheromone traps and insecticides."
      },
      {
        keywords: [
          "signs of mite infestation",
          "detect mites",
          "control mites",
          "how to identify mite infestation",
          "mites damage on plants"
        ],
        answer: "🕷️ Mites cause stippling and webbing on leaves. Use miticides and encourage predatory mites."
      },
      {
        keywords: [
          "control stem borers maize",
          "maize stem borer",
          "damage by stem borers",
          "prevent stem borer damage maize",
          "manage stem borers in maize"
        ],
        answer: "🌽 Stem borers bore into stalks weakening maize. Use resistant hybrids and insecticides."
      },
      {
        keywords: [
          "root rot in beans",
          "bean root disease",
          "control root rot",
          "prevent root rot beans",
          "symptoms of root rot in beans"
        ],
        answer: "🌱 Root rot causes wilting and decayed roots. Improve drainage and use fungicides."
      },
      {
        keywords: [
          "white mold beans",
          "identify white mold",
          "white mold control",
          "manage white mold in beans",
          "symptoms of white mold beans"
        ],
        answer: "🏵️ White mold causes cottony growth on stems and pods. Use crop rotation and fungicides."
      },
      {
        keywords: [
          "scale insects on fruit trees",
          "damage by scale insects",
          "control scales",
          "scale insect infestation fruit trees",
          "manage scale insects"
        ],
        answer: "🐞 Scale insects suck sap causing yellowing and leaf drop. Use horticultural oils and insecticides."
      },
      {
        keywords: [
          "nematode damage crops",
          "detect nematodes",
          "control nematodes",
          "how to identify nematodes",
          "manage crop nematodes"
        ],
        answer: "🥕 Nematodes cause root galls and stunting. Use nematicides and resistant varieties."
      },
      {
        keywords: [
          "rust disease on wheat",
          "wheat rust symptoms",
          "control rust disease",
          "how to prevent rust on wheat",
          "manage rust disease wheat"
        ],
        answer: "🌾 Rust causes reddish pustules on wheat leaves. Use resistant varieties and fungicides."
      },
      {
        keywords: [
          "bacterial canker stone fruits",
          "symptoms bacterial canker",
          "control bacterial canker",
          "manage bacterial canker stone fruits",
          "prevent bacterial canker"
        ],
        answer: "🍒 Bacterial canker causes dead bark areas. Prune infected branches and apply copper sprays."
      },
      {
        keywords: [
          "thrips damage crops",
          "control thrips",
          "thrips infestation",
          "manage thrips in crops",
          "effects of thrips"
        ],
        answer: "🐜 Thrips cause distorted growth and silver streaks. Use insecticides and encourage predators."
      },
      {
        keywords: [
          "leaf miner damage",
          "control leaf miners",
          "leaf miner symptoms",
          "manage leaf miner infestation",
          "signs of leaf miner"
        ],
        answer: "🐛 Leaf miners tunnel inside leaves creating trails. Use systemic insecticides and remove affected leaves."
      },
      {
        keywords: [
          "black root rot symptoms",
          "control black root rot",
          "root rot disease",
          "manage black root rot",
          "signs of black root rot"
        ],
        answer: "🌱 Black root rot causes blackened roots and stunted growth. Improve drainage and use fungicides."
      },
      {
        keywords: [
          "powdery mildew cucumber",
          "fungicide for powdery mildew",
          "identify powdery mildew",
          "control powdery mildew on cucumber",
          "cucumber powdery mildew symptoms"
        ],
        answer: "🥒 White powdery spots on leaves indicate powdery mildew. Use sulfur sprays and remove infected parts."
      },
      {
        keywords: [
          "prevent crop pests",
          "crop pest control methods",
          "manage crop pests",
          "preventive measures for crop pests",
          "how to control pests in crops",
          "pest prevention in farming",
          "common pest prevention methods",
          "methods to prevent crop pests",
          "what preventive measures can control common crop pests",
          "ways to prevent crop pests",
          "tips for controlling crop pests",
          "how to keep pests away from crops",
          "best strategies for crop pest prevention",
          "pest control measures for crops",
          "how can I prevent pests in crops"
        ],
        answer: "🌾 Preventive measures for controlling common crop pests include crop rotation to break pest life cycles, planting pest-resistant varieties, using physical barriers like row covers, employing biological controls such as beneficial insects, practicing good soil and water management, applying organic pesticides like neem oil, and timely monitoring and early intervention."
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
        answer: "🍅 Use a balanced NPK fertilizer (e.g., 10-10-10) or a tomato-specific fertilizer rich in phosphorus for healthy fruit development."
      },
      {
        keywords: [
          "how frequently do plants need fertilizer",
          "how often should I fertilize",
          "fertilizer application frequency",
          "plant fertilizing schedule"
        ],
        answer: "🌱 Generally, fertilize every 2-4 weeks during active growth; follow product instructions for dose and frequency."
      },
      {
        keywords: [
          "which is better organic or chemical fertilizer",
          "organic vs chemical fertilizer",
          "should I use organic or chemical fertilizer",
          "advantages of organic fertilizer over chemical"
        ],
        answer: "🌿 Both have pros and cons; organics improve soil health, chemicals offer fast results. Use based on your crop and soil condition."
      },
      {
        keywords: [
          "recommended quantity of fertilizer",
          "how much fertilizer to use",
          "fertilizer dosage per plant",
          "fertilizer amount guidelines"
        ],
        answer: "⚖️ Test your soil first; if unsure, use 2-3lb of NPK per 100sqft as a general guideline."
      },
      {
        keywords: [
          "are there any risks in using fertilizer",
          "can fertilizer harm plants",
          "fertilizer side effects on plants",
          "fertilizer dangers"
        ],
        answer: "⚠️ Too much fertilizer can cause root burn, dehydration, and even kill plants. Always follow recommended rates."
      },
      {
        keywords: [
          "what is the optimal time for fertilizing",
          "best time to apply fertilizer",
          "when should I fertilize plants",
          "fertilizing timing"
        ],
        answer: "⏰ Apply fertilizer just before active growth or flowering. For most crops, before monsoon or new growth is ideal."
      },
      {
        keywords: [
          "what do the letters NPK stand for",
          "explain NPK in fertilizer",
          "meaning of NPK fertilizer",
          "NPK definition"
        ],
        answer: "🔤 NPK stands for Nitrogen (N), Phosphorus (P), and Potassium (K) – essential nutrients for plant growth."
      },
      {
        keywords: [
          "my fertilizer isn't effective what should I do",
          "fertilizer not working",
          "why is fertilizer ineffective",
          "fertilizer results not visible"
        ],
        answer: "🔍 Check for correct NPK balance, soil pH, watering, and ensure you are not over- or under-applying."
      },
      {
        keywords: [
          "is it safe to use chemical fertilizers",
          "chemical fertilizer safety",
          "are chemical fertilizers harmful",
          "using chemical fertilizers risks"
        ],
        answer: "✅ Chemical fertilizers are generally safe if used correctly; overuse can pollute soil and water."
      },
      {
        keywords: [
          "which fertilizer do I use for rice fields",
          "best fertilizer for rice crop",
          "rice fertilizer recommendation",
          "fertilizer advice for rice"
        ],
        answer: "🌾 Use NPK and apply 10-12kg/ha zinc sulfate before planting to correct deficiencies."
      },
      {
        keywords: [
          "are animal manures good fertilizers",
          "use of animal manure as fertilizer",
          "benefits of animal manure",
          "can manure replace chemical fertilizer"
        ],
        answer: "🐄 Yes, composted animal manure enriches soil and provides nutrients naturally."
      },
      {
        keywords: [
          "what's the best fertilizer application technique",
          "how to apply fertilizer",
          "fertilizer application methods",
          "proper way to use fertilizer"
        ],
        answer: "🧴 Apply fertilizer evenly, avoid direct contact with plants, and water well after application."
      },
      {
        keywords: [
          "what does fertigation mean",
          "explain fertigation",
          "fertigation definition",
          "fertilizer application via irrigation"
        ],
        answer: "💧 Fertigation is the application of fertilizer via the irrigation system for efficient nutrient delivery."
      },
      {
        keywords: [
          "what are the effects of over-fertilization",
          "over-fertilizing consequences",
          "dangers of too much fertilizer",
          "overuse of fertilizer risks"
        ],
        answer: "❌ Over-fertilizing can lead to root damage, soil hardening, and water pollution."
      },
      {
        keywords: [
          "best fertilizer for promoting flowers",
          "fertilizer to boost flowering",
          "which fertilizer helps flowers",
          "fertilizer for flower growth"
        ],
        answer: "🌸 Phosphorus-rich fertilizers stimulate flowering and fruit production."
      },
      {
        keywords: [
          "is it okay to blend two types of fertilizer",
          "mixing fertilizers safely",
          "can I combine different fertilizers",
          "fertilizer mixing advice"
        ],
        answer: "🔄 You can mix fertilizers, but ensure compatibility. Always follow recommended rates to avoid toxicity."
      },
      {
        keywords: [
          "how does green manure help",
          "benefits of green manure",
          "green manure explanation",
          "green manure use in farming"
        ],
        answer: "🌿 Green manure is plants grown and incorporated into soil to add organic matter and nutrients, improving fertility."
      },
      {
        keywords: [
          "can fertilizer pollute groundwater",
          "fertilizer groundwater contamination",
          "does fertilizer cause water pollution",
          "fertilizer effects on water"
        ],
        answer: "💧 Overuse of chemical fertilizers can contaminate groundwater. Use as per guidance and test soil regularly."
      },
      {
        keywords: [
          "best fertilizer for fruit trees",
          "fertilizer recommendation for fruit trees",
          "fertilizing fruit trees",
          "what fertilizer to use on fruit trees"
        ],
        answer: "🌳 Use a balanced fertilizer and apply before flowering and fruit set for best results."
      },
      {
        keywords: [
          "does fertilizer deficiency cause yellow leaves",
          "yellow leaves due to fertilizer",
          "fertilizer causing leaf yellowing",
          "plants have yellow leaves because of fertilizer"
        ],
        answer: "🍂 Yellowing can indicate nitrogen deficiency; use a fertilizer with sufficient nitrogen."
      }
    ];

    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CI_SM_5_Harvesting guidance_QA") {
    const answersMap = [
      {
        keywords: [
          "when is the right time to harvest wheat",
          "how to know when wheat is ready for harvest",
          "best harvest time for wheat",
          "wheat harvesting maturity signs"
        ],
        answer: "🌾 The right time to harvest wheat is when the grains turn hard and golden-yellow, moisture content is about 13-15%, and the plants begin to dry. Signs include drying leaves, hard grains that dent with a fingernail, and bent stalks."
      },
      {
        keywords: [
          "how do i harvest rice properly",
          "best method to harvest rice",
          "when to cut rice crop",
          "rice harvesting tips"
        ],
        answer: "🌾 Rice should be harvested when grains are mature but not overripe—typically when 80-85% of grains have turned golden yellow and moisture content is around 20-24%. Cut the crop just above the ground using a sickle or mechanical harvester, then thresh and dry promptly."
      },
      {
        keywords: [
          "what tools are needed for harvesting maize",
          "best tools for harvesting corn",
          "maize harvesting equipment",
          "tools for maize harvest"
        ],
        answer: "🌽 Maize harvesting uses tools like sharp sickles for manual cutting, machetes, or mechanical harvesters such as combine harvesters or corn pickers. For small scale, sickle and knives are sufficient."
      },
      {
        keywords: [
          "how to store harvested potatoes",
          "potato post-harvest storage best practices",
          "proper storage methods for potatoes",
          "potato storage tips"
        ],
        answer: "🥔 Store harvested potatoes in a cool, dark, and well-ventilated place at 4-10°C with 85-90% humidity. Cure them for 1-2 weeks before storage to heal wounds and reduce rot."
      },
      {
        keywords: [
          "when to harvest tomatoes for best quality",
          "tomato harvest time",
          "how to pick ripe tomatoes",
          "best harvesting stage for tomatoes"
        ],
        answer: "🍅 Harvest tomatoes at the mature green to fully ripe stage depending on use. Look for color change from green to red (or the mature color for each variety) and slight softness for best flavor and quality."
      },
      {
        keywords: [
          "how to harvest fruits without damage",
          "best harvesting practices for fruits",
          "how to pick fruits gently",
          "fruit harvesting techniques"
        ],
        answer: "🍎 Harvest fruits by hand using gentle twisting or cutting to avoid bruising. Use clean, sharp tools and handle fruits carefully during picking and transport to prevent damage."
      },
      {
        keywords: [
          "what is the ideal moisture content for harvesting grains",
          "grain moisture for harvest",
          "best moisture level to harvest crops",
          "crop moisture content for harvest"
        ],
        answer: "🌾 Ideal grain moisture content for harvest typically ranges between 13-15% to minimize losses and ensure safe storage. Harvesting above this moisture may cause spoilage; below can cause kernel damage."
      },
      {
        keywords: [
          "how to identify mature onions for harvest",
          "when should onions be harvested",
          "onion maturity signs",
          "onion harvesting time"
        ],
        answer: "🧅 Harvest onions when 50-70% of the tops have fallen over and turned brown. Bulbs should be firm with dry papery skins showing, indicating maturity."
      },
      {
        keywords: [
          "what precautions to take during harvesting wheat",
          "wheat harvest precautions",
          "how to reduce loss in wheat harvesting",
          "wheat harvesting tips"
        ],
        answer: "🌾 Take precautions like timely harvesting at correct moisture, using sharp tools or properly calibrated machines, careful handling to minimize grain shatter, and prompt drying to reduce losses."
      },
      {
        keywords: [
          "how to dry harvested grains effectively",
          "best grain drying methods",
          "how to dry grains post-harvest",
          "grain drying tips"
        ],
        answer: "🌾 Dry harvested grains quickly using sun drying on clean surfaces or mechanical dryers to reduce moisture to safe storage level (~13%). Ensure grains are evenly spread and turned regularly for uniform drying."
      },
      {
        keywords: [
          "when to harvest sugarcane",
          "best harvest time for sugarcane",
          "sugarcane maturity signs",
          "sugarcane harvesting period"
        ],
        answer: "🍬 Harvest sugarcane when it reaches 12-16 months old, with hard stalks and high sugar content. Leaves may turn yellowish, and the stems become less green and fibrous."
      },
      {
        keywords: [
          "how to prevent damage during grape harvesting",
          "best practices for harvesting grapes",
          "how to pick grapes carefully",
          "grape harvesting tips"
        ],
        answer: "🍇 Harvest grapes by cutting clusters with sharp scissors or knives, handling gently to avoid bruising, and collecting in shallow containers to prevent crushing."
      },
      {
        keywords: [
          "what is the right way to harvest carrots",
          "carrot harvesting method",
          "when to dig up carrots",
          "harvesting carrots tips"
        ],
        answer: "🥕 Harvest carrots when roots reach desired size, usually 60-80 days after planting. Loosen soil carefully around roots before pulling to avoid breakage."
      },
      {
        keywords: [
          "how to harvest leafy vegetables",
          "best method to harvest leafy greens",
          "when to cut spinach or lettuce",
          "leafy vegetable harvesting tips"
        ],
        answer: "🥬 Harvest leafy vegetables by cutting leaves or entire plants just above the soil surface when mature but before flowering, typically early morning for best freshness."
      },
      {
        keywords: [
          "how to store harvested fruits for longer shelf life",
          "fruit post-harvest storage tips",
          "best way to store fruits",
          "fruit storage guidelines"
        ],
        answer: "🍏 Store fruits in cool, humid, and well-ventilated conditions away from direct sunlight. Use refrigeration for perishable varieties and separate ethylene-producing fruits from sensitive ones."
      },
      {
        keywords: [
          "when to harvest chilli peppers",
          "chilli harvesting time",
          "how to pick mature chillies",
          "best stage to harvest chillies"
        ],
        answer: "🌶️ Harvest chillies when they have reached full color (red, yellow, or green depending on variety) and size. Use scissors or gently snap off peppers to avoid plant damage."
      },
      {
        keywords: [
          "how to harvest tea leaves",
          "tea leaf plucking method",
          "when to pick tea leaves",
          "tea harvesting tips"
        ],
        answer: "🍃 Pluck tea leaves by hand, taking the top two leaves and a bud during flush periods. Harvest regularly every 7-15 days for quality leaves."
      },
      {
        keywords: [
          "what are signs of maturity in coffee beans",
          "when to harvest coffee",
          "coffee berry maturity indicators",
          "coffee harvesting tips"
        ],
        answer: "☕ Harvest coffee cherries when they are bright red or yellow (variety dependent) and firm to the touch. Immature cherries are green and underripe."
      },
      {
        keywords: [
          "how to reduce losses during harvesting",
          "minimize harvest loss techniques",
          "harvest loss reduction methods",
          "harvesting best practices"
        ],
        answer: "🌾 Reduce harvest losses by harvesting at the right maturity and moisture, using well-maintained tools/machinery, careful handling, prompt threshing, and proper drying and storage."
      },
      {
        keywords: [
          "how to harvest cucumbers properly",
          "cucumber harvesting tips",
          "when to pick cucumbers",
          "best method to harvest cucumbers"
        ],
        answer: "🥒 Harvest cucumbers when firm, green, and of desired size before seeds enlarge. Use sharp knives or scissors to cut fruit stems carefully without damaging the vine."
      }
    ];
    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CL_SM_1_Land Preparation_QA") {
    const answersMap = [
      {
        keywords: ["what is land preparation", "define land preparation"],
        answer: "🌱 Land preparation is the process of preparing the soil for sowing seeds. It involves ploughing, harrowing, leveling, and adding organic matter to make the soil fertile and suitable for crop growth."
      },
      {
        keywords: ["why is land preparation important", "importance of land preparation"],
        answer: "✅ Land preparation is important because it improves soil structure, removes weeds, increases water infiltration, enhances nutrient availability, and creates a good seedbed for better crop establishment."
      },
      {
        keywords: ["steps in land preparation", "land preparation steps"],
        answer: "🛠️ The main steps in land preparation are: 1) Clearing the land, 2) Ploughing, 3) Harrowing, 4) Leveling, 5) Adding manure/fertilizer, 6) Irrigation if needed."
      },
      {
        keywords: ["first step of land preparation", "initial step in land preparation"],
        answer: "🔹 The first step of land preparation is clearing the field of unwanted plants, stubble, rocks, and debris."
      },
      {
        keywords: ["why do we plough the land", "purpose of ploughing"],
        answer: "🚜 Ploughing loosens and aerates the soil, helps mix organic matter, improves drainage, and exposes pests to sunlight, reducing their population."
      },
      {
        keywords: ["what is harrowing", "harrowing in land preparation"],
        answer: "⚒️ Harrowing is the process of breaking large soil clods after ploughing to create a fine seedbed. It also helps in weed control."
      },
      {
        keywords: ["what is land leveling", "define land leveling"],
        answer: "📏 Land leveling is the process of making the soil surface even. It helps in uniform irrigation, prevents waterlogging, and ensures proper crop growth."
      },
      {
        keywords: ["how do farmers prepare land for paddy", "paddy land preparation"],
        answer: "🌾 For paddy, farmers puddle the soil (plough in standing water), level the field, and maintain waterlogged conditions to control weeds and support rice growth."
      },
      {
        keywords: ["how do farmers prepare land for wheat", "wheat land preparation"],
        answer: "🌿 For wheat, farmers plough the soil deeply, harrow to make a fine seedbed, add organic matter or fertilizers, and ensure good drainage."
      },
      {
        keywords: ["tools used for land preparation", "equipment for land preparation"],
        answer: "🧰 Tools used in land preparation include ploughs, harrows, rotavators, tractors, hoes, spades, and leveling boards."
      },
      {
        keywords: ["role of organic matter in soil preparation", "organic matter in land preparation"],
        answer: "🍂 Organic matter improves soil fertility, enhances water retention, increases microbial activity, and provides essential nutrients for crops."
      },
      {
        keywords: ["weed control in land preparation", "how to control weeds during land preparation"],
        answer: "🌿 Weeds are controlled by ploughing, harrowing, hand weeding, mulching, and using eco-friendly herbicides before sowing."
      },
      {
        keywords: ["modern methods of land preparation", "advanced land preparation techniques"],
        answer: "⚙️ Modern methods include laser land leveling, mechanized ploughing with tractors, rotavators, zero tillage, and the use of precision farming equipment."
      },
      {
        keywords: ["how does land preparation affect yield", "effect of land preparation on crop yield"],
        answer: "📈 Proper land preparation increases crop yield by ensuring good seed-soil contact, better nutrient absorption, effective weed control, and uniform crop establishment."
      },
      {
        keywords: ["soil types and land preparation", "how soil type affects land preparation"],
        answer: "🧪 Soil type affects preparation methods: sandy soils need organic matter for water retention, clay soils need deep ploughing and leveling, and loamy soils are easier to prepare."
      },
      {
        keywords: ["what is deep ploughing", "importance of deep ploughing"],
        answer: "🔎 Deep ploughing means turning the soil to a depth of 20–30 cm. It improves aeration, destroys weeds, exposes pests, and allows deep root penetration."
      },
      {
        keywords: ["when should land preparation be done", "best time for land preparation"],
        answer: "🕒 Land preparation should be done before the sowing season, usually after the previous crop is harvested and when the soil has the right moisture."
      },
      {
        keywords: ["irrigation in land preparation", "relation of irrigation and land preparation"],
        answer: "💧 Irrigation is sometimes done before ploughing to soften the soil, and proper leveling ensures uniform water distribution during crop growth."
      },
      {
        keywords: ["environmental benefits of land preparation", "eco benefits of land preparation"],
        answer: "🌍 Proper land preparation reduces soil erosion, conserves water, enhances organic matter use, and promotes sustainable agriculture."
      },
      {
        keywords: ["mistakes in land preparation", "common errors in land preparation"],
        answer: "❌ Mistakes to avoid include insufficient ploughing, poor weed removal, overuse of chemicals, improper leveling, and ignoring soil testing."
      }
    ];

    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CL_SM_2_SowingMethods_QA") {
    const answersMap = [
      {
        keywords: ["what is sowing in agriculture", "define sowing"],
        answer: "🌱 Sowing in agriculture is the process of planting seeds into the soil at proper depth and spacing for crop growth."
      },
      {
        keywords: ["main methods of sowing", "methods of sowing"],
        answer: "🛠️ The main methods of sowing are broadcasting, drilling, dibbling, transplanting, line sowing, precision sowing, and raised bed sowing."
      },
      {
        keywords: ["what is broadcasting in sowing"],
        answer: "🌾 Broadcasting is the scattering of seeds evenly by hand or mechanically over the soil surface."
      },
      {
        keywords: ["advantages of broadcasting"],
        answer: "✅ Advantages of broadcasting include: quick sowing, low cost, easy to cover large areas, and suitable for small seeds like millets and grasses."
      },
      {
        keywords: ["what is drilling in sowing"],
        answer: "🚜 Drilling is the method of placing seeds in continuous rows at a uniform depth with the help of a seed drill."
      },
      {
        keywords: ["benefits of drilling"],
        answer: "🌟 Benefits of drilling: ensures uniform seed depth, better crop stand, efficient fertilizer placement, and reduced wastage of seed."
      },
      {
        keywords: ["what is dibbling in agriculture"],
        answer: "🌿 Dibbling is sowing seeds by placing them manually or mechanically into holes made at fixed distances and depths."
      },
      {
        keywords: ["uses of dibbling method"],
        answer: "🔹 Dibbling is useful for crops like maize, cotton, sunflower, and vegetables where proper spacing is important."
      },
      {
        keywords: ["what is transplanting in crop production"],
        answer: "🌱 Transplanting is the practice of raising seedlings in a nursery and then replanting them into the main field."
      },
      {
        keywords: ["crops suited for transplanting"],
        answer: "🥬 Crops suited for transplanting include rice, tomato, chili, brinjal, tobacco, and certain vegetables."
      },
      {
        keywords: ["what is line sowing"],
        answer: "📏 Line sowing is the method of placing seeds in straight lines or rows with equal spacing between them."
      },
      {
        keywords: ["how is sowing done with a seed drill"],
        answer: "⚙️ Sowing with a seed drill involves using a machine that opens furrows, places seeds at uniform depth, and covers them with soil simultaneously."
      },
      {
        keywords: ["disadvantages of broadcasting"],
        answer: "❌ Disadvantages of broadcasting: uneven seed distribution, poor plant population, high seed rate, and difficulty in intercultural operations."
      },
      {
        keywords: ["why is proper seed depth important"],
        answer: "📌 Proper seed depth ensures good germination, prevents seed rotting, provides moisture access, and protects seeds from birds and pests."
      },
      {
        keywords: ["factors for choosing a sowing method"],
        answer: "📋 Factors include: crop type, seed size, soil type, water availability, climatic conditions, tools available, and labor cost."
      },
      {
        keywords: ["what is precision sowing"],
        answer: "🎯 Precision sowing is placing each seed at the exact location, depth, and spacing using modern machinery to achieve uniform plant growth."
      },
      {
        keywords: ["how does seed rate relate to sowing methods"],
        answer: "⚖️ Seed rate depends on sowing method – broadcasting requires more seeds, while drilling, dibbling, and precision sowing require fewer seeds due to better placement."
      },
      {
        keywords: ["precautions during sowing", "what precautions should be taken during sowing"],
        answer: "⚠️ Precautions during sowing: use quality seeds, maintain proper depth, avoid overcrowding, ensure soil moisture, and calibrate sowing machines properly."
      },
      {
        keywords: ["what is raised bed sowing"],
        answer: "🌄 Raised bed sowing is growing crops on elevated soil beds separated by furrows, improving drainage, aeration, and root development."
      },
      {
        keywords: ["can machines be used for sowing"],
        answer: "🤖 Yes, machines like seed drills, planters, and precision seeders are commonly used for efficient and large-scale sowing."
      }
    ];
    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }

  } else if (intentName === "CL_SM_3_Crop_Management_QA") {
    const answersMap = [
      {
        keywords: ["what is crop management"],
        answer: "🌱 Crop management is the process of planning, growing, and harvesting crops efficiently by using scientific techniques to improve yield, soil health, and sustainability."
      },
      {
        keywords: ["main steps in crop management", "steps of crop management"],
        answer: "📝 The main steps in crop management include: land preparation, seed selection, sowing, irrigation, nutrient management, pest and weed control, harvesting, and post-harvest handling."
      },
      {
        keywords: ["why is pest management important in crop production"],
        answer: "🐛 Pest management is important because it prevents crop loss, reduces yield damage, maintains crop quality, and ensures food security."
      },
      {
        keywords: ["how does irrigation affect crop growth"],
        answer: "💧 Irrigation provides necessary water for plant growth, supports photosynthesis, improves nutrient absorption, and ensures higher yields in dry conditions."
      },
      {
        keywords: ["common weed control methods"],
        answer: "🌿 Common weed control methods include manual weeding, mulching, crop rotation, herbicides, and biological control using beneficial insects or animals."
      },
      {
        keywords: ["what is crop rotation"],
        answer: "🔄 Crop rotation is the practice of growing different crops in sequence on the same land to improve soil fertility, reduce pests and diseases, and increase yield."
      },
      {
        keywords: ["how do you select seeds for crop management"],
        answer: "🌾 Seeds should be high-yielding, disease-resistant, climate-suitable, and certified by agricultural institutions for quality assurance."
      },
      {
        keywords: ["what is integrated nutrient management"],
        answer: "⚖️ Integrated nutrient management combines organic manures, compost, green manure, bio-fertilizers, and chemical fertilizers to maintain soil fertility and crop productivity sustainably."
      },
      {
        keywords: ["how are fertilizers applied in crop management"],
        answer: "🧪 Fertilizers are applied by methods such as broadcasting, band placement, foliar spray, and fertigation depending on crop and soil needs."
      },
      {
        keywords: ["what is mulching and its benefits"],
        answer: "🍂 Mulching is covering the soil with organic (straw, leaves) or plastic material to conserve moisture, reduce weeds, regulate soil temperature, and improve fertility."
      },
      {
        keywords: ["how does crop spacing impact yield"],
        answer: "📏 Proper crop spacing ensures better sunlight, air circulation, nutrient uptake, and reduces competition among plants, leading to higher yield and quality."
      },
      {
        keywords: ["what is intercropping"],
        answer: "🌽🌾 Intercropping is growing two or more crops together on the same field to maximize resource use, reduce pest attacks, and increase farm income."
      },
      {
        keywords: ["how is disease management done in crops"],
        answer: "🦠 Disease management is done through crop rotation, resistant varieties, biological control, timely spraying of fungicides, and good farm hygiene practices."
      },
      {
        keywords: ["factors influence crop yield"],
        answer: "📊 Crop yield is influenced by soil fertility, water availability, seed quality, pest and disease control, weather conditions, and farming practices."
      },
      {
        keywords: ["what is sustainable crop management"],
        answer: "🌍 Sustainable crop management involves eco-friendly practices like organic farming, crop rotation, integrated pest management, and minimal chemical use to protect the environment."
      },
      {
        keywords: ["what is precision farming"],
        answer: "📡 Precision farming uses modern technology like GPS, sensors, drones, and data analytics to optimize inputs, monitor crops, and improve productivity."
      },
      {
        keywords: ["how is harvest time determined"],
        answer: "⏳ Harvest time is determined by crop maturity signs such as grain hardness, leaf color change, moisture content, and drying of the plant."
      },
      {
        keywords: ["what is post-harvest management in crops"],
        answer: "📦 Post-harvest management includes cleaning, drying, grading, storage, and transportation of crops to maintain quality and reduce losses."
      },
      {
        keywords: ["why is soil testing done in crop management"],
        answer: "🧑‍🔬 Soil testing is done to determine nutrient levels, pH, and soil health so that farmers can apply the right type and amount of fertilizer for better yields."
      },
      {
        keywords: ["what are organic crop management practices"],
        answer: "🍀 Organic crop management includes using compost, bio-fertilizers, green manures, crop rotation, mulching, and natural pest control without synthetic chemicals."
      }
    ];
    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "CL_SM_4_Irrigation_Schedule_QA") {
    const answersMap = [
      {
        keywords: ["what is an irrigation schedule"],
        answer: "💧 An irrigation schedule is a planned timetable that defines when and how much water should be applied to crops to meet their water needs efficiently."
      },
      {
        keywords: ["why is irrigation scheduling important"],
        answer: "🌱 Irrigation scheduling is important because it ensures crops get the right amount of water at the right time, improving yield, saving water, and preventing over- or under-irrigation."
      },
      {
        keywords: ["factors affect irrigation scheduling"],
        answer: "📊 Factors affecting irrigation scheduling include soil type, crop type, growth stage, climate, weather conditions, water availability, and irrigation method."
      },
      {
        keywords: ["determine when to irrigate"],
        answer: "🕑 Irrigation timing is determined by monitoring soil moisture, crop water requirements, weather forecasts, and signs of crop stress."
      },
      {
        keywords: ["common irrigation methods"],
        answer: "🚿 Common irrigation methods include surface irrigation, sprinkler irrigation, drip irrigation, and subsurface irrigation."
      },
      {
        keywords: ["role of soil moisture in irrigation"],
        answer: "🌍 Soil moisture plays a vital role by indicating the amount of water available for crops. Scheduling is based on maintaining soil moisture within the optimal range."
      },
      {
        keywords: ["crop growth stage affect irrigation schedule"],
        answer: "🌾 Different crop growth stages require different amounts of water. For example, germination and flowering stages need more frequent irrigation compared to maturity."
      },
      {
        keywords: ["tools help schedule irrigation"],
        answer: "🛠️ Tools include soil moisture sensors, weather stations, evapotranspiration models, tensiometers, and mobile irrigation apps."
      },
      {
        keywords: ["deficit irrigation scheduling"],
        answer: "💦 Deficit irrigation scheduling means applying less water than full crop requirements, allowing mild stress to save water without major yield loss."
      },
      {
        keywords: ["weather conditions impact irrigation"],
        answer: "⛅ Weather affects irrigation as high temperature, wind, and low humidity increase water demand, while rainfall reduces the need for irrigation."
      },
      {
        keywords: ["signs of over-irrigation"],
        answer: "⚠️ Signs of over-irrigation include waterlogging, yellowing leaves, reduced root growth, nutrient leaching, and fungal diseases."
      },
      {
        keywords: ["risks of under-irrigation"],
        answer: "🚫 Risks of under-irrigation include crop stress, wilting, reduced photosynthesis, lower yields, and poor quality of produce."
      },
      {
        keywords: ["calculate water requirement for crops"],
        answer: "📐 Water requirement is calculated using crop evapotranspiration (ETc), soil water holding capacity, effective rainfall, and irrigation system efficiency."
      },
      {
        keywords: ["irrigation schedules be changed"],
        answer: "🔄 Yes, irrigation schedules can be adjusted depending on changing weather, crop stage, soil conditions, and water availability."
      },
      {
        keywords: ["automated irrigation scheduling"],
        answer: "🤖 Automated irrigation scheduling uses smart controllers, sensors, and weather data to automatically irrigate crops when needed."
      },
      {
        keywords: ["how often should crops be irrigated"],
        answer: "📆 Irrigation frequency depends on crop type, soil, climate, and growth stage. Typically, sandy soils need more frequent irrigation than clay soils."
      },
      {
        keywords: ["impact of irrigation schedule on yield"],
        answer: "📈 A proper irrigation schedule increases yield, improves crop quality, saves water, and enhances nutrient uptake."
      },
      {
        keywords: ["mobile apps help with irrigation scheduling"],
        answer: "📱 Yes, mobile apps provide real-time weather updates, soil moisture data, and water requirement calculators to help farmers schedule irrigation efficiently."
      },
      {
        keywords: ["records maintained for irrigation scheduling"],
        answer: "📝 Farmers should record irrigation dates, duration, water applied, rainfall, soil moisture readings, and crop stage for future planning."
      },
      {
        keywords: ["best time of day for irrigation"],
        answer: "🌄 The best time for irrigation is early morning or late evening to reduce evaporation losses and ensure efficient water use."
      }
    ];

    for (const item of answersMap) {
      if (item.keywords.some(kw => userQuery.includes(kw))) {
        answerText = item.answer;
        break;
      }
    }
  } else if (intentName === "WI_SM_1_Current Weather_location_QA") {
    try {
      const weatherData = await getCurrentWeather(city);
      answerText = weatherData;
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      answerText = 'Sorry, I could not retrieve the weather information at this time.';
    }
  } else if (intentName === "WI_SM_2_7-Day Forecast_QA") {
    try {
      const weatherData = await getWeatherAnd7DayForecast(city);
      answerText = weatherData;
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      answerText = 'Sorry, I could not retrieve the weather information at this time.';
    }
  } else if (intentName === "Default Fallback Intent") {
    answerText = defaultFallbackAnswer;
  } else {
    answerText = `Sorry, I didn't understand your question. Please ask about related topics.`;
  }

  res.status(200).json({
    fulfillmentMessages: [{ text: { text: [answerText] } }]
  });
}


// Fetch 7-day weather forecast using OpenWeatherMap API and format response
async function getWeatherAnd7DayForecast(city) {
  try {
    const forecastDays = 5;
    // Fetch current weather for city and get lat/lon
    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    if (!currentWeatherResponse.ok) {
      throw new Error(`Current weather API error: ${currentWeatherResponse.statusText}`);
    }
    const currentWeatherData = await currentWeatherResponse.json();

    const { lat, lon } = currentWeatherData.coord;
    const currentDescription = currentWeatherData.weather[0].description;
    const currentTemp = currentWeatherData.main.temp.toFixed(1);

    // Fetch 7-day forecast using lat/lon
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${forecastDays}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    if (!forecastResponse.ok) {
      throw new Error(`7-day forecast API error: ${forecastResponse.statusText}`);
    }
    const forecastData = await forecastResponse.json();

    // Helper function to format date to DD-MM-YYYY
    const formatDate = (timestamp) => {
      const date = new Date(timestamp * 1000);
      const d = date.getDate().toString().padStart(2, '0');
      const m = (date.getMonth() + 1).toString().padStart(2, '0');
      const y = date.getFullYear();
      return `${d}-${m}-${y}`;
    };

    // Format 7-day forecast string
    let forecastStr = `🌤️ Current weather in ${city}: ${currentDescription}, Temp: ${currentTemp}°C\n\n🌦️ 7-day forecast:\n`;
    forecastData.list.forEach((day, index) => {
      const dateStr = formatDate(day.dt);
      const desc = day.weather[0].description;
      const tempMin = day.temp.min.toFixed(1);
      const tempMax = day.temp.max.toFixed(1);
      forecastStr += `Day ${index + 1} (${dateStr}): ${desc}, Min: ${tempMin}°C, Max: ${tempMax}°C\n`;
    });

    return {
      fulfillmentText: forecastStr
    };
  } catch (error) {
    console.error("Error fetching weather or forecast:", error);
    return `Sorry, I couldn't get weather information for ${city} at this time.`;
  }
}

// --- Weather API with native fetch ---
async function getCurrentWeather(city) {
  if (!city) return "Please provide a city name.";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data = await response.json();
  if (!data || !data.main) {
    return `Sorry, no weather data found for ${city}.`;
  }

  return `🌤️ Current weather in ${data.name}: ${data.weather[0].description}, Temp: ${data.main.temp}°C`;
}
