const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Sidtech</h3>
            <p className="text-primary-foreground/80">
              Assistência técnica especializada em eletrônicos e informática desde 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>WhatsApp: (85) 99999-9999</li>
              <li>Email: contato@sidtech.com.br</li>
              <li>Horário: Seg-Sex 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Sidtech Assistência Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
