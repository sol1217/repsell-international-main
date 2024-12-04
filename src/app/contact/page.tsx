import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto Repsell international",
  description: "Informacion general de repsell, contacto, redes sociales",
  keywords:
    "redes sociales, repsell, medallas, contacto repsell, trofeos, reconocimientos, costa rica",
};

const ContactPage = () => {
  return (
    <div className="">
      <Breadcrumb
        color="text-[#1e242e]"
        pageName="Contáctenos"
        description="Llene el formulario a continuación y nos pondremos en contacto con usted lo antes posible. ¡Estamos aquí para ayudarle con su evento y premiación!"
      />

      <Contact />
    </div>
  );
};

export default ContactPage;
