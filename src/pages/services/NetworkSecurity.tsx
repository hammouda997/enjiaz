
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Network, Shield, FileCheck, Eye, Layers } from "lucide-react";

const NetworkSecurity = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Network Security Architecture</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Network Security Architecture services help organizations design, implement, and maintain secure network infrastructures that protect critical assets while enabling business operations. We provide expert guidance on secure network design, segmentation strategies, and defense-in-depth approaches tailored to your specific environment and risk profile.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Network className="text-enjaz mr-3 flex-shrink-0" />
                Security Architecture Design
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Network Architecture Assessment</span>
                  <span className="text-gray-600">Evaluate existing network architectures against security best practices and identify improvement opportunities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Secure Architecture Development</span>
                  <span className="text-gray-600">Design secure network architectures that align with business requirements and security objectives.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Network Segmentation Strategy</span>
                  <span className="text-gray-600">Create effective segmentation approaches to limit lateral movement and protect critical assets.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Defense-in-Depth Planning</span>
                  <span className="text-gray-600">Implement layered security controls to provide comprehensive protection against various threats.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Shield className="text-enjaz mr-3 flex-shrink-0" />
                Network Security Controls
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Firewall Architecture</span>
                  <span className="text-gray-600">Design and optimize firewall deployment strategies, rule sets, and management processes.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Intrusion Detection/Prevention</span>
                  <span className="text-gray-600">Implement effective IDS/IPS solutions with properly tuned detection capabilities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Zero Trust Implementation</span>
                  <span className="text-gray-600">Develop and execute strategies for adopting zero trust network architecture principles.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">DDoS Protection</span>
                  <span className="text-gray-600">Design solutions to detect and mitigate distributed denial of service attacks.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Eye className="text-enjaz mr-3 flex-shrink-0" />
                Network Visibility & Monitoring
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Monitoring Architecture</span>
                  <span className="text-gray-600">Design comprehensive monitoring strategies to detect threats and anomalous activities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">SIEM Integration</span>
                  <span className="text-gray-600">Optimize security information and event management systems for effective threat detection.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Network Traffic Analysis</span>
                  <span className="text-gray-600">Implement solutions to analyze network flows and identify suspicious patterns.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Operations Integration</span>
                  <span className="text-gray-600">Align monitoring capabilities with security operations processes and workflows.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Layers className="text-enjaz mr-3 flex-shrink-0" />
                Secure Access & Connectivity
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Remote Access Solutions</span>
                  <span className="text-gray-600">Design secure remote access architectures for workforce mobility and third-party access.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">SD-WAN Security</span>
                  <span className="text-gray-600">Implement secure software-defined wide area network solutions with appropriate security controls.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Cloud Connectivity</span>
                  <span className="text-gray-600">Secure connections between on-premises environments and cloud providers.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">IoT/OT Network Segmentation</span>
                  <span className="text-gray-600">Design secure architectures for IoT and operational technology environments.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Network Security Methodology</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Network Assessment</h3>
                    <p className="text-gray-600">We evaluate your current network architecture, security controls, and traffic patterns to identify vulnerabilities and improvement opportunities.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Requirements Analysis</h3>
                    <p className="text-gray-600">We work with stakeholders to understand business requirements, compliance needs, and risk tolerance to inform security architecture decisions.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Architecture Design</h3>
                    <p className="text-gray-600">We design secure network architectures with appropriate segmentation, security controls, and monitoring capabilities.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Planning</h3>
                    <p className="text-gray-600">We create detailed implementation roadmaps with phased approaches to minimize disruption while enhancing security.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits of Our Network Security Architecture Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Enhanced Security Posture</h3>
                <p className="text-gray-600">Reduce attack surface and minimize potential impact of security incidents with well-designed network architecture.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FileCheck className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600">Meet compliance requirements with network designs that implement appropriate security controls and segmentation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Layers className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Business Enablement</h3>
                <p className="text-gray-600">Support business operations with secure network architectures that enable connectivity while managing risk.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for Network Security?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Technical Expertise</h3>
                <p>Our team brings deep technical knowledge across various network technologies, security controls, and architectural patterns.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Vendor Independence</h3>
                <p>We provide objective guidance focused on your requirements, not specific vendor solutions or products.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Practical Approach</h3>
                <p>We balance security requirements with operational needs to design architectures that are both secure and practical to implement.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Strengthen Your Network Security?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to design and implement a secure network architecture that protects your critical assets while enabling your business.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Network Security Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NetworkSecurity;
