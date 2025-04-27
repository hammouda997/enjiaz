import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const WhyEnjaz = () => {
  return <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Why Choose ENJAZ</h1>
        
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy-800">Our Difference</h2>
            <p className="text-gray-700 leading-relaxed">At ENJAZ DATA SYSTEM, we bring together deep technical expertise and business acumen to deliver advisory services that drive tangible results. Our approach combines rigorous methodology with practical experience, ensuring that our recommendations are both strategic and implementable.</p>
            <p className="text-gray-700 leading-relaxed">
              Unlike traditional consultancies, we focus exclusively on technology and security, allowing us to maintain cutting-edge knowledge and specialized expertise that general practice firms cannot match.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-navy-800">Key Differentiators</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                <p><span className="font-medium">Specialized Expertise</span> — Focused exclusively on technology and security advisory</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                <p><span className="font-medium">Vendor Independence</span> — Unbiased recommendations with your best interests at heart</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                <p><span className="font-medium">Proven Methodology</span> — Rigorous approach refined through years of practice</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-enjaz text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</div>
                <p><span className="font-medium">Senior-Led Delivery</span> — Experienced advisors directly involved in your projects</p>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-navy-800">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-enjaz">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in everything we do, from the advice we provide to the way we engage with clients.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-enjaz">Integrity</h3>
              <p className="text-gray-700">We operate with complete transparency and honesty, building trust through ethical practices and reliable guidance.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-medium mb-3 text-enjaz">Innovation</h3>
              <p className="text-gray-700">We constantly explore emerging technologies and methodologies to provide forward-looking advice.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-navy-800">Client Success Stories</h2>
          <div className="bg-navy-800 text-white p-8 rounded-lg">
            <blockquote className="text-lg italic mb-4">"ENJAZ DATA SYSTEM provided strategic guidance that transformed our security posture and helped us navigate complex compliance requirements with confidence. Their expertise was invaluable to our business."</blockquote>
            <p className="font-medium">— Chief Information Security Officer, MTT</p>
          </div>
        </section>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-navy-800">Ready to Work With Us?</h2>
          <Button asChild className="px-8 py-6 text-lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>;
};
export default WhyEnjaz;