export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }


  const intentName = req.body.queryResult?.intent?.displayName || "";

alert(intentName);
  
  const answers = {
    "CI_SM_2_WaterNeeds_QA": "💧 $crop requires adequate water during $CropStage to maintain optimal growth. Drip and sprinkler irrigation are effective methods for $crop. Use soil moisture sensors to monitor water needs precisely. Regular monitoring prevents water stress, which negatively affects crop yield.",
    "CI_SM_2_WaterNeeds_BasmatiRice": "💧 For $cropVariety rice at transplanting, sufficient water is essential; methods like flood irrigation or alternate wetting and drying are commonly effective. Soil type and local $weatherCondition affect irrigation needs.",
    "CI_SM_2_WaterNeeds_Potatoes_Vegetative": "💧 For $crop at the vegetative stage, drip and sprinkler irrigation provide efficient and targeted watering, improving growth and water use.",
    "CI_SM_2_WaterNeeds_Corn_DateTime": "💧 To determine water needs for $crop on $date-time, consider local weather forecasts, soil moisture data, and crop development stage for accurate irrigation scheduling.",
    "CI_SM_2_WaterNeeds_Sugarcane_Quality": "💧 High-quality sugarcane requires consistent irrigation through appropriate methods such as drip or furrow irrigation to enhance crop quality and sugar content.",
    "CI_SM_2_WaterNeeds_PesticideEffect": "💧 Pesticide applications can alter soil conditions affecting irrigation needs; monitor soil moisture carefully when managing $crop irrigation.",
    "CI_SM_2_WaterNeeds_Grapes_Drip": "💧 Drip irrigation for grapes allows precise water delivery during sensitive stages such as flowering and berry formation; soil texture and $weatherCondition impact water demand.",
    "CI_SM_2_WaterNeeds_SandySoil": "💧 Sandy soils drain rapidly, necessitating frequent, small-volume irrigation to maintain adequate moisture without water waste.",
    "CI_SM_2_WaterNeeds_PoorSoil": "💧 Crops grown in poor soil conditions require tailored irrigation plans to prevent water loss and optimize root absorption; improving soil health can enhance water use efficiency.",
    "CI_SM_2_WaterNeeds_Maize_Dry_Weather": "💧 In $geo-state during dry $weatherCondition, $crop benefits significantly from drip or sprinkler irrigation tailored by crop growth stage and local soil properties.",
    "CI_SM_2_WaterNeeds_Wheat_BootStage": "💧 $crop requires increased water during key development phases such as the boot stage to support yield formation; irrigation frequency and amount should be adjusted accordingly.",
    "CI_SM_2_WaterNeeds_Temperature_Weather": "💧 Temperature and weather fluctuations drastically affect water needs for $crop; hot and dry conditions increase evapotranspiration, requiring more frequent irrigation.",
    "CI_SM_2_WaterNeeds_Potato_Flowering": "💧 During $CropStage flowering of $crop, consistent and balanced moisture is critical to avoid disease; drip or sprinkler irrigation systems are recommended.",
    "CI_SM_2_WaterNeeds_Organic_Tomatoes": "💧 Organic cultivation of $crop typically requires carefully managed irrigation—drip systems are preferred to conserve water and maintain plant health.",
    "CI_SM_2_WaterNeeds_Nutrient_Uptake": "💧 Efficient irrigation practices, especially using drip systems, can enhance nutrient uptake and overall growth performance in $crop.",
    "CI_SM_2_WaterNeeds_HybridMaize_Tasseling": "💧 Hybrid varieties of $crop demand ample water during critical stages like tasseling to ensure optimal pollination and grain development.",
    "CI_SM_2_WaterNeeds_Farming_Practices": "💧 Farming practices such as conservation tillage improve soil moisture retention and can reduce irrigation frequency needed for $crop.",
    "CI_SM_2_WaterNeeds_SalineSawil": "💧 Saline soils require frequent, light irrigations with adequate drainage using methods like drip irrigation to prevent salt buildup and protect $crop roots.",
    "CI_SM_2_WaterNeeds_Corn_Silking_Hot": "💧 During sensitive stages such as silking, $crop is vulnerable to water stress; increasing irrigation frequency, especially under hot $weatherCondition, is crucial.",
    "CI_SM_2_WaterNeeds_Sugarcane_SugarAccumulation": "💧 Maintaining consistent irrigation supports stalk growth and improves sugar accumulation in sugarcane; combining irrigation with nutrient management maximizes yield."
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

