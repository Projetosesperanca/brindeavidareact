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
    { href: "/produtos", label: "Produtos" },
    { href: "/fardamentos", label: "Fardamentos" },
    { href: "/galeria", label: "Galeria" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md bg-[#F7EFE5]">
      <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/">
          <a className="font-heading text-4xl md:text-5xl text-primary tracking-wide hover:scale-105 transition-transform drop-shadow-[2px_2px_0px_rgba(93,64,55,0.3)]">
            Brinde a Vida
          </a>
        </Link>

        {/* Desktop Nav - Highlighted */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-lg font-bold px-4 py-2 transition-all ${
                  location === link.href 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-foreground hover:text-primary hover:shadow-lg"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
        
        {/* WhatsApp Button Desktop */}
        <div className="hidden md:block">
           <a
            href={companyInfo.whatsappLink("Olá! Vim pelo site e gostaria de um atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 font-bold bg-[#B05B55] hover:bg-[#8F4944] text-white border-none shadow-md text-lg px-6 rounded-full animate-pulse-rose transition-transform">
              <Phone className="h-5 w-5" /> WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden absolute right-4 top-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Menu className="h-8 w-8 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#F7EFE5]">
              <div className="flex flex-col gap-4 mt-10">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-xl font-bold p-4 rounded-xl transition-colors ${
                        location === link.href 
                          ? "bg-primary text-white shadow-md" 
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
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
                  <Button className="w-full gap-2 bg-[#B05B55] hover:bg-[#8F4944] text-white border-none text-lg h-14 rounded-xl shadow-md animate-pulse-rose">
                    <Phone className="h-6 w-6" /> Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
