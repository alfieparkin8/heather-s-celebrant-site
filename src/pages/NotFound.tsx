import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen watercolor-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        <div className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-9xl font-serif text-primary/20 font-bold">404</span>
            </div>
            
            {/* Message */}
            <h1 className="text-3xl font-serif text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Perhaps you've followed an outdated link or mistyped the address.
            </p>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="btn-pill-primary inline-flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Return Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="btn-pill-secondary inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
