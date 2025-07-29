import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            About Breaking Circuits
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Leading cybersecurity experts dedicated to protecting your digital infrastructure
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-cyber-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Breaking Circuits, we believe that cybersecurity is not just about technology—it's about protecting 
                what matters most to your business. Our mission is to provide rapid, expert incident response and 
                comprehensive remediation services that minimize downtime and protect your digital assets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver solutions that are both effective 
                and practical, ensuring your business can operate securely in an increasingly digital world.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-primary/10 p-12 rounded-full">
                <Shield className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Precision</h3>
              <p className="text-muted-foreground">
                Every action we take is calculated and precise, ensuring maximum effectiveness with minimal disruption.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with your team to understand your unique needs and deliver tailored solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from initial response to final recovery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Trust</h3>
              <p className="text-muted-foreground">
                Your security is our responsibility. We earn your trust through transparency and reliable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-cyber-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Expert Team
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our team consists of certified cybersecurity professionals with decades of combined experience in 
            incident response, digital forensics, and security consulting across various industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Response Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Breaking Circuits can strengthen your cybersecurity posture and protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;