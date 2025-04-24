import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  ChartLine, 
  ShieldCheck, 
  FileCheck, 
  Cloud,
  Code, 
  FileSearch, 
  Building2, 
  BookOpen
} from "lucide-react";

// Services data
const allServices = [
  {
    title: "Technology & Security Assessments",
    description: "Comprehensive evaluation of your IT infrastructure and security posture to identify vulnerabilities and improvement opportunities.",
    icon: <Shield size={32} />,
    link: "/services/assessments",
    category: "security"
  },
  {
    title: "IT Strategy & Transformation",
    description: "Develop roadmaps and architectures that align your technology investments with business objectives.",
    icon: <ChartLine size={32} />,
    link: "/services/strategy",
    category: "strategy"
  },
  {
    title: "Cybersecurity Advisory",
    description: "Expert guidance on cyber program development, architecture and risk management frameworks.",
    icon: <ShieldCheck size={32} />,
    link: "/services/cybersecurity",
    category: "security"
  },
  {
    title: "Compliance & Governance",
    description: "Navigate complex regulatory requirements with our compliance expertise and governance frameworks.",
    icon: <FileCheck size={32} />,
    link: "/services/compliance",
    category: "governance"
  },
  {
    title: "Cloud & Infrastructure Strategy",
    description: "Optimize your cloud adoption strategy, migration planning and governance models.",
    icon: <Cloud size={32} />,
    link: "/services/cloud",
    category: "strategy"
  },
  {
    title: "Digital Transformation",
    description: "Modernize systems and processes through automation, analytics and innovative digital solutions.",
    icon: <Code size={32} />,
    link: "/services/digital",
    category: "transformation"
  },
  {
    title: "M&A Technology Due Diligence",
    description: "Comprehensive assessment of technology assets, risks, and integration opportunities during mergers and acquisitions.",
    icon: <FileSearch size={32} />,
    link: "/services/ma-diligence",
    category: "advisory"
  },
  {
    title: "Business Continuity & Resilience",
    description: "Develop and test robust business continuity and disaster recovery plans to ensure operational resilience.",
    icon: <Building2 size={32} />,
    link: "/services/continuity",
    category: "advisory"
  },
  {
    title: "Executive Advisory Services",
    description: "Strategic guidance for C-level executives on technology investments, risk management, and digital strategy.",
    icon: <BookOpen size={32} />,
    link: "/services/executive",
    category: "advisory"
  },
  {
    title: "Development & Code Review",
    description: "Automated code quality and security reviews with actionable intelligence for secure, efficient applications.",
    icon: <Code size={32} />,
    link: "/services/development",
    category: "security"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Advisory & Consulting Services</h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive technology and security advisory services tailored to your organization's unique challenges and objectives.
            </p>
            <Button size="lg" className="bg-enjaz hover:bg-enjaz-600" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              Expert Advisory <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-gray-600">
              Browse our comprehensive range of services or filter by category to find the specific expertise you need.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
              <TabsTrigger value="all" className="border-2 border-transparent data-[state=active]:border-enjaz">All Services</TabsTrigger>
              <TabsTrigger value="security" className="border-2 border-transparent data-[state=active]:border-enjaz">Security & Risk</TabsTrigger>
              <TabsTrigger value="strategy" className="border-2 border-transparent data-[state=active]:border-enjaz">Strategy & Architecture</TabsTrigger>
              <TabsTrigger value="transformation" className="border-2 border-transparent data-[state=active]:border-enjaz">Transformation</TabsTrigger>
              <TabsTrigger value="governance" className="border-2 border-transparent data-[state=active]:border-enjaz">Compliance & Governance</TabsTrigger>
              <TabsTrigger value="advisory" className="border-2 border-transparent data-[state=active]:border-enjaz">Executive Advisory</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="security">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter((service) => service.category === "security")
                  .map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="strategy">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter((service) => service.category === "strategy")
                  .map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="transformation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter((service) => service.category === "transformation")
                  .map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="governance">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter((service) => service.category === "governance")
                  .map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="advisory">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter((service) => service.category === "advisory")
                  .map((service) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      link={service.link}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Advisory Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              Advisory <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-gray-600">
              Structured engagement options to meet different organizational needs and budgets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-navy-800">Starter Package</h3>
                <p className="text-gray-600 mt-2">Focused assessment and recommendations</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-navy-800">Starting at</span>
                  <span className="text-gray-600 block text-sm">Contact for pricing</span>
                </div>
              </div>
              <Separator className="my-6" />
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Single-domain assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Findings report with recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>2-week engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Executive briefing</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            
            {/* Professional Package */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow border-2 border-enjaz relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-enjaz text-white px-4 py-1 rounded font-semibold text-sm">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-navy-800">Professional Package</h3>
                <p className="text-gray-600 mt-2">Comprehensive advisory solution</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-navy-800">Starting at</span>
                  <span className="text-gray-600 block text-sm">Contact for pricing</span>
                </div>
              </div>
              <Separator className="my-6" />
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-domain assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed remediation roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4-6 week engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Executive and board presentations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>60-day follow-up support</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
            
            {/* Enterprise Package */}
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-navy-800">Enterprise Package</h3>
                <p className="text-gray-600 mt-2">Long-term strategic partnership</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-navy-800">Starting at</span>
                  <span className="text-gray-600 block text-sm">Contact for pricing</span>
                </div>
              </div>
              <Separator className="my-6" />
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive enterprise assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Strategic multi-year roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated advisory team</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quarterly review and strategy sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-enjaz flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Virtual CISO/CIO services</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-enjaz text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Technology Strategy?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our expert advisors are ready to help you navigate your most complex technology challenges.
          </p>
          <Button size="lg" className="bg-white text-enjaz hover:bg-gray-100" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
