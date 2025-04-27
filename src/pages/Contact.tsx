import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageSquare, FileText, HelpCircle } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Have questions or ready to start a conversation? Reach out to our team of advisory experts.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-navy-800">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-navy-800">
                Get In <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our team of expert advisors are ready to help you with your technology and security challenges. Reach out through any of the following channels.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-3 rounded-full text-enjaz">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Our Office</h3>
                    <p className="text-gray-600">
                      123 Technology Park, Suite 500<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-3 rounded-full text-enjaz">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Phone</h3>
                    <p className="text-gray-600">+216 58 255 395</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-3 rounded-full text-enjaz">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Email</h3>
                    <a href="mailto:info@enjaz-advisory.com" className="text-gray-600 hover:text-enjaz transition-colors">info@enjaz-ds.net</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-enjaz-50 p-3 rounded-full text-enjaz">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow h-64 bg-gray-200">
                <div className="w-full h-full bg-navy-100 flex items-center justify-center text-navy-400">
                  <p className="text-center">Interactive Map<br />Would Be Displayed Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              How Can We <span className="text-gradient">Help You?</span>
            </h2>
            <p className="text-gray-600">
              Choose the best way to connect with our team based on your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-800">General Inquiries</h3>
              <p className="text-gray-600 mb-4">
                For general questions about our services, partnerships, or other information.
              </p>
              <a href="mailto:info@enjaz-advisory.com" className="text-enjaz hover:text-enjaz-700 font-semibold">
                info@enjaz-advisory.com
              </a>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Request a Proposal</h3>
              <p className="text-gray-600 mb-4">
                Looking for a detailed proposal for your specific technology or security needs?
              </p>
              <Link to="/contact" className="text-enjaz hover:text-enjaz-700 font-semibold">
                Submit a Request
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-enjaz-100 text-enjaz mb-6">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-800">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Existing clients can reach our technical support team for assistance.
              </p>
              <a href="mailto:support@enjaz-advisory.com" className="text-enjaz hover:text-enjaz-700 font-semibold">
                support@enjaz-advisory.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-800">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find quick answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-navy-800">How quickly can you start on a new project?</h3>
              <p className="text-gray-600">
                Typically, we can begin initial consultations within 1-2 business days and commence project work within 1-2 weeks, depending on the complexity and scope of your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-navy-800">Do you offer services internationally?</h3>
              <p className="text-gray-600">
                Yes, we work with clients globally, with particular expertise in the Middle East, Europe, and North America regions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-navy-800">How do you price your advisory services?</h3>
              <p className="text-gray-600">
                Our pricing is based on the scope, complexity, and duration of each engagement. We offer fixed-price packages for defined services and flexible engagement models for ongoing advisory needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-navy-800">Do you offer retainer-based services?</h3>
              <p className="text-gray-600">
                Yes, we provide retainer-based advisory services for clients who need ongoing strategic guidance, virtual CISO/CIO services, or regular security and compliance support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Contact;