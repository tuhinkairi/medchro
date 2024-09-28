import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import "dotenv/config";
// import bot from "./bot.js";
import medibot from "./bot2.js";

export const sendMessage = catchAsyncErrors(async (req, res) => {
  const { content } = req.body;
  console.log("Received content:", content);

  // Set headers for chunked response
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Transfer-Encoding", "chunked");

  // Define long text responses based on different scenarios
  const responses = {
    "what is kidney stone": "Kidney stones are hard, crystalline mineral deposits that form in the kidneys when substances in the urine become concentrated. They can vary in size and may be as small as a grain of sand or as large as a golf ball.",
    "what causes kidney stones": "Kidney stones can be caused by a variety of factors, including high levels of calcium, oxalate, or uric acid in the urine. Other factors include dehydration, certain medications, and genetic predispositions.",
    "symptoms of kidney stones": "Symptoms of kidney stones can include severe pain in the back or side, pain during urination, and blood in the urine. Some people may also experience nausea and vomiting.",
    "treatment options for kidney stones": "Treatment options for kidney stones vary based on the size and type of the stone. They may include increased fluid intake, medications to manage pain or dissolve the stones, or procedures like shock wave lithotripsy or surgery.",
    "prevention of kidney stones": "Preventing kidney stones involves maintaining a healthy diet, staying well-hydrated, and avoiding excessive intake of certain substances like salt and oxalate-rich foods.",
  };

  // Determine which response to send based on user input
  let responseText = "";

  if (content) {
    if (responses[content.toLowerCase()]) {
      responseText = responses[content.toLowerCase()];
    }
    else if(content){
      const question= content.toLowerCase()
      // const prompt=`answer this question ${question} if it is a medical question else return i can only ans for medical questions `
      responseText = await medibot(question)
      responseText = responseText.replace(/\*\*(.*?)\*\*/g, '\n$1\n').replace(/\*/g, '\n')
    }
    else {
      responseText = "I'm sorry, I don't have information on that topic.";
    }
  } else {
    responseText = "No content received.";
  }

  const chunkSize = 50; // Size of each chunk in characters
  let index = 0;

  // Function to send chunks of text with a delay
  const sendChunks = () => {
    if (index < responseText.length) {
      const chunk = responseText.slice(index, index + chunkSize);
      res.write(JSON.stringify({ content: chunk }));
      index += chunkSize;

      // Delay to simulate real-time chunk sending
      setTimeout(sendChunks, 500); // 500ms delay between chunks
    } else {
      // End the response after sending all chunks
      res.end();
    }
  };

  // Start sending chunks
  sendChunks();
});