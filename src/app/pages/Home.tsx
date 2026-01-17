import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Activity,
  Building2,
  GraduationCap,
  Landmark,
  Lightbulb,
  ShoppingCart,
  Smartphone,
  Eye,
  TrendingUp,
} from 'lucide-react';
import { usePageConfig } from '../hooks/usePageConfig';

const ICONS = {
  Smartphone,
  Eye,
  Lightbulb,
  Activity,
  TrendingUp,
  ShoppingCart,
  Building2,
  GraduationCap,
  Landmark,
} as const;
type IconName = keyof typeof ICONS;

const renderIcon = (name?: IconName, className?: string) => {
  if (!name) return null;
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
};

const DEFAULT_HOME_CONFIG = {
  hero: {
    badge: '✦ Trusted Since 2014',
    title: 'Strategic Partnerships. Complex Problems Solved.',
    subtitle: 'Customer-first, partner-powered, technology-enabled solutions for enterprise success.',
    primaryCta: { label: 'Schedule Free Consultation', href: '/get-started' },
    secondaryCta: { label: 'Explore Our Services', href: '/services' },
  },
  trustBar: {
    heading: 'Trusted by Leading Organizations Across Industries',
    subtitle: 'Reliable, technology-first partners who deliver measurable outcomes.',
  },
  industries: [
    { name: 'Healthcare', icon: 'Activity' },
    { name: 'Financial Services', icon: 'TrendingUp' },
    { name: 'Retail & E-commerce', icon: 'ShoppingCart' },
    { name: 'Manufacturing', icon: 'Building2' },
    { name: 'Education', icon: 'GraduationCap' },
    { name: 'Government', icon: 'Landmark' },
  ],
  services: {
    heading: 'Our Core Services',
    description: 'Comprehensive technology solutions tailored to your business needs',
    items: [
      {
        icon: 'Smartphone',
        title: 'Mobile Development',
        description:
          'Native and cross-platform mobile applications built with cutting-edge technology for iOS and Android.',
        linkLabel: 'Learn more',
        link: '/services',
      },
      {
        icon: 'Eye',
        title: 'Computer Vision',
        description: 'Advanced AI-powered visual recognition and analysis systems for intelligent automation.',
        linkLabel: 'Learn more',
        link: '/services',
      },
      {
        icon: 'Lightbulb',
        title: 'Product R&D',
        description: 'End-to-end product development from ideation to market launch with expert guidance.',
        linkLabel: 'Learn more',
        link: '/services',
      },
    ],
  },
  products: {
    heading: 'Our Core Products',
    description: 'Innovative solutions designed to accelerate your digital transformation',
    items: [
      {
        name: 'AppExe',
        tagline: 'Zero-Programming Mobile Platform',
        description:
          'Build powerful mobile applications without writing a single line of code. Perfect for rapid prototyping and MVP development.',
        features: [
          'Drag-and-drop interface',
          'Pre-built templates',
          'Instant deployment',
          'Cloud hosting included',
        ],
        image:
          'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3Njc5NDQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        name: 'UncannyCV',
        tagline: 'Computer Vision Suite',
        description:
          'Enterprise-grade computer vision API for object detection, facial recognition, and image analysis at scale.',
        features: ['Real-time processing', '99.9% accuracy', 'Custom model training', 'RESTful API'],
        image:
          'https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMEFJJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc5NDQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        name: 'SmartDocs',
        tagline: 'Intelligent Document Management',
        description:
          'AI-powered document processing and management system with automated extraction and classification.',
        features: ['OCR technology', 'Smart categorization', 'Compliance ready', 'Secure cloud storage'],
        image:
          'https://images.unsplash.com/photo-1765502318157-61d9bb6579e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzY3OTI4MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
  },
  blog: {
    heading: 'Latest Insights',
    description: 'Expert perspectives on technology trends, best practices, and digital transformation',
    buttonLabel: 'View All Articles',
    items: [
      {
        title: 'The Future of Enterprise AI: Transforming Business Operations',
        excerpt:
          'How artificial intelligence and computer vision are revolutionizing enterprise workflows, driving competitive advantages, and reshaping industry standards.',
        image:
          'https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3OTQ0OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        date: 'January 8, 2026',
        category: 'AI & Machine Learning',
      },
      {
        title: 'Mobile-First Development: Building Apps That Scale',
        excerpt:
          'Essential strategies for creating high-performance mobile applications that deliver exceptional user experiences and drive business growth.',
        image:
          'https://images.unsplash.com/photo-1732121041218-2050c914567b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc5NDQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        date: 'January 5, 2026',
        category: 'Mobile Development',
      },
      {
        title: 'Building High-Performance Enterprise Technology Teams',
        excerpt:
          'Best practices for assembling, managing, and scaling technology teams in enterprise environments to deliver world-class solutions.',
        image:
          'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMHRlYW18ZW58MXx8fHwxNzY3OTQ0OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        date: 'December 30, 2025',
        category: 'Enterprise Technology',
      },
    ],
  },
  metrics: {
    heading: 'Proven Track Record',
    description: 'Numbers that speak to our commitment and expertise',
    items: [
      { value: '200+', label: 'Projects Delivered' },
      { value: '50+', label: 'Enterprise Clients' },
      { value: '12+', label: 'Years Experience' },
      { value: '95%', label: 'Client Retention' },
    ],
  },
  cta: {
    heading: 'Ready to Transform Your Business?',
    description: "Let's discuss your needs and explore how we can help you achieve your goals. No commitment required.",
    primaryCta: { label: 'Start Your Project', href: '/get-started' },
    secondaryCta: { label: 'Discuss Your Needs', href: '/contact' },
    footnotes: ['No commitment consultation', '12+ years in business', 'Global partner network'],
  },
};

export function Home() {
  const config = usePageConfig('home', DEFAULT_HOME_CONFIG);

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#2C3E50] text-white overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #3BA5C8 1px, transparent 1px),
                linear-gradient(0deg, #3BA5C8 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#3BA5C8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-4xl">
            <div className="inline-block mb-8 animate-pulse-soft">
              <div className="px-6 py-2.5 bg-[#3BA5C8]/10 border-2 border-[#3BA5C8]/30 rounded-full text-[#3BA5C8] text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(59,165,200,0.3)]">
                {config.hero.badge}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">{config.hero.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={config.hero.primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3BA5C8] hover:bg-[#2C8EAD] text-white rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                {config.hero.primaryCta.label}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to={config.hero.secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#3BA5C8] hover:bg-[#3BA5C8]/10 text-white rounded-lg transition-all font-semibold text-lg"
              >
                {config.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-wider font-medium">
            {config.trustBar.heading}
          </p>
          <p className="text-center text-gray-600 mb-10">{config.trustBar.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {config.industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center text-center px-4 py-6 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
              >
                <div className="text-gray-400 group-hover:text-[#3BA5C8] transition-colors mb-3">
                  {renderIcon(industry.icon as IconName, 'w-6 h-6')}
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-[#3BA5C8] transition-colors">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">{config.services.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.services.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {config.services.items.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3BA5C8] hover:-translate-y-1 cursor-pointer"
              >
                <div className="mb-8 text-[#3BA5C8] group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(service.icon as IconName, 'w-20 h-20')}
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#3BA5C8] hover:text-[#2C8EAD] font-semibold group/link"
                >
                  {service.linkLabel}
                  <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{config.products.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.products.description}</p>
          </div>
          <div className="space-y-12">
            {config.products.items.map((product, index) => (
              <div
                key={product.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    Product
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-lg text-cyan-600 font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    Explore {product.name}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">{config.blog.heading}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.blog.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {config.blog.items.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#2C3E50] rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#3BA5C8] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      to="/blog"
                      className="inline-flex items-center text-[#3BA5C8] hover:text-[#2C8EAD] font-semibold text-sm group/link"
                    >
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-3 border-2 border-[#3BA5C8] text-[#3BA5C8] hover:bg-[#3BA5C8] hover:text-white rounded-lg transition-all font-semibold"
            >
              {config.blog.buttonLabel}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{config.metrics.heading}</h2>
            <p className="text-xl text-gray-300">{config.metrics.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.metrics.items.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
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
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold text-lg group"
            >
              {config.cta.primaryCta.label}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to={config.cta.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 text-white rounded-lg transition-all font-semibold text-lg"
            >
              {config.cta.secondaryCta.label}
            </Link>
          </div>
          <p className="text-cyan-100 text-sm mt-6">
            {config.cta.footnotes.join(' • ')}
          </p>
        </div>
      </section>
    </div>
  );
}
