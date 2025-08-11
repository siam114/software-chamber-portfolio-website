// components/StackPowersSection.tsx
import { useState, useEffect, useRef } from 'react';

interface TechStack {
  name: string;
  category: string;
  logo: string; // You'll replace these with actual logo paths
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

const StackPowersSection = () => {
  const { ref, inView } = useInView(0.3);
  const [isPaused, setIsPaused] = useState(false);

  const techStacks: TechStack[] = [
    { name: 'React', category: 'Frontend', logo: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', category: 'Framework', logo: '▲', color: '#000000' },
    { name: 'TypeScript', category: 'Language', logo: 'TS', color: '#3178C6' },
    { name: 'Node.js', category: 'Backend', logo: '🟢', color: '#339933' },
    { name: 'Python', category: 'Language', logo: '🐍', color: '#3776AB' },
    { name: 'AWS', category: 'Cloud', logo: '☁️', color: '#FF9900' },
    { name: 'Docker', category: 'DevOps', logo: '🐳', color: '#2496ED' },
    { name: 'PostgreSQL', category: 'Database', logo: '🐘', color: '#336791' },
    { name: 'MongoDB', category: 'Database', logo: '🍃', color: '#47A248' },
    { name: 'GraphQL', category: 'API', logo: '◈', color: '#E10098' },
    { name: 'Redis', category: 'Cache', logo: '🔴', color: '#DC382D' },
    { name: 'Kubernetes', category: 'DevOps', logo: '☸️', color: '#326CE5' }
  ];

  // Duplicate array for seamless loop
  const duplicatedStacks = [...techStacks, ...techStacks];

  const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Stack Powers of{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              the World's Most Beloved Companies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage cutting-edge technologies trusted by industry leaders worldwide
          </p>
        </div>

        {/* Technology Categories */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-600 ease-out delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {categories.map((category, index) => (
            <div
              key={category}
              className={`px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
          
          {/* Scrolling Logos */}
          <div 
            className="flex gap-8 py-8"
            style={{
              animation: `${isPaused ? 'paused' : 'scroll'} 30s linear infinite`,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedStacks.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className={`flex-shrink-0 group relative transition-all duration-450 ease-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ 
                  transitionDelay: `${(index % techStacks.length) * 50}ms`,
                }}
              >
                {/* Logo Card */}
                <div className="relative w-24 h-24 bg-gray-800/50 border border-gray-700/50 rounded-2xl flex flex-col items-center justify-center p-4 hover:scale-105 transition-all duration-250 cursor-pointer filter grayscale group-hover:grayscale-0 group-hover:border-cyan-500/50">
                  {/* Logo */}
                  <div 
                    className="text-2xl mb-1 transition-all duration-250"
                    style={{ 
                      color: tech.color,
                      filter: 'grayscale(100%)',
                    }}
                  >
                    {tech.logo}
                  </div>
                  
                  {/* Name */}
                  <div className="text-xs text-gray-400 group-hover:text-white transition-colors duration-250 text-center font-medium">
                    {tech.name}
                  </div>

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-250"
                    style={{ 
                      backgroundColor: tech.color,
                      filter: 'blur(8px)',
                    }}
                  />
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20">
                  {tech.category}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .filter {
          filter: grayscale(100%);
        }
        
        .group:hover .filter {
          filter: grayscale(0%);
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StackPowersSection;