import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-navy-800 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/lovable-uploads/7295c858-a17e-4cac-bd33-5eb86af4d9cf.png" alt="Enjaz Data System" className="h-12 mb-4 brightness-0 invert animate-pulse" />
            <p className="text-gray-300 mt-4">
              Leading IT & Security Advisory Firm providing expert consulting services to help organizations navigate complex technology challenges.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-enjaz transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-enjaz transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-enjaz transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/assessments" className="text-gray-300 hover:text-enjaz transition-colors">
                  Technology & Security Assessments
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="text-gray-300 hover:text-enjaz transition-colors">
                  Cybersecurity Advisory
                </Link>
              </li>
              <li>
                <Link to="/services/strategy" className="text-gray-300 hover:text-enjaz transition-colors">
                  IT Strategy & Transformation
                </Link>
              </li>
              <li>
                <Link to="/services/cloud" className="text-gray-300 hover:text-enjaz transition-colors">
                  Cloud & Infrastructure Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/digital" className="text-gray-300 hover:text-enjaz transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-enjaz hover:text-enjaz-300 transition-colors mt-2 inline-block">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-enjaz transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-gray-300 hover:text-enjaz transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-enjaz transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-300 hover:text-enjaz transition-colors">
                  Insights & Resources
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-enjaz transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-enjaz transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-enjaz mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Technology Park, Suite 500<br />
                  Dubai, United Arab Emirates
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-enjaz flex-shrink-0" />
                <span className="text-gray-300">+216  58 255 395</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-enjaz flex-shrink-0" />
                <a href="mailto:info@enjaz-ds.com" className="text-gray-300 hover:text-enjaz transition-colors">
                  info@enjaz-ds.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Enjaz Data System. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-enjaz transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-enjaz transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 text-sm hover:text-enjaz transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;