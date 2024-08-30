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
    <>
      <Breadcrumb
        pageName="Contacta con nosotros "
        description="También puedes llenar el formulario de contacto a continuación y nos pondremos en contacto contigo lo antes posible. ¡Estamos aquí para ayudarte con todas tus necesidades de premiación y reconocimiento!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
