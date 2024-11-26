"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";
import repsell from "../../../public/images/hero/Repsell Internacional.png";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative z-10 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="mb-10 flex items-center justify-center">
          <Image src={repsell} alt="" height={650} width={650} />
        </div>
        <SectionTitle
          paragraph="Únase a nosotros en este emocionante viaje mientras continuamos celebrando logros junto a ustedes."
          center
          width="665px"
          titleColor="text-[#191e2a]"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            image="/images/hero/3.jpg"
            packageName="Lite"
            price={isMonthly ? "sol" : "luna"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="¡Impacta desde la primera impresión! Contamos con tecnología de punta en impresión digital"
          >
            <OfferList text="Fabricantes 100% costarricenses" status="active" />
            <OfferList text="Amplia gama de productos" status="active" />
            <OfferList text="Calidad y Durabilidad" status="active" />
            <OfferList text="Personalización" status="active" />
            <OfferList text="Flexibilidad y Variedad" status="active" />
            <OfferList
              text="Orientación a la atención al cliente"
              status="active"
            />
            <OfferList
              text="Pines (Sublimados o con impresión full color)"
              status="active"
            />
            <OfferList text="Cristales grabados a láser" status="active" />
            <OfferList text="Maderas con placa sublimada" status="active" />
          </PricingBox>
          <PricingBox
            image="/images/hero/2.jpeg"
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Hemos estado trabajando arduamente para llevar la calidad y la excelencia."
          >
            <OfferList text="Trofeos (Metal y Polímeros)" status="active" />
            <OfferList text="Copas (Metal y Polímeros)" status="active" />
            <OfferList text="Resinas" status="active" />
            <OfferList
              text="Medallas (Metal fundido, Acrílicas y Ecológicas)"
              status="active"
            />
            <OfferList text="Dorsales (números deportivos)" status="active" />
            <OfferList
              text="Pines (Sublimados o con impresión full color)"
              status="active"
            />
            <OfferList text="Maderas grabadas a láser" status="active" />
          </PricingBox>
          <PricingBox
            image="/images/hero/1.jpg"
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="En Repsell, convertimos tus ideas en obras maestras de gran formato. "
          >
            <OfferList text="Diseño y Calidad" status="active" />
            <OfferList text="Premiaciones" status="active" />
            <OfferList text="Personalizado" status="active" />
            <OfferList text="Medallas" status="active" />
            <OfferList text="Somos fabricantes de placas " status="active" />
            <OfferList
              text="Creamos Medallas con diferentes materiales y diseños"
              status="active"
            />
            <OfferList
              text="Acrílicos con impresión full color y  grabados a láser
"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
