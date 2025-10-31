const brands = [
  { name: "Dell", color: "#007DB8" },
  { name: "Acer", color: "#83B81A" },
  { name: "Apple", color: "#000000" },
  { name: "Lenovo", color: "#E2231A" },
  { name: "Samsung", color: "#1428A0" },
  { name: "LG", color: "#A50034" },
  { name: "Asus", color: "#000000" },
  { name: "HP", color: "#0096D6" }
];

const Brands = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Se liga na variedade de marcas que atendemos por aqui.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="text-4xl md:text-5xl font-bold opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform transition-transform"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
