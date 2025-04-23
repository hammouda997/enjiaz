
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileCheck, Shield, ClipboardCheck, BookOpen, Settings } from "lucide-react";

const ComplianceGovernance = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Compliance & Governance Consulting</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Compliance & Governance Consulting services help organizations navigate complex regulatory requirements, implement effective governance frameworks, and align security and technology practices with industry standards. We provide expert guidance to ensure your organization meets compliance obligations while optimizing processes and enhancing overall governance.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <FileCheck className="text-enjaz mr-3 flex-shrink-0" />
                Regulatory Compliance
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Compliance Assessment</span>
                  <span className="text-gray-600">Evaluate your organization's compliance status against relevant regulations and standards.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Gap Analysis & Remediation</span>
                  <span className="text-gray-600">Identify compliance gaps and develop actionable plans for remediation.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Policy & Procedure Development</span>
                  <span className="text-gray-600">Create comprehensive policies and procedures aligned with regulatory requirements.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Regulatory Compliance Programs</span>
                  <span className="text-gray-600">Design and implement programs for managing ongoing compliance with specific regulations.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Shield className="text-enjaz mr-3 flex-shrink-0" />
                Industry Standards & Frameworks
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Framework Implementation</span>
                  <span className="text-gray-600">Implement recognized frameworks such as NIST CSF, ISO 27001, COBIT, and others.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Control Design & Assessment</span>
                  <span className="text-gray-600">Design and evaluate controls against framework requirements and best practices.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Framework Integration</span>
                  <span className="text-gray-600">Integrate multiple frameworks to create comprehensive yet efficient control environments.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Certification Readiness</span>
                  <span className="text-gray-600">Prepare organizations for certifications such as ISO 27001, SOC 2, and PCI DSS.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Settings className="text-enjaz mr-3 flex-shrink-0" />
                IT & Security Governance
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Governance Framework Design</span>
                  <span className="text-gray-600">Develop comprehensive governance frameworks for technology and security.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Oversight Structure Implementation</span>
                  <span className="text-gray-600">Establish committees, roles, and responsibilities for effective governance.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Decision Rights & Accountability</span>
                  <span className="text-gray-600">Define clear decision-making processes and accountability mechanisms.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Performance Measurement</span>
                  <span className="text-gray-600">Establish metrics and reporting to monitor governance effectiveness.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <ClipboardCheck className="text-enjaz mr-3 flex-shrink-0" />
                Risk & Control Management
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Risk Assessment Methodology</span>
                  <span className="text-gray-600">Implement structured approaches to identify, assess, and prioritize risks.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Control Environment Design</span>
                  <span className="text-gray-600">Design effective controls aligned with risk priorities and compliance requirements.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Compliance Monitoring</span>
                  <span className="text-gray-600">Establish processes for ongoing monitoring of control effectiveness and compliance.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Third-Party Risk Management</span>
                  <span className="text-gray-600">Develop programs to manage compliance and governance risks in your vendor ecosystem.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Compliance & Governance Methodology</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Assessment & Scoping</h3>
                    <p className="text-gray-600">We begin by understanding your regulatory landscape, business context, and current compliance and governance status to define clear project scope and objectives.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Gap Analysis & Planning</h3>
                    <p className="text-gray-600">We conduct thorough assessments against relevant requirements and develop detailed remediation plans to address identified gaps.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Support</h3>
                    <p className="text-gray-600">We help implement required controls, policies, procedures, and governance structures to address compliance requirements and improve overall governance.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sustainable Compliance</h3>
                    <p className="text-gray-600">We establish ongoing monitoring and maintenance processes to ensure sustained compliance and continuous improvement of governance practices.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Regulations & Standards We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">ISO 27001/27002</h3>
                <p className="text-sm text-gray-600">Information Security</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">GDPR</h3>
                <p className="text-sm text-gray-600">Data Privacy</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">NIST CSF</h3>
                <p className="text-sm text-gray-600">Cybersecurity</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">PCI DSS</h3>
                <p className="text-sm text-gray-600">Payment Card Security</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">HIPAA</h3>
                <p className="text-sm text-gray-600">Healthcare Privacy</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">SOC 2</h3>
                <p className="text-sm text-gray-600">Service Organizations</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">COBIT</h3>
                <p className="text-sm text-gray-600">IT Governance</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
                <h3 className="font-semibold">ISO 22301</h3>
                <p className="text-sm text-gray-600">Business Continuity</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits of Our Compliance & Governance Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FileCheck className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Regulatory Confidence</h3>
                <p className="text-gray-600">Gain assurance that your organization meets regulatory requirements and is prepared for audits and assessments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Operational Efficiency</h3>
                <p className="text-gray-600">Improve governance processes to reduce redundancies and optimize compliance activities across the organization.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Risk Reduction</h3>
                <p className="text-gray-600">Identify and address compliance gaps before they lead to regulatory violations, fines, or reputational damage.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for Compliance & Governance?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Regulatory Expertise</h3>
                <p>Our consultants bring deep knowledge of regulatory requirements and industry standards across various sectors and geographies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Practical Approach</h3>
                <p>We focus on practical, sustainable compliance solutions that work within your organizational context rather than theoretical frameworks.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Holistic Perspective</h3>
                <p>We integrate compliance and governance with your broader risk management and security programs for a cohesive approach.</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Compliance & Governance Service Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-xl mb-3 text-navy-800">Compliance Assessment</h3>
                <p className="text-gray-600 mb-4">Comprehensive evaluation of your current compliance status against relevant regulations and standards.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Gap analysis report</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Prioritized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Remediation roadmap</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-enjaz relative">
                <div className="absolute top-0 right-0 bg-enjaz text-white text-xs px-2 py-1 uppercase font-bold">Popular</div>
                <h3 className="font-semibold text-xl mb-3 text-navy-800">Compliance Program Development</h3>
                <p className="text-gray-600 mb-4">Complete development and implementation of a sustainable compliance program aligned with your specific requirements.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Policy development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Control implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Governance framework</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Monitoring processes</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-xl mb-3 text-navy-800">Certification Readiness</h3>
                <p className="text-gray-600 mb-4">Preparation for formal certification or attestation against specific standards (ISO 27001, SOC 2, etc.).</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Pre-audit assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Documentation preparation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Audit support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Strengthen Your Compliance Posture?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to develop effective compliance and governance programs that protect your organization while enabling business growth.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Compliance Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComplianceGovernance;
