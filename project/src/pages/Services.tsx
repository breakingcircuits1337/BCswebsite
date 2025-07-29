import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Zap, 
  Server, 
  Search, 
  Clock, 
  Users, 
  FileSearch, 
  AlertTriangle, 
  Lock,
  Monitor,
  Database,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect, respond, and recover from digital threats
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6 bg-cyber-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Core Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              icon={<AlertTriangle className="w-8 h-8 text-primary" />}
              title="24/7 Incident Response"
              description="Immediate response to cybersecurity incidents with our expert team available around the clock to minimize damage and restore operations quickly."
            />
            
            <ServiceCard
              icon={<FileSearch className="w-8 h-8 text-primary" />}
              title="Digital Forensics"
              description="Comprehensive forensic analysis to identify attack vectors, assess damage, and gather evidence for legal proceedings and insurance claims."
            />
            
            <ServiceCard
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Threat Hunting"
              description="Proactive threat detection and elimination using advanced techniques to identify hidden threats before they cause damage."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Lock className="w-8 h-8 text-primary" />}
              title="Ransomware Recovery"
              description="Specialized ransomware incident response and recovery services to restore your systems and data without paying criminals."
            />
            
            <ServiceCard
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Crisis Management"
              description="Expert guidance through security incidents including stakeholder communication, regulatory compliance, and reputation management."
            />
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Security Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Monitor className="w-8 h-8 text-primary" />}
              title="Security Monitoring"
              description="Continuous monitoring of your network and systems with real-time threat detection and automated response capabilities."
            />
            
            <ServiceCard
              icon={<Network className="w-8 h-8 text-primary" />}
              title="Network Security"
              description="Comprehensive network security assessments, firewall configuration, and intrusion detection system implementation."
            />
            
            <ServiceCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Data Protection"
              description="Advanced data encryption, backup solutions, and data loss prevention strategies to safeguard your critical information."
            />
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-6 bg-cyber-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Specialized Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Server className="w-8 h-8 text-primary" />}
              title="Edge Computing Security"
              description="Ransomware-resistant edge servers and secure computing solutions using industry-leading partners like Scale Computing."
            />
            
            <ServiceCard
              icon={<Search className="w-8 h-8 text-primary" />}
              title="Vulnerability Assessment"
              description="Comprehensive security assessments to identify vulnerabilities and provide actionable remediation strategies."
            />
            
            <ServiceCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Security Consulting"
              description="Expert cybersecurity consulting to develop tailored security strategies that align with your business objectives."
            />
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-primary/20 rounded-lg p-12">
            <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Emergency Response Guarantee
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              When every second counts, our incident response team is ready to act. We guarantee initial response within 
              <span className="text-primary font-bold"> 15 minutes</span> for critical incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                  Emergency Hotline: (763) 220-0148
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;