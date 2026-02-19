import { Heart, Users, Leaf } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
                Life's Beautiful Moments
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm Heather, and I believe every ceremony should be as unique as the people 
                at its heart. As a registered celebrant serving Bedfordshire, Northamptonshire, 
                and Buckinghamshire, I bring authentic warmth and genuine connection to every 
                service I lead.
              </p>
              <p>
                My journey to becoming a celebrant was born from a deep understanding that 
                life's pivotal moments deserve to be honoured with care, creativity, and 
                compassion. Whether you're celebrating the beginning of a marriage, renewing 
                your commitment, or saying goodbye to a loved one, I'm here to guide you 
                through with gentleness and expertise.
              </p>
              <p>
                I take the time to truly listen—to understand your stories, your hopes, 
                and your vision. Together, we create ceremonies that feel authentically 
                yours, filled with meaning that resonates with everyone present.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6 animate-fade-in-up">
            {[{
            icon: Heart,
            title: "Empathy",
            description: "Every ceremony begins with understanding. I listen with an open heart to create something truly meaningful.",
            color: "text-primary"
          }, {
            icon: Users,
            title: "Connection",
            description: "I believe in building genuine relationships with the families I serve, creating trust and comfort.",
            color: "text-sky"
          }, {
            icon: Leaf,
            title: "Storytelling",
            description: "No two ceremonies are alike. Each one is crafted to reflect your unique journey and personality.",
            color: "text-water"
          }].map((value, index) => <div key={value.title} className="glass-card flex gap-5 items-start group hover:shadow-glow transition-all duration-500" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className={`p-3 rounded-xl bg-background ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;