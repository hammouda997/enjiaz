
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Code, Lock, FileSearch, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TechnologyAssessments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Technology & Security Assessments</h1>
        
        {/* Introduction */}
        <section className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our comprehensive technology and security assessment services provide organizations with deep insights into their current technological landscape and security posture. We employ industry-leading methodologies and tools to evaluate your systems, identify vulnerabilities, and provide actionable recommendations for improvement.
          </p>
        </section>

        {/* Assessment Process */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-8 text-navy-800">Our Assessment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-enjaz-100 rounded-full flex items-center justify-center mb-4">
                <FileSearch className="text-enjaz h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Discovery</h3>
              <p className="text-gray-600">Comprehensive analysis of your current infrastructure, applications, and security controls.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-enjaz-100 rounded-full flex items-center justify-center mb-4">
                <Code className="text-enjaz h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Assessment</h3>
              <p className="text-gray-600">Deep technical evaluation using advanced tools and expert analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-enjaz-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-enjaz h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analysis</h3>
              <p className="text-gray-600">Thorough analysis of findings and development of remediation strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-enjaz-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="text-enjaz h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Recommendations</h3>
              <p className="text-gray-600">Detailed report with prioritized recommendations and actionable insights.</p>
            </div>
          </div>
        </section>

        {/* Automated Pentesting */}
        <section className="my-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-navy-800">Automated Penetration Testing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Our automated penetration testing service combines the efficiency of automated tools with expert analysis to provide continuous security validation of your systems.
              </p>
              <ul className="space-y-4">
                {[
                  "Continuous Security Validation",
                  "Automated Vulnerability Scanning",
                  "Web Application Security Testing",
                  "API Security Testing",
                  "Cloud Configuration Analysis",
                  "Regular Compliance Checks"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="text-enjaz mt-1 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-enjaz text-sm">1</span>
                  </div>
                  <div>
                    <span className="font-medium">Continuous Assessment</span>
                    <p className="text-gray-600">Regular automated scans ensure ongoing security validation</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-enjaz text-sm">2</span>
                  </div>
                  <div>
                    <span className="font-medium">Cost-Effective</span>
                    <p className="text-gray-600">Automated tools reduce the cost of regular security testing</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-enjaz text-sm">3</span>
                  </div>
                  <div>
                    <span className="font-medium">Quick Results</span>
                    <p className="text-gray-600">Rapid identification of security issues and vulnerabilities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-16 bg-navy-800 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our security experts to discuss your assessment needs and discover how we can help protect your organization.
          </p>
          <Button size="lg" className="bg-enjaz hover:bg-enjaz-600" asChild>
            <Link to="/contact">
              Talk to An Expert <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TechnologyAssessments;
