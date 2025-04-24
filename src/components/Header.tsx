import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  Menu, 
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Logo component with animation
const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <img 
      src="/lovable-uploads/1e7e7c4f-9b47-432b-b20b-80fa19fd1b2b.png" 
      alt="Enjaz Data System" 
      className="h-16 animate-pulse" 
    />
  </Link>
);

// About Dropdown component renamed to CompanyDropdown
const CompanyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Why ENJAZ", path: "/about/why-enjaz" },
    { name: "Our Mission & Vision", path: "/about/mission-vision" },
    { name: "Careers", path: "/careers" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="nav-link flex items-center gap-1 py-2"
      >
        Company <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100 animate-fade-in">
          {companyLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-enjaz"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Navigation Links
const NavigationLinks = () => (
  <nav className="hidden md:flex items-center gap-8">
    <Link to="/" className="nav-link py-2">Home</Link>
    <ServicesDropdown />
    <Link to="/approach" className="nav-link py-2">Our Approach</Link>
    <Link to="/industries" className="nav-link py-2">Industries</Link>
    <CompanyDropdown />
    <Link to="/insights" className="nav-link py-2">Insights</Link>
    <Link to="/contact" className="nav-link py-2">Contact</Link>
  </nav>
);

// Mobile menu
const MobileMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <button onClick={toggleMenu} className="text-navy-800">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="text-lg font-medium py-2" onClick={toggleMenu}>Home</Link>
          <div className="border-b border-gray-200 my-2"></div>
          
          <p className="text-lg font-medium py-2 text-enjaz">Services</p>
          <Link to="/services/assessments" className="text-base py-2 pl-4" onClick={toggleMenu}>Technology & Security Assessments</Link>
          <Link to="/services/strategy" className="text-base py-2 pl-4" onClick={toggleMenu}>IT Strategy & Transformation</Link>
          <Link to="/services/cybersecurity" className="text-base py-2 pl-4" onClick={toggleMenu}>Cybersecurity Advisory</Link>
          <Link to="/services/compliance" className="text-base py-2 pl-4" onClick={toggleMenu}>Compliance & Governance</Link>
          <Link to="/services/cloud" className="text-base py-2 pl-4" onClick={toggleMenu}>Cloud & Infrastructure Strategy</Link>
          <Link to="/services/network-security" className="text-base py-2 pl-4" onClick={toggleMenu}>Network Security Architecture</Link>
          <Link to="/services/ma-diligence" className="text-base py-2 pl-4" onClick={toggleMenu}>M&A Technology Due Diligence</Link>
          <Link to="/services/continuity" className="text-base py-2 pl-4" onClick={toggleMenu}>Business Continuity & Resilience</Link>
          <Link to="/services/executive" className="text-base py-2 pl-4" onClick={toggleMenu}>Executive Advisory Services</Link>
          <Link to="/services" className="text-base py-2 pl-4 text-enjaz" onClick={toggleMenu}>View All Services →</Link>
          
          <div className="border-b border-gray-200 my-2"></div>
          <Link to="/about" className="text-lg font-medium py-2" onClick={toggleMenu}>About Us</Link>
          <Link to="/approach" className="text-lg font-medium py-2" onClick={toggleMenu}>Our Approach</Link>
          <Link to="/industries" className="text-lg font-medium py-2" onClick={toggleMenu}>Industries</Link>
          <Link to="/insights" className="text-lg font-medium py-2" onClick={toggleMenu}>Insights</Link>
          <Link to="/contact" className="text-lg font-medium py-2" onClick={toggleMenu}>Contact</Link>
          
          <div className="mt-4">
            <Button className="w-full" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  ) : null;
};

// Header component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <NavigationLinks />
          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)} />
    </header>
  );
};

export default Header;
