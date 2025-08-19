import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

// Animation hook for intersection observer
const useInView = (threshold = 0.4) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

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
  const [activeCard, setActiveCard] = useState(0);
  const heroSection = useInView(0.3);

  // Card data with beautiful designs
  const cardData = [
    {
      title: "Website Development",
      description:
        "Create stunning, responsive websites with modern technologies. Built for performance, scalability, and user experience.",
      icon: "🌐",
      category: "Website",
      color: "from-blue-600 to-cyan-600",
      accent: "bg-blue-500",
      bgPattern: "from-blue-900/20 to-cyan-900/20",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences on every device.",
      icon: "📱",
      category: "Mobile App",
      color: "from-green-600 to-emerald-600",
      accent: "bg-green-500",
      bgPattern: "from-green-900/20 to-emerald-900/20",
    },
    {
      title: "Software Solutions",
      description:
        "Custom software development and enterprise solutions. Scalable, secure, and tailored to your business needs.",
      icon: "⚙️",
      category: "Software",
      color: "from-purple-600 to-violet-600",
      accent: "bg-purple-500",
      bgPattern: "from-purple-900/20 to-violet-900/20",
    },
    {
      title: "Web Applications",
      description:
        "Modern web applications with cutting-edge frameworks. Fast, interactive, and feature-rich experiences.",
      icon: "💻",
      category: "Web App",
      color: "from-orange-600 to-red-600",
      accent: "bg-orange-500",
      bgPattern: "from-orange-900/20 to-red-900/20",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-gray-900">
        <div className="px-4 py-6">
          <div className="relative w-full flex justify-center">
            <img
              src="/Frame 2147227306.png"
              alt="navbar"
              className="w-full max-w-7xl h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Her

      {/* Main Hero Section */}
      <section className="relative min-h-screen pb-26 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
        {/* Background particles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={heroSection.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16"
        >
          {/* Hero Title */}
          <div className="space-y-8">
            <div
              className={`inline-flex px-6 py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
                heroSection.inView
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              🟢 Smarter Idea, instant soultions
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              <div
                className={`transition-all duration-500 ease-out ${
                  heroSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                We are your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                  Software
                </span>
              </div>
              <div
                className={`transition-all duration-500 ease-out delay-200 ${
                  heroSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                } flex items-center justify-center gap-4`}
              >
                Development
                <span className="inline-flex gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-white text-sm">🔗</span>
                  </div>
                </span>
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
                  Team
                </span>
              </div>
              <div
                className={`transition-all duration-500 ease-out delay-400 ${
                  heroSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                in The Cloud
              </div>
            </h1>

            {/* Contact Button */}
            <div
              className={`transition-all pb-6 duration-500 ease-out delay-600 ${
                heroSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <button className="group px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-600 hover:border-cyan-500/50 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 flex items-center gap-3 mx-auto backdrop-blur-sm">
                Contact Us
                <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <span className="text-gray-900 text-sm font-bold">→</span>
                </div>
              </button>
            </div>
          </div>

          {/* Cards Section */}
          <div className="relative">
            <div
              className="relative mx-auto"
              style={{ width: "700px", height: "300px" }}
            >
              {/* Corner Buttons with proper gaps */}
              {/* Top Left */}
              <button
                onClick={() => setActiveCard(0)}
                className={`absolute -top-20 -left-20 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm border-2 ${
                  activeCard === 0
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/30 border-blue-400 scale-110"
                    : "bg-gray-800/80 text-gray-300 border-gray-600 hover:bg-gray-700/80 hover:text-white hover:border-blue-400 hover:scale-105"
                } hover:shadow-xl`}
              >
                <div className="flex items-center gap-2">
                  <span>🌐</span>
                  Website
                </div>
              </button>

              {/* Top Right */}
              <button
                onClick={() => setActiveCard(1)}
                className={`absolute -top-20 -right-20 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm border-2 ${
                  activeCard === 1
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl shadow-green-500/30 border-green-400 scale-110"
                    : "bg-gray-800/80 text-gray-300 border-gray-600 hover:bg-gray-700/80 hover:text-white hover:border-green-400 hover:scale-105"
                } hover:shadow-xl`}
              >
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  Mobile App
                </div>
              </button>

              {/* Bottom Right */}
              <button
                onClick={() => setActiveCard(2)}
                className={`absolute -bottom-20 -right-20 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm border-2 ${
                  activeCard === 2
                    ? "bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-2xl shadow-purple-500/30 border-purple-400 scale-110"
                    : "bg-gray-800/80 text-gray-300 border-gray-600 hover:bg-gray-700/80 hover:text-white hover:border-purple-400 hover:scale-105"
                } hover:shadow-xl`}
              >
                <div className="flex items-center gap-2">
                  <span>⚙️</span>
                  Software
                </div>
              </button>

              {/* Bottom Left */}
              <button
                onClick={() => setActiveCard(3)}
                className={`absolute -bottom-20 -left-20 px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm border-2 ${
                  activeCard === 3
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl shadow-orange-500/30 border-orange-400 scale-110"
                    : "bg-gray-800/80 text-gray-300 border-gray-600 hover:bg-gray-700/80 hover:text-white hover:border-orange-400 hover:scale-105"
                } hover:shadow-xl`}
              >
                <div className="flex items-center gap-2">
                  <span>💻</span>
                  Web App
                </div>
              </button>

              {/* Beautiful Cards Stack */}
              <div className="relative w-full h-full">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-3xl border-2 transition-all duration-700 ease-out overflow-hidden ${
                      index === activeCard
                        ? "z-20 scale-100 opacity-100 translate-y-0 border-white/20 shadow-2xl"
                        : index < activeCard
                        ? "z-10 scale-95 opacity-70 translate-y-4 border-gray-600/30"
                        : "z-5 scale-90 opacity-40 translate-y-8 border-gray-700/20"
                    }`}
                    style={{
                      transform: `translateY(${
                        index === activeCard
                          ? "0px"
                          : `${Math.abs(index - activeCard) * 16}px`
                      }) scale(${
                        index === activeCard
                          ? 1
                          : 0.92 - Math.abs(index - activeCard) * 0.04
                      })`,
                    }}
                  >
                    {/* Card Background with Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.bgPattern} backdrop-blur-sm`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-gray-900/95 backdrop-blur-xl"></div>

                    {/* Card Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-2xl shadow-lg`}
                          >
                            {card.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {card.title}
                            </h3>
                            <span
                              className={`px-3 py-1 ${card.accent}/20 text-${
                                card.accent.split("-")[1]
                              }-400 rounded-full text-xs font-medium border border-${
                                card.accent.split("-")[1]
                              }-500/30`}
                            >
                              {card.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-medium border border-green-500/30">
                            ● Active
                          </div>
                          <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs font-medium border border-cyan-500/30">
                            ⚡ Live
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex-1 mb-6">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {card.description}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div
                              className={`w-2 h-2 rounded-full ${card.accent}`}
                            ></div>
                            <span>Modern Design</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div
                              className={`w-2 h-2 rounded-full ${card.accent}`}
                            ></div>
                            <span>Responsive</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div
                              className={`w-2 h-2 rounded-full ${card.accent}`}
                            ></div>
                            <span>Fast Performance</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <div
                              className={`w-2 h-2 rounded-full ${card.accent}`}
                            ></div>
                            <span>SEO Optimized</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Section */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
