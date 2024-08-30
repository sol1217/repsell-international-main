"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "@/components/Common/SectionTitle";

const Brands = () => {
  return (
    <section className="m-16 pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <SectionTitle
            title="Marcas Clientes de Repsell International"
            paragraph="Nos enorgullece contar con la confianza y respaldo de algunas marcas prestigiosas y reconocidas en Costa Rica. "
            center
          />
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
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
    <div className="flex w-1/2 items-center justify-center px-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative flex w-full items-center justify-center opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image
          src={imageLight}
          alt={name}
          width={100}
          height={100}
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="block dark:hidden"
        />
      </a>
    </div>
  );
};
