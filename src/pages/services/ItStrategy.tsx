
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Lightbulb, TrendingUp, Compass } from "lucide-react";

const ItStrategy = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">IT Strategy & Transformation</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our IT Strategy & Transformation services help organizations align their technology investments with business objectives, create actionable roadmaps, and guide successful digital transformations. We partner with you to develop strategies that drive innovation, optimize operations, and create sustainable competitive advantage.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Compass className="text-enjaz mr-3 flex-shrink-0" />
                Strategic IT Planning
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">IT Strategy Development</span>
                  <span className="text-gray-600">Align technology initiatives with business goals and create comprehensive IT strategies that drive value.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Roadmapping</span>
                  <span className="text-gray-600">Develop actionable roadmaps that sequence initiatives for maximum impact and resource optimization.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Enterprise Architecture</span>
                  <span className="text-gray-600">Design future-state architecture that supports business needs while ensuring scalability and flexibility.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Investment Planning</span>
                  <span className="text-gray-600">Optimize your technology investments to deliver maximum business value and ROI.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <TrendingUp className="text-enjaz mr-3 flex-shrink-0" />
                Digital Transformation
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Transformation Strategy</span>
                  <span className="text-gray-600">Create comprehensive strategies for digital transformation that address people, process, and technology.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Legacy Modernization</span>
                  <span className="text-gray-600">Develop approaches to modernize legacy systems while minimizing disruption and managing risk.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Selection</span>
                  <span className="text-gray-600">Evaluate and select technologies that best meet your business requirements and integrate with your ecosystem.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Change Management</span>
                  <span className="text-gray-600">Support the human side of transformation with effective change management and adoption strategies.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <BarChart className="text-enjaz mr-3 flex-shrink-0" />
                IT Governance & Operating Model
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">IT Governance Framework</span>
                  <span className="text-gray-600">Implement effective governance models to ensure alignment, oversight, and value delivery.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Operating Model Design</span>
                  <span className="text-gray-600">Design IT operating models that enable efficient service delivery and organizational agility.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">IT Performance Measurement</span>
                  <span className="text-gray-600">Establish KPIs and metrics to measure technology performance and demonstrate business value.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">IT Financial Management</span>
                  <span className="text-gray-600">Optimize IT spending and implement transparent financial management practices.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Lightbulb className="text-enjaz mr-3 flex-shrink-0" />
                Advisory & Leadership Support
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">CIO/CTO Advisory</span>
                  <span className="text-gray-600">Provide strategic guidance and support to technology leadership on key decisions and initiatives.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Fractional CIO/CTO Services</span>
                  <span className="text-gray-600">Deliver experienced technology leadership on a part-time or interim basis.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Board & Executive Education</span>
                  <span className="text-gray-600">Educate executives and board members on technology trends, risks, and opportunities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Due Diligence</span>
                  <span className="text-gray-600">Assess technology capabilities for investments, mergers, and acquisitions.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Approach to IT Strategy</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Assessment & Discovery</h3>
                    <p className="text-gray-600">We begin by understanding your business goals, current technology landscape, challenges, and opportunities. This comprehensive assessment forms the foundation for strategic planning.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Strategic Alignment</h3>
                    <p className="text-gray-600">We align technology initiatives with business objectives, ensuring that every IT investment contributes to organizational success and competitive advantage.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Roadmap Development</h3>
                    <p className="text-gray-600">We create actionable technology roadmaps with clear initiatives, timelines, resource requirements, and expected outcomes, providing a practical path forward.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Support</h3>
                    <p className="text-gray-600">We provide guidance and oversight during the execution phase, helping you navigate challenges, manage risks, and realize the expected benefits.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for IT Strategy?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Business-First Approach</h3>
                <p>We prioritize business outcomes over technology for its own sake, ensuring alignment with your strategic goals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Vendor Independence</h3>
                <p>Our advice is unbiased, focusing solely on the best solutions for your unique situation and requirements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Practical Experience</h3>
                <p>Our advisors bring real-world implementation experience, ensuring recommendations are practical and achievable.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Develop Your IT Strategy?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to create a technology strategy that drives business value, enables innovation, and positions your organization for future success.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItStrategy;
