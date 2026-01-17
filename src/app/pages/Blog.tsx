import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export function Blog() {
  const featuredPost = {
    title: 'The Future of Enterprise AI: How Computer Vision is Transforming Business Operations',
    excerpt: 'Explore how leading enterprises are leveraging computer vision technology to automate processes, improve quality control, and gain competitive advantages in their industries.',
    image: 'https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3OTQ0OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'AI & Machine Learning',
    date: 'January 8, 2026',
    readTime: '8 min read',
    author: 'Srinivas Varadarajan',
  };

  const blogPosts = [
    {
      title: 'Mobile-First Strategy: Why Your Enterprise Needs Native Apps in 2026',
      excerpt: 'Learn why native mobile applications continue to outperform web alternatives for enterprise use cases and how to build a successful mobile-first strategy.',
      image: 'https://images.unsplash.com/photo-1732121041218-2050c914567b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc5NDQ5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Mobile Development',
      date: 'January 5, 2026',
      readTime: '6 min read',
    },
    {
      title: 'Digital Transformation Success Stories: Lessons from Leading Enterprises',
      excerpt: 'Discover key insights and best practices from organizations that successfully navigated digital transformation initiatives and achieved measurable ROI.',
      image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMHRlYW18ZW58MXx8fHwxNzY3OTQ0OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Digital Transformation',
      date: 'January 3, 2026',
      readTime: '10 min read',
    },
    {
      title: 'Cloud-Native Architecture: Building Scalable Enterprise Solutions',
      excerpt: 'A comprehensive guide to designing and implementing cloud-native applications that scale with your business needs.',
      image: 'https://images.unsplash.com/photo-1667984390527-850f63192709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3OTE3Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Cloud Computing',
      date: 'December 30, 2025',
      readTime: '7 min read',
    },
    {
      title: 'Data-Driven Decision Making: Leveraging Analytics for Business Growth',
      excerpt: 'How modern enterprises are using data analytics and business intelligence to drive strategic decisions and improve operational efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzkzOTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Data & Analytics',
      date: 'December 28, 2025',
      readTime: '9 min read',
    },
    {
      title: 'Agile Product Development: From MVP to Market Leader',
      excerpt: 'Best practices for building and launching successful products using agile methodologies and customer-centric design principles.',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3Njc4NzAzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Product Development',
      date: 'December 26, 2025',
      readTime: '8 min read',
    },
    {
      title: 'Enterprise Security in the Age of Remote Work: Best Practices',
      excerpt: 'Essential security strategies and tools for protecting enterprise data in distributed work environments.',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4Mjg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Security',
      date: 'December 23, 2025',
      readTime: '6 min read',
    },
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Mobile Development',
    'Digital Transformation',
    'Cloud Computing',
    'Data & Analytics',
    'Product Development',
    'Security',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert perspectives on technology, digital transformation, and enterprise solutions from the EvoSS Global team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold text-[#3BA5C8] uppercase tracking-wider">Featured Article</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#3BA5C8]/10 text-[#3BA5C8] rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center px-6 py-3 bg-[#3BA5C8] hover:bg-[#2C8EAD] text-white rounded-lg transition-colors font-semibold group"
              >
                Read Full Article
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto">
            <Tag className="w-5 h-5 text-[#2C3E50] flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:bg-[#3BA5C8] hover:text-white bg-white text-[#2C3E50] border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
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
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-[#3BA5C8] text-[#3BA5C8] hover:bg-[#3BA5C8] hover:text-white rounded-lg transition-all font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#2C3E50] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never Miss an Update
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights, industry trends, and technology updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3BA5C8]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#3BA5C8] hover:bg-[#2C8EAD] text-white rounded-lg transition-colors font-semibold whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}