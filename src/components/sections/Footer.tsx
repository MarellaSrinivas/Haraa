import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import whatsappimg from "@/assets/whatsapp.png";
import { Facebook, Instagram, MessageCircle , Youtube, Mail } from "lucide-react";
 


const Footer = () => {
  const footerLinks = {
    Collections: [
      "Bridal Jewelry",
      "Daily Wear",
      "Limited Edition",
      "Custom Designs",
      "Men's Collection"
    ],
    Services: [
      "Jewelry Consultation",
      "Custom Design",
      "Repair & Maintenance",
      "Appraisal Services",
      "Gift Cards"
    ],
    About: [
      "Our Story",
      "Craftsmanship",
      "Certifications",
      "Awards",
      "Press & Media"
    ],
    Support: [
      "Contact Us",
      "Size Guide",
      "Care Instructions",
      "Return Policy",
      "Warranty"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575669662800", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/haraa.goldanddiamonds/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/+918019180099", label: "MessageCircle"}


  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-gold mr-3" />
              <h3 className="font-playfair text-2xl font-semibold">
                Stay Updated with Haraa
              </h3>
            </div>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be the first to know about our new collections, exclusive offers, 
              and jewelry care tips. Join our luxury community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="bg-gold text-black-dark hover:bg-gold-light whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="font-playfair text-2xl font-bold text-gold mb-4">
              Haraa Gold & Diamonds
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Crafting timeless elegance since 1952. Where luxury meets artistry 
              in every piece, creating memories that last forever.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-dark transition-elegant"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}

                
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h4 className="font-semibold text-gold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 Haraa Gold & Diamonds. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-elegant">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-elegant">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition-elegant">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

             <a href="https://wa.me/+918019180099" className="whatsapp-button" target="_blank" title="Chat on WhatsApp">
                <img src={whatsappimg} width="60px" height="60px" alt="WhatsApp" />
              </a> 
      </div>
    </footer>
  );
};

export default Footer;
