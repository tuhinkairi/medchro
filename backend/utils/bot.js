// import { HfInference } from '@huggingface/inference';
import "dotenv/config"; 

// const key = process.env.HUGGING_FACE_API_KEY
// const hf = new HfInference(key);

// // Function to get completion directly from GPT-2
// export default async function bot(prompt) {
//     const response = await hf.textGeneration({
//         model: 'microsoft/GRIN-MoE',
//         inputs: prompt,
//         parameters: { max_new_tokens: 100, temperature: 0.7 },
//     });

//     console.log(response);
// }

// // Call the function
// bot("Explain recursion in programming.");
// import OpenAI from 'openai';
// const key = ''

// // Initialize OpenAI with your API key
// const openai = new OpenAI(
//     {apiKey:key}, // Replace with your OpenAI API Key
// );

// // Medical assistant function to process user symptoms and provide potential diagnosis
// async function bot(userSymptoms) {
//     try {
//         const completion = await openai.chat.completions.create({
//             model: 'gpt-4o-mini', // Using GPT-4 for more accuracy
//             messages: [
//                 { role: 'system', content: 'You are a helpful medical assistant. You provide medical information and suggest potential diagnoses based on user symptoms. Always provide a disclaimer that this is not official medical advice.' },
//                 { role: 'user', content: `The patient reports the following symptoms: ${userSymptoms}. What could be the possible diagnosis?` }
//             ],
//         });

//         const diagnosis = completion.choices[0].message.content;

//         console.log('Assistant:', diagnosis);

//         return diagnosis;
//     } catch (error) {
//         console.error('Error fetching completion from OpenAI:', error);
//         return 'Sorry, I encountered an error while processing your request.';
//     }
// }

// // Example usage
// const userSymptoms = "I'm feeling nauseous, have a fever, and a sore throat.";
// bot(userSymptoms).then((response) => {
//     console.log('Potential diagnosis:', response);
// });
import axios from 'axios';

// Initialize the Gemini AI API
const geminiApiUrl = 'https://api.deepmind.com/v1/gemini/chat'; // Hypothetical endpoint
const geminiApiKey = ''; // Replace with your actual API key

// Function to get a diagnosis from Gemini AI
async function medicalAssistant(userSymptoms) {
    try {
        const response = await axios.post(geminiApiUrl, {
            model: 'gemini', // Use the appropriate model name
            messages: [
                { role: 'system', content: 'You are a helpful medical assistant.' },
                { role: 'user', content: `What could be the possible diagnosis for the symptoms: ${userSymptoms}?` }
            ],
        }, {
            headers: {
                'Authorization': `Bearer ${geminiApiKey}`,
                'Content-Type': 'application/json',
            },
        });

        const diagnosis = response.data.choices[0].message.content;
        console.log('Assistant:', diagnosis);
    } catch (error) {
        console.error('Error fetching completion from Gemini AI:', error.response ? error.response.data : error.message);
    }
}

// Example usage
const userSymptoms = "I'm feeling nauseous, have a fever, and a sore throat.";
medicalAssistant(userSymptoms);
