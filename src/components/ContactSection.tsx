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
      className="min-h-screen py-16 px-4 bg-white"
      
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let's talk about your next<br />
            project. <span className="text-gray-400">We're here to help.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-5xl mx-auto leading-relaxed">
            Deliver personalized experiences to your customers<br />
            with AI-powered recommendation engines and<br />
            dynamic content generators.
          </p>
        </div>

        {/* Main Content */}
       <div className="flex flex-col lg:flex-row gap-10 items-center bg-white rounded-3xl p-8 shadow-lg">
  {/* Image */}
  <div className="flex-1">
    <img
      src="/Rectangle 240648291.png"
      alt="Profile"
      className="w-full h-[600px] object-cover rounded-3xl"
    />
  </div>

  {/* Form */}
  <form
    onSubmit={handleSubmit}
    className="flex-1 bg-gray-50 rounded-3xl p-6 space-y-6 shadow-sm"
  >
    {/* First & Last Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    {/* Email */}
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
    />

    {/* Phone */}
    <div className="grid grid-cols-3 gap-4">
      <select
        name="country"
        value={formData.country}
        onChange={handleInputChange}
        className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        <option value="+1">+1</option>
        <option value="+880">+880</option>
        <option value="+44">+44</option>
        <option value="+91">+91</option>
      </select>
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="col-span-2 w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

    {/* Job Title */}
    <input
      type="text"
      name="jobTitle"
      placeholder="Job Title"
      value={formData.jobTitle}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
    />

    {/* Message */}
    <textarea
      name="message"
      placeholder="Your message"
      rows={4}
      value={formData.message}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
    ></textarea>

    {/* Submit */}
    <button
      type="submit"
      className="w-full flex justify-center items-center gap-2 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-full py-4 transition-all"
    >
      Submit <Send size={18} />
    </button>
  </form>
</div>

      </div>
    </div>
  );
};

export default ContactSection;