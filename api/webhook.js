export default function handler(req, res) {
  const intentName = req.body.queryResult?.intent?.displayName || "";
  console.log("DEBUG INTENT:", intentName);

  // Respond with the intent name you received, for extra debugging
  if (intentName === "CI_SM_2_WaterNeeds_QA") {
    return res.status(200).json({
      fulfillmentMessages: [
        {
          text: {
            text: [
              "THIS IS THE MATCHED ANSWER for CI_SM_2_WaterNeeds_QA 🚀"
            ]
          }
        }
      ]
    });
  } else {
    return res.status(200).json({
      fulfillmentMessages: [
        {
          text: {
            text: [
              `No match, intent received: ${intentName}`
            ]
          }
        }
      ]
    });
  }
}
