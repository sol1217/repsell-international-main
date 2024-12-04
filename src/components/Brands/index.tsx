"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "@/components/Common/SectionTitle";

const Brands = () => {
  return (
    <section className="border-b-2 bg-white p-20">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <SectionTitle
            titleColor="text-[#000000]"
            title="Marcas Clientes de Repsell Internacional"
            paragraph="Nos enorgullece contar con la confianza y respaldo de algunas marcas prestigiosas y reconocidas en Costa Rica. "
            center
          />
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-10 rounded-sm bg-dark  sm:px-10 ">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex flex-row items-center justify-center rounded-2xl  xl:w-2/6">
      <div rel="nofollow noreferrer" className="relative transition  ">
        <Image
          src={imageLight}
          alt={name}
          width={100}
          height={100}
          className="hidden dark:block"
        />
      </div>
    </div>
  );
};
