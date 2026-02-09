import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for that premium "fade-in" navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Intelligence' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-slate-200 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo - Refined Kerning */}
          <Link to="/" className="flex items-center group">
            <div className="text-lg tracking-[-0.05em] font-light transition-colors">
              <span className={scrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}>
                EVOSS
              </span>
              <span className="text-cyan-500 font-medium">.GLOBAL</span>
            </div>
          </Link>

          {/* Desktop Navigation - Ultra Minimal */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8 border-r border-slate-200 pr-8 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-cyan-500 ${
                    isActive(link.path)
                      ? 'text-cyan-600'
                      : scrolled || location.pathname !== '/' ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Link
              to="/contact"
              className={`text-[9px] font-bold uppercase tracking-[0.4em] px-5 py-2 border transition-all ${
                scrolled || location.pathname !== '/'
                  ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                  : 'border-white/30 text-white hover:bg-white hover:text-slate-900'
              }`}
            >
              Inquire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${
              scrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay Style */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050A10] z-40 flex flex-col justify-center px-12 space-y-8 animate-in fade-in duration-300">
          <div className="space-y-6">
            <p className="text-cyan-500 text-[9px] font-bold tracking-[0.5em] uppercase mb-12">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-3xl font-light text-white hover:text-cyan-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-12 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-cyan-500 text-[10px] font-bold uppercase tracking-[0.4em]"
            >
              Initiate Project —&gt;
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}