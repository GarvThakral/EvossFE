import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: 'Mobile-First Strategy: Why Your Enterprise Needs Native Apps in 2026',
    excerpt: 'An analysis of native performance metrics versus cross-platform alternatives in high-security enterprise environments.',
    category: 'Analysis',
    date: 'JAN 05, 2026',
    readTime: '6 MIN',
    image: 'https://images.unsplash.com/photo-1732121041218-2050c914567b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Digital Transformation Success Stories: Lessons from Global Entities',
    excerpt: 'Key benchmarks and ROI metrics from recent large-scale digital overhaul initiatives.',
    category: 'Case Study',
    date: 'JAN 03, 2026',
    readTime: '10 MIN',
    image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Cloud-Native Architecture: Building Scalable Enterprise Solutions',
    excerpt: 'A comprehensive guide to designing sovereign cloud-native applications for global scale.',
    category: 'Technical',
    date: 'DEC 30, 2025',
    readTime: '7 MIN',
    image: 'https://images.unsplash.com/photo-1667984390527-850f63192709?auto=format&fit=crop&q=80&w=1200'
  }
];

export function Blog() {
  return (
    <div className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* --- EDITORIAL HERO --- */}
      <section className="relative pt-40 pb-24 bg-[#050A10] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start justify-between border-b border-white/10 pb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500"></div>
                <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">Intelligence Bureau</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                Insights & <br /> Perspective.
              </h1>
              <p className="text-slate-400 text-base font-light leading-relaxed max-w-md">
                Critical analysis on the intersection of emerging technology and global business strategy.
              </p>
            </div>
            
            {/* Minimal Search Bar */}
            <div className="w-full md:w-80 relative mt-8 md:mt-0">
              <input 
                type="text" 
                placeholder="SEARCH INTEL..." 
                className="w-full bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <Search size={14} className="absolute right-0 top-3 text-slate-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED INTEL (Large but refined) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-2/3 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1744640326166-433469d102f2?auto=format&fit=crop&q=80&w=1600" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Featured"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <div className="text-cyan-600 font-bold tracking-[0.3em] text-[9px] uppercase mb-4">Lead Perspective</div>
              <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6 leading-snug">
                The Future of Enterprise AI: How Computer Vision is Transforming Operations.
              </h2>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                Exploration of how sovereign AI models are shifting from experimental phases into mission-critical infrastructure for the Fortune 500.
              </p>
              <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-10">
                <span>JAN 08, 2026</span>
                <span>•</span>
                <span>8 MIN READ</span>
              </div>
              <Link to="#" className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 hover:text-cyan-600 transition-colors group">
                Access Document <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEL GRID --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {BLOG_POSTS.map((post, index) => (
              <article key={index} className="bg-white p-10 group cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="aspect-video mb-8 overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={post.title} />
                </div>
                <div className="text-cyan-600 font-bold tracking-[0.2em] text-[8px] uppercase mb-4">{post.category}</div>
                <h3 className="text-lg font-light text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 tracking-widest uppercase">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-10 py-4 border border-slate-900 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all">
              Load Previous Briefs
            </button>
          </div>
        </div>
      </section>

      {/* --- REFINED PARTNERSHIP CTA (Split Design) --- */}
      <section className="bg-[#050A10] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 py-24 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-cyan-500"></div>
                <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">Strategic Alignment</span>
              </div>
              <h2 className="text-3xl font-light text-white mb-8 tracking-tight">
                Request a Custom <br /> Industry Briefing.
              </h2>
              <form className="flex gap-4 max-w-md">
                <input 
                  type="email" 
                  placeholder="CORPORATE EMAIL" 
                  className="flex-1 bg-transparent border-b border-white/20 py-3 text-[10px] tracking-widest text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="text-white hover:text-cyan-500 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 py-24 lg:pl-16 flex flex-col justify-center">
               <div className="grid grid-cols-2 gap-12 text-slate-500 text-[10px] font-light leading-relaxed uppercase tracking-[0.2em]">
                 <div>
                   <p className="text-white mb-2">Global HQ</p>
                   <p>601 Lexington Avenue<br />New York, NY 10022</p>
                 </div>
                 <div>
                   <p className="text-white mb-2">Technical Hub</p>
                   <p>25 Cabot Square<br />London E14 4QA</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}