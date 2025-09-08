import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bridalImage from "@/assets/bridal-collection.jpg";
import dailyWearImage from "@/assets/daily-wear.jpg";
import limitedEditionImage from "@/assets/limited-edition.jpg";
import whatsappimage from "@/assets/whatsapp.png";


const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Bridal Collection",
      description: "Exquisite diamond sets and gold jewelry for your special day",
      image: bridalImage,
      badge: "Most Popular",
      items: "150+ Designs"
    },
    {
      id: 2,
      title: "Daily Elegance",
      description: "Sophisticated pieces perfect for everyday luxury",
      image: dailyWearImage,
      badge: "Trending",
      items: "200+ Designs"
    },
    {
      id: 3,
      title: "Limited Edition",
      description: "Exclusive masterpieces for the discerning collector",
      image: limitedEditionImage,
      badge: "Exclusive",
      items: "25+ Designs"
    }

  ];

  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
         
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each piece designed to celebrate 
            life's most precious moments with unparalleled elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-luxury border-0 elegant-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={`${collection.title} - Premium jewelry collection`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-luxury"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="mb-4 text-black border-black">
                    {collection.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-luxury" />
              </div>
              
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-playfair text-2xl font-semibold text-primary">
                    {collection.title}
                  </h3>
                  <span className="text-sm text-gold font-medium">
                    {collection.items}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                
           
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Collections;
