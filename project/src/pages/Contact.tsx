import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Get immediate help or schedule a consultation with our cybersecurity experts
          </p>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 px-6 bg-destructive/10 border-y border-destructive/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <AlertTriangle className="w-12 h-12 text-destructive" />
            <div>
              <h2 className="text-2xl font-bold text-destructive mb-2">
                Security Emergency?
              </h2>
              <p className="text-lg text-muted-foreground">
                Call our 24/7 emergency hotline for immediate incident response
              </p>
            </div>
            <Button size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-8 py-4 text-lg">
              Emergency: (763) 220-0148
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Get in Touch
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <select 
                    id="service" 
                    className="w-full mt-2 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="incident-response">Incident Response</option>
                    <option value="security-assessment">Security Assessment</option>
                    <option value="consulting">Security Consulting</option>
                    <option value="monitoring">Security Monitoring</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your security needs or current situation..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-primary">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">Emergency: (763) 220-0148</p>
                      <p className="text-muted-foreground">General: (763) 220-0148</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@breakingcircuits.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Global Response Team</p>
                      <p className="text-muted-foreground">Serving clients worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Availability</h3>
                      <p className="text-muted-foreground">Emergency Response: 24/7/365</p>
                      <p className="text-muted-foreground">General Inquiries: Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Response Time Guarantee
                </h3>
                <p className="text-muted-foreground mb-4">
                  We understand that cybersecurity incidents require immediate attention. That's why we guarantee:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Emergency incidents: 15-minute response</li>
                  <li>• General inquiries: Same-day response</li>
                  <li>• Consultation requests: 24-hour response</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;