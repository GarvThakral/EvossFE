import { Link } from 'react-router-dom';
import {
  Smartphone,
  Eye,
  Lightbulb,
  Shield,
  Globe,
  TrendingUp,
  Zap,
  Target,
  Users,
} from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';

const ICONS = {
  Smartphone,
  Eye,
  Lightbulb,
  Shield,
  Globe,
  TrendingUp,
  Zap,
  Target,
  Users,
} as const;
type IconName = keyof typeof ICONS;

const renderIcon = (name?: IconName, className?: string) => {
  if (!name) return null;
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
};

const DEFAULT_SERVICES_CONFIG = {
  hero: {
    title: 'Enterprise Technology Services',
    description:
      'We partner with organizations to deliver innovative technology solutions that drive business transformation and competitive advantage.',
  },
  mainServices: [
    {
      icon: 'Smartphone',
      title: 'Mobile App Development',
      description: 'End-to-end mobile application development for iOS and Android platforms.',
      features: [
        'Native iOS (Swift) and Android (Kotlin)',
        'Cross-platform development (React Native, Flutter)',
        'Progressive Web Apps (PWA)',
        'Mobile backend and API integration',
        'App Store optimization and deployment',
        'Maintenance and continuous updates',
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Amplify'],
      image:
        'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njc3NTcyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: 'Eye',
      title: 'Computer Vision Solutions',
      description: 'Advanced AI-powered visual recognition and analysis systems for intelligent automation.',
      features: [
        'Object detection and classification',
        'Facial recognition systems',
        'OCR and document processing',
        'Quality control automation',
        'Video analytics and monitoring',
        'Custom model training',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'AWS Rekognition', 'Google Cloud Vision'],
      image:
        'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGFpfGVufDF8fHx8MTc2Nzg2MjA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: 'Lightbulb',
      title: 'Product R&D Services',
      description: 'Complete product development lifecycle from ideation to market launch.',
      features: [
        'Product strategy and roadmap',
        'UX/UI design and prototyping',
        'MVP development',
        'Market validation and testing',
        'Scalable architecture design',
        'Go-to-market support',
      ],
      technologies: ['Figma', 'Sketch', 'React', 'Node.js', 'Docker', 'Kubernetes'],
      image:
        'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmV8ZW58MXx8fHwxNzY3ODc1NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
  workflow: {
    heading: 'Our Partnership Model',
    description: "We believe in true partnerships. Here's how we work together to deliver exceptional results.",
    steps: [
      {
        step: '01',
        title: 'Discovery & Planning',
        description:
          'We start by understanding your business objectives, challenges, and requirements through in-depth consultation.',
      },
      {
        step: '02',
        title: 'Strategy Development',
        description:
          'Our team creates a comprehensive strategy and roadmap tailored to your specific needs and goals.',
      },
      {
        step: '03',
        title: 'Design & Prototyping',
        description:
          'We develop prototypes and designs for validation before moving to full-scale development.',
      },
      {
        step: '04',
        title: 'Development & Testing',
        description:
          'Agile development with continuous testing and quality assurance throughout the process.',
      },
      {
        step: '05',
        title: 'Deployment & Support',
        description:
          'Seamless launch with ongoing support, maintenance, and optimization for continuous improvement.',
      },
    ],
  },
  industries: {
    heading: 'Industries We Serve',
    description:
      'Deep expertise across multiple sectors, delivering tailored solutions for unique industry challenges.',
    items: [
      { name: 'Healthcare', icon: 'Shield' },
      { name: 'Financial Services', icon: 'TrendingUp' },
      { name: 'Retail & E-commerce', icon: 'Globe' },
      { name: 'Manufacturing', icon: 'Zap' },
      { name: 'Education', icon: 'Target' },
      { name: 'Government', icon: 'Users' },
    ],
  },
  capabilities: {
    heading: 'Technical Capabilities',
    description: 'Comprehensive technology stack and expertise to bring your vision to life',
    items: [
      'Cloud Architecture (AWS, Azure, GCP)',
      'Microservices & Containerization',
      'DevOps & CI/CD',
      'API Development & Integration',
      'Data Analytics & BI',
      'Security & Compliance',
      'Blockchain Development',
      'IoT Solutions',
    ],
  },
  cta: {
    heading: "Let's Build Something Great Together",
    description: 'Schedule a no-commitment consultation to discuss your project and explore how we can help.',
    primaryCta: {
      label: 'Start Your Project',
      href: '/get-started',
    },
  },
};

export function Services() {
  const config = usePageConfig('services', DEFAULT_SERVICES_CONFIG);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{config.hero.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">{config.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {config.mainServices.map((service) => (
              <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="mb-6">{renderIcon(service.icon as IconName, 'w-16 h-16 text-cyan-500')}</div>
                  <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                  <h3 className="text-lg font-semibold text-[#2C3E50] mb-4">Key Features:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-700">
                        <span className="text-[#3BA5C8] mr-3 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Technologies We Use
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:pl-8">
                  <img src={service.image} alt={service.title} className="rounded-xl shadow-lg w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{config.workflow.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.workflow.description}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {config.workflow.steps.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-4xl font-bold text-cyan-500/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < config.workflow.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{config.industries.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.industries.description}</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {config.industries.items.map((industry) => (
              <div
                key={industry.name}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:border-cyan-300"
              >
                <div className="text-cyan-500 flex justify-center mb-3">
                  {renderIcon(industry.icon as IconName, 'w-8 h-8')}
                </div>
                <h3 className="font-semibold text-slate-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.capabilities.heading}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{config.capabilities.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.capabilities.items.map((capability) => (
              <div
                key={capability}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
              >
                <p className="font-medium">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{config.cta.heading}</h2>
          <p className="text-xl text-cyan-50">{config.cta.description}</p>
          <Link
            to={config.cta.primaryCta.href}
            className="inline-flex items-center px-8 py-4 mt-6 bg-white text-cyan-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-lg"
          >
            {config.cta.primaryCta.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
