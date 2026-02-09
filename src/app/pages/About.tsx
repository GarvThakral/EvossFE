import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Shield, Target, Zap } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import { usePageConfig } from '../hooks/usePageConfig';

const ICONS = {
  Target,
  Zap,
  Shield,
} as const;

type IconName = keyof typeof ICONS;

const renderIcon = (name?: IconName, className?: string) => {
  if (!name) return null;
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
};

const DEFAULT_ABOUT_CONFIG = {
  hero: {
    kicker: 'The Institution',
    title: 'Engineering the Next Industrial Era.',
    subtitle:
      'Since 2014, EvoSS Global has served as a critical technical partner for entities navigating the complexities of digital transformation.',
  },
  leadership: {
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Srinivas Varadarajan',
    roleLabel: 'Founder & CEO',
    name: 'Srinivas Varadarajan',
    heading: 'A Vision of Persistence',
    paragraphs: [
      'Under the leadership of Srinivas Varadarajan, EvoSS Global was built on a single premise: that enterprise software should be as intuitive as it is powerful.',
      '"Our goal was never just to build tools, but to build the digital infrastructure that allows businesses to breathe and grow without technical friction. We act as the invisible engine behind modern innovation."',
    ],
    stats: [
      { value: '12+ Years', label: 'Technical Mastery' },
      { value: 'Global Focus', label: 'Enterprise Scale' },
    ],
  },
  methodology: {
    kicker: 'Our Methodology',
    heading: 'Partner-Powered. Technology-Enabled.',
    items: [
      {
        icon: 'Target',
        title: 'Strategic Auditing',
        desc: 'We begin with a deep-tissue analysis of your existing technical architecture to identify latent inefficiencies.',
      },
      {
        icon: 'Zap',
        title: 'Rapid Prototyping',
        desc: 'Using our AppExe engine, we deploy functional MVPs in a fraction of the traditional development cycle.',
      },
      {
        icon: 'Shield',
        title: 'Global Governance',
        desc: 'Every asset we build is hardened with enterprise-grade security and compliant with international standards.',
      },
    ],
  },
  timeline: {
    kicker: 'Chronology',
    headingLines: ['The Journey', 'So Far.'],
    description:
      'A decade of compressing complex technical challenges into streamlined enterprise assets.',
    milestones: [
      {
        year: '2014',
        title: 'The Genesis',
        event:
          'EvoSS Global founded by Srinivas Varadarajan in Fort Worth, TX, with a vision to bridge the gap between legacy systems and mobile-first architecture.',
      },
      {
        year: '2017',
        title: 'Global Expansion',
        event: 'Inauguration of the London Strategic Hub. The firm expands its footprint to serve the EMEA financial sector.',
      },
      {
        year: '2020',
        title: 'AI Integration',
        event: 'Release of the UncannyCV engine. The firm shifts toward neural-network-driven document and vision analysis.',
      },
      {
        year: '2023',
        title: 'Market Leadership',
        event:
          'Recognized as a leading technical accelerator. Reached the milestone of 500+ successful enterprise deployments.',
      },
      {
        year: '2026',
        title: 'Sovereign Future',
        event:
          'EvoSS Global evolves into a Sovereign Tech powerhouse, securing digital infrastructure for global entities across 25 nations.',
      },
    ],
  },
  globalPresence: {
    kicker: 'International Footprint',
    heading: 'Operating in 25+ Sovereign Nations.',
    metrics: [
      { value: '98%', label: 'Client Retention' },
      { value: '150+', label: 'Technical Staff' },
      { value: '$2B+', label: 'Value Delivered' },
      { value: '24/7', label: 'Global Support' },
    ],
  },
  cta: {
    kicker: 'Join the Vanguard',
    heading: 'Be part of our next decade of innovation.',
    buttonLabel: 'Consult With Our Experts',
    buttonHref: '/contact',
  },
};

export function About() {
  const config = usePageConfig('about', DEFAULT_ABOUT_CONFIG);
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* --- VISIONARY HERO --- */}
      <section className="relative pt-40 pb-32 bg-[#050A10] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-cyan-500" />
              <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">
                {config.hero.kicker}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-10">
              {config.hero.title}
            </h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">{config.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* --- THE LEADERSHIP (CEO FOCUS) --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-slate-200" />
                <img
                  src={config.leadership.imageUrl}
                  alt={config.leadership.imageAlt}
                  className="w-full grayscale brightness-90 contrast-110"
                />
                <div className="absolute bottom-0 right-0 p-8 bg-white border-t border-l border-slate-100">
                  <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-slate-400 mb-1">
                    {config.leadership.roleLabel}
                  </p>
                  <p className="text-sm font-bold tracking-tight text-slate-900 uppercase">{config.leadership.name}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-8 uppercase tracking-[0.1em]">
                {config.leadership.heading}
              </h2>
              <div className="space-y-6 mb-10">
                {config.leadership.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-600 font-light leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="h-[1px] w-20 bg-slate-200 mb-8" />
              <div className="grid grid-cols-2 gap-8">
                {config.leadership.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-light text-slate-900">{stat.value}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE METHODOLOGY (The "How") --- */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-sm font-bold tracking-[0.4em] text-cyan-600 uppercase mb-4">{config.methodology.kicker}</h2>
            <p className="text-3xl font-light tracking-tight text-slate-900">{config.methodology.heading}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {config.methodology.items.map((item) => (
              <div key={item.title} className="bg-white p-12 group hover:bg-slate-50 transition-colors">
                <div className="text-cyan-500 mb-8">{renderIcon(item.icon as IconName, 'w-6 h-6')}</div>
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION --- */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Fixed Header */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-cyan-500"></div>
                  <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">
                    {config.timeline.kicker}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6 leading-tight">
                  {config.timeline.headingLines[0]} <br /> {config.timeline.headingLines[1]}
                </h2>
                <p className="text-slate-500 text-sm font-light leading-loose max-w-xs">{config.timeline.description}</p>
              </div>
            </div>

            {/* Right Column: Milestones with Signal Line */}
            <div ref={journeyRef} className="lg:w-2/3 relative">
              <div className="absolute left-0 top-0 w-[1px] h-full bg-slate-100 hidden md:block">
                <motion.div
                  className="w-full h-full bg-cyan-500 origin-top"
                  style={{ scaleY: journeyProgress }}
                />
              </div>

              <div className="space-y-32">
                {config.timeline.milestones.map((item, index) => (
                  <div key={`${item.year}-${index}`} className="relative pl-0 md:pl-16 group">
                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white border border-slate-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 transition-all duration-500 hidden md:block z-10" />

                    <div className="flex flex-col gap-4">
                      <span className="text-5xl font-light text-slate-200 group-hover:text-cyan-500/20 transition-colors duration-700">
                        {item.year}
                      </span>
                      <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-900">{item.title}</h3>
                      <p className="text-base text-slate-500 font-light leading-loose max-w-xl">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE MAPPING --- */}
      <section className="py-32 bg-[#050A10] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <Globe size={14} className="text-cyan-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-500">
              {config.globalPresence.kicker}
            </span>
          </div>
          <h2 className="text-4xl font-light tracking-tight mb-16">{config.globalPresence.heading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
            {config.globalPresence.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-light text-white mb-2">{metric.value}</p>
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-8">{config.cta.kicker}</p>
          <h2 className="text-3xl font-light text-slate-900 mb-10 leading-tight">{config.cta.heading}</h2>
          <Link
            to={config.cta.buttonHref}
            className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-cyan-600 transition-all"
          >
            {config.cta.buttonLabel} <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
