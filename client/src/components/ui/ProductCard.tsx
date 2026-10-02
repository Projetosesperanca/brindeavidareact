import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { companyInfo } from "@/lib/data";
import { MessageCircle, Check } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    benefits: string[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-white shadow-sm h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-white font-semibold shadow-sm">
          {product.category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-heading font-bold text-slate-900 group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-600 text-base mb-6 leading-relaxed text-justify whitespace-pre-line">{product.description}</p>
        <ul className="space-y-2">
          {product.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start text-base text-slate-700">
              <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full gap-2 bg-[#C3195D] hover:bg-[#A81450] text-white font-semibold shadow-sm"
          data-testid={`button-whatsapp-product-${product.id}`}
          onClick={() => window.open(companyInfo.whatsappLink(`Olá! Gostaria de um orçamento para: ${product.name}`), '_blank')}
        >
          <MessageCircle className="h-4 w-4" />
          Solicitar Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
}
