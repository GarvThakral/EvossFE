import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';

const DEFAULT_SERVICES_CONFIG = {
  hero: {
    kicker: 'Our Capabilities',
    titleLines: ['Enterprise', 'Technology Services.'],
    subtitle:
      "Navigating the intersection of strategic intelligence and technical execution for the world's leading organizations.",
  },
  services: [
    {
      id: '01',
      category: 'Digital Transformation',
      title: 'Mobile Architecture & Ecosystems',
      description:
        'Engineering scalable, secure mobile ecosystems for the global enterprise. We specialize in cross-platform deployment and legacy system integration.',
      features: ['Native Swift/Kotlin Engineering', 'Cross-Platform Architecture', 'Mobile Backend & API Sync'],
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?auto=format&fit=crop&q=80&w=1200',
      ctaLabel: 'Inquire for Specs',
      ctaHref: '/contact',
    },
    {
      id: '02',
      category: 'Applied Intelligence',
      title: 'Computer Vision & AI Systems',
      description:
        'Harnessing neural networks to automate high-stakes decision making. Our proprietary models are optimized for real-time inference and accuracy.',
      features: ['Neural Object Detection', 'Cognitive Document Analysis', 'Video Analytics at Scale'],
      image: 'https://images.unsplash.com/photo-1649877508777-1554357604eb?auto=format&fit=crop&q=80&w=1200',
      ctaLabel: 'Inquire for Specs',
      ctaHref: '/contact',
    },
    {
      id: '03',
      category: 'Product Strategy',
      title: 'Corporate R&D & Prototyping',
      description:
        'Bridging the gap between conceptualization and market leadership. We deliver rapid R&D cycles that validate complex business hypotheses.',
      features: ['UX/UI Systems Design', 'MVP Rapid Deployment', 'Scalable Cloud Architecture'],
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?auto=format&fit=crop&q=80&w=1200',
      ctaLabel: 'Inquire for Specs',
      ctaHref: '/contact',
    },
  ],
  engagement: {
    heading: 'The Engagement Model',
    steps: [
      { step: '01', title: 'Discovery', desc: 'Understanding mission-critical objectives.' },
      { step: '02', title: 'Strategy', desc: 'Tailoring proprietary roadmap.' },
      { step: '03', title: 'Execution', desc: 'Engineering and technical deployment.' },
      { step: '04', title: 'QA', desc: 'Validation and security auditing.' },
      { step: '05', title: 'Support', desc: 'Long-term ecosystem optimization.' },
    ],
  },
  capabilities: {
    kicker: 'Core Stack',
    heading: 'Infrastructure & Compliance',
    items: [
      'Cloud Architecture',
      'Microservices',
      'DevOps CI/CD',
      'API Integration',
      'Data Analytics',
      'ISO Compliance',
      'Blockchain',
      'IoT Solutions',
    ],
  },
  cta: {
    heading: 'Secure your technical advantage.',
    buttonLabel: 'Initiate Project',
    buttonHref: '/get-started',
  },
};

export function Services() {
  const config = usePageConfig('services', DEFAULT_SERVICES_CONFIG);

  return (
    <div className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#050A10] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-cyan-500"></div>
                <span className="text-cyan-500 tracking-[0.3em] text-[10px] font-bold uppercase">{config.hero.kicker}</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-light leading-[1.1] tracking-tight mb-8">
                {config.hero.titleLines[0]} <br /> {config.hero.titleLines[1]}
              </h1>
            </div>
            <div className="max-w-sm pb-4">
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                {config.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN SERVICES (The "Spec Sheet" Layout) --- */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-40">
            {config.services.map((service) => (
              <div key={service.id} className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Identifier */}
                <div className="lg:col-span-1">
                  <span className="text-5xl font-bold text-slate-100 block sticky top-32 leading-none">
                    {service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <p className="text-[10px] tracking-[0.3em] text-cyan-600 font-bold uppercase mb-4">{service.category}</p>
                  <h2 className="text-4xl font-light mb-8 text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-500 font-light leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {service.features.map(feat => (
                      <div key={feat} className="flex items-center gap-4 group">
                        <div className="h-[1px] w-6 bg-slate-300 transition-all group-hover:w-10 group-hover:bg-cyan-500" />
                        <span className="text-sm font-semibold tracking-tight text-slate-700 uppercase">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.ctaHref} className="inline-flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-slate-900 hover:text-cyan-600 transition-colors group">
                    {service.ctaLabel} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Image */}
                <div className="lg:col-span-6">
                  <div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-100">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP MODEL (Process) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-4">{config.engagement.heading}</h2>
            <div className="h-1 w-20 bg-slate-900"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
            {config.engagement.steps.map((item) => (
              <div key={item.step} className="bg-white p-10 hover:bg-slate-50 transition-colors">
                <span className="text-xs font-mono text-cyan-600 block mb-6">{item.step}</span>
                <h3 className="font-bold text-slate-900 mb-4 tracking-tight uppercase text-sm">{item.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL CAPABILITIES (Grid) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-20">
            <p className="text-[10px] tracking-[0.5em] text-slate-400 uppercase font-bold mb-4">{config.capabilities.kicker}</p>
            <h2 className="text-4xl font-light text-slate-900">{config.capabilities.heading}</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-100">
          {config.capabilities.items.map((cap) => (
            <div key={cap} className="border-r border-b border-slate-100 p-8 hover:bg-slate-900 group transition-all">
              <span className="text-slate-600 group-hover:text-white text-sm font-medium transition-colors uppercase tracking-widest">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 bg-[#050A10] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight">{config.cta.heading}</h2>
          <Link to={config.cta.buttonHref} className="inline-block border border-white text-white hover:bg-white hover:text-black px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all">
            {config.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
