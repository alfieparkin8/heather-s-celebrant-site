import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heatherPortrait from "@/assets/heather-portrait.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
            Heather Bliss
            <span className="block text-primary mt-2">Celebrant</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Creating meaningful ceremonies for life's most important moments. 
            As a registered celebrant, I officiate weddings, funerals and vow renewals 
            with warmth, compassion and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg group hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a href="tel:07975945831" className="flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                07975 945831
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-2 hover:border-primary hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="mailto:heather@heatherblisscelebrant.co.uk" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative animate-fade-in-up">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={heatherPortrait} 
              alt="Heather Bliss - Professional Celebrant" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-warm-gold/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
