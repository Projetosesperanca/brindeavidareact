import { companyInfo } from "@/lib/data";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#5D4037] text-slate-200 py-12 border-t border-[#8E5A50]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
        {/* Brand */}
        <div className="space-y-6 flex flex-col items-center">
          <h3 className="text-4xl font-script font-bold text-secondary drop-shadow-[2px_2px_0px_rgba(93,64,55,0.5)]">
            Brinde a Vida
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
            Presentes personalizados para eternizar momentos.
            Qualidade, carinho e dedicação em cada detalhe.
          </p>
          <div className="flex gap-6 justify-center">
            <a href={companyInfo.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram className="h-8 w-8" /></a>
            <a href={companyInfo.facebookLink} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="h-8 w-8" /></a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6 flex flex-col items-center">
          <h4 className="text-2xl font-bold text-white">Navegação</h4>
          <ul className="space-y-4 text-lg">
            <li><Link href="/"><a className="hover:text-secondary transition-colors">Home</a></Link></li>
            <li><Link href="/produtos"><a className="hover:text-secondary transition-colors">Produtos</a></Link></li>
            <li><Link href="/fardamentos"><a className="hover:text-secondary transition-colors">Fardamentos</a></Link></li>
            <li><Link href="/galeria"><a className="hover:text-secondary transition-colors">Galeria</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-[#8E5A50] text-center text-sm text-[#D48C84]">
        <p>&copy; {new Date().getFullYear()} Brinde a Vida. Todos os direitos reservados.</p>
        <p className="mt-2">
          Desenvolvido por <a href="https://www.innovaiusti.online" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Innova Iusti</a>
        </p>
      </div>
    </footer>
  );
}
