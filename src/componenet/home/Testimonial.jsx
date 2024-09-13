import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO of Company",
    text: "This product has been amazing for our business. The service is excellent, and I would highly recommend it to anyone!",
  },
  {
    name: "Jane Smith",
    position: "Marketing Head",
    text: "Using this product has helped us scale our campaigns and connect with more customers effectively.",
  },
  {
    name: "Sam Wilson",
    position: "Software Engineer",
    text: "It's a game-changer! The features and ease of use make it stand out from the competition.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-200 relative z-20 h-screen flex items-center">
      <div className="w-full max-w-2xl mx-auto py-10 flex flex-col items-center">
        <h1 className="font-bold text-gray-900 text-5xl md:text-7xl mb-6 w-full text-center">Testimonials</h1>
        <div className="flex items-center">
          <button
            className="mr-5 text-3xl p-2 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={goToPrev}
          >
            ❮
          </button>

          <div className="p-6 bg-white shadow-lg rounded-lg text-center transition-all duration-500 min-h-52 w-full">
            <p className="text-lg italic text-gray-700 mb-4">
              "{testimonials[currentIndex].text}"
            </p>
            <h3 className="text-xl font-bold text-gray-900">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[currentIndex].position}
            </p>
          </div>

          <button
            className="ml-5 text-3xl p-2 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={goToNext}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
