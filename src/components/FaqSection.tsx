import React, { useState } from "react";
import { Plus, Star } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // Default to second item open

  const faqData = [
    {
      question: "What software development services does your company offer?",
      answer:
        "We offer a full range of software development services including web development, mobile app development, custom software solutions, API development, database design, cloud solutions, and ongoing maintenance and support.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Ya genius dong, maos aplikasi chat aja berbayar alk. Lo kalo nanya yang bener dong. Bayangan gw kalo aplikasi ini berbayar, masa gak chat lu harus bayar setiap kali nyalakan. Kalo lu mau bayar mendinp gabs MUIS aja sih.",
    },
    {
      question: "What sets your company apart from the competition?",
      answer:
        "Our development process includes requirement analysis, system design, development, testing, deployment, and post-launch support. We follow agile methodologies to ensure transparency, regular communication, and iterative improvements throughout the project lifecycle.",
    },
    {
      question: "Is my project idea and information kept confidential?",
      answer:
        "Absolutely. We take data security and confidentiality very seriously. All client information is protected under strict NDAs, and we implement industry-standard security measures including encryption, secure servers, and limited access protocols to ensure your data remains confidential.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive Answers to the Most{" "}
            <span className="inline-flex items-center">
              <Star
                className="w-8 h-8 text-teal-500 mr-2"
                fill="currentColor"
              />
              Common Questions
            </span>{" "}
            <span className="text-gray-400">About Our Services</span> and How We{" "}
            <span className="text-gray-400">Work</span>
            <span className="inline-block ml-2">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </span>
          </h1>
        </div>

        {/* FAQ Title Section - Horizontal Layout */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <h2 className="text-6xl font-bold text-gray-900">FAQ</h2>
            <div
              className="ml-8 h-px bg-gray-200 flex-1"
              style={{ width: "200px" }}
            ></div>
          </div>

          {/* ALFAQ badge on the right */}
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-gray-700 font-medium">ALFAQ</span>
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">?</span>
            </div>
          </div>
        </div>

        {/* FAQ Items - Full Width Below */}
        <div className="space-y-1">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group hover:bg-gray-50 px-4 rounded-lg"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-gray-900 font-medium text-lg pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-teal-500 rotate-45"
                      : "bg-gray-800 hover:bg-teal-500"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <div className="px-4">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
