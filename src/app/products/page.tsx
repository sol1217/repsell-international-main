import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import ProductMain from "@/components/productos/products";

export const metadata: Metadata = {
  title: "Lista de productos",
  description:
    "Lista de Productos\n" +
    "Reconocimientos, Medallas, Promocionales, Trofeos, Copas y Impresiones.",
};

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Lista de Productos"
        description="Reconocimientos, Medallas, Promocionales, Trofeos, Copas y Impresiones."
      />

      <ProductMain />
    </>
  );
};

export default ProductPage;
