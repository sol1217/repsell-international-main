import Image from "next/image";
import TagButton from "@/components/Blog/TagButton";
import SectionTitle from "@/components/Common/SectionTitle";

const Admin = () => {
  return (
    <>
      <section className=" pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  <SectionTitle
                    title="Bienvenidos administradores de Repsell International"
                    paragraph="En este perfil administrador podras encontrar (Agregar nuevos productos, Crear un nuevo Blog, Pedir ayuda a soporte)"
                    mb="44px"
                  />

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/hero/rs.jpeg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    ¿Deseas agregar nuevos productos?
                  </h2>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="products-names mb-5 mr-10 flex items-center gap-3">
                        <TagButton text="Medallas" href="/newProduct" />
                        <TagButton text="Reconocimientos" href="/newProduct" />
                        <TagButton text="Trofeos y Copas" href="/newProduct" />
                        <TagButton text="Promocionales" href="/newProduct" />
                        <TagButton text="Impresion" href="/newProduct" />
                      </div>
                      <div className="mb-5 flex items-center"></div>
                    </div>
                    <div className="mb-5">
                      <a
                        href="/products"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        Ver Productos
                      </a>
                    </div>
                  </div>

                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    ¿Crear un nuevo blog?
                  </h2>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="mb-5 mr-10 flex items-center gap-3">
                        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                          Crear un nuevo blog de nuevos productos y experiencias
                          Repsell international
                        </p>
                      </div>
                      <div className="mb-5 flex items-center"></div>
                    </div>
                    <div className="mb-5">
                      <a
                        href="/newBlog"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        Nuevo Blog
                      </a>
                    </div>
                  </div>

                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    ¿Necesitas ayuda?, Contacta a soporte
                  </h2>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="mb-5 mr-10 flex items-center gap-3">
                        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                          Contacto de Sol Calderón desarrolladora web
                        </p>
                      </div>
                      <div className="mb-5 flex items-center"></div>
                    </div>
                    <div className="mb-5">
                      <a
                        href="https://wa.link/h2pg27"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                      >
                        Contactar
                      </a>
                    </div>
                  </div>

                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                  </p>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Contactar :
                      </h4>
                      <div className="flex items-center">
                        <TagButton
                          text="Soporte"
                          href="https://wa.link/h2pg27"
                        />

                        <TagButton text="Volver..." href="/" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;