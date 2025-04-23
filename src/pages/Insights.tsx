
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Clock, Calendar, ArrowRight, Search } from "lucide-react";

const Insights = () => {
  // Sample blog posts and insights
  const featuredPosts = [
    {
      title: "The Future of Cybersecurity in a Post-Quantum World",
      excerpt: "Explore how quantum computing will transform the cybersecurity landscape and what organizations need to do to prepare.",
      category: "Cybersecurity",
      author: "Ahmed Al-Nasser",
      date: "April 18, 2025",
      readTime: "8 min read",
      image: "bg-navy-800/20"
    },
    {
      title: "Cloud Migration Best Practices for Enterprise Organizations",
      excerpt: "Discover key strategies for successful cloud migrations that minimize disruption and maximize business value.",
      category: "Cloud",
      author: "Sarah Mahmoud",
      date: "April 12, 2025",
      readTime: "6 min read",
      image: "bg-navy-800/20"
    },
    {
      title: "Navigating the Evolving Regulatory Landscape in Financial Services",
      excerpt: "Stay ahead of changing compliance requirements with our comprehensive guide to financial services regulations.",
      category: "Compliance",
      author: "Omar Khalid",
      date: "April 5, 2025",
      readTime: "10 min read",
      image: "bg-navy-800/20"
    }
  ];

  const recentPosts = [
    {
      title: "Building Resilient IT Infrastructure for the Modern Enterprise",
      category: "Infrastructure",
      date: "April 2, 2025"
    },
    {
      title: "AI Governance: Balancing Innovation and Risk",
      category: "Emerging Tech",
      date: "March 28, 2025"
    },
    {
      title: "Zero Trust Architecture: Implementation Strategies",
      category: "Cybersecurity",
      date: "March 23, 2025"
    },
    {
      title: "The CIO's Guide to IT Budget Optimization",
      category: "IT Strategy",
      date: "March 18, 2025"
    }
  ];

  const categories = [
    "Cybersecurity",
    "IT Strategy",
    "Cloud Computing",
    "Digital Transformation",
    "Compliance",
    "Risk Management",
    "Infrastructure",
    "Emerging Tech",
    "Business Continuity"
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Perspectives</h1>
            <p className="text-xl max-w-3xl leading-relaxed mb-8">
              Expert analysis, thought leadership, and practical guidance on the latest trends and challenges in technology and security.
            </p>
            
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search for insights..."
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-enjaz"
              />
              <Search className="absolute left-4 top-3.5 text-white/70" size={18} />
            </div>
          </div>
        </section>

        {/* Featured posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-navy-800">Featured Insights</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className={`h-48 ${post.image} flex items-center justify-center`}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-enjaz">{post.category}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-navy-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <Button variant="link" className="text-enjaz p-0">Read More</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest insights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-navy-800">Latest Insights</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="grid gap-8">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <FileText className="text-enjaz mr-2" size={20} />
                      <h3 className="text-2xl font-semibold text-navy-800">White Paper</h3>
                    </div>
                    <h4 className="text-xl font-medium mb-3">Building Cyber Resilience: A Framework for Modern Organizations</h4>
                    <p className="text-gray-600 mb-4">
                      This comprehensive white paper outlines a structured approach to building cyber resilience, 
                      helping organizations prepare for, respond to, and recover from security incidents effectively.
                    </p>
                    <Button className="mt-2">Download White Paper</Button>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-enjaz mr-2" size={20} />
                      <h3 className="text-2xl font-semibold text-navy-800">Upcoming Webinar</h3>
                    </div>
                    <h4 className="text-xl font-medium mb-3">Cloud Security: Best Practices for a Multi-Cloud World</h4>
                    <p className="text-gray-600 mb-4">
                      Join our cloud security experts as they discuss strategies for securing workloads across multiple cloud providers,
                      addressing common challenges and implementing effective controls.
                    </p>
                    <div className="flex items-center text-gray-700 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>May 10, 2025 | 2:00 PM - 3:30 PM (GMT+3)</span>
                    </div>
                    <Button className="mt-2">Register Now</Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-navy-800">Recent Articles</h3>
                  
                  <div className="space-y-6">
                    {recentPosts.map((post, index) => (
                      <div key={index}>
                        <h4 className="font-medium hover:text-enjaz transition-colors">
                          <a href="#">{post.title}</a>
                        </h4>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span className="text-enjaz">{post.category}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        {index < recentPosts.length - 1 && <div className="border-b border-gray-200 my-4"></div>}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">View All Articles</Button>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md mt-6">
                  <h3 className="text-xl font-semibold mb-4 text-navy-800">Categories</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-enjaz hover:text-white transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Featured Case Studies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <div className="h-64 bg-navy-800/10"></div>
                <div className="p-6">
                  <div className="text-sm font-medium text-enjaz mb-2">Financial Services</div>
                  <h3 className="text-2xl font-semibold mb-3 text-navy-800">Financial Institution Strengthens Cyber Defenses</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how we helped a leading financial institution enhance their security posture, 
                    achieve regulatory compliance, and protect sensitive customer data.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      <strong>Challenge:</strong> Regulatory compliance and cyber threats
                    </span>
                    <span className="text-sm text-gray-500">
                      <strong>Result:</strong> 60% reduction in security incidents
                    </span>
                  </div>
                  <div className="mt-6">
                    <Button className="flex items-center gap-1">
                      Read Case Study <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <div className="h-64 bg-navy-800/10"></div>
                <div className="p-6">
                  <div className="text-sm font-medium text-enjaz mb-2">Healthcare</div>
                  <h3 className="text-2xl font-semibold mb-3 text-navy-800">Healthcare Provider Modernizes IT Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how our advisory services helped a healthcare network transform their legacy infrastructure
                    while ensuring HIPAA compliance and improving operational efficiency.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      <strong>Challenge:</strong> Legacy systems and patient data security
                    </span>
                    <span className="text-sm text-gray-500">
                      <strong>Result:</strong> 40% reduction in IT costs
                    </span>
                  </div>
                  <div className="mt-6">
                    <Button className="flex items-center gap-1">
                      Read Case Study <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline">
                <Link to="/insights/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-navy-800 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter to receive the latest insights, guides, and event invitations.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-enjaz"
              />
              <Button size="lg" className="bg-enjaz hover:bg-enjaz/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm mt-4 text-white/70">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
