
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, Shield, CreditCard, Settings, Lock } from "lucide-react";

const CloudInfrastructure = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-navy-800">Cloud & Infrastructure Strategy</h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Cloud & Infrastructure Strategy services help organizations navigate the complexities of modern cloud environments, optimize infrastructure investments, and implement secure, scalable solutions. We provide expert guidance on cloud migration, hybrid architectures, cost optimization, and governance to ensure your infrastructure supports your business objectives.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Cloud className="text-enjaz mr-3 flex-shrink-0" />
                Cloud Strategy & Migration
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Cloud Readiness Assessment</span>
                  <span className="text-gray-600">Evaluate your organization's readiness for cloud adoption and identify potential challenges and opportunities.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Migration Planning</span>
                  <span className="text-gray-600">Develop comprehensive migration strategies for workloads, applications, and data to cloud environments.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Cloud Provider Selection</span>
                  <span className="text-gray-600">Objectively evaluate cloud providers and services based on your specific requirements and use cases.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Hybrid & Multi-Cloud Strategy</span>
                  <span className="text-gray-600">Design optimal hybrid and multi-cloud architectures that balance flexibility, cost, and operational requirements.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <CreditCard className="text-enjaz mr-3 flex-shrink-0" />
                Cloud Economics & Optimization
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Cost Modeling & Analysis</span>
                  <span className="text-gray-600">Create accurate financial models for cloud migration and ongoing operations to support decision making.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Resource Optimization</span>
                  <span className="text-gray-600">Identify and implement opportunities to optimize resource allocation, sizing, and utilization.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Reserved Capacity Planning</span>
                  <span className="text-gray-600">Develop strategies for reserved instances, savings plans, and other cost optimization approaches.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">FinOps Implementation</span>
                  <span className="text-gray-600">Establish cloud financial management practices and tools to maintain ongoing cost control and optimization.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Lock className="text-enjaz mr-3 flex-shrink-0" />
                Cloud Security & Governance
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Security Architecture</span>
                  <span className="text-gray-600">Design secure cloud architectures with appropriate controls, segmentation, and protection mechanisms.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Compliance Framework</span>
                  <span className="text-gray-600">Ensure cloud deployments meet regulatory and industry compliance requirements.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Identity & Access Management</span>
                  <span className="text-gray-600">Implement robust IAM strategies for cloud resources with least-privilege principles.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Cloud Governance Model</span>
                  <span className="text-gray-600">Establish policies, procedures, and controls for cloud resource management and security.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-navy-800 flex items-center">
                <Settings className="text-enjaz mr-3 flex-shrink-0" />
                Infrastructure Modernization
              </h3>
              <ul className="space-y-4">
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Infrastructure as Code</span>
                  <span className="text-gray-600">Implement automation and DevOps practices for infrastructure provisioning and management.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Containerization Strategy</span>
                  <span className="text-gray-600">Develop approaches for container adoption, orchestration, and management.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Serverless Architecture</span>
                  <span className="text-gray-600">Design and implement serverless solutions for appropriate workloads to maximize scalability and cost-efficiency.</span>
                </li>
                <li className="pl-5 border-l-2 border-enjaz">
                  <span className="block font-medium">Legacy Modernization</span>
                  <span className="text-gray-600">Create roadmaps for modernizing traditional infrastructure and applications for cloud-native environments.</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Our Cloud Advisory Methodology</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Discovery & Assessment</h3>
                    <p className="text-gray-600">We assess your current infrastructure, applications, and business requirements to understand your unique cloud journey starting point.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Strategy Development</h3>
                    <p className="text-gray-600">We create a customized cloud strategy aligned with your business objectives, defining the target state, migration approach, and governance framework.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Architecture & Design</h3>
                    <p className="text-gray-600">We design secure, scalable cloud architectures that optimize performance, security, and cost while meeting your application requirements.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-enjaz text-white flex items-center justify-center mr-4">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Implementation Planning</h3>
                    <p className="text-gray-600">We develop detailed implementation roadmaps with prioritized workloads, migration strategies, and risk mitigation approaches.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-navy-800">Key Benefits of Our Cloud & Infrastructure Strategy Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Risk Reduction</h3>
                <p className="text-gray-600">Minimize migration risks, security vulnerabilities, and operational disruptions with our proven methodologies and expert guidance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <CreditCard className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Optimize cloud spending with proper sizing, reserved capacity strategies, and continuous monitoring of resource utilization.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Settings className="h-12 w-12 text-enjaz mb-4" />
                <h3 className="font-semibold text-lg mb-2">Enhanced Agility</h3>
                <p className="text-gray-600">Increase business agility with cloud infrastructure that scales with your needs and supports rapid innovation and deployment.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 bg-navy-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose ENJAZ for Cloud Strategy?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Multi-Cloud Expertise</h3>
                <p>Our team brings deep experience across AWS, Azure, Google Cloud, and other platforms to provide truly independent guidance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Business Focus</h3>
                <p>We prioritize business outcomes over technology, ensuring your cloud strategy supports your organization's strategic objectives.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-enjaz">Holistic Approach</h3>
                <p>We address technology, processes, people, and governance to ensure successful cloud adoption and operations.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy-800">Ready to Optimize Your Cloud Strategy?</h2>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              Partner with ENJAZ to develop a cloud and infrastructure strategy that maximizes value, minimizes risk, and accelerates your digital transformation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Cloud Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CloudInfrastructure;
