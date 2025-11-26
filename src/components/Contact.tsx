import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'd love to hear from you and discuss how I can help make your ceremony special and memorable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <a 
            href="tel:07975945831"
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card border-2 border-border hover:border-primary hover:shadow-elegant transition-all duration-300 animate-fade-in-up group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">
                07975 945831
              </p>
            </div>
          </a>
          
          <a 
            href="mailto:heather@heatherblisscelebrant.co.uk"
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-card border-2 border-border hover:border-primary hover:shadow-elegant transition-all duration-300 animate-fade-in-up group"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors break-all">
                heather@heatherblisscelebrant.co.uk
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
