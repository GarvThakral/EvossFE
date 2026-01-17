import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">EvoSS</span>
              <span className="text-[#3BA5C8]"> Global</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Customer-first, partner-powered, technology-enabled solutions provider. Solving complex business challenges since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#3BA5C8] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3BA5C8] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#3BA5C8] transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm hover:text-[#3BA5C8] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-[#3BA5C8] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-[#3BA5C8] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/get-started" className="text-sm hover:text-[#3BA5C8] transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#3BA5C8] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm">Mobile App Development</li>
              <li className="text-sm">Computer Vision</li>
              <li className="text-sm">Product R&D</li>
              <li className="text-sm">Enterprise Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-[#3BA5C8]" />
                <span>Fort Worth, TX<br />Global Partner Network</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={18} className="mr-2 flex-shrink-0 text-[#3BA5C8]" />
                <a href="mailto:hello@evossglobal.com" className="hover:text-[#3BA5C8] transition-colors">
                  hello@evossglobal.com
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone size={18} className="mr-2 flex-shrink-0 text-[#3BA5C8]" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-[#1F2D3D] border border-gray-600 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3BA5C8]"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#3BA5C8] text-white rounded-lg hover:bg-[#2C8EAD] transition-colors font-medium text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            © 2026 EvoSS Global. All rights reserved. | CEO: Srinivas Varadarajan | Est. 2014
          </p>
        </div>
      </div>
    </footer>
  );
}