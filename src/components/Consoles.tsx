import { Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Consoles = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <Gamepad2 className="w-20 h-20 mx-auto text-secondary" />
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Você sabia que também realizamos serviços para consoles e joysticks?
          </h2>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg"
          >
            Consulte os valores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Consoles;
