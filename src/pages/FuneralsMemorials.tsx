import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Process from "@/components/Process";

const FuneralsMemorials = () => {
  return (
    <div className="relative min-h-screen watercolor-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Funerals & Memorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are all unique and have our own story and you will want your funeral or memorial 
              service to reflect that. I will work with you to ensure that your funeral is unique and 
              tells the story that you would like for your deceased loved one. Sometimes it will be 
              sombre, and sometimes it will be filled with laughter – but it will be unique to you.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <Process />

        {/* CTA */}
        <section className="py-12 px-6">
          <div className="container mx-auto text-center">
            <a href="/contact" className="btn-pill-primary inline-block">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FuneralsMemorials;
