import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
  Building2,
  Users,
  Award,
  Globe,
} from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ICONS = {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
  Building2,
  Users,
  Award,
  Globe,
} as const;
type IconName = keyof typeof ICONS;

const renderIcon = (name?: IconName, className?: string) => {
  if (!name) return null;
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
};

const DEFAULT_CONTACT_CONFIG = {
  hero: {
    title: "Let's Build Something Exceptional",
    description:
      'Partner with EvoSS Global to transform your vision into reality. Our enterprise solutions team is ready to discuss your technology challenges.',
    primaryCta: { label: 'Schedule a Consultation', href: '#contact-form' },
    secondaryCta: { label: 'Email Our Team', href: 'mailto:enterprise@evossglobal.com' },
  },
  stats: [
    { icon: 'Building2', value: '500+', label: 'Enterprise Clients' },
    { icon: 'Users', value: '150+', label: 'Expert Team Members' },
    { icon: 'Award', value: '10+', label: 'Years of Excellence' },
    { icon: 'Globe', value: '25+', label: 'Countries Served' },
  ],
  contactMethods: [
    {
      icon: 'Mail',
      title: 'Email Us',
      content: 'enterprise@evossglobal.com',
      subContent: 'Response within 24 hours',
      link: 'mailto:enterprise@evossglobal.com',
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      content: '+1 (817) 555-0100',
      subContent: 'Monday - Friday, 9 AM - 6 PM EST',
      link: 'tel:+18175550100',
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      content: 'Fort Worth, Texas',
      subContent: 'Schedule a consultation',
      link: '#',
    },
  ],
  form: {
    title: 'Request a Consultation',
    description:
      'Fill out the form below and our enterprise team will reach out within one business day',
    disclaimer:
      'By submitting this form, you agree to our privacy policy and consent to being contacted by our enterprise solutions team.',
  },
  officeLocations: [
    {
      city: 'Fort Worth',
      country: 'United States',
      type: 'Global Headquarters',
      address: '123 Technology Plaza, Fort Worth, TX 76102',
    },
    {
      city: 'Austin',
      country: 'United States',
      type: 'Innovation Center',
      address: '456 Innovation Drive, Austin, TX 78701',
    },
    {
      city: 'Bangalore',
      country: 'India',
      type: 'Development Hub',
      address: '789 Tech Park, Bangalore 560001',
    },
  ],
  officeIntro: "With offices across continents, we're always close to our clients",
  about: {
    heading: 'About EvoSS Global',
    intro:
      'Founded in 2014 by CEO Srinivas Varadarajan, EvoSS Global has evolved from a visionary startup into a global leader in enterprise software solutions. Our journey is defined by unwavering commitment to client success and technological innovation.',
    details:
      'We serve Fortune 500 companies, high-growth startups, and government agencies across 25+ countries. Our customer-first, partner-powered, technology-enabled approach has helped organizations transform their digital infrastructure and achieve measurable business outcomes.',
    metrics: [
      { value: '98%', label: 'Client Satisfaction Rate' },
      { value: '$2B+', label: 'Client Value Delivered' },
    ],
    socials: [
      { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
      { label: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
      { label: 'GitHub', url: 'https://github.com', icon: 'Github' },
    ],
  },
  support: [
    { title: 'Business Hours', lines: ['Monday - Friday', '9:00 AM - 6:00 PM EST'] },
    { title: 'Enterprise Support', lines: ['24/7 Support Available', 'support@evossglobal.com'] },
    { title: 'Emergency Hotline', lines: ['For Critical Issues', '+1 (817) 555-0199'] },
  ],
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    industry: '',
    message: '',
  });

  const config = usePageConfig('contact', DEFAULT_CONTACT_CONFIG);
  const statsAnimation = useScrollAnimation({ threshold: 0.2 });
  const contactMethodsAnimation = useScrollAnimation({ threshold: 0.1 });
  const formAnimation = useScrollAnimation({ threshold: 0.1 });
  const officesAnimation = useScrollAnimation({ threshold: 0.1 });
  const aboutAnimation = useScrollAnimation({ threshold: 0.1 });
  const supportAnimation = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{config.hero.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{config.hero.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={config.hero.primaryCta.href}
                className="px-8 py-4 bg-[#3BA5C8] hover:bg-[#2C8EAD] text-white rounded-lg transition-colors font-semibold"
              >
                {config.hero.primaryCta.label}
              </a>
              <a
                href={config.hero.secondaryCta.href}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-semibold border border-white/20"
              >
                {config.hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsAnimation.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
              statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {config.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transitionDelay: '0ms' }}
              >
                <div className="flex justify-center mb-4 text-[#3BA5C8]">{renderIcon(stat.icon as IconName, 'w-6 h-6')}</div>
                <div className="text-4xl font-bold text-[#2C3E50] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose your preferred way to connect with our enterprise solutions team</p>
          </div>

          <div
            ref={contactMethodsAnimation.ref}
            className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
              contactMethodsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {config.contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3BA5C8] to-[#2C8EAD] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {renderIcon(method.icon as IconName, 'w-6 h-6')}
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{method.title}</h3>
                <p className="text-lg text-[#3BA5C8] mb-2 font-semibold">{method.content}</p>
                <p className="text-gray-600">{method.subContent}</p>
              </a>
            ))}
          </div>

          <div id="contact-form" className="max-w-4xl mx-auto">
            <div
              ref={formAnimation.ref}
              className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-1000 ${
                formAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">{config.form.title}</h2>
                <p className="text-lg text-gray-600">{config.form.description}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    htmlFor="name"
                    label="Full Name *"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormField
                    htmlFor="email"
                    label="Business Email *"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    htmlFor="company"
                    label="Company Name *"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <SelectField
                    label="Your Role *"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    options={[
                      { label: 'CTO / Chief Technology Officer', value: 'cto' },
                      { label: 'VP of Engineering', value: 'vp-engineering' },
                      { label: 'Product Manager', value: 'product-manager' },
                      { label: 'Director / Team Lead', value: 'director' },
                      { label: 'Founder / CEO', value: 'founder' },
                      { label: 'Other', value: 'other' },
                    ]}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    htmlFor="phone"
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <SelectField
                    label="Industry"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    options={[
                      { label: 'Financial Services', value: 'fintech' },
                      { label: 'Healthcare', value: 'healthcare' },
                      { label: 'Retail & E-commerce', value: 'retail' },
                      { label: 'Manufacturing', value: 'manufacturing' },
                      { label: 'Technology', value: 'technology' },
                      { label: 'Education', value: 'education' },
                      { label: 'Other', value: 'other' },
                    ]}
                  />
                </div>

                <TextareaField
                  label="Project Details *"
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                />

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">{config.form.disclaimer}</p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#3BA5C8] to-[#2C8EAD] hover:from-[#2C8EAD] hover:to-[#3BA5C8] text-white rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2" size={20} />
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-600">{config.officeIntro}</p>
          </div>
          <div
            ref={officesAnimation.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
              officesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {config.officeLocations.map((location) => (
              <div key={location.city} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                <div className="text-sm font-semibold text-[#3BA5C8] mb-2 uppercase tracking-wide">{location.type}</div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">{location.city}</h3>
                <p className="text-gray-600 mb-4">{location.country}</p>
                <p className="text-sm text-gray-500">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2C3E50] to-[#34495e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={aboutAnimation.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              aboutAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#3BA5C8]/20 rounded-full text-[#3BA5C8] font-semibold mb-6">
                {config.about.heading}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Decade of Innovation & Excellence</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">{config.about.intro}</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{config.about.details}</p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {config.about.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="text-3xl font-bold text-[#3BA5C8] mb-2">{metric.value}</div>
                    <div className="text-gray-300">{metric.label}</div>
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
          <div
            ref={supportAnimation.ref}
            className={`grid md:grid-cols-3 gap-8 text-center transition-all duration-1000 ${
              supportAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {config.support.map((item) => (
              <div key={item.title}>
                <div className="text-[#3BA5C8] mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-[#2C3E50] mb-2">{item.title}</h3>
                {item.lines.map((line) => (
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
  htmlFor,
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
}: {
  htmlFor: string;
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BA5C8] focus:border-transparent transition-all"
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
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BA5C8] focus:border-transparent transition-all"
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
  rows = 6,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3BA5C8] focus:border-transparent transition-all"
      />
    </div>
  );
}
