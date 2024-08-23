import React, { useState } from "react";
import TradingChallenge from "./TradingChallenge";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "Will I learn how to pick winning stocks?",
    "What is a trading class, and who is it for?",
    "What will I learn in a trading class?",
    "How do I securely store my cryptocurrencies?",
    "Will I learn how to pick winning stocks?",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto py-16 px-6 mt-5">
        <div className="text-center mb-8">
          <span className="inline-block bg-green-100 text-green-600 text-sm px-3 w-44 py-1 rounded-full mb-4">
            FAQ QUESTION ❓
          </span>
          <h2 className="text-4xl font-bold mb-2 mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-2xl font-medium text-gray-500 py-4 border-b border-gray-200 flex justify-between items-center"
              >
                {faq}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vel sem mi.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-teal-900 text-white py-3 px-6  w-full rounded-2xl text-lg flex items-center justify-center mx-auto">
            Explore All FAQ <span className="ml-2">→</span>
          </button>
        </div>
      </section>
      <TradingChallenge />
    </div>
  );
};

export default FAQSection;
