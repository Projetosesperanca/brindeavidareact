import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { companyInfo } from "@/lib/data";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission or redirect to WhatsApp
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    window.open(companyInfo.whatsappLink(`Olá, meu nome é ${name}. ${message}`), '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-slate-50 py-16 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4 text-slate-900">Fale Conosco</h1>
        <p className="text-slate-600 max-w-xl mx-auto">Estamos prontos para atender você. Entre em contato por um dos nossos canais.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-heading mb-6">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                  <p className="text-slate-600">{companyInfo.phone}</p>
                  <p className="text-sm text-slate-500 mt-1">Atendimento seg. a sex. das 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">E-mail</h3>
                  <p className="text-slate-600">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Endereço</h3>
                  <p className="text-slate-600">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-xl mt-8 flex items-center justify-center text-slate-500">
              <p>Mapa da Localização</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold font-heading mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nome Completo</label>
                <Input id="name" name="name" placeholder="Seu nome" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                <Input id="phone" name="phone" placeholder="(00) 00000-0000" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea id="message" name="message" placeholder="Como podemos ajudar?" className="min-h-[150px]" required />
              </div>

              <Button type="submit" className="w-full gap-2 bg-primary hover:bg-blue-700 text-white font-bold h-12">
                <Send className="h-4 w-4" /> Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
