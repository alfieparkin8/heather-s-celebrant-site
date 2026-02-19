import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

// NOTE: Replace these with your actual EmailJS credentials
// Get these from: https://dashboard.emailjs.com/admin
const EMAILJS_SERVICE_ID = "service_ih410ws";
const EMAILJS_TEMPLATE_ID = "template_9zcnqib";
const EMAILJS_PUBLIC_KEY = "2vrQzO3hLky-twvXV";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSending(true);
    setSendStatus("idle");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSendStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative min-h-screen watercolor-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you. Whether you're planning a wedding, a vow renewal, 
              or need support with a funeral or memorial service, please reach out.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <a href="mailto:heather@heatherblisscelebrant.co.uk" className="text-primary hover:underline">
                          heather@heatherblisscelebrant.co.uk
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Phone</h3>
                        <a href="tel:+447748113636" className="text-primary hover:underline">
                          +44 7748 113636
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Service Area</h3>
                        <p className="text-muted-foreground">
                          Based in Bedford, covering Bedfordshire, Buckinghamshire, and Northamptonshire
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card p-8">
                <p className="text-2xl font-serif text-foreground mb-6">Send a Message</p>
                
                {sendStatus === "success" && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-sm text-green-600">I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}
                
                {sendStatus === "error" && (
                  <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Failed to send message</p>
                      <p className="text-sm text-red-600">Please try again or email me directly.</p>
                    </div>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-foreground mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="from_email" className="block text-sm font-medium text-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service_type" className="block text-sm font-medium text-foreground mb-1">
                      Service Required
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service...</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Vow Renewal">Vow Renewal</option>
                      <option value="Funeral">Funeral</option>
                      <option value="Memorial Service">Memorial Service</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell me about your ceremony..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-pill-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <span className="animate-spin">⟳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
