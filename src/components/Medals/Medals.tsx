import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleMedals from "@/components/Medals/SingleMedals";

import React from "react";

const Medals = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Medallas"
        description="Las Medallas Repsell International destacan por su artesanía superior y su diseño distintivo. Perfectas para premiar a los mejores en cualquier competencia, estas medallas reflejan el prestigio y la dedicación que define a los ganadores."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
              <SingleMedals />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medals;
