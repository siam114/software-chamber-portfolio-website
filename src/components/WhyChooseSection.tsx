import { useState, useEffect, useRef } from 'react';
import { Clock, Shield, Users, Zap, Award, HeartHandshake, ArrowLeft, ArrowRight } from 'lucide-react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const useInView = (threshold = 0.4) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const WhyChooseSection = () => {
  const { ref, inView } = useInView(0.3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const features: FeatureCard[] = [
    {
      id: 1,
      title: "Efficiency",
      description: "Software Chamber specialises in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 2,
      title: "Adaptability",
      description: "Software Chamber specialises in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-teal-100 text-teal-600"
    },
    {
      id: 3,
      title: "Scalability",
      description: "Software Chamber specialises in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      id: 4,
      title: "Precision",
      description: "Software Chamber specialises in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Why Choose{' '}
            <span className="block mt-2">
              Softwarechamber
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Deliver personalised experiences to your customers with AI-powered 
            recommendation engines and dynamic content generation.
          </p>
          
          {/* CTA Button */}
          <button className="inline-flex items-center px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-colors duration-300">
            Let's Discover
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Features Carousel */}
        <div className={`relative transition-all duration-600 ease-out delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="flex items-center justify-center space-x-8">
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 shadow-lg"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Feature Cards Container */}
            <div className="flex space-x-6 overflow-hidden">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + features.length) % features.length;
                const feature = features[index];
                const isCenter = offset === 0;
                
                return (
                  <div
                    key={feature.id}
                    className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                      isCenter 
                        ? 'transform scale-110 z-10 opacity-100' 
                        : 'transform scale-90 opacity-60'
                    }`}
                    style={{ width: '320px' }}
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl mb-6 ${feature.color}`}>
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 shadow-lg"
            >
              <ArrowRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseSection;