import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 32, 66, 0.9), rgba(0, 32, 66, 0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 py-32 text-center text-primary-foreground relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Sidtech
            <span className="block text-secondary mt-2">Assistência Técnica</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Assistência especializada em computadores, notebooks, MacBooks e consoles. 
            Aqui no site você pode encontrar mais informações sobre os serviços e sobre a nossa assistência.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-6"
          >
            Consulte o seu orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
