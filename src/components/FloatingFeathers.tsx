import { useEffect, useState } from "react";

const FeatherSVG = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 100 200"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 5C50 5 48 30 45 60C42 90 38 130 40 160C42 190 50 195 50 195C50 195 58 190 60 160C62 130 58 90 55 60C52 30 50 5 50 5Z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M50 5C50 5 25 40 20 80C15 120 18 160 25 180C32 200 50 195 50 195"
      stroke="currentColor"
      strokeOpacity="0.15"
      strokeWidth="0.5"
      fill="none"
    />
    <path
      d="M50 5C50 5 75 40 80 80C85 120 82 160 75 180C68 200 50 195 50 195"
      stroke="currentColor"
      strokeOpacity="0.15"
      strokeWidth="0.5"
      fill="none"
    />
    <path
      d="M50 5L50 195"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="1"
    />
    {/* Feather barbs */}
    {[...Array(12)].map((_, i) => (
      <g key={i}>
        <path
          d={`M50 ${20 + i * 14}C${35 - i * 0.5} ${25 + i * 14} ${25 - i} ${35 + i * 14} ${20 - i * 1.5} ${45 + i * 14}`}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="0.3"
          fill="none"
        />
        <path
          d={`M50 ${20 + i * 14}C${65 + i * 0.5} ${25 + i * 14} ${75 + i} ${35 + i * 14} ${80 + i * 1.5} ${45 + i * 14}`}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="0.3"
          fill="none"
        />
      </g>
    ))}
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
}

const FloatingFeathers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [feathers] = useState<Feather[]>(() => {
    const colors = [
      "hsl(252 52% 65%)", // lavender
      "hsl(214 83% 73%)", // sky
      "hsl(195 94% 74%)", // water
    ];
    
    return [
      { id: 1, x: 5, y: 10, size: 80, rotation: -15, color: colors[0], animationDuration: 18, animationDelay: 0 },
      { id: 2, x: 85, y: 25, size: 100, rotation: 20, color: colors[1], animationDuration: 22, animationDelay: 3 },
      { id: 3, x: 15, y: 45, size: 60, rotation: -25, color: colors[2], animationDuration: 15, animationDelay: 1 },
      { id: 4, x: 90, y: 60, size: 70, rotation: 30, color: colors[0], animationDuration: 20, animationDelay: 5 },
      { id: 5, x: 8, y: 75, size: 90, rotation: -10, color: colors[1], animationDuration: 25, animationDelay: 2 },
      { id: 6, x: 75, y: 85, size: 65, rotation: 15, color: colors[2], animationDuration: 17, animationDelay: 4 },
    ];
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {feathers.map((feather) => {
        const parallaxOffset = scrollY * (0.05 + feather.id * 0.02);
        
        return (
          <div
            key={feather.id}
            className="absolute transition-transform duration-1000 ease-out"
            style={{
              left: `${feather.x}%`,
              top: `${feather.y}%`,
              transform: `translateY(${parallaxOffset}px) rotate(${feather.rotation}deg)`,
            }}
          >
            <FeatherSVG
              className="feather-drift"
              style={{
                width: feather.size,
                height: feather.size * 2,
                color: feather.color,
                animationDuration: `${feather.animationDuration}s`,
                animationDelay: `${feather.animationDelay}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingFeathers;
