import { Metadata } from "next";
import TrophiesAndCups from "@/components/TrophiesAndCups/TrophiesAndCups";

export const metadata: Metadata = {
  title: "Copas y Trofeos",
  description:
    "Los trofeos y copas que ofrecemos son más que simples galardones; son emblemas de triunfo y dedicación. Con una amplia variedad de estilos y acabados, encontrará la opción perfecta para honrar a los ganadores y destacar su esfuerzo.",
  keywords:
    "copas, trofeos, medallas, ganadores, esfuerzo, competencia, triunfo",
};

const TrophiesAndCupsPage = () => {
  return (
    <>
      <TrophiesAndCups />
    </>
  );
};

export default TrophiesAndCupsPage;
