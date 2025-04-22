
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  title: string;
  description: string;
  industry: string;
  service: string;
  image: string;
  slug: string;
}

const CaseStudyCard = ({
  title,
  description,
  industry,
  service,
  image,
  slug,
}: CaseStudyCardProps) => {
  return (
    <Card className="overflow-hidden border-gray-100 group hover:border-enjaz-200 transition-colors">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="bg-navy-50 text-navy-700 hover:bg-navy-100">
            {industry}
          </Badge>
          <Badge variant="outline" className="bg-enjaz-50 text-enjaz-700 hover:bg-enjaz-100">
            {service}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-navy-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/case-studies/${slug}`} 
          className="inline-flex items-center text-enjaz font-medium group-hover:gap-2 transition-all"
        >
          Read Case Study <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
