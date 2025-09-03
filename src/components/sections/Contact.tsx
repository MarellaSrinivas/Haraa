import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["82-A, Road Number 55, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 80191 80099"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@haraagold.com", "support@haraagold.com"]
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon - Sun : 10:00 AM - 9:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-black border-black">
            Get in Touch
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect piece? Our jewelry consultants are here to 
            help you discover the elegance that speaks to your heart.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 elegant-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 elegant-shadow">
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                  Schedule a Private Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book an exclusive appointment with our master jewelers for personalized 
                  guidance and bespoke jewelry creation.
                </p>
                <Button variant="luxury" className="w-full">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 elegant-shadow">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input placeholder="What would you like to discuss?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your jewelry needs or questions..."
                    rows={5}
                  />
                </div>

                <Button variant="luxury" className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;