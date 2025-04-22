
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 text-center">
          <div className="relative mx-auto mb-8">
            <h1 className="text-9xl font-bold text-navy-100">404</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Search size={48} className="text-enjaz" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-navy-800">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
