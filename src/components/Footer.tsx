import { useState } from "react";
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  return <footer className="relative">
      {/* Gradient background */}
      <div className="footer-gradient py-16 px-6 bg-primary">
        <div className="container mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary-foreground">Heather Bliss</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Registered Celebrant creating meaningful ceremonies for weddings, 
                vow renewals, funerals, and memorials across Bedfordshire, 
                Northamptonshire, and Buckinghamshire.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg text-primary-foreground">Quick Contact</h4>
              <div className="space-y-3">
                <a href="tel:07975945831" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  07975 945831
                </a>
                <a href="mailto:heather@heatherblisscelebrant.co.uk" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  heather@heatherblisscelebrant.co.uk
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg text-primary-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Wedding Ceremonies</li>
                <li>Vow Renewals</li>
                <li>Funeral Services</li>
                <li>Memorial Services</li>
              </ul>
            </div>
          </div>

          {/* Privacy Policy Accordion */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <button onClick={() => setIsPrivacyOpen(!isPrivacyOpen)} className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm mb-4">
              {isPrivacyOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              Privacy Policy
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${isPrivacyOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="glass-card bg-primary-foreground/10 text-primary-foreground/90 text-sm space-y-3 mb-6">
                <h5 className="font-semibold text-primary-foreground">Privacy & Data Protection</h5>
                <p>
                  Your privacy is important to me. Any personal information you provide through this 
                  website is used solely for the purpose of planning and delivering your ceremony.
                </p>
                <p>
                  I do not share your information with third parties except where necessary to 
                  provide my services (e.g., venue coordination). All data is stored securely and 
                  handled in accordance with UK GDPR requirements.
                </p>
                <p>
                  You have the right to access, correct, or request deletion of your personal data 
                  at any time. For any privacy-related queries, please contact me directly.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Heather Bliss Celebrant. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40 mt-2">
              Registered Celebrant serving Bedford, Northampton, Milton Keynes & surrounding areas
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;