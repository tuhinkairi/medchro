import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the medical chatbot?",
            answer: "The medical chatbot is an AI-powered virtual assistant designed to help you with your healthcare queries. It can provide information on medical conditions, suggest potential treatments, and guide you in finding the right healthcare professional based on your symptoms."
        },
        {
            question: "How does the chatbot work?",
            answer: "The chatbot uses natural language processing (NLP) to understand your questions and provide relevant answers. You can type or speak your queries, and the chatbot will respond with information based on a vast database of medical knowledge."
        },
        {
            question: "Is the chatbot a substitute for a doctor?",
            answer: "No, the chatbot is not a substitute for professional medical advice. While it can provide general information, it is essential to consult a healthcare professional for personalized medical advice, diagnoses, or treatment plans."
        },
        {
            question: "What kind of questions can I ask the chatbot?",
            answer: "You can ask the chatbot a wide range of questions, including symptoms of specific medical conditions, recommended treatments or medications, information about various specialties and healthcare providers, and general wellness tips and preventive care."
        },
        {
            question: "Is my personal information safe with the chatbot?",
            answer: "Yes, your privacy is important to us. We adhere to strict data protection regulations to ensure that your personal information is kept confidential. Please review our privacy policy for more details on how we handle your data."
        },
        {
            question: "How do I report an issue or provide feedback about the chatbot?",
            answer: "If you encounter any issues or have feedback, you can easily report it through the chatbot interface. Simply type your concern, and it will be sent to our support team for review."
        },
        {
            question: "Can the chatbot help with appointment scheduling?",
            answer: "Yes, the chatbot can assist you in scheduling appointments with healthcare providers. You can provide the necessary details, and the chatbot will guide you through the scheduling process."
        },
        {
            question: "What should I do if the chatbot doesn’t understand my question?",
            answer: "If the chatbot is unable to understand your question, try rephrasing it or using simpler language. If you continue to have difficulties, you can reach out to a human support representative for assistance."
        },
        {
            question: "How accurate is the information provided by the chatbot?",
            answer: "The information provided by the chatbot is based on a reliable medical database and guidelines. However, it is essential to verify any medical information with a qualified healthcare professional."
        },
        {
            question: "Is there a cost to use the chatbot?",
            answer: "The chatbot service is free to use for general inquiries. However, certain features, such as personalized consultations or specific services, may incur charges. Please check with the chatbot for details on any potential costs."
        },
        {
            question: "Can I access the chatbot outside of normal business hours?",
            answer: "Yes, the chatbot is available 24/7, allowing you to get answers to your medical questions at any time."
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen px-4 md:px-20 p-4 bg-gray-100 w-full z-10 relative py-20 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Medical Chatbot FAQ</h1>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b py-2">
                        <button 
                            onClick={() => toggleAnswer(index)} 
                            className="w-full text-left focus:outline-none"
                        >
                            <h1 className="text-xl md:text-2xl font-semibold hover:bg-yellow-200 transition duration-200">{faq.question}</h1>
                        </button>
                        {activeIndex === index && (
                            <p className="mt-1 text-gray-600 font-normal text-md">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
