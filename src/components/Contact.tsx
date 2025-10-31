import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.\n\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp.",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Precisa falar com a gente?
              </h2>
              <p className="text-primary/80 text-lg">
                Deixe seu contato e aguarde que logo entraremos em contato
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nome e sobrenome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary text-lg py-6"
                />
              </div>

              <div>
                <Input
                  placeholder="Seu número (85)99999-9999..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary text-lg py-6"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Olá! Gostaria de tirar algumas dúvidas sobre consertos..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-primary/20 focus:border-primary min-h-32 text-lg"
                />
              </div>

              <p className="text-sm text-primary/70">
                Olá! Usaremos suas informações para contato via Whatsapp preferência.
              </p>

              <Button type="submit" variant="default" size="lg" className="w-full md:w-auto text-lg px-8">
                Enviar informações
              </Button>
            </form>

            <div className="pt-6">
              <p className="text-primary/80 font-semibold mb-2">
                Outros redes sociais da Sidtech, nos siga <span className="text-2xl">↓</span>
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <span className="text-3xl">📘</span>
                </a>
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <span className="text-3xl">📷</span>
                </a>
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <span className="text-3xl">🌐</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Reviews Card */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-card shadow-xl">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-card-foreground">
                  Avaliações do GOOGLE NEGÓCIO
                </h3>
                
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-card-foreground">5.0</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Confira as avaliações dos nossos clientes no Google e veja por que somos 
                  a assistência técnica mais confiável da região.
                </p>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.google.com/search?q=sidtech', '_blank')}
                >
                  Ver todas as avaliações
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
