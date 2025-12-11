import heroImage from "@assets/generated_images/hero_image_of_personalized_gifts_with_rose_vintage_theme.png";
import mugImage from "@assets/generated_images/personalized_coffee_mugs_lifestyle.png";
import tshirtImage from "@assets/generated_images/personalized_t-shirts_flatlay.png";
import cushionImage from "@assets/generated_images/personalized_cushions_lifestyle.png";
import labelImage from "@assets/generated_images/satin_labels_detail.png";
import mousepadImage from "@assets/generated_images/personalized_mousepads_workspace.png";
import capImage from "@assets/generated_images/custom_caps_lifestyle.png";
import tileImage from "@assets/generated_images/personalized_ceramic_tiles_for_memorial.png";
import ecoImage from "@assets/generated_images/ecobags_and_agendas_set.png";
import partyCupImage from "@assets/generated_images/personalized_party_cups_set.png";
import plateImage from "@assets/generated_images/personalized_ceramic_decorative_plate.png";

export const companyInfo = {
  name: "Brinde a Vida",
  phone: "11987475687", 
  secondaryPhone: "1147050191",
  email: "comercial@iusti.com.br",
  address: "Rua das Flores, 123 - Centro, Cidade - SP", 
  whatsappLink: (message: string) => `https://wa.me/5511987475687?text=${encodeURIComponent(message)}`
};

export const categories = [
  { id: "canecas", name: "Canecas e Xícaras", image: mugImage },
  { id: "copos", name: "Copos Personalizados", image: partyCupImage },
  { id: "pratos", name: "Pratos Decorativos", image: plateImage },
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
    description: "Transforme cada gole em uma experiência única e afetuosa. Nossas canecas e xícaras de cerâmica premium são telas em branco prontas para receber sua arte, foto ou mensagem especial. Com acabamento impecável e brilho duradouro, elas não são apenas utensílios, mas veículos de emoção. Perfeitas para eternizar momentos em família, presentear colaboradores com elegância ou criar uma linha exclusiva de produtos para sua marca. Cada peça é tratada com carinho para garantir que a imagem permaneça vibrante, resistindo ao tempo e ao uso diário, assim como as memórias que elas carregam.",
    benefits: ["Material Cerâmica Premium AAA", "Design Exclusivo e Personalizado", "Alta Resistência e Durabilidade", "Presente Emocional e Funcional"]
  },
  {
    id: 9,
    name: "Copos Personalizados para Festas",
    category: "Copos",
    image: partyCupImage,
    description: "Celebre com estilo e alegria! Nossos copos personalizados são o destaque de qualquer evento, trazendo cor e personalidade para festas de aniversário, casamentos, formaturas e confraternizações. Produzidos em material resistente e seguro, eles podem ser estampados com nomes, datas, frases divertidas ou o tema da sua festa. Além de decorativos, tornam-se uma lembrança durável que seus convidados levarão para casa, prolongando a memória daquele momento especial. A escolha perfeita para brindar à vida com exclusividade.",
    benefits: ["Ideal para Festas e Eventos", "Material Resistente e Seguro", "Personalização Temática Completa", "Lembrança Útil e Divertida"]
  },
  {
    id: 10,
    name: "Pratos de Porcelana Decorativos",
    category: "Pratos",
    image: plateImage,
    description: "Arte que decora e encanta. Nossos pratos de porcelana personalizados são verdadeiras obras de arte para embelezar sua casa ou presentear com sofisticação. Com bordas detalhadas e centro livre para personalização, eles são perfeitos para homenagens, comemorações de bodas, brasões de família ou fotos artísticas. Acompanham suporte para exposição, tornando-se o ponto focal de estantes e paredes. A queima da estampa garante brilho intenso e durabilidade eterna, transformando a porcelana em um legado de afeto.",
    benefits: ["Porcelana de Alta Qualidade", "Peça de Decoração Sofisticada", "Perfeito para Homenagens", "Acompanha Suporte de Mesa/Parede"]
  },
  {
    id: 2,
    name: "Camisetas Personalizadas",
    category: "Camisetas",
    image: tshirtImage,
    description: "Vista sua identidade com orgulho e conforto. Nossas camisetas personalizadas são confeccionadas com tecidos de alta qualidade que garantem toque macio e caimento perfeito. Seja para uniformizar sua equipe com profissionalismo, estampar sua criatividade artística ou celebrar uma data especial com a família, nós materializamos sua ideia. A impressão de alta definição captura cada detalhe e nuance da sua arte, resultando em peças que comunicam, inspiram e unem pessoas. Ideal para quem busca exclusividade sem abrir mão do estilo e do bem-estar.",
    benefits: ["Tecidos Confortáveis e Duráveis", "Impressão Vibrante e Nítida", "Identidade Visual Fortalecida", "Versatilidade para Eventos e Marcas"]
  },
  {
    id: 3,
    name: "Almofadas Personalizadas",
    category: "Almofadas",
    image: cushionImage,
    description: "Leve aconchego e personalidade para qualquer ambiente. Nossas almofadas personalizadas são o toque final perfeito para a decoração da sua casa ou um presente inesquecível que abraça quem você ama. Com enchimento macio e tecido de toque agradável, elas convidam ao descanso enquanto contam uma história através de suas estampas. Perfeitas para decorar quartos infantis, salas de estar ou presentear em datas românticas, criando uma atmosfera acolhedora e cheia de significado. Cada almofada é uma peça de design única, feita sob medida para o seu espaço.",
    benefits: ["Decoração com Identidade Única", "Toque Macio e Aconchegante", "Presente Memorável e Afetivo", "Acabamento de Alta Costura"]
  },
  {
    id: 4,
    name: "Etiquetas e Fitas de Cetim",
    category: "Etiquetas",
    image: labelImage,
    description: "Sua marca merece ser assinada com elegância e sofisticação. Nossas etiquetas e fitas de cetim personalizadas são o detalhe que faz toda a diferença na percepção de valor do seu produto. Ideais para artesãos, costureiras e marcas de moda que desejam transmitir profissionalismo e cuidado em cada entrega. Com impressão nítida e material de brilho sutil, elas transformam embalagens e peças de roupa em verdadeiros presentes. É a finalização perfeita que encanta o cliente antes mesmo de ele ver o produto principal, fortalecendo sua identidade no mercado.",
    benefits: ["Valorização do Produto Artesanal", "Acabamento Profissional e Elegante", "Fortalecimento de Branding", "Versatilidade para Embalagens"]
  },
  {
    id: 5,
    name: "Bonés Personalizados",
    category: "Bonés",
    image: capImage,
    description: "Estilo e visibilidade que vão à cabeça. Nossos bonés personalizados combinam design moderno com alta durabilidade, sendo a escolha ideal para proteger do sol enquanto promove sua marca ou evento. Disponíveis em diversos modelos como trucker, aba curva ou reta, eles oferecem ajuste perfeito e conforto para uso prolongado. Seja para times esportivos, brindes corporativos ou coleções de moda, garantimos uma personalização que destaca seu logo ou arte com precisão. Um acessório funcional que se torna parte do estilo de vida de quem usa.",
    benefits: ["Alta Visibilidade da Marca", "Estilo e Proteção Solar", "Modelos Ajustáveis e Confortáveis", "Brinde de Longa Duração"]
  },
  {
    id: 6,
    name: "Mousepads Personalizados",
    category: "Mousepads",
    image: mousepadImage,
    description: "Transforme o ambiente de trabalho com funcionalidade e inspiração. Nossos mousepads personalizados oferecem uma superfície otimizada para o deslizamento suave do mouse, melhorando a ergonomia e a produtividade. Além da utilidade técnica, são um espaço nobre para reforçar a identidade visual da sua empresa ou presentear com criatividade. Com base antiderrapante e impressão de alta qualidade, eles resistem ao uso intenso diário, mantendo as cores vivas. Um item indispensável em qualquer escritório moderno que une o útil ao agradável.",
    benefits: ["Ergonomia e Conforto no Uso", "Superfície de Alta Precisão", "Marketing Visual Constante", "Durabilidade para Uso Diário"]
  },
  {
    id: 7,
    name: "Azulejos para Lápide",
    category: "Azulejos",
    image: tileImage,
    description: "Uma homenagem eterna repleta de respeito e saudade. Nossos azulejos personalizados para lápides são produzidos com técnicas especiais que garantem resistência às intempéries, sol e chuva, mantendo a imagem e a mensagem intactas por muito mais tempo. Entendemos a delicadeza deste momento e tratamos cada peça com o máximo cuidado, criando artes que honram a memória de quem partiu. Disponíveis em diversos tamanhos, eles permitem adicionar fotos, datas e frases de carinho, criando um tributo digno e duradouro que conforta o coração.",
    benefits: ["Resistência Sol e Chuva", "Homenagem Digna e Duradoura", "Personalização Respeitosa", "Acabamento de Alta Qualidade"]
  },
  {
    id: 8,
    name: "Brindes e Ecobags",
    category: "Brindes",
    image: ecoImage,
    description: "Sustentabilidade e organização com a cara da sua marca. Nossas ecobags e agendas personalizadas são a escolha perfeita para empresas e pessoas conscientes que buscam unir utilidade e responsabilidade ambiental. As ecobags, resistentes e reutilizáveis, levam sua mensagem para todos os lugares, enquanto as agendas ajudam a organizar a rotina com elegância. Produtos que demonstram cuidado não apenas com quem recebe, mas também com o planeta. Ideais para kits de boas-vindas, eventos corporativos e presentes que geram impacto positivo real.",
    benefits: ["Sustentabilidade e Consciência", "Utilidade no Dia a Dia", "Fortalecimento de Vínculos", "Imagem Positiva da Marca"]
  }
];

export const galleryImages = [
  heroImage, mugImage, partyCupImage, plateImage, tshirtImage, cushionImage, labelImage, mousepadImage, capImage, tileImage, ecoImage
];
