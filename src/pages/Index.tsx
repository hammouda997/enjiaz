import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileSearch, ChartLine, ShieldCheck, FileCode, Cloud, Code, Building2, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample data for services
const services = [{
  title: "Technology & Security Assessments",
  description: "Comprehensive evaluation of your IT infrastructure and security posture to identify vulnerabilities and improvement opportunities.",
  icon: <Shield size={32} />,
  link: "/services/assessments"
}, {
  title: "IT Strategy & Transformation",
  description: "Develop roadmaps and architectures that align your technology investments with business objectives.",
  icon: <ChartLine size={32} />,
  link: "/services/strategy"
}, {
  title: "Cybersecurity Advisory",
  description: "Expert guidance on cyber program development, architecture and risk management frameworks.",
  icon: <ShieldCheck size={32} />,
  link: "/services/cybersecurity"
}, {
  title: "Compliance & Governance",
  description: "Navigate complex regulatory requirements with our compliance expertise and governance frameworks.",
  icon: <FileCheck size={32} />,
  link: "/services/compliance"
}, {
  title: "Cloud & Infrastructure",
  description: "Optimize your cloud adoption strategy, migration planning and governance models.",
  icon: <Cloud size={32} />,
  link: "/services/cloud"
}, {
  title: "Digital Transformation",
  description: "Modernize systems and processes through automation, analytics and innovative digital solutions.",
  icon: <Code size={32} />,
  link: "/services/digital"
}];

// Sample data for testimonials
const testimonials = [{
  quote: "Enjaz's cybersecurity assessment uncovered critical vulnerabilities we were unaware of. Their remediation plan helped us secure our infrastructure and meet compliance requirements.",
  author: "Hatem AYARI",
  role: "CIO",
  company: "COTUGRAIN"
}, {
  quote: "Be our next success story and see the difference.",
  author: "Ready to add your name to the list?",
  role: "",
  company: ""
}, {
  quote: "Enjaz's cloud migration advisory services saved us from costly mistakes. Their expertise in governance and security ensured a smooth transition to our new infrastructure.",
  author: "Nahed BEN SLIMA",
  role: "CTO",
  company: "MTT"
}];

// Sample data for case studies
const caseStudies = [{
  title: "Financial Institution Strengthens Cyber Defenses",
  description: "How we helped a leading bank improve their security posture and achieve regulatory compliance.",
  industry: "Financial Services",
  service: "Cybersecurity",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  slug: "financial-cyber-defenses"
}, {
  title: "Retail Chain Digital Transformation",
  description: "Modernizing legacy systems and processes for a major retail chain, resulting in 40% operational efficiency gain.",
  industry: "Retail",
  service: "Digital Transformation",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  slug: "retail-digital-transformation"
}, {
  title: "Government Agency Cloud Migration",
  description: "Securely transitioning critical government services to the cloud with zero downtime.",
  industry: "Government",
  service: "Cloud Strategy",
  image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  slug: "government-cloud-migration"
}];

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animation-delay-200">
              Expert IT & Security Advisory for Your Business Challenges
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in animation-delay-400">
              Strategic technology consulting to protect, optimize and transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <Button size="lg" className="bg-enjaz hover:bg-enjaz-600 animate-scale-in" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 animate-scale-in animation-delay-200" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-dots-pattern opacity-10 animate-fade-in animation-delay-800"></div>
      </section>
      
      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
              Our Advisory <span className="text-gradient">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions to address your most critical IT and security challenges, delivered by seasoned industry experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} link={service.link} />)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/services">
                View All Services <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Us / Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">
                Why Partner with <span className="text-gradient">Enjaz</span>
              </h2>
              <p className="text-gray-600 mb-6">
                With decades of combined experience across industries, our team of expert advisors brings practical insight and proven methodologies to address your most pressing technology and security challenges.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-2 rounded-md">
                    <FileSearch className="h-6 w-6 text-enjaz" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Industry Experience</h3>
                    <p className="text-gray-600">Specialized expertise across finance, healthcare, government and more.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-2 rounded-md">
                    <Building2 className="h-6 w-6 text-enjaz" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Vendor Neutral</h3>
                    <p className="text-gray-600">Unbiased recommendations focused solely on your best interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-2 rounded-md">
                    <FileCode className="h-6 w-6 text-enjaz" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Proven Methodologies</h3>
                    <p className="text-gray-600">Structured approaches that deliver consistent, measurable results.</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8" asChild>
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="IT Advisory" className="w-full h-auto rounded-lg shadow-lg" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-navy-800">50+</p>
                    <p className="text-sm text-gray-600">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-navy-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-gray-600 text-lg">
              See how our advisory services have helped organizations overcome challenges and achieve their objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} company={testimonial.company} />)}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-800">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore how we've helped organizations solve complex challenges and achieve meaningful results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(study => <CaseStudyCard key={study.slug} title={study.title} description={study.description} industry={study.industry} service={study.service} image={study.image} slug={study.slug} />)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="gap-2" asChild>
              <Link to="/case-studies">
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-enjaz to-enjaz-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Technology Strategy?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Schedule a consultation with our expert advisors to discuss your challenges and discover how we can help.
          </p>
          <Button size="lg" className="bg-white text-enjaz hover:bg-gray-100" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default Index;
