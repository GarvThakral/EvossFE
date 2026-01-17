import { Link } from 'react-router-dom';
import { CheckCircle, Code, Zap, Shield, Cloud, ArrowRight } from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';

const ICONS = {
  Code,
  Zap,
  Shield,
  Cloud,
} as const;
type IconName = keyof typeof ICONS;

const renderIcon = (name?: IconName, className?: string) => {
  if (!name) return null;
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
};

const DEFAULT_PRODUCTS_CONFIG = {
  hero: {
    title: 'Innovative Products for Modern Businesses',
    description:
      'Accelerate your digital transformation with our suite of enterprise-ready products designed to solve real business challenges.',
  },
  products: [
    {
      name: 'AppExe',
      tagline: 'Zero-Programming Mobile Platform',
      description:
        'Build powerful mobile applications without writing a single line of code. Perfect for rapid prototyping, MVPs, and enterprise app development.',
      longDescription:
        'AppExe revolutionizes mobile app development by providing a comprehensive no-code platform that empowers businesses to create professional mobile applications in days, not months. With an intuitive drag-and-drop interface and pre-built components, you can focus on your business logic while we handle the technical complexity.',
      features: [
        'Drag-and-drop visual interface',
        'Pre-built templates and components',
        'Real-time preview and testing',
        'Instant deployment to app stores',
        'Cloud hosting and CDN included',
        'Push notifications and analytics',
        'Backend integration and API connectivity',
        'Custom branding and white-labeling',
      ],
      useCases: [
        'Rapid MVP development',
        'Internal enterprise apps',
        'Customer-facing mobile experiences',
        'Event and conference apps',
      ],
      pricing: 'Starting at $999/month',
      image:
        'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3Njc5NDQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'UncannyCV',
      tagline: 'Computer Vision Suite',
      description:
        'Enterprise-grade computer vision API for object detection, facial recognition, and image analysis at scale with industry-leading accuracy.',
      longDescription:
        'UncannyCV delivers state-of-the-art computer vision capabilities through an easy-to-use API. Powered by advanced machine learning models, it provides real-time visual analysis with 99.9% accuracy. From retail to security to manufacturing, UncannyCV transforms visual data into actionable insights.',
      features: [
        'Real-time object detection and tracking',
        'Facial recognition and verification',
        'OCR with multi-language support',
        'Image classification and tagging',
        'Video analytics and scene understanding',
        'Custom model training and deployment',
        'RESTful API with comprehensive documentation',
        'Enterprise SLA and 24/7 support',
      ],
      useCases: [
        'Quality control automation',
        'Security and surveillance',
        'Retail analytics and insights',
        'Document processing and verification',
      ],
      pricing: 'Custom enterprise pricing',
      image:
        'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc5NDQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'SmartDocs',
      tagline: 'Intelligent Document Management',
      description:
        'AI-powered document processing and management system with automated extraction, classification, and compliance-ready storage.',
      longDescription:
        'SmartDocs leverages artificial intelligence to transform how organizations handle documents. From automatic categorization to intelligent data extraction, SmartDocs streamlines document workflows while ensuring security and compliance. Say goodbye to manual data entry and hello to intelligent automation.',
      features: [
        'Advanced OCR technology',
        'Intelligent document categorization',
        'Automated data extraction',
        'Smart search and retrieval',
        'Version control and audit trails',
        'Compliance-ready secure storage',
        'Workflow automation',
        'Integration with existing systems',
      ],
      useCases: [
        'Invoice and receipt processing',
        'Contract management',
        'Compliance documentation',
        'Knowledge base management',
      ],
      pricing: 'Starting at $499/month',
      image:
        'https://images.unsplash.com/photo-1765502318157-61d9bb6579e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY3OTI4MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ],
  quickStats: [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Support' },
  ],
  benefits: [
    {
      icon: 'Code',
      title: 'Developer-Friendly',
      description: 'Comprehensive APIs and SDKs with detailed documentation',
    },
    {
      icon: 'Zap',
      title: 'High Performance',
      description: 'Built for scale with enterprise-grade infrastructure',
    },
    {
      icon: 'Shield',
      title: 'Secure & Compliant',
      description: 'SOC 2, GDPR, and HIPAA compliant by design',
    },
    {
      icon: 'Cloud',
      title: 'Cloud-Native',
      description: 'Deployed on AWS/Azure/GCP for maximum reliability',
    },
  ],
  cta: {
    heading: 'Ready to Get Started?',
    description: 'Explore our products with a free trial or schedule a personalized demo with our team.',
    primaryCta: { label: 'Start Free Trial', href: '/get-started' },
    secondaryCta: { label: 'Schedule Demo', href: '/contact' },
  },
};

export function Products() {
  const config = usePageConfig('products', DEFAULT_PRODUCTS_CONFIG);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{config.hero.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">{config.hero.description}</p>
          </div>
        </div>
      </section>

      {config.products.map((product, index) => (
        <section
          key={product.name}
          className={index % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gray-50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  Product
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">{product.name}</h2>
                <p className="text-xl text-cyan-600 font-medium mb-6">{product.tagline}</p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <p className="text-gray-700 mb-8 leading-relaxed">{product.longDescription}</p>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Features:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Common Use Cases:</h3>
                  <ul className="space-y-2">
                    {product.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    to="/get-started"
                    className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <span className="text-lg font-semibold text-slate-900">{product.pricing}</span>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {config.quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-lg p-4 shadow-md text-center border border-gray-200"
                    >
                      <div className="text-3xl font-bold text-cyan-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{config.hero.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4">
                  {renderIcon(benefit.icon as IconName, 'w-8 h-8 text-cyan-500')}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{config.cta.heading}</h2>
          <p className="text-xl mb-8 text-cyan-50">{config.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={config.cta.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-lg"
            >
              {config.cta.primaryCta.label}
            </Link>
            <Link
              to={config.cta.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 text-white rounded-lg transition-all font-semibold text-lg"
            >
              {config.cta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
