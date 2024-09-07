import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import BlogDetailsPage from "@/app/blog-details/page";
import GalleryAbout from "../../components/About/Gallery";

export const metadata: Metadata = {
  title: "Historia Repsell international",
  description:
    "Actualmente, en Repsell Internacional, fabricamos en forma directa para todas las empresas organizadoras y gubernamentales; dorsales, lonas, trofeos, pines, grabados, medallas de metal, ecológicas y acrílicas, cristales y todo tipo de reconocimientos, promocionales y gran formato en general.",
  keywords: "medallas, trofeos, costa rica, repsell, historia, copas",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nosotros"
        description="Nuestra misión es brindar un servicio excepcional y garantizar que cada cliente reciba un producto que exceda sus expectativas."
      />
      <BlogDetailsPage />

      <AboutSectionTwo />

      <GalleryAbout />
    </>
  );
};

export default AboutPage;
