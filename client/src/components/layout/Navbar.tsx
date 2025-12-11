import { Link, useLocation } from "wouter";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/produtos", label: "Produtos" },
    { href: "/fardamentos", label: "Fardamentos" },
    { href: "/galeria", label: "Galeria" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md">
      <div className="w-full h-32 md:h-40 bg-[url('/attached_assets/bannerBrindeaVida2_1765454975371.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F7EFE5] md:to-transparent"></div>
        {/* Mobile overlay to ensure text readability if needed, or just let the banner shine */}
      </div>
      
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-t border-primary/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-heading text-3xl text-primary tracking-wide md:hidden">
            Brinde a Vida
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-lg font-bold transition-colors hover:text-primary ${
                  location === link.href ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block absolute right-8">
           <a
            href={companyInfo.whatsappLink("Olá! Vim pelo site e gostaria de um atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 font-bold bg-green-600 hover:bg-green-700 text-white border-none shadow-md text-lg px-6">
              <Phone className="h-5 w-5" /> WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-xl font-medium transition-colors hover:text-primary ${
                        location === link.href ? "text-primary font-bold" : "text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <a
                  href={companyInfo.whatsappLink("Olá! Vim pelo site e gostaria de um atendimento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white border-none text-lg h-12">
                    <Phone className="h-5 w-5" /> Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>
    </header>
  );
}
