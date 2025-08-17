export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const intentName = req.body.queryResult?.intent?.displayName || "";
  const userQuery = (req.body.queryResult?.queryText || "").toLowerCase();

  if (intentName !== "CI_SM_2_WaterNeeds_QA") {
    return res.status(200).json({
      fulfillmentMessages: [
        { text: { text: ["Sorry, I can't answer that intent yet."] } }
      ]
    });
  }

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

  let answerText = "Sorry, I don't have a specific answer for that.";

  for (const item of answersMap) {
    if (item.keywords.some(kw => userQuery.includes(kw))) {
      answerText = item.answer;
      break;
    }
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
