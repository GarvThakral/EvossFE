import { useState } from 'react';
import { CheckCircle, Calendar, Send } from 'lucide-react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { usePageConfig } from '../hooks/usePageConfig';

const ICONS = {
  Linkedin,
  Twitter,
  Github,
} as const;
type IconName = keyof typeof ICONS;

const DEFAULT_GET_STARTED_CONFIG = {
  hero: {
    title: 'Start Your Project Today',
    description:
      "Tell us about your project and we'll connect you with the right team to bring your vision to life. No commitment required.",
    badges: ['Free consultation', '24-hour response', 'No obligation'],
  },
  form: {
    title: 'Project Inquiry Form',
    description: 'Share your project details and requirements.',
    projectTypes: [
      { label: 'Mobile App Development', value: 'mobile' },
      { label: 'Computer Vision Solution', value: 'computer-vision' },
      { label: 'Product R&D Services', value: 'product-rd' },
      { label: 'Enterprise Consulting', value: 'consulting' },
      { label: 'Other', value: 'other' },
    ],
    timelineOptions: [
      { label: 'Immediate (1-2 weeks)', value: 'immediate' },
      { label: 'Short-term (1-3 months)', value: 'short' },
      { label: 'Medium-term (3-6 months)', value: 'medium' },
      { label: 'Long-term (6+ months)', value: 'long' },
    ],
    budgetOptions: [
      { label: '$10,000 - $25,000', value: '10-25k' },
      { label: '$25,000 - $50,000', value: '25-50k' },
      { label: '$50,000 - $100,000', value: '50-100k' },
      { label: '$100,000+', value: '100k+' },
    ],
  },
  nextSteps: {
    heading: 'What Happens Next?',
    description: 'Our streamlined process ensures you get the support you need, when you need it.',
    steps: [
      {
        step: '1',
        title: 'Submit Your Request',
        description: 'Fill out the form with your project details and requirements.',
      },
      {
        step: '2',
        title: 'Initial Consultation',
        description: "We'll review your submission and schedule a call within 24 hours.",
      },
      {
        step: '3',
        title: 'Proposal & Planning',
        description:
          'Receive a detailed proposal with timeline, scope, and investment.',
      },
      {
        step: '4',
        title: 'Project Kickoff',
        description:
          'Once approved, we begin work with your dedicated project team.',
      },
    ],
  },
  contact: {
    heading: 'Prefer to Talk Directly?',
    description: 'Our team is available Monday through Friday, 9 AM - 6 PM EST',
    email: 'hello@evossglobal.com',
    phone: '+1 (555) 123-4567',
  },
  about: {
    heading: 'A Decade of Innovation & Excellence',
    paragraphs: [
      'Founded in 2014 by CEO Srinivas Varadarajan, EvoSS Global has evolved from a visionary startup into a global leader in enterprise software solutions. Our journey is defined by unwavering commitment to client success and technological innovation.',
      'We serve Fortune 500 companies, high-growth startups, and government agencies across 25+ countries. Our customer-first, partner-powered, technology-enabled approach has helped organizations transform their digital infrastructure and achieve measurable business outcomes.',
    ],
    stats: [
      { value: '98%', label: 'Client Satisfaction Rate' },
      { value: '$2B+', label: 'Client Value Delivered' },
    ],
    socials: [
      { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
      { label: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
      { label: 'GitHub', url: 'https://github.com', icon: 'Github' },
    ],
  },
  support: {
    title: 'Business Hours & Support',
    items: [
      { title: 'Business Hours', details: ['Monday - Friday', '9:00 AM - 6:00 PM EST'] },
      { title: 'Enterprise Support', details: ['24/7 Support Available', 'support@evossglobal.com'] },
      { title: 'Emergency Hotline', details: ['For Critical Issues', '+1 (817) 555-0199'] },
    ],
  },
};

export function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
  });

  const config = usePageConfig('get-started', DEFAULT_GET_STARTED_CONFIG);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{config.hero.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{config.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-6 text-sm justify-center">
              {config.hero.badges.map((badge) => (
                <div key={badge} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#3BA5C8]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">{config.form.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name *"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <FormField
                  label="Email Address *"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Company Name *"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                />
                <FormField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <SelectField
                label="Project Type *"
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                options={config.form.projectTypes}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <SelectField
                  label="Expected Timeline *"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  options={config.form.timelineOptions}
                />
                <SelectField
                  label="Budget Range *"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  options={config.form.budgetOptions}
                />
              </div>

              <TextareaField
                label="Project Description *"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                required
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-[#3BA5C8] hover:bg-[#2C8EAD] text-white rounded-lg transition-colors font-semibold text-lg"
                >
                  <Send className="mr-2" size={20} />
                  Submit Project Request
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-[#3BA5C8] text-gray-700 hover:text-[#3BA5C8] rounded-lg transition-all font-semibold text-lg"
                >
                  <Calendar className="mr-2" size={20} />
                  Schedule Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">{config.nextSteps.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.nextSteps.description}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {config.nextSteps.steps.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3BA5C8] text-white rounded-full text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < config.nextSteps.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#3BA5C8]/20" style={{ zIndex: -1 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{config.contact.heading}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{config.contact.description}</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div>
              <p className="text-gray-400 text-sm mb-2">Email us at</p>
              <a
                href={`mailto:${config.contact.email}`}
                className="text-2xl font-semibold text-[#3BA5C8] hover:text-cyan-300"
              >
                {config.contact.email}
              </a>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-700"></div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Call us at</p>
              <a
                href={`tel:${config.contact.phone.replace(/[^+\d]/g, '')}`}
                className="text-2xl font-semibold text-[#3BA5C8] hover:text-cyan-300"
              >
                {config.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#3BA5C8]/20 rounded-full text-[#3BA5C8] font-semibold mb-6">
                About EvoSS Global
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{config.about.heading}</h2>
              {config.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {config.about.stats.map((metric) => (
                  <div key={metric.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-[#3BA5C8] mb-2">{metric.value}</div>
                    <div className="text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {config.about.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors border border-white/20"
                  >
                    {renderIcon(social.icon as IconName, 'w-5 h-5')}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3BA5C8] to-[#2C8EAD] rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTczNjQ0OTAwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="EvoSS Global Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {config.support.items.map((item) => (
              <div key={item.title}>
                <div className="text-[#3BA5C8] mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-[#2C3E50] mb-2">{item.title}</h3>
                {item.details.map((line) => (
                  <p key={line} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  type = 'text',
}: {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BA5C8] focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BA5C8] focus:border-transparent"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 6,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BA5C8] focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}
