export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const intentName = req.body.queryResult?.intent?.displayName || "";
  console.log("Received intent:", intentName);
  const answers = {
    "How much water does wheat need during flowering?":
      "💧 $crop requires adequate water during $CropStage to maintain optimal growth. Drip and sprinkler irrigation are effective methods for $crop. Use soil moisture sensors to monitor water needs precisely. Regular monitoring prevents water stress, which negatively affects crop yield.",
    "What is the water requirement for Basmati rice at transplanting?":
      "💧 For $cropVariety rice at transplanting, sufficient water is essential; methods like flood irrigation or alternate wetting and drying are commonly effective. Soil type and local $weatherCondition affect irrigation needs.",
    "Which irrigation method should I use for potatoes at the vegetative stage?":
      "💧 For $crop at the vegetative stage, drip and sprinkler irrigation provide efficient and targeted watering, improving growth and water use.",
    "How do I determine water needs for corn for tomorrow?":
      "💧 To determine water needs for $crop on $date-time, consider local weather forecasts, soil moisture data, and crop development stage for accurate irrigation scheduling.",
    "How much water is needed for high-quality sugarcane?":
      "💧 High-quality sugarcane requires consistent irrigation through appropriate methods such as drip or furrow irrigation to enhance crop quality and sugar content.",
    "Does pesticide application affect water requirements for paddy?":
      "💧 Pesticide applications can alter soil conditions affecting irrigation needs; monitor soil moisture carefully when managing $crop irrigation.",
    "What are the water requirements for drip irrigation applied to grapes?":
      "💧 Drip irrigation for grapes allows precise water delivery during sensitive stages such as flowering and berry formation; soil texture and $weatherCondition impact water demand.",
    "What’s the water need if my soil is sandy?":
      "💧 Sandy soils drain rapidly, necessitating frequent, small-volume irrigation to maintain adequate moisture without water waste.",
    "Do crops need irrigation if the soil condition is poor?":
      "💧 Crops grown in poor soil conditions require tailored irrigation plans to prevent water loss and optimize root absorption; improving soil health can enhance water use efficiency.",
    "Suggest irrigation method for maize in California during dry weather.":
      "💧 In $geo-state during dry $weatherCondition, $crop benefits significantly from drip or sprinkler irrigation tailored by crop growth stage and local soil properties.",
    "How much water does wheat need during the boot stage?":
      "💧 $crop requires increased water during key development phases such as the boot stage to support yield formation; irrigation frequency and amount should be adjusted accordingly.",
    "How do temperature and weather affect water needs for soybeans?":
      "💧 Temperature and weather fluctuations drastically affect water needs for $crop; hot and dry conditions increase evapotranspiration, requiring more frequent irrigation.",
    "What is the ideal irrigation schedule for potatoes at flowering?":
      "💧 During $CropStage flowering of $crop, consistent and balanced moisture is critical to avoid disease; drip or sprinkler irrigation systems are recommended.",
    "How much water is recommended for organic farming of tomatoes?":
      "💧 Organic cultivation of $crop typically requires carefully managed irrigation—drip systems are preferred to conserve water and maintain plant health.",
    "Does irrigation method affect nutrient uptake in corn?":
      "💧 Efficient irrigation practices, especially using drip systems, can enhance nutrient uptake and overall growth performance in $crop.",
    "What is the water requirement for hybrid maize during tasseling?":
      "💧 Hybrid varieties of $crop demand ample water during critical stages like tasseling to ensure optimal pollination and grain development.",
    "How does farming practice influence irrigation frequency?":
      "💧 Farming practices such as conservation tillage improve soil moisture retention and can reduce irrigation frequency needed for $crop.",
    "What adjustments to irrigation are needed for saline soils?":
      "💧 Saline soils require frequent, light irrigations with adequate drainage using methods like drip irrigation to prevent salt buildup and protect $crop roots.",
    "How to schedule irrigation for corn during silking under hot weather?":
      "💧 During sensitive stages such as silking, $crop is vulnerable to water stress; increasing irrigation frequency, especially under hot $weatherCondition, is crucial.",
    "What water management practices improve sugar content in sugarcane?":
      "💧 Maintaining consistent irrigation supports stalk growth and improves sugar accumulation in sugarcane; combining irrigation with nutrient management maximizes yield."
  };

  const answerText = answers[intentName] || "Sorry, I don't have a specific answer for that.";

  res.status(200).json({
    fulfillmentMessages: [
      {
        payload: {
          richContent: [
            [
              { type: "description", text: [answerText] }
            ]
          ]
        }
      }
    ]
  });
}
