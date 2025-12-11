import heroImage from "@assets/generated_images/hero_image_of_personalized_gifts_with_rose_vintage_theme.png";
import mugImage from "@assets/generated_images/personalized_coffee_mugs_lifestyle.png";
import tshirtImage from "@assets/generated_images/personalized_t-shirts_flatlay.png";
import cushionImage from "@assets/generated_images/personalized_cushions_lifestyle.png";
import labelImage from "@assets/generated_images/satin_labels_detail.png";
import mousepadImage from "@assets/generated_images/personalized_mousepads_workspace.png";
import capImage from "@assets/generated_images/custom_caps_lifestyle.png";
import tileImage from "@assets/generated_images/personalized_ceramic_tiles_for_memorial.png";
import ecoImage from "@assets/generated_images/ecobags_and_agendas_set.png";

export const companyInfo = {
  name: "Brinde a Vida",
  phone: "11987475687", // Updated phone number
  secondaryPhone: "1147050191",
  email: "comercial@iusti.com.br",
  address: "Rua das Flores, 123 - Centro, Cidade - SP", 
  whatsappLink: (message: string) => `https://wa.me/5511987475687?text=${encodeURIComponent(message)}`
};

export const categories = [
  { id: "canecas", name: "Canecas e Xícaras", image: mugImage },
  { id: "camisetas", name: "Camisetas", image: tshirtImage },
  { id: "almofadas", name: "Almofadas", image: cushionImage },
  { id: "etiquetas", name: "Etiquetas de Cetim", image: labelImage },
  { id: "mousepads", name: "Mousepads", image: mousepadImage },
  { id: "bones", name: "Bonés", image: capImage },
  { id: "azulejos", name: "Azulejos", image: tileImage },
  { id: "brindes", name: "Brindes e Ecobags", image: ecoImage },
];

export const products = [
  {
    id: 1,
    name: "Canecas e Xícaras Personalizadas",
    category: "Canecas",
    image: mugImage,
    description: "Sua Marca, Emoção e Estilo em Cada Gole! Transforme um simples café em uma experiência marcante. Versáteis e com alto valor agregado.",
    benefits: ["Brindes Corporativos", "Lembranças de Eventos", "Revenda com Arte", "Presentes Criativos"]
  },
  {
    id: 2,
    name: "Camisetas Personalizadas",
    category: "Camisetas",
    image: tshirtImage,
    description: "Vista Sua Marca, Sua Ideia ou Sua Emoção! Mais do que roupa: identidade, divulgação e lembrança.",
    benefits: ["Para Empresas e Marcas", "Para Criadores e Artistas", "Para Festas e Eventos", "Para Grupos e Times"]
  },
  {
    id: 3,
    name: "Almofadas Personalizadas",
    category: "Almofadas",
    image: cushionImage,
    description: "Conforto, Estilo e Emoção em Cada Detalhe! Muito mais que itens decorativos — presentes criativos e brindes inesquecíveis.",
    benefits: ["Presentes Criativos", "Lembranças para Eventos", "Decoração com Identidade", "Alta Margem de Revenda"]
  },
  {
    id: 4,
    name: "Etiquetas e Fitas de Cetim",
    category: "Etiquetas",
    image: labelImage,
    description: "Sua Marca Merece um Toque de Elegância! O toque final que valoriza o feito à mão e eterniza momentos.",
    benefits: ["Marcas de Moda", "Lembranças Especiais", "Produtos Artesanais", "Personalização Delicada"]
  },
  {
    id: 5,
    name: "Bonés Personalizados",
    category: "Bonés",
    image: capImage,
    description: "Marque Presença com Estilo! Alta visibilidade para sua marca em um acessório útil e durável.",
    benefits: ["Alta Visibilidade", "Brinde Útil e Durável", "Personalização Total", "Diversos Tamanhos"]
  },
  {
    id: 6,
    name: "Mousepads Personalizados",
    category: "Mousepads",
    image: mousepadImage,
    description: "Sua Marca ou Mensagem Bem na Mão do Cliente! Poderosa ferramenta de divulgação e item essencial no dia a dia.",
    benefits: ["Brindes Corporativos", "Presentes Especiais", "Padronização de Escritórios", "Impressão de Alta Qualidade"]
  },
  {
    id: 7,
    name: "Azulejos para Lápide",
    category: "Azulejos",
    image: tileImage,
    description: "Homenagem eterna. Um símbolo de amor e a lembrança de que aqueles que amamos nunca serão esquecidos.",
    benefits: ["Vários Tamanhos", "Alta Durabilidade", "Arte Personalizada", "Homenagem Respeitosa"]
  },
  {
    id: 8,
    name: "Brindes e Ecobags",
    category: "Brindes",
    image: ecoImage,
    description: "Pequenos gestos, grandes impactos. Sustentabilidade, praticidade e organização para o dia a dia.",
    benefits: ["Ecobags Sustentáveis", "Agendas Elegantes", "Fortalece Relacionamentos", "Consciência Ambiental"]
  }
];

export const galleryImages = [
  heroImage, mugImage, tshirtImage, cushionImage, labelImage, mousepadImage, capImage, tileImage, ecoImage
];
