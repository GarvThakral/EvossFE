import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-[#2C3E50]">EvoSS</span>
              <span className="text-[#3BA5C8]"> Global</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base transition-colors ${
                  isActive(link.path)
                    ? 'text-[#3BA5C8] font-medium'
                    : 'text-[#2C3E50] hover:text-[#3BA5C8]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="bg-[#3BA5C8] text-white px-6 py-2.5 rounded-lg hover:bg-[#2C8EAD] transition-colors font-medium"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2C3E50] hover:text-[#3BA5C8]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base ${
                  isActive(link.path)
                    ? 'text-[#3BA5C8] font-medium'
                    : 'text-[#2C3E50]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#3BA5C8] text-white px-6 py-3 rounded-lg text-center font-medium mt-4"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
