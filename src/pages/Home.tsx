import Navigation from "@/components/Navigation";
import FloatingFeathers from "@/components/FloatingFeathers";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen watercolor-bg">
      {/* Floating feathers background */}
      <FloatingFeathers />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        
        {/* Kind Words Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl text-foreground mb-3">Kind Words</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>
        
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
