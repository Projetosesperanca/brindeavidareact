import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { categories, products, companyInfo, heroImage } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Produtos de Sublimação" 
            className="w-full h-full object-cover brightness-[0.6] scale-105 animate-slow-zoom"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
              Transforme Ideias em <span className="text-secondary">Produtos Únicos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 max-w-xl leading-relaxed text-justify">
              Especialistas em brindes personalizados e fardamentos de alta qualidade. 
              Sua marca em destaque com a melhor tecnologia de sublimação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={companyInfo.whatsappLink("Olá, vim pelo site e quero um orçamento.")} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-yellow-500 text-slate-900 font-bold text-lg px-8 h-14 w-full sm:w-auto shadow-lg shadow-yellow-500/20">
                  Fazer Orçamento Agora
                </Button>
              </a>
              <Link href="/produtos">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold text-lg px-8 h-14 w-full sm:w-auto">
                  Ver Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Star, title: "Qualidade Premium", desc: "Materiais de primeira linha e acabamento impecável." },
            { icon: Zap, title: "Entrega Rápida", desc: "Compromisso com prazos para não atrasar seu evento." },
            { icon: ShieldCheck, title: "Durabilidade", desc: "Estampas que não desbotam e resistem ao tempo." },
            { icon: CheckCircle2, title: "Personalização Total", desc: "Sua arte, seu logo, do jeito que você imaginar." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white border-wavy shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section className="bg-slate-50">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-slate-900">Destaques</h2>
            <p className="text-slate-600">Conheça nossos produtos especiais</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* CTA Strip */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold mb-2">Precisa de Fardamentos para sua Empresa?</h2>
            <p className="text-blue-100 max-w-xl">Temos condições especiais para grandes quantidades. Uniformize sua equipe com qualidade e estilo.</p>
          </div>
          <Link href="/fardamentos">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold border-none shadow-lg">
              Conhecer Fardamentos
            </Button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
