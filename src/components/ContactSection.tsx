import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '+1',
    phone: '',
    jobTitle: '',
    message: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div 
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: '#101828' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's talk about your next<br />
            project. <span className="text-gray-400">We're here to help.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Deliver personalized experiences to your customers<br />
            with AI-powered recommendation engines and<br />
            dynamic content generators.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image Section */}
          <div className="relative flex-1">
            <div className="rounded-3xl overflow-hidden h-full">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=700&fit=crop"
                alt="Professional workspace"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
            </div>
            {/* Decorative blur elements */}
            <div 
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: '#00D4AA' }}
            ></div>
            <div 
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15 blur-xl"
              style={{ backgroundColor: '#0EA5E9' }}
            ></div>
          </div>

          {/* Form Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 flex-1 h-fit">
            <div className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-400 py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-400 py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-400 py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
              </div>

              {/* Phone */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-600 text-white py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  >
                    <option value="+1" className="bg-slate-800">+1</option>
                    <option value="+880" className="bg-slate-800">+880</option>
                    <option value="+44" className="bg-slate-800">+44</option>
                    <option value="+91" className="bg-slate-800">+91</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-400 py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-400 py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-slate-600 text-white placeholder-slate-400 py-3 px-0 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #00D4AA 0%, #0EA5E9 100%)' }}
                >
                  Submit
                  <Send size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;