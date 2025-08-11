import React from 'react';
import { ExternalLink } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer 
      className="py-10 px-4"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="max-w-7xl mx-auto">
         <h2 className="text-5xl font-bold text-white mb-16 leading-tight">
              LET'S TALK
            </h2>
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-16 mb-10">
          
          {/* Left Column - Title, Description & Social Media */}
          <div className="lg:col-span-1">
            <p className="text-gray-400 leading-relaxed mb-10">
              A new era of energy, elegance, and elite 
              competition begins. Where passion 
              meets performance on the court like 
              never before.
            </p>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-6">Social media</h3>
              <div className="grid grid-cols-3 gap-y-3 gap-x-8">
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>Instagram</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>Twitter</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>Facebook</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>TikTok</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>LinkedIn</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
                <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  <span>Youtube</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-10">
              {/* Address */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm tracking-wider">ADDRESS</h4>
                <p className="text-gray-400 leading-relaxed">
                  1901 Thornridge Cir.<br />
                  Shiloh, Hawaii 81063
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm tracking-wider">PHONE</h4>
                <p className="text-gray-400">[+1] 872-298-3989</p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm tracking-wider">EMAIL</h4>
                <p className="text-gray-400">hello@framer.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/Rectangle 22852.png"
                alt="Business meeting"
                className="w-full h-60 lg:h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Links */}
        <div 
          className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm">
  © {new Date().getFullYear()} Software Chamber. All Rights Reserved
</div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;