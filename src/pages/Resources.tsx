
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, ArrowRight, BookOpen, Film, FileCheck } from "lucide-react";

const Resources = () => {
  // Sample resources
  const whitepapers = [
    {
      title: "The Modern CISO's Guide to Security Transformation",
      description: "Strategic guidance for security leaders looking to evolve their organization's security posture.",
      tags: ["Security", "Leadership"],
      date: "March 2025"
    },
    {
      title: "Cloud Security Maturity Model",
      description: "A framework for assessing and improving cloud security practices across your organization.",
      tags: ["Cloud", "Security"],
      date: "January 2025"
    },
    {
      title: "Regulatory Compliance for Financial Institutions",
      description: "Navigating complex regulatory requirements in the financial services sector.",
      tags: ["Compliance", "Finance"],
      date: "December 2024"
    }
  ];
  
  const toolkits = [
    {
      title: "IT Risk Assessment Templates",
      description: "Comprehensive templates to help identify, assess, and document technology risks.",
      format: "Excel & Word Templates"
    },
    {
      title: "Security Policies Starter Pack",
      description: "Essential security policy templates aligned with industry standards and best practices.",
      format: "Word Documents"
    },
    {
      title: "Technology ROI Calculator",
      description: "Calculate the potential return on investment for your technology initiatives.",
      format: "Excel Workbook"
    }
  ];

  const webinars = [
    {
      title: "Securing Your Cloud Environment",
      description: "Best practices for implementing robust security controls in cloud deployments.",
      date: "April 15, 2025",
      duration: "60 minutes"
    },
    {
      title: "Compliance as a Competitive Advantage",
      description: "How to turn regulatory requirements into business opportunities.",
      date: "March 10, 2025",
      duration: "45 minutes"
    },
    {
      title: "Building an Effective Security Awareness Program",
      description: "Strategies to create a security-conscious culture within your organization.",
      date: "February 22, 2025",
      duration: "60 minutes"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl max-w-2xl leading-relaxed mb-8">
              Access expert guidance, tools, and insights to help you navigate complex technology and security challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="#whitepapers">Whitepapers</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <a href="#toolkits">Toolkits & Templates</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <a href="#webinars">Webinars</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Whitepapers */}
        <section id="whitepapers" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <FileText size={28} className="text-enjaz mr-3" />
              <h2 className="text-3xl font-bold text-navy-800">Whitepapers & Research</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepapers.map((paper, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{paper.date}</span>
                    <Button variant="outline" size="sm" className="flex gap-1 items-center">
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="link" className="text-enjaz flex items-center gap-1">
                View All Whitepapers <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Toolkits */}
        <section id="toolkits" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <FileCheck size={28} className="text-enjaz mr-3" />
              <h2 className="text-3xl font-bold text-navy-800">Toolkits & Templates</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {toolkits.map((toolkit, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">{toolkit.title}</h3>
                  <p className="text-gray-600 mb-4">{toolkit.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm bg-enjaz/10 text-enjaz px-2 py-1 rounded">
                      {toolkit.format}
                    </span>
                    <Button variant="outline" size="sm" className="flex gap-1 items-center">
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="link" className="text-enjaz flex items-center gap-1">
                View All Toolkits <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Webinars */}
        <section id="webinars" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-10">
              <Film size={28} className="text-enjaz mr-3" />
              <h2 className="text-3xl font-bold text-navy-800">Webinars & Events</h2>
            </div>
            
            <div className="space-y-6">
              {webinars.map((webinar, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6">
                  <div className="bg-navy-800/10 rounded-lg w-full md:w-48 h-32 flex items-center justify-center flex-shrink-0">
                    <Film size={48} className="text-navy-800/50" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-navy-800">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-4">
                      <div>
                        <span className="font-medium">Date:</span> {webinar.date}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {webinar.duration}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm">Register Now</Button>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="link" className="text-enjaz flex items-center gap-1">
                View All Webinars <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* Resource Library */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Resource Library</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-enjaz/10 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-enjaz" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
                <p className="text-gray-600 mb-4">
                  Real-world examples of how our clients have overcome technology and security challenges.
                </p>
                <Button variant="outline" className="w-full">Explore Case Studies</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-enjaz/10 w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="text-enjaz" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Guides & Checklists</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step guidance and practical checklists to help you implement best practices.
                </p>
                <Button variant="outline" className="w-full">Browse Guides</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-enjaz/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Film className="text-enjaz" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Video Library</h3>
                <p className="text-gray-600 mb-4">
                  Watch expert presentations, tutorials, and insights from our advisory team.
                </p>
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our expert advisors are ready to help you address your specific technology and security challenges.
            </p>
            <Button asChild size="lg" className="bg-enjaz hover:bg-enjaz/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
