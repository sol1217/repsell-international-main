import Image from "next/image";
import { GiConcentrationOrb } from "react-icons/gi";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historia Repsell",
  description:
    " La Historia de Repsell: Un Camino Forjado con pasión,dedicación y excelencia.",
  keywords: "exitos, repsell, excelencia, medallas, trofeos",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-[#1e242e] sm:text-4xl sm:leading-tight">
                  La Historia de Repsell: Un Camino Forjado con Pasión,
                  Dedicación y Excelencia.
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4"></div>
                      <div className="w-full">
                        <span className="mb-1 flex items-center justify-center  gap-3 text-base font-medium text-body-color">
                          <GiConcentrationOrb fontSize={25} color="red" />
                          <span className="border-b-2 font-serif text-2xl">
                            Somos Repsell Internacional.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Somos una empresa y marca registrada con respaldo
                    garantizado que inició sus operaciones en marzo de 1996,
                    dirigiéndonos primeramente a la venta de programas
                    innovadores de diseño tecnológico en la educación. Llegando
                    a vincularnos con el MEP y los Colegios Técnicos a nivel
                    nacional, así mismo con empresas privadas y el INA
                    <br /> <br />
                    Luego, cambiamos nuestro giro comercial en el 2000 al
                    fusionar la empresa con Grabados y Diseños Selley, para
                    continuar con el legado de nuestro fundador Pal Z Selley
                    Gyaraki.
                  </p>
                  <div className="repsell-img-box mb-8">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid grid-rows-1 gap-3">
                        <div className="repsell-img relative aspect-[7/60] w-full gap-3 sm:aspect-[97/44]">
                          <Image
                            src="/images/hero/story-repsell.jpeg"
                            alt="image 1"
                            fill
                            className=" object-cover object-center"
                          />
                        </div>
                        <div className="relative aspect-[97/80] w-full sm:aspect-[97/44]">
                          <Image
                            src="/images/hero/story-1.jpeg"
                            alt="image 2"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className=" relative h-[50] w-full sm:aspect-[97/90]">
                        <Image
                          src="/images/hero/story-2.jpeg"
                          alt="image 3"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      <div className="relative aspect-[97/44] h-[50] w-full">
                        <Image
                          src="/images/hero/story-3.jpeg"
                          alt="image 3"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="relative aspect-[97/44] h-[50] w-full ">
                        <Image
                          src="/images/hero/story-4.jpeg"
                          alt="image 3"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="relative w-[40]">
                        <Image
                          src="/images/hero/story-5.jpeg"
                          alt="image 3"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    En el 2002, la empresa da un cambio innovador y tecnológico,
                    con nuestros fundadores a cargo; el ING Pal Selley González,
                    la Licda. Katty Selley González, y nuestra aliada
                    estratégica a cargo de importaciones, MBA. Sara Méndez
                    Esquivel. Incluimos maquinaria de alta tecnología,
                    posicionándonos como la primera empresa de premiaciones y
                    reconocimientos del país y Centroamérica. Iniciando una
                    nueva era de cambio con catálogos impresos, artículos
                    diferentes y no tradicionales, los cuales tuvieron y siguen
                    teniendo gran acogida por nuestros clientes.
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    A través de los conocimientos modernos del ING Pal Selley
                    González, adquiridos gracias a su educación en las mejores
                    universidades de Estados Unidos IIT Chicago, Bradley
                    University, y su gran visión desde hace más de 22 años, se
                    crean en el 2002 las medallas acrílicas grabadas a Láser y
                    con sublimación, convirtiéndose en un éxito rotundo.
                    Inclusive, para el ICODER, son las medallas estrella de
                    premiaciones deportivas en la actualidad.
                    <br />
                    <div className="mt-7 grid grid-cols-3 gap-5">
                      <Image
                        src="/images/hero/st-5.jpeg"
                        alt=""
                        width={300}
                        height={100}
                        className="history-img h-[180px] w-full object-cover"
                      />
                      <Image
                        src="/images/hero/st-3.jpeg"
                        alt=""
                        width={300}
                        height={100}
                        className="history-img h-[180px] w-full object-cover"
                      />
                      <Image
                        src="/images/hero/st-1.jpeg"
                        alt=""
                        width={300}
                        height={100}
                        className="history-img h-[180px] w-full object-cover"
                      />
                      <Image
                        src="/images/hero/st-2.jpeg"
                        alt=""
                        width={300}
                        height={100}
                        className="history-img h-[180px] w-full object-cover"
                      />
                      <Image
                        src="/images/hero/st-4.jpeg"
                        alt=""
                        width={300}
                        height={100}
                        className="history-img h-[180px] w-full object-cover"
                      />
                      <Image
                        src="/images/hero/st-5.jpeg"
                        alt=""
                        width={300}
                        height={100}
                        className="history-img h-[180px] w-full object-cover"
                      />
                    </div>
                    <br />
                    Una característica que nos destaca es que utilizamos
                    materiales resistentes y amigables con el medio ambiente
                    proporcionando confianza a todos nuestros clientes.
                    Comenzando así a entablar la futura industria de medallas en
                    metal para el consumo nacional y extranjero. Siendo la mejor
                    empresa en la fabricación y distribución de medallas de
                    metal.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Características que nos destacan.
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Actualmente, en Repsell Internacional, fabricamos en forma
                    directa para todas las empresas organizadoras y
                    gubernamentales; dorsales, lonas, trofeos, pines, grabados,
                    medallas de metal, ecológicas y acrílicas, cristales y todo
                    tipo de reconocimientos, promocionales y gran formato en
                    general.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Utilizamos materiales resistentes.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Materiales amigables con el medio ambiente.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Consumo nacional y extranjero.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Proporcionando confianza a todos nuestros clientes.
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Seguimos innovando y creciendo en un mundo que demanda
                      alta calidad y compromiso. Gracias a nuestro equipo humano
                      y el excelente servicio al cliente que nos destaca, y
                      también, gracias a nuestros clientes con los que hemos
                      desarrollado una estrecha relación de confianza y lealtad
                      mutua.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Somos Repsell Internacional una empresa orgullosa de ser
                    100% nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
