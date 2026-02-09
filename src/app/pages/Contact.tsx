import React from 'react';
import { ArrowRight, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';

const DEFAULT_CONTACT_CONFIG = {
  hero: {
    kicker: 'Engagement Portal',
    titleLines: ['Initiate a Strategic', 'Consultation.'],
    subtitle:
      'Our enterprise solutions team is prepared to analyze your technical requirements and provide a bespoke transformation roadmap.',
  },
  intake: {
    form: {
      title: 'Project Briefing',
      subtitle: 'Mandatory Information Required',
      inputs: {
        name: { label: 'Full Name', placeholder: 'e.g. Alexander Vance' },
        email: { label: 'Corporate Email', placeholder: 'vance@enterprise.com', type: 'email' },
        organization: { label: 'Organization', placeholder: 'Company Name' },
      },
      industry: {
        label: 'Industry Sector',
        options: ['Financial Services', 'Healthcare Systems', 'Global Logistics', 'Sovereign Technology'],
      },
      objectives: {
        label: 'Brief Description of Objectives',
        placeholder: 'Describe the scope of your technical requirement...',
      },
      submitLabel: 'Submit for Review',
    },
    sidebar: {
      supportHeading: 'Technical Support',
      email: 'enterprise@evossglobal.com',
      phone: '+1 (817) 555-0100',
      hqHeading: 'Global Headquarters',
      hqLines: ['123 Technology Plaza', 'Fort Worth, TX 76102', 'United States'],
      socialHeading: 'Social Intelligence',
      socials: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Twitter', href: '#' },
      ],
      metaLines: ['Response latency: < 24 Hours', 'Operational Hours: 09:00 - 18:00 EST'],
    },
  },
  nodes: {
    heading: 'Global Nodes',
    items: [
      { city: 'Austin', type: 'Innovation Center', country: 'USA' },
      { city: 'London', type: 'EMEA Operations', country: 'UK' },
      { city: 'Bangalore', type: 'Technical Hub', country: 'India' },
    ],
  },
};

export function Contact() {
  const config = usePageConfig('contact', DEFAULT_CONTACT_CONFIG);

  return (
    <div className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* --- MINIMAL HERO --- */}
      <section className="relative pt-40 pb-20 bg-[#050A10] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-cyan-500"></div>
              <span className="text-cyan-500 tracking-[0.4em] text-[9px] font-bold uppercase">{config.hero.kicker}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-8">
              {config.hero.titleLines[0]} <br /> {config.hero.titleLines[1]}
            </h1>
            <p className="text-slate-400 text-base font-light leading-relaxed max-w-md">
              {config.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* --- SPLIT INTAKE SECTION --- */}
      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-px bg-slate-100">
            
            {/* Left Column: Briefing Form */}
            <div className="lg:w-3/5 bg-white py-24 lg:pr-20">
              <div className="mb-12">
                <h2 className="text-2xl font-light tracking-tight mb-2 text-slate-900">{config.intake.form.title}</h2>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">{config.intake.form.subtitle}</p>
              </div>

              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <ContactInput label={config.intake.form.inputs.name.label} placeholder={config.intake.form.inputs.name.placeholder} />
                  <ContactInput
                    label={config.intake.form.inputs.email.label}
                    placeholder={config.intake.form.inputs.email.placeholder}
                    type={config.intake.form.inputs.email.type}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <ContactInput
                    label={config.intake.form.inputs.organization.label}
                    placeholder={config.intake.form.inputs.organization.placeholder}
                  />
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">{config.intake.form.industry.label}</label>
                    <select className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer">
                      {config.intake.form.industry.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">{config.intake.form.objectives.label}</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder={config.intake.form.objectives.placeholder}
                  />
                </div>

                <button className="group flex items-center gap-6 bg-slate-900 text-white px-12 py-5 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-cyan-600 transition-all">
                  {config.intake.form.submitLabel} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Column: Global Comms */}
            <div className="lg:w-2/5 bg-slate-50 py-24 lg:pl-20 flex flex-col justify-between">
              <div className="space-y-16">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-600 mb-6">{config.intake.sidebar.supportHeading}</h3>
                  <div className="space-y-4">
                    <p className="flex items-center gap-4 text-sm text-slate-600 font-light">
                      <Mail size={16} strokeWidth={1.5} /> {config.intake.sidebar.email}
                    </p>
                    <p className="flex items-center gap-4 text-sm text-slate-600 font-light">
                      <Phone size={16} strokeWidth={1.5} /> {config.intake.sidebar.phone}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-600 mb-6">{config.intake.sidebar.hqHeading}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {config.intake.sidebar.hqLines.map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-600 mb-6">{config.intake.sidebar.socialHeading}</h3>
                  <div className="flex gap-8">
                    <a href={config.intake.sidebar.socials[0].href} className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Linkedin size={20} strokeWidth={1.5} />
                    </a>
                    <a href={config.intake.sidebar.socials[1].href} className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Twitter size={20} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-8 border-t border-slate-200">
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
                  {config.intake.sidebar.metaLines[0]}<br />
                  {config.intake.sidebar.metaLines[1]}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- REGIONAL HUBS (The "Global Footprint" Section) --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
             <div className="h-[1px] w-12 bg-slate-900 mb-6"></div>
             <h2 className="text-3xl font-light tracking-tight text-slate-900 uppercase tracking-widest">{config.nodes.heading}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16 border-l border-slate-100 pl-8">
            {config.nodes.items.map((node) => (
              <LocationBlock key={`${node.city}-${node.type}`} city={node.city} type={node.type} country={node.country} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper Components for clean architecture */
function ContactInput({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">{label}</label>
      <input 
        type={type}
        className="w-full bg-transparent border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}

function LocationBlock({ city, type, country }: { city: string, type: string, country: string }) {
  return (
    <div className="group">
      <p className="text-cyan-600 text-[9px] font-bold uppercase tracking-widest mb-2">{type}</p>
      <h3 className="text-xl font-light text-slate-900 mb-2">{city}</h3>
      <p className="text-slate-400 text-xs font-light">{country}</p>
    </div>
  );
}
