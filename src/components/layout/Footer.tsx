import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand (logo image) */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="RJTEK"
                className="h-16 md:h-20 w-auto max-w-[240px] object-contain block"
              />
              <span className="text-lg font-semibold text-primary-foreground">RJTEK</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Your Digital Ally — providing expert IT support services to businesses and individuals worldwide for over 10 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/printer-support" className="hover:text-secondary transition-colors">Printer Support</Link></li>
              <li><Link to="/wifi-support" className="hover:text-secondary transition-colors">Wi-Fi Support</Link></li>
              <li><Link to="/computer-support" className="hover:text-secondary transition-colors">Computer Support</Link></li>
              <li><Link to="/email-support" className="hover:text-secondary transition-colors">Email Support</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                +1 209 540 4065
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                info@rjtek.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
                4253 IL Route 83, Long Grove, IL 60047
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} RJTEK LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
