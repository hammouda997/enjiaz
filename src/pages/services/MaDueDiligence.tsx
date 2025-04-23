
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, AlertTriangle, FileCheck, DollarSign, Layers } from "lucide-react";

const MaDueDiligence = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">M&A Technology Due Diligence</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our M&A Technology Due Diligence services help organizations identify and evaluate technology and security risks during mergers, acquisitions, and divestitures. We provide comprehensive assessments that uncover hidden issues, evaluate transition complexities, and quantify the investment required to remediate problems or integrate systems effectively.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Search className="text-enjaz mr-3 flex-shrink-0" />
                Technology Due Diligence
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">IT Infrastructure Assessment</span>
                  <span className="text-gray-600">Evaluate the target company's infrastructure for reliability, scalability, and technical debt.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Application Portfolio Review</span>
                  <span className="text-gray-600">Assess the application landscape for strategic alignment, redundancies, and modernization needs.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technical Capabilities Evaluation</span>
                  <span className="text-gray-600">Review the organization's technical capabilities, processes, and operational effectiveness.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Asset Valuation</span>
                  <span className="text-gray-600">Determine the value of technology assets and intellectual property.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <AlertTriangle className="text-enjaz mr-3 flex-shrink-0" />
                Security & Compliance Due Diligence
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Posture Assessment</span>
                  <span className="text-gray-600">Evaluate the target company's security controls, capabilities, and vulnerabilities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Compliance Verification</span>
                  <span className="text-gray-600">Assess compliance with relevant regulations and industry standards.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Incident History</span>
                  <span className="text-gray-600">Uncover past security incidents and evaluate the response effectiveness.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Privacy Risk Assessment</span>
                  <span className="text-gray-600">Identify data privacy risks and compliance issues that may impact the transaction.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <DollarSign className="text-enjaz mr-3 flex-shrink-0" />
                Valuation & Deal Advisory
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Cost Analysis</span>
                  <span className="text-gray-600">Identify ongoing technology costs and potential hidden expenses.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Investment Requirements</span>
                  <span className="text-gray-600">Determine necessary investments to address technology gaps or security issues.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Synergy Identification</span>
                  <span className="text-gray-600">Identify potential technology synergies and optimization opportunities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Deal Structure Advisory</span>
                  <span className="text-gray-600">Provide guidance on technology aspects that may impact deal structure or terms.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Layers className="text-enjaz mr-3 flex-shrink-0" />
                Integration & Separation Planning
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Integration Strategy</span>
                  <span className="text-gray-600">Develop approaches for integrating technology environments, applications, and data.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Separation Planning</span>
                  <span className="text-gray-600">Create strategies for separating technology environments in divestiture scenarios.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Transition Service Agreements</span>
                  <span className="text-gray-600">Define requirements for technology-related transition service agreements.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Integration Risk Mitigation</span>
                  <span className="text-gray-600">Identify and address risks that may impact successful technology integration.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our M&A Due Diligence Methodology</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pre-Deal Assessment</h3>
                    <p className="text-gray-600">We work with your team to understand the transaction objectives, identify key technology areas for examination, and establish evaluation criteria.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deep Dive Investigation</h3>
                    <p className="text-gray-600">We conduct thorough reviews of documentation, systems, processes, and conduct interviews with key personnel to evaluate technology and security aspects.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Risk Identification & Analysis</h3>
                    <p className="text-gray-600">We identify key risks, opportunities, and issues that may impact the transaction value or integration success.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Integration Planning</h3>
                    <p className="text-gray-600">We develop integration strategies and roadmaps that address identified risks and leverage opportunities.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits of Our M&A Technology Due Diligence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <AlertTriangle className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Risk Identification</h3>
                <p className="text-gray-600">Uncover hidden technology and security risks that could impact transaction value or post-close operations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <DollarSign className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Valuation Support</h3>
                <p className="text-gray-600">Provide insights that inform accurate valuation and negotiation positions based on technology realities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Layers className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Integration Success</h3>
                <p className="text-gray-600">Develop effective integration plans that minimize disruption and maximize synergies.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for M&A Technology Due Diligence?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Transaction Experience</h3>
                <p>Our team brings extensive experience in technology due diligence across various industries and transaction types.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Technical Depth</h3>
                <p>We combine technical expertise with business acumen to provide insights that go beyond surface-level assessments.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Post-Deal Support</h3>
                <p>We can support beyond the transaction close with integration planning and execution to ensure long-term success.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Planning a Transaction?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to ensure technology and security aspects are thoroughly assessed to maximize transaction value and minimize post-close surprises.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Due Diligence Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MaDueDiligence;
