import { Card, CardContent } from "../components/Card";
import { Avatar, AvatarFallback } from "../components/Avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CTO at TechFlow",
    content: "Nurosync transformed how our remote team collaborates. Files sync instantly and we never worry about version conflicts anymore.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Marcus Rodriguez",
    title: "Design Director at Pixel Studios",
    content: "The speed is incredible. Large design files that used to take minutes now sync in seconds. Game changer for our creative workflow.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emily Watson",
    title: "Founder at StartupHub",
    content: "We tried every sync solution out there. Nurosync is the only one that just works, every time. Worth every penny.",
    rating: 5,
    initials: "EW"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams who trust Nurosync with their most important data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;