import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Gem, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Three generations of master craftsmen creating timeless pieces"
    },
    {
      icon: Gem,
      title: "Certified Excellence",
      description: "Only the finest diamonds and gold meeting international standards"
    },
    {
      icon: Award,
      title: "Handcrafted Quality",
      description: "Every piece meticulously crafted by skilled artisans"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Bespoke designs tailored to your unique story and style"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            The Art of Fine Jewelry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 1952, Haraa Gold & Diamonds has been synonymous with exceptional craftsmanship 
            and timeless elegance. Our passion for creating extraordinary jewelry pieces has been 
            passed down through generations, ensuring every creation tells a unique story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-elegant border-0 elegant-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-royal rounded-full flex items-center justify-center group-hover:animate-luxury-glow transition-elegant">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>70+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;