import { Heart, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Celebrate your love with a personalised ceremony that reflects your unique journey together. Every detail crafted with care and joy.",
    },
    {
      icon: Users,
      title: "Funerals",
      description: "Honor your loved one with a dignified, compassionate service that celebrates their life and brings comfort to family and friends.",
    },
    {
      icon: Sparkles,
      title: "Vow Renewals",
      description: "Reaffirm your commitment and celebrate your enduring love with a meaningful ceremony that marks your continued journey together.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-4">My Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional ceremony services tailored to your needs and wishes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="border-2 hover:border-primary hover:shadow-elegant transition-all duration-300 animate-fade-in-up bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
