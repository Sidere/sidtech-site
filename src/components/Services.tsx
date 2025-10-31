import { Search, Settings, Cpu, Wrench, HardDrive, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Diagnóstico de hardware",
    description: "Identificação precisa de problemas em componentes"
  },
  {
    icon: Settings,
    title: "Manutenção preventiva e corretiva",
    description: "Manutenção completa para garantir o melhor desempenho"
  },
  {
    icon: Cpu,
    title: "Reparo e montagem de hardware",
    description: "Conserto e montagem profissional de componentes"
  },
  {
    icon: HardDrive,
    title: "Formatação de diversos sistemas",
    description: "Instalação e configuração de sistemas operacionais"
  },
  {
    icon: Wrench,
    title: "Orçamento em até 2 dias",
    description: "Diagnóstico rápido e orçamento sem compromisso"
  },
  {
    icon: Zap,
    title: "Otimização de sistemas",
    description: "Melhore a performance do seu equipamento"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para manutenção e reparo de equipamentos eletrônicos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
