import { Heart, Sparkles, Flower2, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      category: "celebration",
      title: "Weddings",
      subtitle: "Celebrate Your Love Story",
      icon: Heart,
      description: "Your wedding day should reflect everything that makes your love unique. I work closely with you to craft a ceremony that tells your story—from how you met to your dreams for the future.",
      features: [
        "Personalised vows and readings",
        "Symbolic rituals of your choosing",
        "Inclusive of all beliefs and traditions",
        "Rehearsal support included",
      ],
    },
    {
      category: "celebration",
      title: "Vow Renewals",
      subtitle: "Reaffirm Your Journey Together",
      icon: Sparkles,
      description: "Whether marking a milestone anniversary or simply celebrating your continued commitment, a vow renewal is a beautiful way to honour your journey and look forward to the years ahead.",
      features: [
        "Reflection on your shared journey",
        "Updated personal vows",
        "Family involvement options",
        "Intimate or grand celebrations",
      ],
    },
    {
      category: "memorial",
      title: "Funerals",
      subtitle: "A Celebration of Life",
      icon: Flower2,
      description: "Saying goodbye is never easy, but a meaningful service can bring comfort and closure. I create dignified ceremonies that honour your loved one's life, spirit, and the impact they had on those around them.",
      features: [
        "Personal tributes and eulogies",
        "Music and readings of your choice",
        "Cultural and religious sensitivity",
        "Support through the planning process",
      ],
    },
    {
      category: "memorial",
      title: "Memorial Services",
      subtitle: "Honouring Cherished Memories",
      icon: Star,
      description: "Sometimes circumstances don't allow for an immediate service, or families wish to gather again to remember. Memorial services offer a meaningful opportunity to celebrate and reflect.",
      features: [
        "Flexible timing and location",
        "Collaborative storytelling",
        "Memory-sharing opportunities",
        "Personalised keepsakes",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Ceremonies for Life's
            <span className="block text-primary">Most Precious Moments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every ceremony is crafted with care, attention to detail, and a deep 
            respect for the moment you're marking.
          </p>
        </div>

        {/* Celebrations Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-water to-transparent" />
            <h3 className="text-xl font-serif text-water px-4">Celebrations of Love</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-water to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services
              .filter((s) => s.category === "celebration")
              .map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card group hover:shadow-glow transition-all duration-500 theme-celebration animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-water/20 text-sky group-hover:bg-water/30 transition-colors">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-water" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Memorial Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h3 className="text-xl font-serif text-primary px-4">Honouring Lives</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services
              .filter((s) => s.category === "memorial")
              .map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card group hover:shadow-glow transition-all duration-500 theme-memorial animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
