import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

// Animation hook for intersection observer
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

const HeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Intersection observer hook
  const heroSection = useInView(0.3);

  // Hero card rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cardImages = [
    '/api/placeholder/300/200', // Replace with your actual image paths
    '/api/placeholder/300/200',
    '/api/placeholder/300/200'
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gray-900 text-white">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 18}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div ref={heroSection.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className={`inline-flex px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm transition-all duration-200 ${heroSection.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              🚀 Building the future of software
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <div className={`transition-all duration-450 ease-out ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  We are your
                </div>
                <div className={`transition-all duration-450 ease-out delay-200 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Software</span>
                </div>
                <div className={`transition-all duration-450 ease-out delay-300 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  Development <span className="text-cyan-400">Team</span>
                </div>
                <div className={`transition-all duration-450 ease-out delay-400 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  in The Cloud
                </div>
              </h1>
            </div>
          </div>

          <div className={`flex flex-wrap gap-3 transition-all duration-450 ease-out delay-500 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">React</span>
            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">Node.js</span>
            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">AWS</span>
            <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">TypeScript</span>
          </div>

          <div className={`flex gap-4 transition-all duration-450 ease-out delay-600 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95">
              Get Started
            </button>
            <button className="px-8 py-4 border border-gray-700 hover:border-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stacked Cards with Parallax */}
        <div className="relative h-96" style={{ perspective: '1000px' }}>
          <div 
            className="relative w-full h-full"
            style={{
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {cardImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 transition-all duration-600 ease-out ${
                  index === currentCard ? 'z-30 scale-100 opacity-100' : 
                  index === (currentCard + 1) % 3 ? 'z-20 scale-95 opacity-80 translate-y-4' : 
                  'z-10 scale-90 opacity-60 translate-y-8'
                }`}
                style={{
                  transform: `${index === currentCard ? 'translateZ(0px)' : 
                              index === (currentCard + 1) % 3 ? 'translateZ(-20px)' : 
                              'translateZ(-40px)'} scale(${
                              index === currentCard ? 1 : 
                              index === (currentCard + 1) % 3 ? 0.95 : 0.9
                            })`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;