import React, { useState, useEffect, useRef } from 'react';
import { Code, Globe, Database, Shield, Smartphone, Users, ArrowRight } from 'lucide-react';

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
  // Intersection observer hook
  const servicesSection = useInView(0.3);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & Mobile App Development",
      description: "Custom web and mobile applications built with modern technologies and best practices."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your growing business."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Robust database architecture and optimization for optimal performance."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Augmentation",
      description: "Skilled developers to extend your existing development team."
    }
  ];

  return (
    <section id="services" ref={servicesSection.ref} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-450 ease-out ${servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-4xl font-bold mb-4 text-white">Services ✨</h2>
          <p className="text-xl text-gray-400">Comprehensive solutions for your digital needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 bg-gray-800/50 border border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-4 text-cyan-400 group-hover:translate-y-[-6px] transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <button className="flex items-center gap-2 text-cyan-400 hover:gap-4 transition-all duration-300">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;