import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';
import './home-hero.css';
import { DEFAULT_HOME_CONFIG, type HomeConfig } from './homeConfig';

type HomeHeroConfig = HomeConfig['hero'];
type HomeMetric = HomeConfig['metrics']['items'][number];

function useCounter(target: string, duration = 1800, start = false) {
  const [value, setValue] = useState('0');

  useEffect(() => {
    if (!start) {
      setValue('0');
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;
    const numeric = parseFloat(target);
    const suffix = target.replace(/[0-9.]/g, '');

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(`${Math.floor(eased * numeric)}${suffix}`);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, start, target]);

  return value;
}

function HeroStatItem({
  value,
  label,
  started,
  delay,
}: {
  value: string;
  label: string;
  started: boolean;
  delay: number;
}) {
  const counted = useCounter(value, 1600, started);

  return (
    <div
      className={`home-hero-stat-item ${started ? 'animate-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="home-hero-stat-value">{started ? counted : '0'}</span>
      <span className="home-hero-stat-label">{label}</span>
    </div>
  );
}

function HomeHero({
  hero,
  metrics,
}: {
  hero: HomeHeroConfig;
  metrics: HomeMetric[];
}) {
  const [statsStarted, setStatsStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const element = statsRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="home-hero-root">
      <div className="home-hero-diagonal" />
      <div className="home-hero-orb" />
      <div className="home-hero-orb-secondary" />
      <div className="home-hero-dots" />

      <div className="home-hero-ticker">
        <div className="home-hero-ticker-line" />
        <span className="home-hero-ticker-text">{hero.tickerText}</span>
      </div>

      <div className="home-hero-content">
        <div className="home-hero-topbar">
          <div className="home-hero-pill">
            <div className="home-hero-pill-dot" />
            {hero.statusPill}
          </div>
        </div>

        <div className={`home-hero-eyebrow ${loaded ? 'visible' : ''}`}>
          <div className="home-hero-eyebrow-line" />
          <span className="home-hero-eyebrow-text">{hero.eyebrow}</span>
        </div>

        <h1 className={`home-hero-headline ${loaded ? 'visible' : ''}`}>
          {hero.titleLineOne}
          <span className="home-hero-headline-accent">{hero.titleAccent}</span>
          <em> {hero.titleEmphasis}</em>
          <br />
          {hero.titleLineTwo}
        </h1>

        <p className={`home-hero-subtitle ${loaded ? 'visible' : ''}`}>{hero.subtitle}</p>

        <div className={`home-hero-cta-row ${loaded ? 'visible' : ''}`}>
          <Link to={hero.primaryCta.href} className="home-hero-cta-primary">
            {hero.primaryCta.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="#05090f"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="home-hero-cta-divider" />
          <Link to={hero.secondaryCta.href} className="home-hero-cta-secondary">
            {hero.secondaryCta.label}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M1 6h10M6 1l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className={`home-hero-badge ${loaded ? 'visible' : ''}`}>
          <div className="home-hero-badge-ring">
            <div className="home-hero-badge-inner">
              <div className="home-hero-badge-value">{hero.badgeValue}</div>
              <div className="home-hero-badge-label">{hero.badgeLabel}</div>
            </div>
          </div>
          <span className="home-hero-badge-tag">{hero.badgeTag}</span>
        </div>
      </div>

      <div className="home-hero-stats" ref={statsRef}>
        {metrics.map((metric, index) => (
          <HeroStatItem
            key={metric.label}
            value={metric.value}
            label={metric.label}
            started={statsStarted}
            delay={index * 120}
          />
        ))}
      </div>
    </section>
  );
}

export function Home() {
  const config = usePageConfig('home', DEFAULT_HOME_CONFIG);

  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <HomeHero hero={config.hero} metrics={config.metrics.items} />

      {/* --- INDUSTRY GRID (Deloitte Style) --- */}
      <section className="relative overflow-hidden bg-[#f5f4f0] py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0b1624] via-[#56697d]/20 to-transparent" />
      {/* Background Image Layer - Transitions based on hover */}
      <div className="absolute inset-0 opacity-18 transition-opacity duration-700 mix-blend-multiply">
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,244,240,0.98)_0%,rgba(245,244,240,0.95)_38%,rgba(245,244,240,0.82)_68%,rgba(245,244,240,0.58)_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
	          {/* Left Side: Editorial Text */}
	          <div className="lg:w-1/3 pt-12">
	            <div className="h-[1px] w-12 bg-cyan-500 mb-6"></div>
	            <p className="text-[10px] tracking-[0.5em] text-cyan-500 uppercase font-bold mb-4">{config.sectors.kicker}</p>
	            <h2 className="text-4xl md:text-5xl font-light text-slate-950 leading-tight mb-8">
	              {config.sectors.titleLines[0]} <br /> {config.sectors.titleLines[1]}
	            </h2>
	            <p className="text-slate-600 font-light leading-relaxed">
	              {config.sectors.description}
	            </p>
	          </div>

	          {/* Right Side: Interactive List */}
	          <div className="lg:w-2/3 w-full">
	            <div className="border-t border-slate-300/70">
	              {config.sectors.items.map((sector, index) => (
	                <div
	                  key={sector.id}
	                  onMouseEnter={() => setHoveredIndex(index)}
	                  className="group relative flex items-center justify-between overflow-hidden border-b border-slate-300/60 py-8 cursor-pointer"
                >
                  <div className="flex items-baseline gap-8 transition-transform duration-500 group-hover:translate-x-4">
                    <span className={`font-mono text-xs transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-cyan-600' : 'text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-slate-950' : 'text-slate-500'
                      }`}>
                        {sector.name}
                      </h3>
                      <div className={`mt-2 max-w-sm overflow-hidden text-sm text-slate-500 transition-all duration-500 ${
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/20 text-slate-900 transition-colors hover:bg-slate-900 hover:text-white">
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
      {/* --- EDITORIAL SERVICES GRID --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">{config.servicesCarousel.heading}</h2>
              {config.servicesCarousel.description ? (
                <p className="text-slate-500 font-light leading-relaxed mb-6">{config.servicesCarousel.description}</p>
              ) : null}
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {config.servicesCarousel.items.map((service) => (
              <article
                key={service.id}
                className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 border border-white/25 bg-slate-900/50 px-3 py-1 text-[10px] font-bold tracking-[0.3em] text-white backdrop-blur-[2px]">
                    {service.id}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-8 flex-1 text-base font-light leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <Link
                    to={config.servicesCarousel.linkHref}
                    className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-colors hover:text-cyan-600 group/link"
                  >
                    {config.servicesCarousel.linkLabel}
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE (Modern Alternating) --- */}

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
  
