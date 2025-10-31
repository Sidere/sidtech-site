import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Sobre nós</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
                Bem-vindo à Sidtech
              </h2>
            </div>
            
            <div className="space-y-4 text-primary/90">
              <p className="leading-relaxed">
                Nossa história começou lá em 2020 no meio de uma pandemia, cercados de incertezas e inúmeros negócios 
                fechando por conta de toda crise do momento. A idealização de um empreendimento não veio à toa. Agora já são mais de 5 anos de experiência no mercado de assistência técnica em eletrônicos.
              </p>
              
              <p className="leading-relaxed">
                Sempre fomos apaixonados por eletrônicos e conhecimento básico em hardware, logo depois de mais de dois anos, 
                veio um negócio sério, cada vez mais profissional e com um time que poderíamos oferecer para a sociedade.
              </p>
              
              <p className="leading-relaxed">
                Todos esses anos de experiência comprovam nossa técnica, do diagnóstico ao reparo 
                mas sempre priorizando o atendimento humanizado de forma clara e simples.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Espaço de trabalho profissional da Sidtech" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
