"use client";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditProducts = () => {
  const [editNombre, setEditNombre] = useState(false);
  const [editDescripcion, setEditDescripcion] = useState(false);
  const [editTamaño, setEditTamaño] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [dataSelected,setDataSelected] = useState(null);
  const data = useSearchParams();
  const fetchProduct = async () => {
    try {
      const product = (await axios.get(`https://repsell-international-backend.onrender.com/product/${data.get("id")}/${data.get("category")}`)).data.data[0]
      setDataSelected(product || {name:"",description:"",height:"",color:""})
      setEditNombre(product.name);
      setEditDescripcion(product.description);
      setEditDescripcion(product.height);
      setEditColor(product.color);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  useEffect(() => {
    fetchProduct();
  });

  
  const handleEditClick = (setter) => (e) => {
    e.preventDefault();
    setter(true);
  };

  const handleAcceptClick = (setter) => (e) => {
    e.preventDefault();
    setter(false);
  };

  const updateValues = async ()=>{
    const resp = await axios.put(`http://localhost:3001/product/`,dataSelected)
  }

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex  flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto w-[1200px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Nombre producto
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Ingresa los datos nuevos del productos
                </p>

                <input
                  type="file"
                  name="Camboiar"
                  className="border-stroke mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                />

                <form className="flex flex-col gap-3">
                  <div className="rounded-3xl p-2 ">
                    <div className="flex w-full flex-row items-center justify-around gap-3 ">
                      {dataSelected ? (
                        <>
                          <input
                            type="text"
                            name="nombre"
                            value={dataSelected.name ? dataSelected.name :"Nuevo Nombre"}
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditNombre(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Nombre: Codigo cy3455
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() => setEditNombre(true))}
                          >
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-3xl p-2 ">
                    <div className="flex w-full flex-row items-center justify-around gap-3 ">
                      {dataSelected ? (
                        <>
                          <input
                            type="text"
                            name="descripcion"
                            value={dataSelected.description ? dataSelected.description :"Nueva Descripcion"}
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditDescripcion(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Descripción: Transparente grabado directo a una cara
                            o en espejo
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() =>
                              setEditDescripcion(true),
                            )}
                          >
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-3xl p-2 ">
                    <div className="flex w-full flex-row items-center justify-around gap-3 ">
                      {dataSelected ? (
                        <>
                          <input
                            type="text"
                            name="tamaño"
                            value={dataSelected.height ? dataSelected.height :"Nuevo tamaño"}
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditTamaño(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Tamaño: 20cm
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() => setEditTamaño(true))}
                          >
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="rounded-3xl p-2 ">
                    <div className="flex w-full flex-row items-center justify-around gap-3 ">
                      {dataSelected ? (
                        <>
                          <input
                            type="text"
                            name="color"
                            value={dataSelected.color ? dataSelected.color :"Nuevo color"}
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditColor(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Colores: verde
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() => setEditColor(true))}
                          >
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </form>

                <p className="mt-6 text-center text-base font-medium text-body-color">
                  Volver a Blogs
                  <a href="/checkBlog" className="text-primary hover:underline">
                    Blogs
                  </a>
                </p>
                <button
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                  onClick={()=>updateValues()}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
    </>
  );
};

export default EditProducts;
