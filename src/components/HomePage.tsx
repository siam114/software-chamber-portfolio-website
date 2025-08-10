// pages/index.tsx
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronRight, Code, Smartphone, Globe, Database, Shield, Users, Star, Play, ArrowRight, Plus, Minus } from 'lucide-react';

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

const HomePage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Intersection observer hooks
  const heroSection = useInView(0.3);
  const statsSection = useInView(0.4);
  const servicesSection = useInView(0.3);
  const processSection = useInView(0.3);
  const whyChooseSection = useInView(0.3);
  const stackSection = useInView(0.3);
  const projectsSection = useInView(0.3);
  const clientsSection = useInView(0.3);
  const faqSection = useInView(0.3);
  const testimonialsSection = useInView(0.3);

  // Counter hooks
  const projectCount = useCounter(50, 1200, statsSection.inView);
  const clientCount = useCounter(30, 1200, statsSection.inView);
  const experienceCount = useCounter(5, 1200, statsSection.inView);

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

  const faqs = [
    {
      question: "What technologies do you work with?",
      answer: "We work with modern web technologies including React, Next.js, Node.js, Python, AWS, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects take 2-6 months from start to finish."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer comprehensive maintenance and support packages for all our projects."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We offer team augmentation services and can integrate seamlessly with your existing development team."
    }
  ];

  const cardImages = [
    '/api/placeholder/300/200', // Replace with your actual image paths
    '/api/placeholder/300/200',
    '/api/placeholder/300/200'
  ];

  return (
    <>
      <Head>
        <title>Software Development Company - Cloud Solutions</title>
        <meta name="description" content="Professional software development team specializing in cloud solutions" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-cyan-400">DevTeam</div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
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
                <div className={`inline-flex px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm transition-all duration-220 ${heroSection.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  🚀 Building the future of software
                </div>
                
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <div className={`transition-all duration-450 ease-out ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                      We are your
                    </div>
                    <div className={`transition-all duration-450 ease-out delay-120 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Software</span>
                    </div>
                    <div className={`transition-all duration-450 ease-out delay-240 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                      Development <span className="text-cyan-400">Team</span>
                    </div>
                    <div className={`transition-all duration-450 ease-out delay-360 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                      in The Cloud
                    </div>
                  </h1>
                </div>
              </div>

              <div className={`flex flex-wrap gap-3 transition-all duration-450 ease-out delay-480 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">React</span>
                <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">Node.js</span>
                <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">AWS</span>
                <span className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm">TypeScript</span>
              </div>

              <div className={`flex gap-4 transition-all duration-450 ease-out delay-600 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all duration-180 hover:scale-103 hover:shadow-2xl hover:shadow-cyan-500/25 active:scale-98">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-gray-700 hover:border-cyan-500 rounded-lg font-semibold transition-all duration-180 hover:scale-103 active:scale-98 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stacked Cards with Parallax */}
            <div className="relative h-96 perspective-1000">
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

        {/* Stats Section */}
        <section ref={statsSection.ref} className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-12 transition-all duration-450 ease-out ${statsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                At Software Chamber, we specialize in turning complex challenges into elegant digital solutions ✨
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Stats */}
              <div className="space-y-8">
                <div className={`transition-all duration-500 ease-out ${statsSection.inView ? 'opacity-100 scale-102' : 'opacity-100 scale-100'}`}>
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
                      <div className="font-semibold">Full-Stack Development</div>
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
                      <div className="font-semibold">Cloud Infrastructure</div>
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
                      <div className="font-semibold">Mobile Development</div>
                      <div className="text-sm text-gray-400">iOS & Android apps</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesSection.ref} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-450 ease-out ${servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h2 className="text-4xl font-bold mb-4">Services ✨</h2>
              <p className="text-xl text-gray-400">Comprehensive solutions for your digital needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gray-800/50 border border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all duration-180 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    servicesSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="mb-4 text-cyan-400 group-hover:translate-y-[-6px] transition-transform duration-180">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <button className="flex items-center gap-2 text-cyan-400 hover:gap-4 transition-all duration-180">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-180" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .hover\\:scale-103:hover {
          transform: scale(1.03);
        }
        
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;