import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What software development services does your company offer?",
      answer: "We offer a full range of software development services including web development, mobile app development, custom software solutions, API development, database design, cloud solutions, and ongoing maintenance and support."
    },
    {
      question: "What industries do you work with and?",
      answer: "We work with various industries including healthcare, fintech, e-commerce, education, manufacturing, real estate, and startups. Our diverse experience allows us to adapt to different business requirements and industry standards."
    },
    {
      question: "What does your company's development process encompass?",
      answer: "Our development process includes requirement analysis, system design, development, testing, deployment, and post-launch support. We follow agile methodologies to ensure transparency, regular communication, and iterative improvements throughout the project lifecycle."
    },
    {
      question: "Is in-person data and information kept confidential?",
      answer: "Absolutely. We take data security and confidentiality very seriously. All client information is protected under strict NDAs, and we implement industry-standard security measures including encryption, secure servers, and limited access protocols to ensure your data remains confidential."
    }
  ];

  const toggleFaq = (index: any | React.SetStateAction<null>) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div 
      className="min-h-screen py-16 px-5"
      style={{ backgroundColor: '#101828' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         <div 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white mb-8"
            style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
          >
            <div 
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: '#22c55e' }}
            ></div>
           FAQ
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Comprehensive Answers to the Most<br />
            Common Questions about Our<br />
            Services and How We Work
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 border ${
                activeIndex === index 
                  ? 'border-cyan-400 shadow-2xl' 
                  : 'border-slate-600 hover:border-cyan-400'
              }`}
              style={{ 
                backgroundColor: '#1E293B',
                boxShadow: activeIndex === index 
                  ? '0 8px 25px rgba(0, 212, 170, 0.1)' 
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 170, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-45' : ''
                  }`}
                  style={{ background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)' }}
                >
                  +
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-52 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6">
                  <p className="text-slate-400 leading-relaxed text-base">
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