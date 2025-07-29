import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-glow text-primary">
            BREAKING CIRCUITS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            INCIDENT RESPONSE AND REMEDIATION
          </p>
          
          <div className="mt-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-primary">Respond.</span>{" "}
              <span className="text-foreground">Remediate.</span>{" "}
              <span className="text-primary">Recover.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Breaking Circuits is your dedicated Incident Response and Remediation specialist, 
              offering rapid cybersecurity response, expert forensic analysis, and comprehensive 
              recovery solutions to minimize downtime and protect your digital infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                  Emergency Response →
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                >
                  Get Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-cyber-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Why Choose Breaking Circuits?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Proactive Security"
              description="Advanced threat detection and prevention to keep your business safe 24/7. We stay ahead of cyber threats so you don't have to."
            />
            
            <ServiceCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Expert Consultations"
              description="Tailored network and security strategies designed to optimize your IT infrastructure and meet your specific business needs."
            />
            
            <ServiceCard
              icon={<Server className="w-8 h-8 text-primary" />}
              title="Ransomware Resistant Edge Servers"
              description="Leveraging industry-leading products from partners like Scale Computing for robust, secure edge computing solutions that resist ransomware attacks."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait for a security incident. Contact our experts today for a comprehensive security assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                Call (763) 220-0148
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;