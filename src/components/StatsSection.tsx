import React, { useState, useEffect, useRef } from 'react';
import { Code, Globe, Smartphone } from 'lucide-react';

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

// Counter animation hook
const useCounter = (end: number, duration = 1200, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};

const StatsSection = () => {
  // Intersection observer hook
  const statsSection = useInView(0.4);

  // Counter hooks
  const projectCount = useCounter(50, 1200, statsSection.inView);
  const clientCount = useCounter(30, 1200, statsSection.inView);
  const experienceCount = useCounter(5, 1200, statsSection.inView);

  return (
    <section ref={statsSection.ref} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-450 ease-out ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            At Software Chamber, we specialize in turning complex challenges into elegant digital solutions ✨
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="space-y-8">
            <div className={`transition-all duration-500 ease-out ${statsSection.inView ? 'opacity-100 scale-105' : 'opacity-100 scale-100'}`}>
              <div className="relative w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                <div className="relative p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">Our Workspace</div>
                    <div className="text-gray-400">Modern development environment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className={`text-center transition-all duration-450 ease-out ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-3xl font-bold text-cyan-400">{projectCount}+</div>
                <div className="text-gray-400">Projects Completed</div>
                <div className="w-6 h-6 mx-auto mt-2 text-green-400">✓</div>
              </div>
              <div className={`text-center transition-all duration-450 ease-out delay-100 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-3xl font-bold text-cyan-400">{clientCount}+</div>
                <div className="text-gray-400">Happy Clients</div>
                <div className="w-6 h-6 mx-auto mt-2 text-green-400">✓</div>
              </div>
              <div className={`text-center transition-all duration-450 ease-out delay-200 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-3xl font-bold text-cyan-400">{experienceCount}+</div>
                <div className="text-gray-400">Years Experience</div>
                <div className="w-6 h-6 mx-auto mt-2 text-green-400">✓</div>
              </div>
            </div>
          </div>

          {/* Services Preview */}
          <div className="space-y-6">
            <div className={`transition-all duration-450 ease-out ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Full-Stack Development</div>
                  <div className="text-sm text-gray-400">End-to-end web solutions</div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-450 ease-out delay-100 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Cloud Infrastructure</div>
                  <div className="text-sm text-gray-400">Scalable cloud solutions</div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-450 ease-out delay-200 ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Mobile Development</div>
                  <div className="text-sm text-gray-400">iOS & Android apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;