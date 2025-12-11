import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import machineImage from "@assets/generated_images/sublimation_heat_press_machine.png";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Sobre Nós</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">Conheça a história e os valores da Sublime Art, sua parceira em personalização.</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={machineImage} 
              alt="Nossa produção" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold font-heading text-slate-900">Nossa História</h2>
            <p className="text-slate-600 leading-relaxed">
              A Sublime Art nasceu da paixão por transformar objetos comuns em memórias tangíveis. 
              Começamos como uma pequena oficina familiar e hoje somos referência em produtos personalizados 
              e fardamentos na região.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nosso compromisso sempre foi com a qualidade e a satisfação do cliente. Investimos constantemente 
              em tecnologia de ponta para sublimação, garantindo cores vivas, durabilidade e acabamento perfeito 
              em cada peça que sai da nossa produção.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h3 className="text-xl font-bold mb-3 text-primary">Missão</h3>
                <p className="text-sm text-slate-600">
                  Entregar produtos personalizados que superem as expectativas, criando conexões emocionais e 
                  fortalecendo marcas através da qualidade visual.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                <h3 className="text-xl font-bold mb-3 text-primary">Visão</h3>
                <p className="text-sm text-slate-600">
                  Ser reconhecida nacionalmente como a melhor solução em brindes corporativos e fardamentos, 
                  inovando sempre em processos e produtos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4">Nossos Diferenciais</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Atendimento personalizado via WhatsApp",
            "Orçamento rápido e sem compromisso",
            "Criação de arte exclusiva",
            "Materiais de alta durabilidade",
            "Pontualidade na entrega",
            "Preços competitivos para atacado"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span className="font-medium text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
