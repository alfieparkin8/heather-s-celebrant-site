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
    quote: "I have great pleasure in writing this testimonial, relating to a Eulogy written for my Niece by Heather Bliss. The collecting of the information required from me was sympathetically gathered and put together in such a way, that when delivered gave a lovely story of Jane's life. Thank you for all your care and consideration both in the collecting and delivery of the Eulogy.",
    author: "Kevin S",
    service: "Eulogy",
  },
  {
    id: 2,
    quote: "Heather Bliss wrote a beautifully crafted funeral and included poems and readings that were so relevant to my mother's life. We changed the music and added various family tributes that were not in the original brief, and Heather was able to alter the running order with no issues, whilst also providing us with gentle advice to ensure that we kept to the 40 minutes! I would highly recommend Heather for her kind and caring manner and her flexibility in an ever-changing brief.",
    author: "Neil B",
    service: "Funeral Service",
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
