
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => {
  return (
    <Card className="p-6 h-full flex flex-col justify-between bg-white border-gray-100 shadow hover:shadow-md transition-shadow">
      <div>
        <svg className="h-8 w-8 text-enjaz-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1.646 13.825 2.228 20.606c3.135-2.646 6.859-3.973 11.171-3.973v8.385H7.019v-8.385C7.019 12.835 9.352 4 9.352 4zM25.171 4c-4.895 3.456-7.706 9.825-7.123 16.606 3.135-2.646 6.859-3.973 11.17-3.973v8.385h-6.38v-8.385C22.838 12.835 25.171 4 25.171 4z" />
        </svg>
        <p className="text-gray-700 italic mb-4">{quote}</p>
      </div>
      <div>
        <p className="font-semibold text-navy-800">{author}</p>
        {(role || company) && (
          <p className="text-sm text-gray-600">
            {role && role}{role && company && ", "}{company && company}
          </p>
        )}
      </div>
    </Card>
  );
};

export default TestimonialCard;
