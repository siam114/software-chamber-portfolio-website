// components/WhyChooseSection.tsx
import { useState, useEffect, useRef } from 'react';
import { Clock, Shield, Users, Zap, Award, HeartHandshake } from 'lucide-react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: string;
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: FeatureCard[] = [
    {
      id: 1,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technologies for blazing fast applications.",
      icon: <Zap className="w-8 h-8" />,
      stats: "99.9% Uptime"
    },
    {
      id: 2,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and ensure system reliability.",
      icon: <Shield className="w-8 h-8" />,
      stats: "256-bit Encryption"
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
      icon: <Clock className="w-8 h-8" />,
      stats: "< 1hr Response"
    },
    {
      id: 4,
      title: "Expert Team",
      description: "Seasoned professionals with years of experience in modern web technologies.",
      icon: <Users className="w-8 h-8" />,
      stats: "50+ Developers"
    },
    {
      id: 5,
      title: "Award Winning",
      description: "Recognized for excellence in software development and innovative solutions.",
      icon: <Award className="w-8 h-8" />,
      stats: "15+ Awards"
    },
    {
      id: 6,
      title: "Client Focused",
      description: "Dedicated to building long-term partnerships and exceeding client expectations.",
      icon: <HeartHandshake className="w-8 h-8" />,
      stats: "98% Satisfaction"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SoftwareChamber
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine technical expertise with innovative solutions to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                hoveredCard === feature.id 
                  ? 'translate-y-[-6px] shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-500/20' 
                  : ''
              } ${
                inView ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-6 rotate-1'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl transition-opacity duration-300 ${
                hoveredCard === feature.id ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Icon with Tilt Animation */}
              <div className={`relative mb-6 text-cyan-400 transition-all duration-300 ${
                hoveredCard === feature.id ? 'transform rotate-8 scale-110' : ''
              }`}>
                {feature.icon}
              </div>

              {/* Stats Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                  {feature.stats}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className={`absolute bottom-6 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                hoveredCard === feature.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`} />

              {/* Sparkle Effects */}
              {hoveredCard === feature.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-600 ease-out delay-600 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-sparkle {
          animation: sparkle 1.5s infinite;
        }
        
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