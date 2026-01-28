import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Heather made our wedding ceremony absolutely magical. Her warmth and attention to detail created a day we'll treasure forever.",
    author: "Sarah & James",
    service: "Wedding Ceremony",
  },
  {
    id: 2,
    quote: "During the most difficult time, Heather helped us celebrate Mum's life with dignity and love. We couldn't have asked for a more compassionate guide.",
    author: "The Thompson Family",
    service: "Funeral Service",
  },
  {
    id: 3,
    quote: "Our vow renewal was everything we dreamed of. Heather captured our journey perfectly and made the ceremony deeply personal.",
    author: "Michael & Linda",
    service: "Vow Renewal",
  },
  {
    id: 4,
    quote: "From our first meeting, Heather listened with such care. She understood exactly what we wanted and delivered beyond expectations.",
    author: "Emma & David",
    service: "Wedding Ceremony",
  },
  {
    id: 5,
    quote: "Heather's gentle guidance helped us honour Dad's memory beautifully. She was a true professional with a genuine heart.",
    author: "The Patterson Family",
    service: "Memorial Service",
  },
  {
    id: 6,
    quote: "Twenty-five years together celebrated perfectly. Heather made us fall in love all over again with her beautiful words.",
    author: "Robert & Christine",
    service: "Vow Renewal",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Main carousel container */}
      <div className="glass-card relative overflow-hidden min-h-[280px] md:min-h-[240px]">
        <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
        
        {/* Slides */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute top-0 left-0 right-0 translate-x-full"
              }`}
            >
              <div className="pt-8 pb-4 px-4 md:px-8 text-center">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-1">
                  <p className="font-serif text-xl text-primary font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
