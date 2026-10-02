import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { companyInfo } from "@/lib/data";
import plannerVideo from "@assets/videos/Gravando planner.mp4";
import daenerysPlannerVideo from "@assets/videos/Gravando planner_daenerys.mp4";
import dentistVideo from "@assets/videos/Gravando_dentista.mp4";
import cleopatraPlannerVideo from "@assets/videos/planner_cleopatra.mp4";
import businessCardSample from "@assets/cartoes/cartao_visita.png";
import flyerSample from "@assets/cartoes/panfleto.png";
import pixSignSample from "@assets/cartoes/plaquinha_pix.png";
import agendaArtwork from "@assets/artes_cards/agendas-personalizadas-bella-care.png";
import notebookArtwork from "@assets/artes_cards/blocos-personalizados-innova-iusti.png";
import menuArtwork from "@assets/artes_cards/cardapios-plastificados.png";
import businessCardArtwork from "@assets/artes_cards/cartoes-de-visita-bella-care.png";
import invitationArtwork from "@assets/artes_cards/convites-e-cartoes-bella-care.png";
import binderArtwork from "@assets/artes_cards/ficharios-e-cadernos-innova-iusti.png";
import flyerArtwork from "@assets/artes_cards/flyers-e-panfletos-bella-care.png";
import stickersImage from "@assets/artes_cards/adesivos-personalizados-bella-care.png";
import magnetsImage from "@assets/artes_cards/imas-personalizados-innova-iusti.png";
import plannerArtwork from "@assets/artes_cards/planners-innova-iusti.png";
import labelsImage from "@assets/artes_cards/rotulos-personalizados-bella-care.png";
import {
  BookMarked,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileText,
  Magnet,
  Mail,
  NotebookPen,
  Sticker,
  Tags,
  Utensils,
} from "lucide-react";

const graphicServices = [
  {
    name: "Cartões de visita",
    description: "Apresente sua marca com cartões personalizados e acabamento profissional.",
    icon: CreditCard,
    image: businessCardArtwork,
  },
  {
    name: "Cardápios plastificados",
    description: "Cardápios personalizados, resistentes e fáceis de limpar para seu negócio.",
    icon: Utensils,
    image: menuArtwork,
  },
  {
    name: "Blocos personalizados",
    description: "Blocos com sua identidade visual para anotações, pedidos e uso no dia a dia.",
    icon: ClipboardList,
    image: notebookArtwork,
  },
  {
    name: "Agendas personalizadas",
    description: "Organize compromissos e divulgue sua marca com agendas feitas do seu jeito.",
    icon: BookMarked,
    image: agendaArtwork,
  },
  {
    name: "Planners",
    description: "Planeje metas, tarefas e sua rotina com um planner personalizado.",
    icon: CalendarDays,
    image: plannerArtwork,
  },
  {
    name: "Flyers e panfletos",
    description: "Materiais impressos para divulgar promoções, eventos e serviços.",
    icon: FileText,
    image: flyerArtwork,
  },
  {
    name: "Adesivos personalizados",
    description: "Adesivos com sua marca, ilustração ou mensagem para divulgar e personalizar.",
    icon: Sticker,
    image: stickersImage,
  },
  {
    name: "Ímãs personalizados",
    description: "Ímãs personalizados para divulgar sua marca ou presentear clientes e pessoas especiais.",
    icon: Magnet,
    image: magnetsImage,
  },
  {
    name: "Rótulos personalizados",
    description: "Rótulos sob medida para valorizar embalagens e destacar a identidade dos seus produtos.",
    icon: Tags,
    image: labelsImage,
  },
  {
    name: "Fichários e cadernos",
    description: "Materiais de organização com capas personalizadas para estudos ou trabalho.",
    icon: NotebookPen,
    image: binderArtwork,
  },
  {
    name: "Convites e cartões",
    description: "Convites e cartões para datas especiais, eventos e agradecimentos.",
    icon: Mail,
    image: invitationArtwork,
  },
];

const graphicVideos = [
  { title: "Planner personalizado", src: plannerVideo },
  { title: "Planner Daenerys", src: daenerysPlannerVideo },
  { title: "Personalização para dentista", src: dentistVideo },
  { title: "Planner Cleopatra", src: cleopatraPlannerVideo },
];

const graphicSamples = [
  { title: "Cartão de visita", src: businessCardSample },
  { title: "Panfleto personalizado", src: flyerSample },
  { title: "Plaquinha para Pix", src: pixSignSample },
];

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
            Confira nosso catálogo de produtos personalizados e serviços gráficos.
            Se não encontrar o que procura, entre em contato!
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div id="servicos-graficos" className="scroll-mt-36">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-slate-900">
              Serviços gráficos
            </h2>
            <p className="text-slate-600">
              Materiais impressos personalizados para divulgar seu negócio, organizar sua rotina e celebrar momentos especiais.
              Não tem a arte pronta? Nós também desenvolvemos uma criação exclusiva para você.
            </p>
          </div>

          <div className="mb-12 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-amber-50 p-5 ring-1 ring-rose-100/80 md:p-8">
            <div className="mb-6 text-center">
              <span className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#A81450] shadow-sm ring-1 ring-rose-100">
                Um pouco do nosso trabalho
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900 md:text-3xl">
                Veja de perto cada detalhe
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                Projetos personalizados feitos com carinho, criatividade e atenção ao acabamento.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {graphicVideos.map((video) => (
                <figure
                  key={video.title}
                  className="group overflow-hidden rounded-2xl border border-white/80 bg-white shadow-md shadow-rose-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/10"
                >
                  <div className="aspect-video overflow-hidden bg-slate-950">
                    <video
                      src={video.src}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={video.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 font-semibold text-slate-800">
                    {video.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold font-heading text-slate-900 md:text-3xl">
                Mais ideias para sua marca
              </h3>
              <p className="mt-2 text-slate-600">
                Veja alguns materiais gráficos que também podemos criar para você.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {graphicSamples.map((sample) => (
                <figure
                  key={sample.title}
                  className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm"
                >
                  <div className="flex h-80 items-center justify-center bg-[#F7EFE5] p-4">
                    <img
                      src={sample.src}
                      alt={sample.title}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-center font-semibold text-slate-800">
                    {sample.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {graphicServices.map((service) => (
              <Card key={service.name} className="group overflow-hidden border-wavy bg-white shadow-sm h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-[#F7EFE5]">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={`Ilustração de ${service.name.toLowerCase()}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-primary">
                      <service.icon className="h-16 w-16" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-heading font-bold text-slate-900">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 text-base">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href={companyInfo.whatsappLink(`Olá! Gostaria de um orçamento para: ${service.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-[#C3195D] hover:bg-[#A81450] text-white font-semibold">
                      Solicitar orçamento
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>

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
