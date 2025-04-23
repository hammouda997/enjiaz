
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Lightbulb, PlaneTakeoff, ArrowRight, BarChart } from "lucide-react";

const Approach = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Advisory Approach</h1>
            <p className="text-xl max-w-3xl leading-relaxed mb-8">
              We combine strategic insight with practical expertise to deliver transformative advisory services. 
              Our methodology ensures consistent delivery of high-quality outcomes that address your unique challenges.
            </p>
          </div>
        </section>

        {/* Process overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-800">Our Advisory Process</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-enjaz text-center">
                  <div className="rounded-full bg-enjaz/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Search className="text-enjaz h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Discovery</h3>
                  <p className="text-gray-600">Understanding your unique context and challenges</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-enjaz text-center">
                  <div className="rounded-full bg-enjaz/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="text-enjaz h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Strategy</h3>
                  <p className="text-gray-600">Developing tailored recommendations and roadmaps</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-enjaz text-center">
                  <div className="rounded-full bg-enjaz/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <PlaneTakeoff className="text-enjaz h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Execution</h3>
                  <p className="text-gray-600">Supporting implementation with expert guidance</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-enjaz text-center">
                  <div className="rounded-full bg-enjaz/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart className="text-enjaz h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Optimization</h3>
                  <p className="text-gray-600">Continuous improvement and value measurement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-800">Our Methodology in Detail</h2>
            
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Discovery */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-3">1</div>
                    <h3 className="text-2xl font-semibold text-navy-800">Discovery & Assessment</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    We begin by thoroughly understanding your organization's current state, challenges, goals, and unique context. 
                    This phase includes:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Stakeholder interviews and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Current state documentation review</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Gap analysis against best practices</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Risk and opportunity identification</span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700">
                    The outcome is a comprehensive understanding of your current situation and a clear definition of the challenges to be addressed.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold mb-4 text-navy-800">Discovery Phase Deliverables:</h4>
                  <ul className="space-y-3">
                    <li className="border-l-4 border-enjaz pl-4 py-1">Current State Assessment Report</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Gap Analysis Document</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Stakeholder Requirements Summary</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Risk Register</li>
                  </ul>
                </div>
              </div>
              
              {/* Strategy */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg md:order-1">
                  <h4 className="font-semibold mb-4 text-navy-800">Strategy Phase Deliverables:</h4>
                  <ul className="space-y-3">
                    <li className="border-l-4 border-enjaz pl-4 py-1">Strategic Recommendations Report</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Prioritized Roadmap</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Resource & Budget Estimates</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Business Case & ROI Analysis</li>
                  </ul>
                </div>
                
                <div className="md:order-0">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-3">2</div>
                    <h3 className="text-2xl font-semibold text-navy-800">Strategy Development</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    Based on the discovery findings, we develop a strategic approach tailored to your specific needs. 
                    This phase includes:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Developing targeted recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Creating implementation roadmaps</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Prioritizing initiatives for maximum impact</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Building business cases and ROI analyses</span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700">
                    The outcome is a clear strategy and actionable roadmap that addresses your challenges and aligns with your business objectives.
                  </p>
                </div>
              </div>
              
              {/* Execution */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-3">3</div>
                    <h3 className="text-2xl font-semibold text-navy-800">Execution Support</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    We provide hands-on support to help you implement the strategic recommendations effectively. 
                    This phase includes:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Project governance and oversight</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Expert guidance during implementation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Stakeholder management and communication</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Risk mitigation and issue resolution</span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700">
                    The outcome is successful implementation of initiatives that deliver the intended benefits with minimal disruption.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold mb-4 text-navy-800">Execution Phase Deliverables:</h4>
                  <ul className="space-y-3">
                    <li className="border-l-4 border-enjaz pl-4 py-1">Implementation Plans</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Progress & Status Reports</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Risk Mitigation Strategies</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Knowledge Transfer Sessions</li>
                  </ul>
                </div>
              </div>
              
              {/* Optimization */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg md:order-1">
                  <h4 className="font-semibold mb-4 text-navy-800">Optimization Phase Deliverables:</h4>
                  <ul className="space-y-3">
                    <li className="border-l-4 border-enjaz pl-4 py-1">Performance Metrics Dashboard</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Value Realization Assessment</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Continuous Improvement Plan</li>
                    <li className="border-l-4 border-enjaz pl-4 py-1">Long-term Strategic Roadmap Updates</li>
                  </ul>
                </div>
                
                <div className="md:order-0">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-3">4</div>
                    <h3 className="text-2xl font-semibold text-navy-800">Value Optimization</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    We focus on ensuring that the implemented solutions deliver sustained value over time. 
                    This phase includes:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Measuring outcomes against objectives</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Identifying opportunities for enhancement</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Implementing continuous improvement</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                      <span>Updating strategies based on evolving needs</span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700">
                    The outcome is maximized long-term value from your investments and a foundation for ongoing improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why our approach works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-800">Why Our Approach Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Client-Centric Focus</h3>
                <p className="text-gray-700">
                  We tailor our approach to your specific context, challenges, and goals rather than applying a one-size-fits-all methodology.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Practical Expertise</h3>
                <p className="text-gray-700">
                  Our advisors bring deep technical knowledge and practical experience, ensuring our recommendations are both strategic and implementable.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Measurable Outcomes</h3>
                <p className="text-gray-700">
                  We define clear success metrics upfront and track progress throughout the engagement to ensure tangible results and ROI.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Knowledge Transfer</h3>
                <p className="text-gray-700">
                  We empower your team with the knowledge and skills needed to maintain and build upon the solutions we implement together.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Vendor Independence</h3>
                <p className="text-gray-700">
                  Our recommendations are based solely on what's best for your organization, free from vendor influence or product biases.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Long-Term Partnership</h3>
                <p className="text-gray-700">
                  We focus on building enduring relationships, supporting your organization through its ongoing technology and security journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Experience our proven approach to addressing your technology and security challenges.
            </p>
            <Button asChild size="lg" className="bg-enjaz hover:bg-enjaz/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Approach;
