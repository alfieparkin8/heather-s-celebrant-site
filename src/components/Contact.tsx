import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS credentials
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
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Let's Create Something
            <span className="block text-primary">Beautiful Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'd love to hear from you. Whether you have questions or are ready to 
            start planning your ceremony, reach out and let's begin the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="glass-card animate-fade-in-up">
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

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium text-foreground">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label htmlFor="service_type" className="text-sm font-medium text-foreground">
                  Service Required *
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                >
                  <option value="">Select a service...</option>
                  <option value="Wedding">Wedding Ceremony</option>
                  <option value="Vow Renewal">Vow Renewal</option>
                  <option value="Funeral">Funeral Service</option>
                  <option value="Memorial Service">Memorial Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Tell me about your ceremony..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn-pill-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            {/* Direct Contact */}
            <div className="glass-card">
              <h3 className="font-serif text-2xl text-foreground mb-6">Get in Touch Directly</h3>
              <div className="space-y-4">
                <a
                  href="tel:+447748113636"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-lg font-medium text-foreground">+44 7748 113636</p>
                  </div>
                </a>

                <a
                  href="mailto:heather@heatherblisscelebrant.co.uk"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-medium text-foreground break-all">heather@heatherblisscelebrant.co.uk</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div className="glass-card">
              <h3 className="font-serif text-2xl text-foreground mb-4">Service Areas</h3>
              <p className="text-muted-foreground mb-4">
                Proudly serving families across Bedfordshire, Northamptonshire, and Buckinghamshire.
              </p>
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-water/20 via-sky/20 to-primary/20 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Bedford • Northampton • Milton Keynes
                    <br />
                    Luton • Buckingham • Wellingborough
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
