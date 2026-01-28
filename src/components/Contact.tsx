import { useState } from "react";
import { Phone, Mail, MapPin, Send, Calendar, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    eventDate: "",
    location: "",
    message: "",
    contactMethod: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll be in touch soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      eventDate: "",
      location: "",
      message: "",
      contactMethod: "email",
    });
    setIsSubmitting(false);
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="07123 456789"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-sm font-medium text-foreground">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="wedding">Wedding Ceremony</option>
                    <option value="vow-renewal">Vow Renewal</option>
                    <option value="funeral">Funeral Service</option>
                    <option value="memorial">Memorial Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Event Date */}
                <div className="space-y-2">
                  <label htmlFor="eventDate" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Location/Venue
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="Bedford, Northampton..."
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Preferred Contact Method</label>
                <div className="flex gap-4">
                  {["email", "phone", "either"].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-sm capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Tell me a little about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-pill-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
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
                  href="tel:07975945831"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-lg font-medium text-foreground">07975 945831</p>
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

            {/* Service Areas Map Placeholder */}
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
