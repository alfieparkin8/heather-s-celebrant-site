const FeatherIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.38 2a1 1 0 00-.71.29L16 6V4a1 1 0 00-1-1H9a1 1 0 00-1 1v2L4.33 2.29A1 1 0 002.92 3.7L7.17 8H3a1 1 0 00-1 1v6a1 1 0 001 1h4.17l-4.25 4.29a1 1 0 101.42 1.42L8 18v2a1 1 0 001 1h6a1 1 0 001-1v-2l3.67 3.71a1 1 0 001.42-1.42L16.83 16H21a1 1 0 001-1V9a1 1 0 00-1-1h-4.17l4.25-4.29A1 1 0 0020.38 2z"/>
  </svg>
);

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Conversation",
      description: "We begin with a relaxed, no-obligation chat—whether by phone, video, or in person. This is your opportunity to share your vision and for me to understand your needs and wishes.",
      details: "Free consultation • Understand your vision • Answer your questions",
    },
    {
      number: 2,
      title: "Getting to Know You",
      description: "I'll send you a questionnaire to help capture all the beautiful details of your story. For weddings and renewals, this includes how you met and your journey together. For memorials, it's about celebrating the life lived.",
      details: "Personal questionnaire • Story gathering • Meaningful details",
    },
    {
      number: 3,
      title: "Crafting Your Ceremony",
      description: "Using everything we've discussed, I write a bespoke ceremony script. You'll receive a draft to review, and we'll refine it together until it feels perfect.",
      details: "Custom script writing • Collaborative refinement • Your approval",
    },
    {
      number: 4,
      title: "Rehearsal & Preparation",
      description: "For weddings and vow renewals, I offer a rehearsal to ensure everyone feels comfortable and confident. For all services, I handle coordination with venues and musicians.",
      details: "Optional rehearsal • Venue coordination • Final preparations",
    },
    {
      number: 5,
      title: "Your Special Day",
      description: "On the day, I arrive early to ensure everything is in place. I lead your ceremony with warmth, professionalism, and heartfelt presence—creating a moment you'll treasure forever.",
      details: "Professional delivery • Emotional support • Memorable moments",
    },
  ];

  return (
    <section id="process" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Your Journey With Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From our first conversation to your special day, I guide you with 
            care and expertise every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 timeline-line rounded-full" />

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 animate-fade-in-up ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Feather marker */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-glow">
                  <FeatherIcon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] glass-card hover:shadow-glow transition-all duration-500 ${
                  index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                }`}
              >
                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <span className="text-4xl font-serif text-primary/30 font-bold">
                    {step.number.toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-sm text-primary/70 font-medium">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
