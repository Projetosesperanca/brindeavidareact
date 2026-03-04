import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { categories, products, companyInfo, heroImage } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, Play, Pause } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

export default function Home() {
  const featuredProducts = products; // Show all products in the carousel
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("autoplay:play" as any, () => setIsPlaying(true));
    api.on("autoplay:stop" as any, () => setIsPlaying(false));
  }, [api]);

  const togglePlay = () => {
    if (!api) return;
    const autoplay = api.plugins().autoplay;
    if (!autoplay) return;

    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  };

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
              <Link href="/produtos">
                <Button size="lg" className="bg-secondary hover:bg-yellow-500 text-slate-900 font-bold text-lg px-8 h-14 w-full sm:w-auto shadow-lg shadow-yellow-500/20">
                  Ver Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-white">
        <div className="container mx-auto max-w-4xl text-justify space-y-6">
          <p className="text-slate-700 text-lg leading-relaxed">
            A Brinde a Vida existe desde 2013 com um propósito claro: transformar sentimentos em presentes e momentos em memórias duradouras. Acreditamos que presentear vai muito além de um objeto — é uma forma genuína de expressar carinho, reconhecimento, gratidão e celebração da vida.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            Atuamos na criação de brindes e presentes personalizados, desenvolvidos com cuidado, criatividade e atenção aos detalhes. Cada peça é pensada para carregar significado, contar histórias e fortalecer conexões, seja entre pessoas, famílias, amigos ou empresas e seus clientes.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            Nossa missão é elevar a moral, despertar emoções positivas e valorizar cada conquista, por menor que ela pareça. Um presente personalizado tem o poder de motivar, inspirar e permanecer presente no dia a dia de quem o recebe, tornando-se um símbolo de afeto e lembrança.
          </p>

          <p className="text-slate-700 text-lg leading-relaxed">
            Atendemos tanto o público final quanto o corporativo, oferecendo soluções personalizadas para ações promocionais, eventos, datas comemorativas, campanhas internas e momentos especiais. Trabalhamos com qualidade, pontualidade e compromisso, garantindo que cada brinde represente exatamente a intenção de quem presenteia.
          </p>
          
          <p className="text-slate-900 font-bold text-lg leading-relaxed text-center italic">
            "Na Brinde a Vida, celebramos histórias, relações e conquistas. Porque a vida merece ser lembrada, valorizada e brindada todos os dias."
          </p>
        </div>
      </Section>

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
        
        <div className="px-12 relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            
            <div className="flex justify-center mt-6">
               <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white border-primary/20 text-primary h-10 w-10 shadow-sm"
                onClick={togglePlay}
                title={isPlaying ? "Pausar" : "Reproduzir"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
            </div>
          </Carousel>
        </div>
      </Section>

      {/* CTA Strip */}
      <section className="bg-primary py-8 text-white">
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
