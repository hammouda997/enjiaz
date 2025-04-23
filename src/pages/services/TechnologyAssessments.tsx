
import { Shield, CheckCircle } from "lucide-react";

const TechnologyAssessments = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-navy-800">Technology & Security Assessments</h1>
      <div className="space-y-8">
        <section className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our comprehensive technology and security assessment services provide organizations with deep insights into their current technological landscape and security posture. We employ industry-leading methodologies and tools to evaluate your systems, identify vulnerabilities, and provide actionable recommendations for improvement.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy-800">Our Assessment Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Infrastructure and Architecture Review</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Security Controls Assessment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Vulnerability Scanning and Analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Compliance Gap Analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy-800">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Identify and address security vulnerabilities</span>
              </li>
              <li className="flex items-start">
                <Shield className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Optimize technology investments</span>
              </li>
              <li className="flex items-start">
                <Shield className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Ensure regulatory compliance</span>
              </li>
              <li className="flex items-start">
                <Shield className="text-enjaz mr-2 mt-1 flex-shrink-0" />
                <span>Enhance operational efficiency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAssessments;
