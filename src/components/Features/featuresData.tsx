import { Feature } from "@/types/feature";
import Image from "next/image";
import resina from "../../../public/images/products/resina.png";
import medals from "../../../public/images/products/medals.png";
import cup from "../../../public/images/products/cup.png";
import crystals from "../../../public/images/products/crystal.png";
import wood from "../../../public/images/products/wood.png";
import trophy from "../../../public/images/products/trophy-product.png";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src={medals} alt="" height={200} width={200} />,
    title: "Medallas",
    paragraph:
      "Diseñadas con precisión y cuidado, nuestras medallas son ideales para destacar cualquier logro. Disponemos de una variedad de estilos, materiales y acabados que se adaptan a cada ocasión, desde eventos deportivos hasta reconocimientos académicos.",
  },
  {
    id: 1,
    icon: <Image src={trophy} alt="trophy" width={100} height={100} />,
    title: "Trofeos",
    paragraph:
      "Los trofeos de REPSELL INTERNACIONAL son un símbolo duradero de excelencia. Disponemos de una amplia gama de diseños y tamaños, todos personalizables, para que cada trofeo se ajuste a la magnitud del logro que representa.",
  },
  {
    id: 1,
    icon: <Image src={cup} alt="cup" height={100} width={100} />,
    title: "Copas",
    paragraph:
      "Las copas son una forma clásica y elegante de reconocer la excelencia. Disponibles en diversos estilos, nuestras copas destacan por su diseño sofisticado y la posibilidad de personalización, lo que las convierte en el premio ideal para competencias de alto nivel.",
  },
  {
    id: 1,
    icon: <Image src={resina} alt="" height={200} width={200} />,
    title: "Resinas",
    paragraph:
      "Nuestras figuras y trofeos en resina son altamente personalizables y versátiles. Ofrecen la posibilidad de crear formas detalladas y únicas, perfectas para premiaciones temáticas o específicas, manteniendo siempre la calidad y el detalle que nos caracterizan.",
  },
  {
    id: 1,
    icon: <Image src={crystals} alt="crystals" width={100} height={100} />,
    title: "Cristales Grabados",
    paragraph:
      "Si buscas un acabado más moderno y refinado, nuestros reconocimientos en cristal grabado destacan por su claridad y belleza. El grabado en cristal permite detalles precisos y elegantes, transformando cada pieza en una verdadera obra de arte.",
  },
  {
    id: 1,
    icon: <Image src={wood} alt="wood" width={100} height={100} />,
    title: "Madera Grabada",
    paragraph:
      "Para un toque más cálido y natural, nuestras piezas de madera grabada ofrecen una alternativa sofisticada. El grabado en madera es perfecto para crear reconocimientos que combinan elegancia con durabilidad, manteniendo un aspecto tradicional y artesanal.",
  },
];
export default featuresData;
