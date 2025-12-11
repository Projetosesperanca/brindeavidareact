import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Galeria de Trabalhos</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Veja alguns dos projetos que já realizamos. Qualidade que você pode ver.
          </p>
        </div>
      </div>

      <Section>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-xl overflow-hidden shadow-md group relative">
              <img 
                src={src} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
          {/* Repeat images to fill grid for demo purposes */}
          {galleryImages.map((src, index) => (
            <div key={`dup-${index}`} className="break-inside-avoid rounded-xl overflow-hidden shadow-md group relative">
              <img 
                src={src} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
