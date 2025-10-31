import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-primary text-primary-foreground z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-secondary">Sidtech</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("inicio")} className="hover:text-secondary transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection("servicos")} className="hover:text-secondary transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection("sobre")} className="hover:text-secondary transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection("contato")} className="hover:text-secondary transition-colors">
            Contato
          </button>
          <Button variant="secondary" size="sm" onClick={() => scrollToSection("contato")}>
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-left hover:text-secondary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-left hover:text-secondary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-left hover:text-secondary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-left hover:text-secondary transition-colors">
              Contato
            </button>
            <Button variant="secondary" size="sm" onClick={() => scrollToSection("contato")}>
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
