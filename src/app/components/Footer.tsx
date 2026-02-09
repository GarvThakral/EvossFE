import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A10] text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        
        {/* --- TOP TIER: BRAND & BRIEFING --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="text-xl tracking-tighter font-light mb-8">
              <span className="text-white">EvoSS</span>
              <span className="text-cyan-500">.Global</span>
            </div>
            <p className="text-sm font-light leading-loose max-w-sm mb-10">
              A global technical advisory and proprietary asset firm. We engineer mission-critical solutions for complex institutional ecosystems.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Capabilities</h3>
              <ul className="space-y-4 text-[11px] tracking-widest uppercase">
                <li><Link to="/services" className="hover:text-cyan-500 transition-colors">Advisory</Link></li>
                <li><Link to="/products" className="hover:text-cyan-500 transition-colors">Proprietary IP</Link></li>
                <li><Link to="/services" className="hover:text-cyan-500 transition-colors">Engineering</Link></li>
                <li><Link to="/services" className="hover:text-cyan-500 transition-colors">R&D Lab</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Intelligence</h3>
              <ul className="space-y-4 text-[11px] tracking-widest uppercase">
                <li><Link to="/blog" className="hover:text-cyan-500 transition-colors">Briefs</Link></li>
                <li><Link to="/blog" className="hover:text-cyan-500 transition-colors">Case Analysis</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-500 transition-colors">Inquiry</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Contact</h3>
              <div className="space-y-6 text-[11px] leading-relaxed tracking-wide">
                <p>Fort Worth / New York / London / Bangalore</p>
                <a href="mailto:hello@evossglobal.com" className="block text-cyan-500 hover:underline">
                  hello@evossglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- MIDDLE TIER: NEWSLETTER (Refined) --- */}
        <div className="py-12 border-y border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md">
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">Subscribe to Global Insights</h4>
            <p className="text-[11px] font-light">Critical updates delivered to your corporate inbox.</p>
          </div>
          <form className="flex w-full md:w-auto border-b border-white/20 pb-2">
            <input
              type="email"
              placeholder="CORPORATE EMAIL"
              className="bg-transparent text-[10px] tracking-widest py-2 pr-12 focus:outline-none w-full md:w-64"
            />
            <button type="submit" className="text-white hover:text-cyan-500 transition-colors">
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>

        {/* --- BOTTOM TIER: LEGAL --- */}
        <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 items-center text-[9px] font-bold tracking-[0.3em] uppercase text-slate-600">
          <div className="flex flex-wrap justify-center gap-8">
            <p>© {currentYear} EVOSS GLOBAL</p>
            <p>EST. 2014</p>
            <p>CEO: SRINIVAS VARADARAJAN</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}