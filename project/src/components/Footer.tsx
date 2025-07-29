import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-primary">Breaking Circuits</span>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Your dedicated cybersecurity partner for incident response and remediation.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Incident Response</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Forensic Analysis</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Security Assessment</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Edge Computing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>24/7 Emergency: (763) 220-0148</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@breakingcircuits.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Global Response Team</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Breaking Circuits. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;