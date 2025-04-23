
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RefreshCw, AlertTriangle, ListChecks, BookOpen, Users } from "lucide-react";

const BusinessContinuity = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Business Continuity & Resilience</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Business Continuity & Resilience services help organizations prepare for, respond to, and recover from disruptive incidents while maintaining critical functions. We provide comprehensive advisory services to develop robust business continuity and disaster recovery capabilities that enhance organizational resilience and minimize operational impact during crises.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <BookOpen className="text-enjaz mr-3 flex-shrink-0" />
                Business Continuity Planning
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Business Impact Analysis</span>
                  <span className="text-gray-600">Identify critical business functions, assess potential impacts, and determine recovery priorities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Risk Assessment & Mitigation</span>
                  <span className="text-gray-600">Evaluate threats and vulnerabilities that could disrupt operations and develop mitigation strategies.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Continuity Strategy Development</span>
                  <span className="text-gray-600">Create comprehensive continuity strategies aligned with business requirements and risk tolerance.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Business Continuity Plans</span>
                  <span className="text-gray-600">Develop actionable plans that detail recovery procedures, roles, and responsibilities.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <RefreshCw className="text-enjaz mr-3 flex-shrink-0" />
                IT Disaster Recovery
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Recovery Requirements Analysis</span>
                  <span className="text-gray-600">Define recovery time and point objectives (RTO/RPO) for critical systems and data.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Disaster Recovery Architecture</span>
                  <span className="text-gray-600">Design resilient technology architectures with appropriate redundancy and recovery capabilities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Data Backup & Recovery</span>
                  <span className="text-gray-600">Develop strategies for data protection, backup, and restoration to meet recovery objectives.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Recovery Procedure Development</span>
                  <span className="text-gray-600">Create detailed procedures for recovering systems, applications, and data during incidents.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <AlertTriangle className="text-enjaz mr-3 flex-shrink-0" />
                Crisis Management
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Crisis Response Framework</span>
                  <span className="text-gray-600">Develop structures and processes for effective crisis response and decision-making.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Crisis Communications</span>
                  <span className="text-gray-600">Create strategies for communicating with stakeholders during crisis situations.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Incident Response Integration</span>
                  <span className="text-gray-600">Align crisis management with security incident response and other emergency processes.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Crisis Leadership Development</span>
                  <span className="text-gray-600">Prepare executives and key personnel to lead effectively during crisis situations.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <ListChecks className="text-enjaz mr-3 flex-shrink-0" />
                Program Management & Testing
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Program Development</span>
                  <span className="text-gray-600">Establish comprehensive business continuity programs with governance, policies, and processes.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Exercise Design & Facilitation</span>
                  <span className="text-gray-600">Create and conduct tabletop exercises, simulations, and technical tests to validate plans.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Program Assessment</span>
                  <span className="text-gray-600">Evaluate program maturity against standards (ISO 22301, NIST) and identify improvement opportunities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Continuous Improvement</span>
                  <span className="text-gray-600">Implement processes for ongoing program maintenance, testing, and enhancement.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Business Continuity Methodology</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Program Foundation</h3>
                    <p className="text-gray-600">We establish a solid foundation for your business continuity program, including policy development, governance structures, and alignment with organizational objectives.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Risk & Impact Analysis</h3>
                    <p className="text-gray-600">We identify critical business functions, analyze potential impacts of disruption, and assess risks to prioritize continuity efforts where they matter most.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Strategy & Plan Development</h3>
                    <p className="text-gray-600">We develop comprehensive continuity strategies and detailed plans that enable efficient response and recovery during disruptions.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Validation & Improvement</h3>
                    <p className="text-gray-600">We test plans through exercises, identify improvement opportunities, and implement a continuous improvement process to maintain program effectiveness.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits of Our Business Continuity Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <RefreshCw className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Operational Resilience</h3>
                <p className="text-gray-600">Enhance your organization's ability to maintain critical functions during disruptions, minimizing operational and financial impacts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Risk Mitigation</h3>
                <p className="text-gray-600">Identify and address vulnerabilities before they lead to disruptions, reducing the likelihood and impact of incidents.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Stakeholder Confidence</h3>
                <p className="text-gray-600">Build trust with customers, partners, and regulators by demonstrating a robust approach to business continuity and resilience.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for Business Continuity?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Proven Methodology</h3>
                <p>Our approach is based on industry standards (ISO 22301, NIST SP 800-34) and real-world experience across various scenarios and industries.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Practical Focus</h3>
                <p>We develop solutions that are practical to implement and maintain, focusing on what works in real crisis situations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Technology Integration</h3>
                <p>Our expertise spans both business and technology domains, ensuring comprehensive continuity solutions that address all aspects of resilience.</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Common Business Continuity Challenges We Address</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <h3 className="font-semibold text-lg">Siloed Planning Approaches</h3>
                </div>
                <p className="text-gray-600 ml-9">We help integrate disparate continuity efforts across IT, security, operations, and other departments into a cohesive program.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <h3 className="font-semibold text-lg">Untested Recovery Capabilities</h3>
                </div>
                <p className="text-gray-600 ml-9">We design and facilitate exercises to validate recovery plans and capabilities before they're needed in a real crisis.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <h3 className="font-semibold text-lg">Evolving Technology Landscapes</h3>
                </div>
                <p className="text-gray-600 ml-9">We help adapt continuity strategies for cloud environments, remote work scenarios, and other evolving technology landscapes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</div>
                  <h3 className="font-semibold text-lg">Stakeholder Engagement</h3>
                </div>
                <p className="text-gray-600 ml-9">We develop strategies to build executive support and organizational engagement in continuity planning efforts.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Enhance Your Organizational Resilience?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to develop a robust business continuity program that protects your critical functions and ensures resilience in the face of disruptions.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Resilience Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessContinuity;
