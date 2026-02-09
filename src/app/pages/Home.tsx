import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';

const DEFAULT_HOME_CONFIG = {
  hero: {
    eyebrow: "ESTABLISHED 2014",
    title: "Solving Complex Challenges Through Strategic Intelligence.",
    subtitle: "We partner with global enterprises to navigate the intersection of technology and human-centric design.",
    primaryCta: { label: 'Inquire Now', href: '/get-started' },
    secondaryCta: { label: 'Our Capabilities', href: '/services' },
  },
  sectors: {
    kicker: 'Focus Sectors',
    titleLines: ['Deep Industry', 'Expertise.'],
    description:
      "We don't just provide technology; we provide the domain-specific intelligence required to lead in a complex global market.",
    items: [
      {
        name: 'Financial Services',
        id: 'FS',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000',
        description: 'Algorithmic trading, secure banking infrastructure, and fintech evolution.',
      },
      {
        name: 'Healthcare',
        id: 'HC',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
        description: 'Precision medicine, digital health platforms, and HIPAA-compliant AI.',
      },
      {
        name: 'Manufacturing',
        id: 'MF',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000',
        description: 'Industry 4.0, predictive maintenance, and supply chain automation.',
      },
      {
        name: 'Government',
        id: 'GV',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000',
        description: 'Public sector modernization and secure citizen engagement portals.',
      },
      {
        name: 'Retail & E-commerce',
        id: 'RT',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
        description: 'Omnichannel logistics and hyper-personalized customer journeys.',
      },
      {
        name: 'Education',
        id: 'ED',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000',
        description: 'LMS ecosystems and AI-driven personalized learning paths.',
      },
    ],
  },
  servicesCarousel: {
    heading: 'Expertise & Innovation',
    linkLabel: 'Explore Perspective',
    linkHref: '/services',
    items: [
      {
        id: '01',
        title: 'Mobile Architecture',
        description: 'Engineering scalable, secure, and intuitive mobile ecosystems for the modern enterprise.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
      },
      {
        id: '02',
        title: 'Vision & AI Systems',
        description: 'Harnessing neural networks and computer vision to automate high-stakes decision making.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
      },
      {
        id: '03',
        title: 'Product Engineering',
        description: 'Rapid R&D and deployment of proprietary software solutions that define market leadership.',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000',
      },
    ],
  },
  metrics: {
    items: [
      { value: '200+', label: 'ENGAGEMENTS' },
      { value: '50+', label: 'GLOBAL ENTITIES' },
      { value: '12', label: 'YEARS OF ALPHA' },
      { value: '95%', label: 'RETENTION RATE' },
    ],
  },
  assets: {
    kicker: 'Intellectual Property',
    title: 'Proprietary Assets',
    description:
      'Our internal R&D lab develops high-performance accelerators designed to compress transformation timelines for our enterprise partners.',
    badgeLabel: 'Core Asset',
    linkLabel: 'Technical Specs',
    linkHref: '/products',
    items: [
      {
        name: 'AppExe',
        tagline: 'Rapid Deployment Framework',
        description:
          'An enterprise-grade, zero-programming architecture that allows for the instantaneous deployment of cross-platform mobile ecosystems.',
        features: ['Stateless Architecture', 'Biometric Integration', 'Legacy Sync'],
        image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=2000',
        id: '01',
      },
      {
        name: 'UncannyCV',
        tagline: 'Computer Vision Suite',
        description:
          'A proprietary neural network engine optimized for real-time object detection and spatial analysis in high-security environments.',
        features: ['99.9% Inference Accuracy', 'Edge Computing Ready', 'Sub-10ms Latency'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000',
        id: '02',
      },
      {
        name: 'SmartDocs',
        tagline: 'Cognitive Document Processing',
        description:
          'Advanced OCR and NLP pipeline that transforms unstructured regulatory data into actionable business intelligence.',
        features: ['ISO 27001 Compliant', 'Automated Classification', 'Audit-Ready Logs'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
        id: '03',
      },
    ],
  },
  finalCta: {
    heading: 'Ready to redefine your digital trajectory?',
    buttonLabel: 'Initiate Consultation',
    buttonHref: '/contact',
    locations: ['New York', 'London', 'Singapore'],
  },
};

export function Home() {
  const config = usePageConfig('home', DEFAULT_HOME_CONFIG);

  const [activeService, setActiveService] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const carouselCount = useMemo(() => Math.max(1, config.servicesCarousel.items.length), [config.servicesCarousel.items.length]);
  const nextService = () => setActiveService((prev) => (prev + 1) % carouselCount);
  const prevService = () => setActiveService((prev) => (prev - 1 + carouselCount) % carouselCount);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050A10]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-cyan-500"></div>
              <span className="text-cyan-500 tracking-[0.3em] text-xs font-bold uppercase">{config.hero.eyebrow}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light text-white leading-[1.1] mb-10 tracking-tight">
              {config.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to={config.hero.primaryCta.href} className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all">
                {config.hero.primaryCta.label}
              </Link>
              <Link to={config.hero.secondaryCta.href} className="border border-white/20 hover:border-white text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all">
                {config.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent"></div>
      </section>

      {/* --- INDUSTRY GRID (Deloitte Style) --- */}
      <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Image Layer - Transitions based on hover */}
      <div className="absolute inset-0 opacity-40 transition-opacity duration-700">
        {config.sectors.items.map((sector, index) => (
          <img
            key={sector.id}
            src={sector.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              hoveredIndex === index ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
	          {/* Left Side: Editorial Text */}
	          <div className="lg:w-1/3 pt-12">
	            <div className="h-[1px] w-12 bg-cyan-500 mb-6"></div>
	            <p className="text-[10px] tracking-[0.5em] text-cyan-500 uppercase font-bold mb-4">{config.sectors.kicker}</p>
	            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
	              {config.sectors.titleLines[0]} <br /> {config.sectors.titleLines[1]}
	            </h2>
	            <p className="text-slate-400 font-light leading-relaxed">
	              {config.sectors.description}
	            </p>
	          </div>

	          {/* Right Side: Interactive List */}
	          <div className="lg:w-2/3 w-full">
	            <div className="border-t border-white/20">
	              {config.sectors.items.map((sector, index) => (
	                <div
	                  key={sector.id}
	                  onMouseEnter={() => setHoveredIndex(index)}
	                  className="group relative flex items-center justify-between py-8 border-b border-white/10 cursor-pointer overflow-hidden"
                >
                  <div className="flex items-baseline gap-8 transition-transform duration-500 group-hover:translate-x-4">
                    <span className={`font-mono text-xs transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-cyan-500' : 'text-slate-600'
                    }`}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-white' : 'text-slate-500'
                      }`}>
                        {sector.name}
                      </h3>
                      <div className={`mt-2 max-w-sm text-sm text-slate-400 overflow-hidden transition-all duration-500 ${
                        hoveredIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {sector.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow that appears on hover */}
                  <div className={`transition-all duration-500 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}>
                    <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                        <path d="M1 1H14M14 1V14M14 1L1 14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
      {/* --- EDITORIAL SERVICES CAROUSEL --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">{config.servicesCarousel.heading}</h2>
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>
            <div className="hidden md:flex gap-4">
              <button onClick={prevService} className="p-4 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextService} className="p-4 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative h-[600px] w-full group">
            {config.servicesCarousel.items.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-all duration-1000 flex flex-col md:flex-row gap-12 ${
                  index === activeService ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
                }`}
              >
                <div className="w-full md:w-1/2 h-full overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="text-6xl font-bold text-slate-100 mb-4">{service.id}</span>
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-xl text-slate-500 leading-relaxed mb-10">{service.description}</p>
                  <Link to={config.servicesCarousel.linkHref} className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase hover:text-cyan-600 transition-colors group/link">
                    {config.servicesCarousel.linkLabel} <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METRICS (High Contrast) --- */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            {config.metrics.items.map((m, i) => (
              <div key={m.label} className={`md:px-12 ${i !== 0 ? 'md:border-l border-white/10' : ''}`}>
                <div className="text-5xl font-light mb-4">{m.value}</div>
                <div className="text-[10px] tracking-[0.3em] text-slate-500 font-bold uppercase">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE (Modern Alternating) --- */}
      /* --- PROPRIETARY ASSETS (The "Monolith" Showcase) --- */
<section className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-slate-900/10 pb-12">
      <div>
        <p className="text-[10px] tracking-[0.5em] text-cyan-600 uppercase font-bold mb-4">{config.assets.kicker}</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900">{config.assets.title}</h2>
      </div>
      <p className="max-w-md text-slate-500 font-light mt-4 md:mt-0">
        {config.assets.description}
      </p>
    </div>

    <div className="space-y-40">
      {config.assets.items.map((product, idx) => (
        <div key={product.name} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <div className="w-full lg:w-3/5 relative group">
            <div className="absolute -inset-4 bg-slate-100 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 -z-10" />
            <div className="overflow-hidden shadow-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
              />
            </div>
            {/* Floating Index Number */}
            <div className={`absolute top-10 ${idx % 2 === 1 ? '-right-10' : '-left-10'} hidden xl:block`}>
              <span className="text-[120px] font-bold text-slate-900/5 leading-none select-none">{product.id}</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-2/5">
            <div className="inline-block px-3 py-1 border border-cyan-600 text-cyan-600 text-[10px] uppercase tracking-widest font-bold mb-6">
              {config.assets.badgeLabel}
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">{product.name}</h3>
            <p className="text-xl text-slate-400 font-light mb-8 italic">{product.tagline}</p>
            <p className="text-slate-600 leading-relaxed mb-10 font-light text-lg">
              {product.description}
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-10">
              {product.features.map(feature => (
                <div key={feature} className="flex items-center gap-3 group/feat">
                  <div className="h-[1px] w-6 bg-cyan-500 group-hover/feat:w-10 transition-all" />
                  <span className="text-sm font-semibold tracking-wide text-slate-800 uppercase">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              to={config.assets.linkHref} 
              className="group flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-slate-900"
            >
              {config.assets.linkLabel}
              <span className="w-12 h-[1px] bg-slate-900 group-hover:w-20 transition-all" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-light mb-10 leading-tight">{config.finalCta.heading}</h2>
          <Link to={config.finalCta.buttonHref} className="inline-block border-2 border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-slate-900 px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all">
            {config.finalCta.buttonLabel}
          </Link>
          <div className="mt-12 flex justify-center gap-8 text-[10px] tracking-widest text-slate-400 font-bold uppercase">
            {config.finalCta.locations.map((location, index) => (
              <React.Fragment key={location}>
                {index !== 0 ? <span>•</span> : null}
                <span>{location}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
