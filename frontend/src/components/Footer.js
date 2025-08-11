import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_8e4b8657-9f00-4d13-8490-6fcb3b912fb2/artifacts/kpuy590c_Rob%27s%20Logo.png" 
                alt="Dragon Concrete & Polishing Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-white">Dragon Concrete</h3>
                <span className="text-sm text-blue-300">& Polishing</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of concrete flooring solutions in Ontario, delivering the highest quality finished concrete floors.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/commercial" className="text-gray-300 hover:text-blue-300 transition-colors">Commercial Flooring</Link></li>
              <li><Link to="/residential" className="text-gray-300 hover:text-blue-300 transition-colors">Residential Flooring</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-300 transition-colors">Concrete Polishing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-300 transition-colors">Floor Finishing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-300 transition-colors">Decorative Concrete</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link to="/why-us" className="text-gray-300 hover:text-blue-300 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-blue-300 transition-colors">Our Process</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-blue-300 transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-blue-300 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">195 Barrington Avenue<br />Downtown Toronto, ON</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">647-641-3782</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">infopolising@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dragon Concrete & Polishing. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Serving Downtown Toronto to all of Ontario
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;