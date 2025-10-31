import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento! Consertaram meu notebook rapidamente e o preço foi justo. Super recomendo!",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Profissionais muito competentes. Resolveram um problema que outros lugares não conseguiram. Muito satisfeito!",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "Melhor assistência técnica da região. Atendimento humanizado e serviço de qualidade. Voltarei sempre!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem confia em nosso trabalho
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-card-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
