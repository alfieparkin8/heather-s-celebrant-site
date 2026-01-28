import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const FeatherLost = () => (
  <svg viewBox="0 0 100 200" className="w-32 h-64 text-primary/30 animate-float" fill="none">
    <path
      d="M50 5C50 5 48 30 45 60C42 90 38 130 40 160C42 190 50 195 50 195C50 195 58 190 60 160C62 130 58 90 55 60C52 30 50 5 50 5Z"
      fill="currentColor"
    />
    <path d="M50 5L50 195" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2"/>
    {[...Array(8)].map((_, i) => (
      <g key={i}>
        <path
          d={`M50 ${30 + i * 18}C${30 - i} ${40 + i * 18} ${15 - i * 2} ${55 + i * 18} ${5 - i * 2} ${70 + i * 18}`}
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d={`M50 ${30 + i * 18}C${70 + i} ${40 + i * 18} ${85 + i * 2} ${55 + i * 18} ${95 + i * 2} ${70 + i * 18}`}
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          fill="none"
        />
      </g>
    ))}
  </svg>
);

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen watercolor-bg flex items-center justify-center px-6">
      <div className="text-center max-w-lg mx-auto">
        {/* Floating feather illustration */}
        <div className="flex justify-center mb-8">
          <FeatherLost />
        </div>

        {/* 404 Display */}
        <h1 className="font-serif text-8xl md:text-9xl text-primary/20 mb-4">
          404
        </h1>
        
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
          This feather has drifted away...
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for seems to have floated off on the breeze. 
          But don't worry—let me guide you back to familiar ground.
        </p>

        <a
          href="/"
          className="btn-pill-primary inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Return Home
        </a>

        {/* Decorative quote */}
        <p className="mt-12 text-sm text-muted-foreground/60 italic">
          "Every path leads somewhere, even the unexpected ones."
        </p>
      </div>
    </div>
  );
};

export default NotFound;
