import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen watercolor-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How I handle and protect your personal information
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="glass-card p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to me. This Privacy Policy explains how I collect, use, 
                  and protect any personal information you provide through this website or when 
                  contacting me about my celebrant services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">Information I Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I may collect the following information when you contact me or use my services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Your name and contact details (email address, phone number)</li>
                  <li>Information about the ceremony you're planning</li>
                  <li>Personal stories and memories you share for ceremony scripting</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">How I Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I use your information solely for the purpose of providing my celebrant services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To respond to your enquiries and arrange consultations</li>
                  <li>To plan and deliver your ceremony</li>
                  <li>To communicate with you about your arrangements</li>
                  <li>To coordinate with venues, funeral directors, and other suppliers as necessary</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All personal information is stored securely and handled in accordance with UK GDPR 
                  requirements. I do not share your information with third parties except where 
                  necessary to provide my services (e.g., venue coordination, funeral director liaison).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access the personal information I hold about you</li>
                  <li>Request corrections to any inaccurate information</li>
                  <li>Request deletion of your personal data at any time</li>
                  <li>Withdraw consent for me to use your information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-foreground mb-4">Contact Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or how I handle your data, 
                  please contact me at{' '}
                  <a href="mailto:heather@heatherblisscelebrant.co.uk" className="text-primary hover:underline">
                    heather@heatherblisscelebrant.co.uk
                  </a>
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  This Privacy Policy is effective as of February 2026 and may be updated periodically.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
