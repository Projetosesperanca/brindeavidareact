import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/data";
import uniformImage from "@assets/generated_images/corporate_uniforms_polo_shirts.png";
import schoolImage from "@assets/generated_images/school_uniforms_group.png";
import { CheckCircle2 } from "lucide-react";

export default function Uniforms() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="relative bg-primary text-white py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              Fardamentos Profissionais e Escolares
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Padronize sua equipe ou escola com uniformes de alta qualidade, conforto e durabilidade. 
              Personalização completa com sua marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={companyInfo.budgetFormLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-yellow-500 text-slate-900 font-bold w-full sm:w-auto shadow-lg">
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={uniformImage} 
              alt="Uniformes Corporativos" 
              className="rounded-xl shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Types of Uniforms */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Corporate */}
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 mb-6">
              <img src={uniformImage} alt="Corporativo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-2xl font-bold font-heading">Linha Corporativa</h2>
            <p className="text-slate-600">
              Ideal para empresas que buscam profissionalismo e organização. Trabalhamos com camisas polo, 
              sociais, camisetas promocionais e aventais.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-primary" /> Bordado ou Sublimação de alta definição</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-primary" /> Tecidos Piquet, Dry Fit ou Algodão</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-primary" /> Grade de tamanhos completa (P ao XG)</li>
            </ul>
          </div>

          {/* School */}
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 mb-6">
              <img src={schoolImage} alt="Escolar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h2 className="text-2xl font-bold font-heading">Linha Escolar</h2>
            <p className="text-slate-600">
              Durabilidade e conforto para o dia a dia dos alunos. Kits completos com camisetas, 
              calças, shorts e agasalhos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-secondary" /> Tecidos resistentes a lavagens frequentes</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-secondary" /> Costuras reforçadas</li>
              <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="h-5 w-5 text-secondary" /> Design moderno e confortável</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Table Size (Optional/Placeholder) */}
      <Section className="bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Tabela de Medidas</h2>
          <p className="text-slate-600 mb-8">
            Trabalhamos com modelagem padrão brasileira. Ao solicitar seu orçamento, 
            enviaremos a tabela detalhada de medidas para garantir o caimento perfeito.
          </p>
          <div className="p-8 bg-white rounded-xl shadow-sm border border-slate-100">
             <div className="grid grid-cols-5 gap-4 font-mono text-sm border-b pb-4 mb-4 font-bold text-slate-900">
               <div>TAM</div>
               <div>P</div>
               <div>M</div>
               <div>G</div>
               <div>GG</div>
             </div>
             <div className="space-y-4 text-slate-600 text-sm">
               <p>Consulte nossa equipe para medidas específicas de cada modelo.</p>
             </div>
          </div>
        </div>
      </Section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
