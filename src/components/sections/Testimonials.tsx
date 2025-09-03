import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      content: "The bridal set from Haraa exceeded all my expectations. The craftsmanship is exquisite, and the diamonds sparkle like stars. It made my wedding day even more magical.",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Rajesh Gupta",
      role: "Customer",
      content: "I've been buying jewelry from Haraa for over 15 years. Their quality is unmatched, and the personal service makes every purchase special. Truly a luxury experience.",
      rating: 5,
      location: "Delhi"
    },
    {
      name: "Aisha Khan",
      role: "Fashion Designer",
      content: "As someone who appreciates fine craftsmanship, I'm amazed by Haraa's attention to detail. Each piece is a work of art that stands the test of time.",
      rating: 5,
      location: "Bangalore"
    },
    {
      name: "Vikram Singh",
      role: "Collector",
      content: "The limited edition pieces from Haraa are extraordinary. The investment value combined with their beauty makes them perfect for any serious collector.",
      rating: 5,
      location: "Hyderabad"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-black border-black">
            Client Stories
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of customers trust Haraa Gold & Diamonds 
            for their most precious jewelry moments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 elegant-shadow">
                    <CardContent className="p-12 text-center">
                      <Quote className="w-8 h-8 text-gold mx-auto mb-6" />
                      
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gold fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-xl text-foreground mb-8 leading-relaxed font-medium">
                        "{testimonial.content}"
                      </blockquote>

                      <div>
                        <div className="font-playfair text-lg font-semibold text-primary mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-elegant ${
                  index === activeIndex ? "bg-gold" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;