
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, FileText } from "lucide-react";

const MissionVision = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Our Mission & Vision</h1>
        
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-enjaz">
            <div className="flex items-center mb-6">
              <Target size={32} className="text-enjaz mr-3" />
              <h2 className="text-3xl font-bold text-navy-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To empower organizations through expert technology and security advisory that enables confident decision-making, reduces risk, and unlocks sustainable business growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We achieve this by combining deep technical expertise with business understanding to deliver practical, actionable advice that bridges the gap between technology investments and business outcomes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-navy-800">
            <div className="flex items-center mb-6">
              <Eye size={32} className="text-navy-800 mr-3" />
              <h2 className="text-3xl font-bold text-navy-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To be the most trusted technology and security advisory firm, recognized for our integrity, expertise, and the measurable value we create for our clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where organizations can confidently navigate complex technology landscapes and security challenges with the right guidance, enabling them to thrive in an increasingly digital world.
            </p>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FileText size={32} className="text-enjaz mr-3" />
            <h2 className="text-3xl font-bold text-navy-800">Our Core Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Client-Centric Focus</h3>
              <p className="text-gray-700">We place our clients' needs at the center of everything we do, tailoring our approach to deliver maximum value for their unique situation.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Vendor Independence</h3>
              <p className="text-gray-700">We provide unbiased advice free from vendor influence, ensuring recommendations are based solely on what's best for our clients.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Knowledge Excellence</h3>
              <p className="text-gray-700">We maintain cutting-edge knowledge through continuous learning and research to deliver insights that keep our clients ahead.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Ethical Practice</h3>
              <p className="text-gray-700">We adhere to the highest ethical standards in all our interactions, building trust through transparency and accountability.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Measurable Impact</h3>
              <p className="text-gray-700">We focus on delivering quantifiable results that demonstrate clear return on investment for our advisory services.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Long-term Partnership</h3>
              <p className="text-gray-700">We build enduring relationships with our clients, supporting them through their ongoing technology and security journey.</p>
            </div>
          </div>
        </section>
        
        <div className="text-center mt-12 p-8 bg-navy-800 text-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Us in Our Mission</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're looking to transform your organization's technology strategy, enhance your security posture, or navigate complex compliance requirements, we're here to help you succeed.
          </p>
          <Button asChild variant="outline" className="bg-white text-navy-800 hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MissionVision;
