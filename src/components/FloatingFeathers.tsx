import { useEffect, useState } from "react";

// Beautiful, detailed feather SVG
const FeatherSVG = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 80 160"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main feather body - soft and elegant */}
    <defs>
      <linearGradient id="featherGradient" x1="40" y1="0" x2="40" y2="160">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="0.06" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
      </linearGradient>
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Quill/Rachis (center spine) */}
    <path
      d="M40 5 C40 5 38 50 39 90 C40 130 40 155 40 155"
      stroke="currentColor"
      strokeOpacity="0.4"
      strokeWidth="0.8"
      fill="none"
    />
    
    {/* Left barbs - flowing, organic */}
    <path
      d="M40 5 C40 5 35 10 32 20 C28 35 25 50 26 70 C27 90 30 110 33 130 C35 145 38 155 40 158"
      stroke="currentColor"
      strokeOpacity="0.15"
      strokeWidth="0.5"
      fill="none"
    />
    <path
      d="M39 8 C39 8 28 18 22 35 C16 55 14 80 16 105 C18 130 25 148 38 158"
      stroke="currentColor"
      strokeOpacity="0.12"
      strokeWidth="0.4"
      fill="none"
    />
    <path
      d="M40 12 C40 12 22 28 15 55 C10 80 8 110 12 135 C15 152 30 158 40 160"
      stroke="currentColor"
      strokeOpacity="0.08"
      strokeWidth="0.3"
      fill="none"
    />
    
    {/* Right barbs - flowing, organic */}
    <path
      d="M40 5 C40 5 45 10 48 20 C52 35 55 50 54 70 C53 90 50 110 47 130 C45 145 42 155 40 158"
      stroke="currentColor"
      strokeOpacity="0.15"
      strokeWidth="0.5"
      fill="none"
    />
    <path
      d="M41 8 C41 8 52 18 58 35 C64 55 66 80 64 105 C62 130 55 148 42 158"
      stroke="currentColor"
      strokeOpacity="0.12"
      strokeWidth="0.4"
      fill="none"
    />
    <path
      d="M40 12 C40 12 58 28 65 55 C70 80 72 110 68 135 C65 152 50 158 40 160"
      stroke="currentColor"
      strokeOpacity="0.08"
      strokeWidth="0.3"
      fill="none"
    />
    
    {/* Subtle detail lines */}
    <path
      d="M40 25 C32 30 28 40 26 55"
      stroke="currentColor"
      strokeOpacity="0.06"
      strokeWidth="0.2"
      fill="none"
    />
    <path
      d="M40 25 C48 30 52 40 54 55"
      stroke="currentColor"
      strokeOpacity="0.06"
      strokeWidth="0.2"
      fill="none"
    />
    
    {/* Vane texture */}
    <path
      d="M40 40 C30 45 25 60 24 80"
      stroke="currentColor"
      strokeOpacity="0.05"
      strokeWidth="0.3"
      fill="none"
    />
    <path
      d="M40 40 C50 45 55 60 56 80"
      stroke="currentColor"
      strokeOpacity="0.05"
      strokeWidth="0.3"
      fill="none"
    />
    
    {/* Soft fill */}
    <path
      d="M40 5 C40 5 48 10 50 25 C53 45 52 70 48 95 C44 120 42 145 40 158 C38 145 36 120 32 95 C28 70 27 45 30 25 C32 10 40 5 40 5Z"
      fill="url(#featherGradient)"
    />
  </svg>
);

interface Feather {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  color: string;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

const FloatingFeathers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(1000);
  
  const [feathers] = useState<Feather[]>(() => {
    const colors = [
      "hsl(252 52% 65%)",   // lavender
      "hsl(252 52% 70%)",   // lighter lavender
      "hsl(214 83% 73%)",   // sky blue
      "hsl(214 83% 80%)",   // lighter sky
      "hsl(195 94% 74%)",   // water blue
      "hsl(195 94% 82%)",   // lighter water
    ];
    
    return [
      // Large, slow feathers
      { id: 1, x: 3, y: 5, size: 120, rotation: -12, color: colors[0], animationDuration: 25, animationDelay: 0, opacity: 0.6 },
      { id: 2, x: 88, y: 15, size: 100, rotation: 18, color: colors[2], animationDuration: 28, animationDelay: 4, opacity: 0.5 },
      { id: 3, x: 50, y: -5, size: 140, rotation: -5, color: colors[4], animationDuration: 32, animationDelay: 2, opacity: 0.4 },
      
      // Medium feathers
      { id: 4, x: 12, y: 40, size: 80, rotation: -20, color: colors[1], animationDuration: 20, animationDelay: 1, opacity: 0.55 },
      { id: 5, x: 75, y: 45, size: 90, rotation: 25, color: colors[3], animationDuration: 22, animationDelay: 5, opacity: 0.5 },
      { id: 6, x: 35, y: 35, size: 70, rotation: -8, color: colors[5], animationDuration: 18, animationDelay: 3, opacity: 0.45 },
      { id: 7, x: 92, y: 65, size: 85, rotation: 15, color: colors[0], animationDuration: 24, animationDelay: 7, opacity: 0.5 },
      
      // Smaller, background feathers
      { id: 8, x: 25, y: 70, size: 55, rotation: -30, color: colors[2], animationDuration: 16, animationDelay: 6, opacity: 0.4 },
      { id: 9, x: 65, y: 75, size: 60, rotation: 10, color: colors[4], animationDuration: 18, animationDelay: 8, opacity: 0.35 },
      { id: 10, x: 5, y: 85, size: 65, rotation: -15, color: colors[1], animationDuration: 21, animationDelay: 9, opacity: 0.45 },
      { id: 11, x: 95, y: 80, size: 50, rotation: 20, color: colors[3], animationDuration: 17, animationDelay: 10, opacity: 0.4 },
      
      // Very subtle background feathers
      { id: 12, x: 45, y: 55, size: 40, rotation: -5, color: colors[5], animationDuration: 14, animationDelay: 11, opacity: 0.3 },
      { id: 13, x: 80, y: 90, size: 45, rotation: 12, color: colors[0], animationDuration: 15, animationDelay: 12, opacity: 0.35 },
      { id: 14, x: 20, y: 95, size: 35, rotation: -18, color: colors[2], animationDuration: 13, animationDelay: 13, opacity: 0.3 },
      { id: 15, x: 60, y: 105, size: 38, rotation: 8, color: colors[4], animationDuration: 16, animationDelay: 14, opacity: 0.25 },
    ];
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
      aria-hidden="true"
      style={{ 
        background: `
          radial-gradient(ellipse 40% 30% at 10% 20%, hsl(252 52% 65% / 0.03) 0%, transparent 50%),
          radial-gradient(ellipse 50% 40% at 90% 30%, hsl(214 83% 73% / 0.03) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 50% 80%, hsl(195 94% 74% / 0.04) 0%, transparent 50%)
        `
      }}
    >
      {feathers.map((feather) => {
        const parallaxOffset = scrollY * (0.03 + feather.id * 0.015);
        const verticalBob = Math.sin(Date.now() * 0.001 + feather.id) * 8;
        
        return (
          <div
            key={feather.id}
            className="absolute transition-all duration-1000 ease-out"
            style={{
              left: `${feather.x}%`,
              top: `${feather.y}%`,
              opacity: feather.opacity,
              transform: `translateY(${parallaxOffset + verticalBob}px) rotate(${feather.rotation}deg)`,
            }}
          >
            <FeatherSVG
              className="feather-float"
              style={{
                width: feather.size,
                height: feather.size * 2,
                color: feather.color,
                animationDuration: `${feather.animationDuration}s`,
                animationDelay: `${feather.animationDelay}s`,
                filter: "drop-shadow(0 0 8px currentColor / 0.1)",
              }}
            />
          </div>
        );
      })}
      
      {/* Ambient light spots */}
      <div 
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          left: '15%',
          top: '30%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, hsl(252 52% 65% / 0.08) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
      <div 
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          right: '10%',
          top: '50%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, hsl(214 83% 73% / 0.06) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.015}px)`,
        }}
      />
      <div 
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          left: '40%',
          bottom: '10%',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, hsl(195 94% 74% / 0.05) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      />
    </div>
  );
};

export default FloatingFeathers;
