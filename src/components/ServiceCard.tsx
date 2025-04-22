
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="text-enjaz mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-navy-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-enjaz font-medium mt-auto group-hover:gap-2 transition-all"
      >
        Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
