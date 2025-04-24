
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Shield, FileCode, CheckCircle } from "lucide-react";

const DevelopmentCodeReview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Development & Code Review</h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive code assessment and security review services to ensure your applications are secure, efficient, and maintainable.
            </p>
            <Button size="lg" className="bg-enjaz hover:bg-enjaz-600" asChild>
              <Link to="/contact">Talk to An Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-800">Automated Code Quality & Security Reviews</h2>
              <p className="text-gray-600 mb-6">
                Our automated code review platform provides actionable code intelligence, enabling developers to focus on building better software faster. We combine advanced static analysis with security expertise to deliver comprehensive code assessments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-2 rounded-lg">
                    <Code2 className="h-6 w-6 text-enjaz" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Comprehensive Code Analysis</h3>
                    <p className="text-gray-600">Reviews all code types: open source, developer-written, and AI-generated</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-enjaz" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Security Standards Compliance</h3>
                    <p className="text-gray-600">Adherence to NIST SSDF, OWASP, CWE, STIG, and CASA standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Code Review Process" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy-800">Key Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-enjaz-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileCode className="h-6 w-6 text-enjaz" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deep Vulnerability Detection</h3>
              <p className="text-gray-600">Uncovers deeply hidden security issues using advanced static analysis techniques</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-enjaz-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-enjaz" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Standards Compliance</h3>
              <p className="text-gray-600">Automatic verification against industry security standards with detailed reporting</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-enjaz-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-enjaz" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Actionable Intelligence</h3>
              <p className="text-gray-600">Clear, prioritized recommendations for addressing identified issues</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-enjaz text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Code?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get started with our automated code review services and ensure your applications meet the highest security standards.
          </p>
          <Button size="lg" className="bg-white text-enjaz hover:bg-gray-100" asChild>
            <Link to="/contact">Schedule a Code Review</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevelopmentCodeReview;
