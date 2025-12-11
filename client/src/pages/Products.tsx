import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [location] = useLocation();

  // Simple query param parsing to set initial category if provided
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, []);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(categories.find(c => c.id === activeCategory)?.name.toLowerCase().split(' ')[0].toLowerCase() || ""));

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4 text-slate-900">Nossos Produtos</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Confira nosso catálogo completo de produtos personalizados. 
            Se não encontrar o que procura, entre em contato!
          </p>
        </div>
      </div>

      <Section>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="rounded-full"
          >
            Todos
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              className="rounded-full"
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p>Nenhum produto encontrado nesta categoria.</p>
            <Button variant="link" onClick={() => setActiveCategory("all")}>Ver todos os produtos</Button>
          </div>
        )}
      </Section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
