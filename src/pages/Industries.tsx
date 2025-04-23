
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Briefcase, Building2, ShoppingBag, HeartPulse, GraduationCap, Truck } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      name: "Financial Services",
      icon: <Building className="h-10 w-10 text-enjaz" />,
      description: "Helping banks, insurance companies, and financial institutions navigate complex regulatory requirements, strengthen cybersecurity postures, and modernize legacy systems.",
      challenges: ["Regulatory compliance (GDPR, PCI-DSS)", "Legacy system modernization", "Fraud prevention and detection", "Digital transformation initiatives"]
    },
    {
      name: "Healthcare",
      icon: <HeartPulse className="h-10 w-10 text-enjaz" />,
      description: "Supporting healthcare providers, payers, and life sciences organizations in securing sensitive data, ensuring compliance, and leveraging technology to improve patient care.",
      challenges: ["HIPAA compliance", "Telemedicine infrastructure", "Patient data security", "Healthcare IT integration"]
    },
    {
      name: "Government",
      icon: <Building2 className="h-10 w-10 text-enjaz" />,
      description: "Assisting government agencies with secure digital transformation, citizen service delivery, and compliance with government-specific security frameworks.",
      challenges: ["Citizen service delivery", "Secure infrastructure", "Legacy modernization", "Compliance with FedRAMP, FISMA"]
    },
    {
      name: "Retail & E-commerce",
      icon: <ShoppingBag className="h-10 w-10 text-enjaz" />,
      description: "Enabling retailers to secure customer data, implement omnichannel strategies, and leverage technology to enhance customer experiences.",
      challenges: ["PCI compliance", "Omnichannel strategy", "Customer data protection", "Supply chain security"]
    },
    {
      name: "Manufacturing",
      icon: <Truck className="h-10 w-10 text-enjaz" />,
      description: "Helping manufacturers secure industrial control systems, implement Industry 4.0 initiatives, and protect intellectual property.",
      challenges: ["OT/IT security convergence", "Industry 4.0 implementation", "Supply chain risk management", "Intellectual property protection"]
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-10 w-10 text-enjaz" />,
      description: "Supporting educational institutions with secure digital learning environments, data protection, and technology strategy.",
      challenges: ["Student data protection", "Remote learning security", "Campus network security", "Educational technology integration"]
    },
    {
      name: "Professional Services",
      icon: <Briefcase className="h-10 w-10 text-enjaz" />,
      description: "Enabling law firms, accounting firms, and consultancies to protect client confidentiality and intellectual property.",
      challenges: ["Client data confidentiality", "Secure collaboration", "Regulatory compliance", "Remote work security"]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Solutions</h1>
            <p className="text-xl max-w-3xl leading-relaxed mb-8">
              We deliver specialized technology and security advisory services tailored to the unique challenges and regulatory requirements of your industry.
            </p>
          </div>
        </section>

        {/* Industries overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-800">Sectors We Serve</h2>
            
            <div className="grid gap-12">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    <div className="bg-navy-800/5 p-8 flex flex-col justify-center items-center text-center">
                      <div className="mb-4">
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-navy-800 mb-2">{industry.name}</h3>
                    </div>
                    
                    <div className="p-8 md:col-span-2">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <h4 className="font-semibold text-navy-800 mb-3">Key Challenges We Address:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {industry.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-enjaz mr-2"></div>
                            <span className="text-gray-700">{challenge}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4 mt-4">
                        <Button variant="outline" size="sm">Learn More</Button>
                        <Button size="sm">View Solutions</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Our Industry Approach</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy-800">Industry Expertise</h3>
                <p className="text-gray-700">
                  Our advisors bring specialized knowledge of your industry's unique challenges, regulatory requirements, and best practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy-800">Tailored Solutions</h3>
                <p className="text-gray-700">
                  We customize our advisory services to address the specific technology and security needs of your industry and organization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy-800">Regulatory Focus</h3>
                <p className="text-gray-700">
                  We keep you compliant with industry-specific regulations and standards through our specialized advisory services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Industry Success Stories</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-navy-800/10 flex items-center justify-center">
                  <Building className="h-16 w-16 text-navy-800/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-enjaz mb-2">Financial Services</div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">Regional Bank Strengthens Security Posture</h3>
                  <p className="text-gray-600 mb-4">
                    We helped a regional bank enhance their cybersecurity program, achieving regulatory compliance while improving threat detection capabilities.
                  </p>
                  <Button variant="link" className="px-0 text-enjaz">Read Case Study</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-navy-800/10 flex items-center justify-center">
                  <HeartPulse className="h-16 w-16 text-navy-800/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-enjaz mb-2">Healthcare</div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">Hospital Network Secures Patient Data</h3>
                  <p className="text-gray-600 mb-4">
                    Our team helped a hospital network implement robust data protection measures while maintaining compliance with HIPAA regulations.
                  </p>
                  <Button variant="link" className="px-0 text-enjaz">Read Case Study</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-navy-800/10 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-navy-800/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-enjaz mb-2">Retail</div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-800">Retailer Transforms Digital Experience</h3>
                  <p className="text-gray-600 mb-4">
                    We guided a major retailer through their digital transformation journey, enhancing customer experience while securing customer data.
                  </p>
                  <Button variant="link" className="px-0 text-enjaz">Read Case Study</Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button asChild>
                <Link to="/insights">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Industry-Specific Guidance?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our industry specialists are ready to help you address the unique technology and security challenges in your sector.
            </p>
            <Button asChild size="lg" className="bg-enjaz hover:bg-enjaz/90">
              <Link to="/contact">Talk to an Industry Expert</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Industries;
