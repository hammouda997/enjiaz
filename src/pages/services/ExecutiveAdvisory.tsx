
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BarChart, Briefcase, MessageCircle, Target } from "lucide-react";

const ExecutiveAdvisory = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Executive Advisory Services</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Executive Advisory Services provide senior leaders with expert guidance on technology and security decisions, strategy development, and organizational transformation. We partner with executives to navigate complex challenges, prioritize investments, and communicate effectively with boards and stakeholders about technology initiatives and risks.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Briefcase className="text-enjaz mr-3 flex-shrink-0" />
                Fractional & Virtual CxO Services
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Virtual CIO/CISO Services</span>
                  <span className="text-gray-600">Provide experienced technology or security leadership on a part-time or interim basis.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Executive Team Augmentation</span>
                  <span className="text-gray-600">Supplement your leadership team with specialized expertise during transitions or for specific initiatives.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Leadership Mentoring</span>
                  <span className="text-gray-600">Guide and develop emerging technology and security leaders in your organization.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Succession Planning</span>
                  <span className="text-gray-600">Develop strategies for leadership transitions and capability development.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Target className="text-enjaz mr-3 flex-shrink-0" />
                Strategic Planning & Decision Support
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Strategy Development</span>
                  <span className="text-gray-600">Create comprehensive technology strategies aligned with business objectives.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Investment Prioritization</span>
                  <span className="text-gray-600">Develop frameworks for evaluating and prioritizing technology investments.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Digital Transformation Guidance</span>
                  <span className="text-gray-600">Navigate complex transformation initiatives with expert guidance and best practices.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Vendor Selection & Negotiation</span>
                  <span className="text-gray-600">Support major technology procurement decisions and contract negotiations.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <BarChart className="text-enjaz mr-3 flex-shrink-0" />
                Technology Governance & Risk
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Governance Framework Development</span>
                  <span className="text-gray-600">Design effective technology governance structures, committees, and processes.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Risk Management Strategies</span>
                  <span className="text-gray-600">Develop approaches for identifying, assessing, and managing technology and security risks.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Compliance Oversight</span>
                  <span className="text-gray-600">Ensure regulatory compliance and adherence to industry standards for technology and security.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Performance Measurement</span>
                  <span className="text-gray-600">Establish metrics and dashboards to monitor technology performance and value delivery.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <MessageCircle className="text-enjaz mr-3 flex-shrink-0" />
                Board & Stakeholder Communication
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Board Reporting & Presentations</span>
                  <span className="text-gray-600">Develop effective board materials and presentations on technology topics.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Executive Education</span>
                  <span className="text-gray-600">Provide education sessions on technology trends, risks, and opportunities for leadership teams.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Technology Value Communication</span>
                  <span className="text-gray-600">Develop strategies for communicating the business value of technology investments.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Crisis Communication Planning</span>
                  <span className="text-gray-600">Prepare for effective stakeholder communications during technology incidents.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">How We Work With Executives</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Understanding Context</h3>
                    <p className="text-gray-600">We begin by understanding your business objectives, challenges, and the specific technology or security issues you're facing to provide relevant guidance.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tailored Advisory</h3>
                    <p className="text-gray-600">We provide customized advisory services based on your specific needs, whether it's ongoing guidance, project-specific support, or strategic planning assistance.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Knowledge Transfer</h3>
                    <p className="text-gray-600">We focus on sharing knowledge and building internal capabilities, ensuring your team develops the skills to sustain initiatives long-term.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ongoing Partnership</h3>
                    <p className="text-gray-600">We establish enduring relationships, providing continuity and consistent guidance as your organization evolves.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits for Senior Leaders</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Strategic Clarity</h3>
                <p className="text-gray-600">Gain clear direction on technology priorities and investments that align with business objectives and deliver measurable value.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Target className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Risk Confidence</h3>
                <p className="text-gray-600">Make informed decisions with a clear understanding of technology and security risks and effective mitigation strategies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Leadership Enhancement</h3>
                <p className="text-gray-600">Strengthen your technology leadership capabilities and team effectiveness through expert guidance and mentoring.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for Executive Advisory?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Executive Experience</h3>
                <p>Our advisors have served in senior technology and security leadership roles, understanding the challenges executives face.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Business Focus</h3>
                <p>We prioritize business outcomes over technology for its own sake, ensuring advice is practical and aligned with your objectives.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Independent Perspective</h3>
                <p>We provide objective, vendor-neutral guidance focused solely on your organization's best interests.</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Executive Advisory Engagement Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-xl mb-3 text-navy-800">On-Demand Advisory</h3>
                <p className="text-gray-600 mb-4">Access to expert guidance when you need it for specific issues or decisions without ongoing commitment.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Ad-hoc consultations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Issue-specific guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Decision support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-enjaz relative">
                <div className="absolute top-0 right-0 bg-enjaz text-white text-xs px-2 py-1 uppercase font-bold">Popular</div>
                <h3 className="font-semibold text-xl mb-3 text-navy-800">Retainer Advisory</h3>
                <p className="text-gray-600 mb-4">Ongoing access to expert guidance with regular check-ins and priority response for emerging issues.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Monthly advisory sessions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Email & phone support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Quarterly strategic reviews</span>
                  </li>
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-xl mb-3 text-navy-800">Fractional CxO</h3>
                <p className="text-gray-600 mb-4">Dedicated technology or security leadership on a part-time basis, integrated with your executive team.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Regular on-site presence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Leadership team participation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-enjaz/20 text-enjaz flex items-center justify-center mr-2 mt-0.5">✓</div>
                    <span>Full executive functions</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Elevate Your Technology Leadership?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ for expert guidance that helps you make confident technology decisions, communicate effectively with stakeholders, and drive business value.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule an Executive Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExecutiveAdvisory;
