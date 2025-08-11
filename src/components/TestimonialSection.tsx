import React from 'react';

const TestimonialSection = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-14"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Badge */}
        <div className="mb-2">
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white mb-8"
            style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
          >
            <div 
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: '#22c55e' }}
            ></div>
            Smarter lists. Instant solutions.
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight">
          Don't just take our word for it. Hear<br />
          what <span className="text-gray-400">our clients say</span>
        </h1>

        {/* Testimonial Card */}
        <div 
          className="max-w-8xl mx-auto p-8 rounded-2xl relative"
          style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(51, 65, 85, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
            "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus 
            phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet 
            commodo."
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                  alt="Alex Larkins"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Alex Larkins</div>
                <div className="text-gray-400 text-sm">Art director of Astons</div>
              </div>
            </div>

            {/* Company Logo */}
            <div className="text-white font-bold text-xl tracking-wider">
              mono
            </div>
          </div>

          {/* Decorative Elements */}
          <div 
            className="absolute top-4 left-4 w-1 h-12 rounded-full opacity-20"
            style={{ backgroundColor: '#22c55e' }}
          ></div>
          <div 
            className="absolute bottom-4 right-4 w-1 h-8 rounded-full opacity-10"
            style={{ backgroundColor: '#3b82f6' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;