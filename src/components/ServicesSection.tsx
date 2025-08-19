import { useState, useEffect, useRef } from 'react';
import { Code, Globe, Database, Shield, Smartphone, Users, ArrowRight, Layers, Zap, Settings } from 'lucide-react';

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

const ServicesSection = () => {
  const servicesSection = useInView(0.2);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web & Mobile App Development",
      description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions.",
      featured: false
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Application Software Services", 
      description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions.",
      featured: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Software Coding & Optimization",
      description: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions.",
      featured: false
    }
  ];

  return (
    <section id="services" ref={servicesSection.ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex justify-between items-center mb-16 transition-all duration-700 ease-out ${
          servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <h2 className="text-5xl font-bold text-gray-900">
              Services <span className="text-emerald-500">✨</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-500 transition-colors duration-300 group">
            <span className="text-lg">All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const isFeatured = service.featured;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ease-out ${
                  servicesSection.inView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } ${
                  isFeatured 
                    ? 'lg:scale-105 lg:transform' 
                    : 'hover:translate-y-[-4px]'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`
                  relative h-full p-8 rounded-3xl border transition-all duration-300 
                  ${isFeatured 
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/25 border-emerald-400' 
                    : 'bg-white border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300'
                  }
                `}>
                  
                  {/* Icon */}
                  <div className={`mb-6 transition-transform duration-300 ${
                    isFeatured 
                      ? 'text-white' 
                      : 'text-emerald-500 group-hover:scale-110'
                  }`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold leading-tight ${
                      isFeatured ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-base leading-relaxed ${
                      isFeatured ? 'text-emerald-50' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <button className={`
                      flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 group/btn
                      ${isFeatured 
                        ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm' 
                        : 'bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600'
                      }
                    `}>
                      <span className="text-lg font-medium">Learn More</span>
                      <ArrowRight className={`
                        w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1
                        ${isFeatured ? 'text-white' : 'text-emerald-500'}
                      `} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;