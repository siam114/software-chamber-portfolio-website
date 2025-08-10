import React, { useState, useEffect, useRef } from "react";
import { Code, Globe, Smartphone } from "lucide-react";
import Image from "next/image";

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
  const techPartners = useCounter(20, 1200, statsSection.inView);
  const projectsCompleted = useCounter(150, 1200, statsSection.inView);
  const satisfiedCustomers = useCounter(1000, 1200, statsSection.inView);

  return (
    <section
      ref={statsSection.ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-450 ease-out ${
            statsSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ✨ At Software Chamber,{" "}
            <span className="text-gray-400">we specialize</span> in turning
            complex challenges into elegant{" "}
            <span className="text-gray-400">digital solutions</span>
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Stats */}
          <div className="space-y-8 pl-30">
            <div
              className={`transition-all duration-450 ease-out ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-left">
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  {techPartners}+
                </div>
                <div className="text-gray-600 text-lg">Tech Partners</div>
              </div>
            </div>

            <div
              className={`transition-all duration-450 ease-out delay-100 ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-left">
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  {projectsCompleted}+
                </div>
                <div className="text-gray-600 text-lg">Project Completed</div>
              </div>
            </div>

            <div
              className={`transition-all duration-450 ease-out delay-200 ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-left">
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  {satisfiedCustomers >= 1000 ? "1K" : satisfiedCustomers}+
                </div>
                <div className="text-gray-600 text-lg">Satisfied Customers</div>
              </div>
            </div>
          </div>

          {/* middle part */}

          <div
            className={`transition-all duration-500 ease-out ${
              statsSection.inView
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Rectangle 6.png"
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="space-y-4">
            <div
              className={`transition-all duration-450 ease-out ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    Your Team in the cloud
                  </div>
                  <div className="text-sm text-gray-600">
                    We hire fast and brighten Talents to build...
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-450 ease-out delay-100 ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    Grow more with less
                  </div>
                  <div className="text-sm text-gray-600">
                    We have a competitive pricing structure......
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-450 ease-out delay-200 ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    Weekly sprint and reviews
                  </div>
                  <div className="text-sm text-gray-600">
                    Continuous deployment process designed
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-450 ease-out delay-300 ${
                statsSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    Communication First
                  </div>
                  <div className="text-sm text-gray-600">
                    We believe in clear work and messaging....
                  </div>
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
