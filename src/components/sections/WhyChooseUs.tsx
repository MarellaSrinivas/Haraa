import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Sparkles, Clock, Users, Trophy } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Certified Authenticity",
      description: "Every diamond certified by GIA and every gold piece hallmarked for purity"
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Only VVS clarity diamonds and 18K+ gold used in our creations"
    },
    {
      icon: Clock,
      title: "Timeless Warranty",
      description: "Lifetime warranty on craftsmanship with complimentary maintenance"
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Dedicated jewelry consultants to guide your perfect selection"
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Recognized by International Jewelry Awards for design excellence"
    },
    {
      icon: CheckCircle,
      title: "Ethical Sourcing",
      description: "Conflict-free diamonds and responsibly sourced precious metals"
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-black border-black border-0">
            Excellence Defined
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Why Choose Haraa Gold & Diamonds
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            When you choose Haraa, you're not just buying jewelry – you're investing in 
            a legacy of excellence, craftsmanship, and uncompromising quality that spans generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-gold-dark transition-elegant">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
         
            <div>
              <div className="text-3xl font-bold text-gold mb-2">10K+</div>
              <div className="text-sm text-primary-foreground/70">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">5K+</div>
              <div className="text-sm text-primary-foreground/70">Unique Designs</div>
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;