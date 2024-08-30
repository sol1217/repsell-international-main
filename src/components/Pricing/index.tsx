"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Repsell Internacional"
          paragraph="Únete a nosotros en este emocionante viaje mientras continuamos celebrando logros junto a ustedes."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "sol" : "luna"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Impacta desde la primera impresión !! Contamos con todo en impresión digital !!"
          >
            <OfferList text="Somos fabricantes 100% ticos" status="active" />
            <OfferList
              text="Nuestros Trofeos son obras de arte"
              status="active"
            />
            <OfferList
              text="Tenemos todo en impresión digital"
              status="active"
            />
            <OfferList
              text="Contamos con variedad de diseños"
              status="active"
            />
            <OfferList
              text="Materiales para sus placas conmemorativas."
              status="active"
            />
            <OfferList
              text="Continuamos celebrando logros junto a ustedes"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Hemos estado trabajando arduamente para llevar la calidad y la excelencia."
          >
            <OfferList
              text="Impresión en UV, opción para chip, "
              status="active"
            />
            <OfferList text="Promocionales" status="active" />
            <OfferList text="Variedad en estilos de placas" status="active" />
            <OfferList
              text="Somos soluciones para sus eventos deportivos"
              status="active"
            />
            <OfferList text="Reconocimientos Corporativos" status="active" />
            <OfferList text="Lanyards con su diseño" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="En Repsell, convertimos tus ideas en obras maestras de gran formato. "
          >
            <OfferList text="Diseño y Calidad" status="active" />
            <OfferList text="Premiaciones" status="active" />
            <OfferList text="Personalizado." status="active" />
            <OfferList text="Medallas" status="active" />
            <OfferList text="Somos fabricantes de placas " status="active" />
            <OfferList
              text="Creamos Medallas con diferentes materiales y diseños"
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
