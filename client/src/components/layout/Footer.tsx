import { companyInfo } from "@/lib/data";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-3xl font-script font-bold text-secondary">
            Brinde a Vida
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Presentes personalizados para eternizar momentos.
            Qualidade, carinho e dedicação em cada detalhe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/"><a className="hover:text-secondary transition-colors">Home</a></Link></li>
            <li><Link href="/produtos"><a className="hover:text-secondary transition-colors">Produtos</a></Link></li>
            <li><Link href="/fardamentos"><a className="hover:text-secondary transition-colors">Fardamentos</a></Link></li>
            <li><Link href="/sobre"><a className="hover:text-secondary transition-colors">Sobre Nós</a></Link></li>
            <li><Link href="/contato"><a className="hover:text-secondary transition-colors">Contato</a></Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-secondary" />
              <span>{companyInfo.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-secondary" />
              <span>{companyInfo.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-secondary mt-1" />
              <span>{companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Sublime Art. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
