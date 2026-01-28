import { Phone, Mail } from "lucide-react";
import heatherPortrait from "@/assets/heather-portrait.png";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen pt-24 pb-16 px-6 relative">
      <div className="container mx-auto">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Registered Celebrant
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
                Heather Bliss
                <span className="block text-primary mt-2">Celebrant</span>
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Creating meaningful ceremonies that honour life's most precious moments. 
              Whether celebrating love, renewing vows, or honouring a life well-lived, 
              I bring warmth, empathy, and bespoke storytelling to every ceremony.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="btn-pill-primary inline-flex items-center justify-center gap-2 text-base">
                <Phone className="w-5 h-5" />
                Book a Consultation
              </button>
              <a href="mailto:heather@heatherblisscelebrant.co.uk" className="btn-pill-secondary inline-flex items-center justify-center gap-2 text-base">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>

            {/* Service badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Weddings", "Funerals", "Vow Renewals", "Memorials"].map(service => <span key={service} className="px-4 py-2 rounded-full text-sm bg-secondary/50 text-foreground border border-border">
                  {service}
                </span>)}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative animate-fade-in-up lg:order-last">
            <div className="img-hover-zoom relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-sky/20 to-water/20 rounded-2xl transform rotate-3 scale-105" />
              <img src={heatherPortrait} alt="Heather Bliss - Professional Celebrant in Bedfordshire" className="relative w-full h-auto rounded-2xl shadow-elevated" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-water/15 rounded-full blur-3xl -z-10" />
          </div>
        </div>

      </div>
    </section>;
};
export default Hero;