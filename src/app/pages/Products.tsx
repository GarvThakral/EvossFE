import React from 'react';
import { Link } from 'react-router-dom';
import { usePageConfig } from '../hooks/usePageConfig';

const DEFAULT_PRODUCTS_CONFIG = {
  hero: {
    kicker: 'Technical Portfolio',
    titleLines: ['Proprietary Assets &', 'Technical Accelerators.'],
    subtitle:
      'Advanced frameworks designed to compress digital transformation timelines for global entities.',
  },
  products: [
    {
      name: 'AppExe',
      id: '01',
      tagline: 'Enterprise Mobility Engine',
      description:
        'A zero-latency, no-code architecture designed for the rapid deployment of mission-critical mobile ecosystems. AppExe bypasses traditional development bottlenecks.',
      features: ['Biometric Auth', 'Stateless Architecture', 'Legacy Sync'],
      metric: '60% TTM Reduction',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1200',
      ctaLabel: 'View Specs',
      ctaHref: '/contact',
      metricLabel: 'Target Yield',
    },
    {
      name: 'UncannyCV',
      id: '02',
      tagline: 'Cognitive Vision Intelligence',
      description:
        'State-of-the-art computer vision models optimized for industrial-grade accuracy. UncannyCV provides the neural framework for spatial analysis.',
      features: ['Sub-10ms Inference', 'Custom Training', 'Edge-Compatible'],
      metric: '99.9% Accuracy',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
      ctaLabel: 'View Specs',
      ctaHref: '/contact',
      metricLabel: 'Target Yield',
    },
  ],
  inquiry: {
    kicker: 'Strategic Alignment',
    headingLines: ['Initiate a', 'High-Stakes Partnership.'],
    description:
      'Beyond our proprietary assets, we provide the advisory intelligence required to navigate complex technical transitions. Let’s discuss your organization’s specific trajectory.',
    buttonLabel: 'Schedule Consultation',
    buttonHref: '/contact',
    regions: [
      {
        title: 'Americas',
        addressLines: ['601 Lexington Avenue', 'New York, NY 10022'],
        email: 'ny.office@firm.com',
      },
      {
        title: 'EMEA',
        addressLines: ['25 Cabot Square', 'London E14 4QA'],
        email: 'ldn.office@firm.com',
      },
    ],
    footerText: '© 2026 Global Intelligence Group',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
};

export function Products() {
  const config = usePageConfig('products', DEFAULT_PRODUCTS_CONFIG);

  return (
    <div className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* --- REFINED HERO (Smaller, cleaner) --- */}
      <section className="relative pt-40 pb-32 bg-[#050A10] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500"></div>
                <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">{config.hero.kicker}</span>
              </div>
              {/* Reduced from 8xl to 5xl/6xl */}
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.15] mb-8">
                {config.hero.titleLines[0]} <br /> {config.hero.titleLines[1]}
              </h1>
            </div>
            <div className="max-w-[280px] border-l border-white/10 pl-6 mt-2">
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {config.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE (Tighter layout) --- */}
      {config.products.map((product, idx) => (
        <section key={product.name} className={`py-40 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row gap-24 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Column - Controlled height */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden border border-slate-200">
                  <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 font-mono text-[9px] tracking-widest">
                    ID // {product.id}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-[450px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" 
                  />
                </div>
              </div>

              {/* Text Column - More whitespace, smaller fonts */}
              <div className="w-full lg:w-1/2 pt-4">
                <p className="text-cyan-600 font-bold tracking-[0.3em] text-[9px] uppercase mb-4">
                  {product.tagline}
                </p>
                <h2 className="text-3xl font-light text-slate-900 mb-6 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-base text-slate-500 font-light leading-relaxed mb-10 max-w-md">
                  {product.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 border-t border-slate-100 pt-8">
                  {product.features.map(feat => (
                    <div key={feat} className="flex items-center gap-2">
                      <div className="h-[1px] w-3 bg-cyan-500" />
                      <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <Link to={product.ctaHref} className="border border-slate-900 px-8 py-4 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all">
                    {product.ctaLabel}
                  </Link>
                  <div className="h-[1px] flex-grow bg-slate-100"></div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-900">{product.metric}</p>
                    <p className="text-[8px] text-slate-400 uppercase tracking-widest">{product.metricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* --- REFINED CTA (Compressed) --- */}
{/* --- STRATEGIC INQUIRY (Replaces Ready to Integrate) --- */}
<section className="bg-[#050A10] border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row">
      
      {/* Left Pane: The Partnership Invitation */}
      <div className="lg:w-1/2 py-24 lg:py-32 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-cyan-500"></div>
          <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">{config.inquiry.kicker}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight leading-tight">
          {config.inquiry.headingLines[0]} <br /> {config.inquiry.headingLines[1]}
        </h2>
        <p className="text-slate-400 text-sm font-light leading-relaxed mb-10 max-w-md">
          {config.inquiry.description}
        </p>
        <Link to={config.inquiry.buttonHref} className="inline-block bg-white text-slate-900 px-10 py-4 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-cyan-500 hover:text-white transition-all">
          {config.inquiry.buttonLabel}
        </Link>
      </div>

      {/* Right Pane: Global Presence / Office Detail */}
      <div className="lg:w-1/2 py-24 lg:py-32 lg:pl-16 flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-12">
          {config.inquiry.regions.map((region) => (
            <div key={region.title}>
              <p className="text-white text-[10px] font-bold tracking-widest uppercase mb-4">{region.title}</p>
              <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                {region.addressLines.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <span className="text-slate-300">{region.email}</span>
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-[9px] text-slate-600 tracking-[0.2em] uppercase">{config.inquiry.footerText}</p>
          <div className="flex gap-6">
            {config.inquiry.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-white text-[9px] uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}
