import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import NewBlog from "@/components/NewBlog/NewBlog";

export const metadata: Metadata = {
  title: "Repsell International Blog ",
  description:
    "Explora el blog de Repsell International para obtener las últimas noticias, tendencias e innovaciones en premiaciones y reconocimientos. Descubre artículos sobre trofeos, copas y productos personalizados para galardonar a los mejores.",
  keywords:
    "Repsell International, blog, premiaciones, reconocimientos, trofeos, copas, productos personalizados, galardones, innovaciones",
};

const NewBlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="¿Deseas crear un nuevo Blog?"
        description="Crea un nuevo blog que hable sobre alguna información o producto relevante."
      />

      <NewBlog />
    </>
  );
};

export default NewBlogPage;
