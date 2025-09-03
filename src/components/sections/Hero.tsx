import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Exquisite luxury jewelry collection featuring diamonds and gold"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Timeless Elegance,
            <br />
            <span className="text-gold">Crafted to Perfection</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of handcrafted gold and diamond jewelry, 
            where luxury meets artistry in every piece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#collections"><Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Collection
            </Button></a> 
             <a href="#about"><Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Our Story
            </Button></a> 
          </div>
        </div>

        {/* Scroll Indicator */}
       
      </div>
    </section>
  );
};

export default Hero;