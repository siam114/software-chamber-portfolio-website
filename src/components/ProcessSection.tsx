// components/ProcessSection.tsx
import { CheckCircle, Code, Lightbulb, Palette, Rocket, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  angle: number;
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

const ProcessSection = () => {
  const { ref, inView } = useInView(0.3);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [strokeOffset, setStrokeOffset] = useState(1000);
  
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your requirements and goals",
      icon: <Lightbulb className="w-6 h-6" />,
      angle: 0
    },
    {
      id: 2,
      title: "Design",
      description: "Creating user-centered design solutions",
      icon: <Palette className="w-6 h-6" />,
      angle: 60
    },
    {
      id: 3,
      title: "Development",
      description: "Building robust and scalable applications",
      icon: <Code className="w-6 h-6" />,
      angle: 120
    },
    {
      id: 4,
      title: "Testing",
      description: "Ensuring quality and performance",
      icon: <CheckCircle className="w-6 h-6" />,
      angle: 180
    },
    {
      id: 5,
      title: "Deployment",
      description: "Launching your solution to production",
      icon: <Rocket className="w-6 h-6" />,
      angle: 240
    },
    {
      id: 6,
      title: "Support",
      description: "Ongoing maintenance and improvements",
      icon: <Users className="w-6 h-6" />,
      angle: 300
    }
  ];

  // Animate stroke offset when in view
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setStrokeOffset(0);
      }, 600); // Start after globe animation
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const handleMouseMove = (e: React.MouseEvent, stepId: number) => {
    setHoveredStep(stepId);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  const radius = 200;
  const circumference = 2 * Math.PI * radius;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-600 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Software Development Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project
          </p>
        </div>

        {/* Process Globe/Arc */}
        <div className="relative flex items-center justify-center mb-20">
          <div 
            className={`transition-all duration-600 ease-out ${inView ? 'scale-100 opacity-100' : 'scale-96 opacity-0'}`}
          >
            {/* Globe Background */}
            <div className="relative w-[500px] h-[500px]">
              {/* Circular Path */}
              <svg 
                className="absolute inset-0 w-full h-full transform -rotate-90" 
                viewBox="0 0 500 500"
              >
                {/* Background Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="rgba(75, 85, 99, 0.3)"
                  strokeWidth="2"
                />
                
                {/* Animated Path */}
                <circle
                  cx="250"
                  cy="250"
                  r={radius}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeOffset}
                  style={{
                    transition: 'stroke-dashoffset 1s ease-out'
                  }}
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Process Steps */}
              {processSteps.map((step, index) => {
                const x = 250 + radius * Math.cos((step.angle - 90) * Math.PI / 180);
                const y = 250 + radius * Math.sin((step.angle - 90) * Math.PI / 180);
                const isVisible = inView && strokeOffset < (circumference - (circumference * step.angle / 360));
                
                return (
                  <div
                    key={step.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      isVisible ? 'animate-pulse' : ''
                    }`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      animationDelay: `${index * 200}ms`,
                      animationIterationCount: isVisible ? '1' : 'infinite'
                    }}
                    onMouseMove={(e) => handleMouseMove(e, step.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 ${
                      hoveredStep === step.id ? 'ring-4 ring-cyan-400/50' : ''
                    }`}>
                      {step.icon}
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center text-xs font-bold">
                      {step.id}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tooltip */}
        {hoveredStep && (
          <div
            className="fixed z-50 bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl max-w-xs transition-opacity duration-200"
            style={{
              left: `${tooltipPosition.x + 10}px`,
              top: `${tooltipPosition.y - 60}px`,
              pointerEvents: 'none'
            }}
          >
            {(() => {
              const step = processSteps.find(s => s.id === hoveredStep);
              return step ? (
                <div>
                  <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ) : null;
            })()}
          </div>
        )}

        {/* Process Steps List */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`text-center transition-all duration-450 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100 + 800}ms` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 mx-auto">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;