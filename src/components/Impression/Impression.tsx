import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleImpression from "@/components/Impression/SingleImpression";
import React from "react";

const Impression = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Impresión Gran Formato"
        description="La impresión en gran formato es ideal para dar vida a tus ideas en una escala mayor. Perfecta para banners, vallas publicitarias, pósters, y más, esta técnica garantiza imágenes de alta calidad y colores vibrantes."
        adm="Perfil Administrador"
        href="/signin"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
              <SingleImpression />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impression;