import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCheck, Award, Users, Lightbulb, Shield, Lock } from "lucide-react";

// Team member data
const teamMembers = [{
  name: "Ahmed Al-Farsi",
  role: "Chief Executive Officer",
  bio: "Over 20 years of experience in IT strategy and digital transformation. Previously led technology initiatives at major financial institutions.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
}, {
  name: "Sarah Thompson",
  role: "Chief Technology Officer",
  bio: "Expert in enterprise architecture and cloud transformation with experience spanning multiple industries including healthcare and finance.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
}, {
  name: "David Chen",
  role: "Chief Security Officer",
  bio: "Cybersecurity veteran with background in threat intelligence and security architecture design for government and critical infrastructure.",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
}, {
  name: "Fatima Al-Mazroui",
  role: "Director of Advisory Services",
  bio: "Specializes in IT governance and compliance frameworks with deep expertise in regional regulatory requirements and standards.",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
}];

// Partners data
const partners = [{
  name: "ISO",
  logo: "https://placehold.co/200x100/f5f5f5/333333?text=ISO+Certified"
}, {
  name: "NIST",
  logo: "https://placehold.co/200x100/f5f5f5/333333?text=NIST+Framework"
}, {
  name: "CMMI",
  logo: "https://placehold.co/200x100/f5f5f5/333333?text=CMMI+Partner"
}, {
  name: "Cloud Security Alliance",
  logo: "https://placehold.co/200x100/f5f5f5/333333?text=CSA+Member"
}];
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Enjaz Data System</h1>
            <p className="text-xl text-gray-200 mb-8">
              A leading IT & Security Advisory firm dedicated to helping organizations navigate complex technology challenges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-800">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-gray-600 mb-4"> Enjaz Data System was Founded with a clear mission: to provide organizations with expert, vendor-neutral guidance in an increasingly complex technology landscape.</p>
              <p className="text-gray-600 mb-4">
                What began as a small team of IT security consultants has grown into a comprehensive advisory firm with expertise spanning cybersecurity, IT strategy, cloud computing, digital transformation, and more.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across various sectors including finance, healthcare, government, and retail, helping them navigate their most pressing technology challenges with confidence.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Our team at work" className="rounded-lg shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-enjaz p-6 rounded-lg">
                <p className="text-white font-bold text-4xl">10+</p>
                <p className="text-white">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-enjaz-100 text-enjaz mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations to make informed technology decisions that enhance security, optimize operations, and drive business growth through expert, vendor-neutral advisory services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-navy-100 text-navy-800 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted technology advisory partner for organizations, known for our expertise, integrity, and commitment to delivering measurable business value through technology excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-gray-600">
              These principles guide everything we do and shape how we work with our clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards in all our interactions and recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-4">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships based on transparency, reliability and consistent delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-4">
                <CheckCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in everything we do, from advisory services to client support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-800">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              Our <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-gray-600">
              Meet the experts who lead our advisory services and drive our mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-navy-800">{member.name}</h3>
                  <p className="text-enjaz mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Certifications & Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              Certifications & <span className="text-gradient">Partnerships</span>
            </h2>
            <p className="text-gray-600">
              We maintain industry-leading certifications and strategic partnerships to ensure our clients receive the highest quality advisory services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map(partner => <div key={partner.name} className="flex items-center justify-center p-8 bg-white rounded-lg shadow">
                <img src={partner.logo} alt={partner.name} className="max-h-16" />
              </div>)}
          </div>
          
          <Separator className="my-16" />
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-navy-800">Our Team's Professional Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">CISSP</span>
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">CISM</span>
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">CEH</span>
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">PMP</span>
              
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">AWS Certified Solutions Architect</span>
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">Microsoft Azure Expert</span>
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">ISO</span>
              <span className="bg-navy-50 text-navy-800 px-4 py-2 rounded-full text-sm">ITIL</span>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Connect with our team of expert advisors to discuss your technology and security challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-enjaz hover:bg-enjaz-600" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/services">
                Explore Our Services <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default About;