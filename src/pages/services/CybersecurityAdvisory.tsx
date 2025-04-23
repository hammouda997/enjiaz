
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, FileText, Target, AlertTriangle, Users } from "lucide-react";

const CybersecurityAdvisory = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Cybersecurity Advisory & Risk Consulting</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Cybersecurity Advisory services provide strategic guidance to help organizations build robust security programs, manage cyber risks effectively, and maintain resilience against evolving threats. We combine technical expertise with business acumen to develop practical security strategies aligned with your organizational objectives and risk tolerance.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Shield className="text-enjaz mr-3 flex-shrink-0" />
                Security Program Development
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Program Assessment</span>
                  <span className="text-gray-600">Evaluate the maturity and effectiveness of your cybersecurity program against industry frameworks and best practices.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Strategy</span>
                  <span className="text-gray-600">Develop comprehensive security strategies aligned with business objectives and risk tolerance.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Roadmap Development</span>
                  <span className="text-gray-600">Create actionable security roadmaps with prioritized initiatives, timelines, and resource requirements.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Metrics</span>
                  <span className="text-gray-600">Establish meaningful metrics to measure security program effectiveness and demonstrate value to leadership.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Target className="text-enjaz mr-3 flex-shrink-0" />
                Risk Management
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Risk Assessment</span>
                  <span className="text-gray-600">Identify, analyze, and evaluate cybersecurity risks using structured methodologies.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Risk Treatment Planning</span>
                  <span className="text-gray-600">Develop strategies to mitigate, transfer, accept, or avoid identified risks based on business impact.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Third-Party Risk Management</span>
                  <span className="text-gray-600">Create programs to assess and manage security risks in your vendor and partner ecosystem.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Risk Governance</span>
                  <span className="text-gray-600">Establish governance structures, policies, and processes for ongoing risk management.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <FileText className="text-enjaz mr-3 flex-shrink-0" />
                Security Architecture & Engineering
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Architecture Assessment</span>
                  <span className="text-gray-600">Evaluate security architecture against best practices and identify improvement opportunities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Control Design</span>
                  <span className="text-gray-600">Design and implement appropriate security controls aligned with risk management objectives.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Zero Trust Architecture</span>
                  <span className="text-gray-600">Develop strategies for implementing zero trust principles across your environment.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Cloud Security Architecture</span>
                  <span className="text-gray-600">Design secure architectures for cloud environments and migrations.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <AlertTriangle className="text-enjaz mr-3 flex-shrink-0" />
                Security Incident Preparedness
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Incident Response Planning</span>
                  <span className="text-gray-600">Develop comprehensive incident response plans, procedures, and playbooks.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Tabletop Exercises</span>
                  <span className="text-gray-600">Conduct scenario-based exercises to test and improve incident response capabilities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Crisis Management</span>
                  <span className="text-gray-600">Establish frameworks for managing cyber crises, including communication strategies and decision-making processes.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Breach Readiness Assessment</span>
                  <span className="text-gray-600">Evaluate readiness to detect, respond to, and recover from security breaches.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Cybersecurity Advisory Approach</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Understand Business Context</h3>
                    <p className="text-gray-600">We begin by understanding your business objectives, industry context, regulatory requirements, and risk landscape to ensure our advice is relevant and aligned.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Assess Current State</h3>
                    <p className="text-gray-600">We evaluate your existing security program, capabilities, controls, and processes to identify strengths and areas for improvement.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Define Target State</h3>
                    <p className="text-gray-600">We collaborate with stakeholders to define the desired future state of your security program based on risk appetite and business requirements.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Develop Actionable Roadmap</h3>
                    <p className="text-gray-600">We create a prioritized roadmap with specific initiatives to bridge the gap between current and target states, considering resource constraints and critical risks.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits of Our Cybersecurity Advisory Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Target className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Risk-Based Approach</h3>
                <p className="text-gray-600">Focus security investments on addressing your most significant risks, optimizing resource allocation and business protection.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Practical Solutions</h3>
                <p className="text-gray-600">Receive advice and recommendations that are practical, implementable, and aligned with your organizational capabilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Executive Communication</h3>
                <p className="text-gray-600">Translate complex security concepts into business language that resonates with executives and boards.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for Cybersecurity Advisory?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Industry Experience</h3>
                <p>Our advisors bring specialized experience across various industries, understanding sector-specific threats, regulations, and challenges.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Balanced Perspective</h3>
                <p>We balance security requirements with business needs, ensuring solutions are both effective and practical to implement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Holistic Approach</h3>
                <p>We address people, processes, and technology aspects of cybersecurity for comprehensive program development.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Enhance Your Security Program?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to develop a strategic security program that protects your business while enabling growth and innovation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Security Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CybersecurityAdvisory;
