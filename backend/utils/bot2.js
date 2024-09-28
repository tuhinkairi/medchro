/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {GoogleGenerativeAI,HarmCategory,HarmBlockThreshold} from "@google/generative-ai";
  
  const apiKey = "AIzaSyAAeFXbOxba17EB6Af1443ofZKPipaEtu4";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 0.1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function medibot(userSymptoms) {
    // return userSymptoms
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(`You are a helpful medical assistant. You provide medical information and suggest potential diagnoses based on ${userSymptoms}? symptoms. Always don't provide a disclaimer that this is not official medical advice.`);
    return result.response.text();
  }
  
  export default medibot;