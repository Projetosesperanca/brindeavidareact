import heroImage from "@assets/generated_images/hero_image_of_personalized_gifts_with_rose_vintage_theme.png";
import mugImage from "@assets/generated_images/custom_printed_ceramic_mug.png";
import uniformImage from "@assets/generated_images/corporate_uniforms_polo_shirts.png";
import schoolImage from "@assets/generated_images/school_uniforms_group.png";
import tshirtImage from "@assets/generated_images/custom_printed_t-shirts_stack.png";
import machineImage from "@assets/generated_images/sublimation_heat_press_machine.png";
import capImage from "@assets/generated_images/custom_baseball_cap.png";
import bagImage from "@assets/generated_images/custom_tote_bag_lifestyle.png";

export const companyInfo = {
  name: "Brinde a Vida",
  phone: "11961537124",
  secondaryPhone: "1147050191",
  email: "comercial@iusti.com.br",
  address: "Rua das Flores, 123 - Centro, Cidade - SP", // Keeping placeholder if not provided
  whatsappLink: (message: string) => `https://wa.me/5511961537124?text=${encodeURIComponent(message)}`
};

export const categories = [
  { id: "canecas", name: "Canecas", image: mugImage },
  { id: "camisetas", name: "Camisetas", image: tshirtImage },
  { id: "uniformes", name: "Uniformes", image: uniformImage },
  { id: "bones", name: "Bonés", image: capImage },
  { id: "bolsas", name: "Bolsas e Mochilas", image: bagImage },
  { id: "brindes", name: "Outros Brindes", image: heroImage },
];

export const products = [
  {
    id: 1,
    name: "Caneca Cerâmica Branca",
    category: "Canecas",
    image: mugImage,
    description: "Caneca de cerâmica de alta qualidade, 325ml. Ideal para presentes e brindes corporativos.",
    benefits: ["Resistente a micro-ondas", "Impressão de alta definição", "Durabilidade garantida"]
  },
  {
    id: 2,
    name: "Camiseta Promocional",
    category: "Camisetas",
    image: tshirtImage,
    description: "Camiseta 100% poliéster com toque de algodão. Perfeita para eventos e uniformes leves.",
    benefits: ["Tecido leve e respirável", "Não desbota", "Secagem rápida"]
  },
  {
    id: 3,
    name: "Uniforme Corporativo",
    category: "Uniformes",
    image: uniformImage,
    description: "Camisa Polo personalizada com sua marca. Elegância e profissionalismo para sua equipe.",
    benefits: ["Tecido Piquet", "Bordado ou Sublimação", "Conforto para o dia a dia"]
  },
  {
    id: 4,
    name: "Kit Escolar Completo",
    category: "Uniformes",
    image: schoolImage,
    description: "Uniformes escolares duráveis e confortáveis. Camisetas, calças e agasalhos.",
    benefits: ["Costura reforçada", "Tecido fácil de lavar", "Tamanhos variados"]
  },
  {
    id: 5,
    name: "Boné Trucker",
    category: "Bonés",
    image: capImage,
    description: "Boné modelo trucker com tela e regulador. Estilo e proteção contra o sol.",
    benefits: ["Frente em espuma", "Ajustável", "Ótima área de impressão"]
  },
  {
    id: 6,
    name: "Ecobag Personalizada",
    category: "Bolsas",
    image: bagImage,
    description: "Sacola ecológica reutilizável. Ótima para brindes sustentáveis.",
    benefits: ["Material resistente", "Grande área de estampa", "Sustentável"]
  },
  {
    id: 7,
    name: "Azulejo Decorativo",
    category: "Brindes",
    image: machineImage, // Using generic placeholder if specific tile image not avail
    description: "Azulejo com suporte para decoração. Eternize momentos especiais.",
    benefits: ["Brilho intenso", "Acompanha suporte", "Decoração exclusiva"]
  },
  {
    id: 8,
    name: "Chaveiro Almofada",
    category: "Brindes",
    image: heroImage,
    description: "Mini almofada chaveiro. Um brinde fofo e barato para grandes quantidades.",
    benefits: ["Custo-benefício", "Macio", "Impressão frente e verso"]
  }
];

export const galleryImages = [
  heroImage, mugImage, uniformImage, schoolImage, tshirtImage, capImage
];
