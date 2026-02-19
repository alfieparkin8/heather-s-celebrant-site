import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Sparkles } from "lucide-react";

const WeddingsVows = () => {
  return (
    <div className="relative min-h-screen watercolor-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Weddings & Vow Renewals
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating your love story with a ceremony that's uniquely yours
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            
            {/* Weddings */}
            <div className="glass-card p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-water/20 text-sky">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-foreground">Weddings</h2>
                  <p className="text-muted-foreground">Celebrate Your Love Story</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your wedding day should reflect everything that makes your love unique. I work closely 
                with you to craft a ceremony that tells your story—from how you met to your dreams for 
                the future.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Personalised vows and readings
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Symbolic rituals of your choosing
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Inclusive of all beliefs and traditions
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Rehearsal support included
                </li>
              </ul>
            </div>

            {/* Vow Renewals */}
            <div className="glass-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-water/20 text-sky">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-foreground">Vow Renewals</h2>
                  <p className="text-muted-foreground">Reaffirm Your Journey Together</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether marking a milestone anniversary or simply celebrating your continued commitment, 
                a vow renewal is a beautiful way to honour your journey and look forward to the years ahead.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Reflection on your shared journey
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Updated personal vows
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Family involvement options
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-water" />
                  Intimate or grand celebrations
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a href="/contact" className="btn-pill-primary inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WeddingsVows;
