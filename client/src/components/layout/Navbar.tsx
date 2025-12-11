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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="font-heading font-bold text-2xl text-primary tracking-tight">
            SUBLIME<span className="text-secondary">ART</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <a
            href={companyInfo.whatsappLink("Olá! Vim pelo site e gostaria de um atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="gap-2 font-bold bg-green-600 hover:bg-green-700 text-white border-none shadow-md">
              <Phone className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-lg font-medium transition-colors hover:text-primary ${
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
                  <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white border-none">
                    <Phone className="h-4 w-4" /> Falar no WhatsApp
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
