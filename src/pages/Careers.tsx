
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Users, Heart, Brain } from "lucide-react";

const Careers = () => {
  // Sample job openings
  const openings = [
    {
      title: "Senior Cybersecurity Consultant",
      location: "Remote",
      type: "Full-time",
      description: "Join our team as a Senior Cybersecurity Consultant to help clients identify and address their security challenges.",
      requirements: [
        "5+ years of cybersecurity experience",
        "Experience with security frameworks (NIST, ISO 27001)",
        "Strong communication and client management skills",
        "Security certifications (CISSP, CISM) preferred"
      ]
    },
    {
      title: "IT Strategy Advisor",
      location: "Hybrid",
      type: "Full-time",
      description: "Help organizations align their technology investments with business objectives as an IT Strategy Advisor.",
      requirements: [
        "7+ years in IT strategy or enterprise architecture",
        "Experience in digital transformation initiatives",
        "Strong analytical and problem-solving abilities",
        "Experience in technology roadmap development"
      ]
    },
    {
      title: "Cloud Security Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Provide expert guidance on secure cloud implementations and migrations across major platforms.",
      requirements: [
        "4+ years working with cloud security",
        "Deep knowledge of AWS, Azure, or GCP security controls",
        "Experience with cloud security posture management",
        "Cloud security certifications preferred"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team of Experts</h1>
            <p className="text-xl max-w-2xl leading-relaxed mb-8">
              Build your career at ENJAZ, where expertise meets opportunity. Help organizations navigate complex technology and security challenges while growing professionally.
            </p>
            <Button asChild size="lg" className="bg-enjaz hover:bg-enjaz/90">
              <a href="#openings">View Current Openings</a>
            </Button>
          </div>
        </section>

        {/* Why work with us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Why Work With Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-enjaz/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Brain className="text-enjaz" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  We invest in your professional development with training, certifications, and opportunities to work on diverse and challenging projects.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-enjaz/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-enjaz" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a team of passionate professionals who support each other and share knowledge to deliver exceptional client outcomes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="rounded-full bg-enjaz/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="text-enjaz" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We value your wellbeing with flexible work arrangements, competitive benefits, and a culture that respects personal time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current openings */}
        <section id="openings" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Current Openings</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {openings.map((job, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-navy-800">{job.title}</h3>
                    <div className="flex space-x-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{job.location}</span>
                      <span className="bg-enjaz/10 text-enjaz text-xs px-2 py-1 rounded">{job.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <h4 className="font-medium text-navy-800 mb-2">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="text-enjaz mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full">Apply Now</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-navy-800">Our Hiring Process</h2>
            
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-gray-300 ml-6">
                <li className="mb-10 ml-8">
                  <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-enjaz bg-white flex items-center justify-center">
                    <span className="text-enjaz font-semibold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">Application Review</h3>
                  <p className="text-gray-600 mt-2">Our hiring team carefully reviews your application and resume to assess your qualifications and experience.</p>
                </li>
                
                <li className="mb-10 ml-8">
                  <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-enjaz bg-white flex items-center justify-center">
                    <span className="text-enjaz font-semibold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">Initial Interview</h3>
                  <p className="text-gray-600 mt-2">A conversation with our HR team to discuss your background, career goals, and alignment with our company culture.</p>
                </li>
                
                <li className="mb-10 ml-8">
                  <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-enjaz bg-white flex items-center justify-center">
                    <span className="text-enjaz font-semibold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">Technical Assessment</h3>
                  <p className="text-gray-600 mt-2">Depending on the role, you may be asked to complete a technical assessment or case study to demonstrate your expertise.</p>
                </li>
                
                <li className="mb-10 ml-8">
                  <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-enjaz bg-white flex items-center justify-center">
                    <span className="text-enjaz font-semibold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">Final Interviews</h3>
                  <p className="text-gray-600 mt-2">Meet with potential team members and leadership to dive deeper into your experience and discuss specific role expectations.</p>
                </li>
                
                <li className="ml-8">
                  <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border border-enjaz bg-white flex items-center justify-center">
                    <span className="text-enjaz font-semibold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-800">Offer & Onboarding</h3>
                  <p className="text-gray-600 mt-2">Successful candidates receive an offer, followed by a comprehensive onboarding process to set you up for success.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-navy-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              We're looking for talented individuals who are passionate about technology and helping organizations succeed.
            </p>
            <Button size="lg" className="bg-enjaz hover:bg-enjaz/90">
              Submit Your Application
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
