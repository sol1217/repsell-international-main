"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

const EditBlogs = () => {
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [editAdTitle, setEditAdTitle] = useState(false);
  const [editAdDescription, setEditAdDescription] = useState(false);
  const [editPhrase, setEditPhrase] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [editList, setEditList] = useState(false);

  const handleEditClick = (setter) => (e) => {
    e.preventDefault();
    setter(true);
  };

  const handleAcceptClick = (setter) => (e) => {
    e.preventDefault();
    setter(false);
  };

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
                      {editTitle ? (
                        <>
                          <input
                            type="text"
                            name="title"
                            defaultValue="Nuevo Titulo"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditTitle(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Titulo: Codigo cy3455
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() => setEditTitle(true))}
                          >
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="rounded-3xl p-2 ">
                    <div className="flex w-full flex-row items-center justify-around gap-3 ">
                      {editDescription ? (
                        <>
                          <input
                            type="text"
                            name="descripcion"
                            defaultValue="Nueva Descripción"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditDescription(false),
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
                              setEditDescription(true),
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
                      {editAdTitle ? (
                        <>
                          <input
                            type="text"
                            name="tamaño"
                            defaultValue="Nuevo Tamaño"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditAdTitle(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Titulo adicional: 20cm
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() =>
                              setEditAdTitle(true),
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
                      {editAdDescription ? (
                        <>
                          <input
                            type="text"
                            name="color"
                            defaultValue="Nuevos Colores"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditAdDescription(false),
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
                            onClick={handleEditClick(() =>
                              setEditAdDescription(true),
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
                      {editPhrase ? (
                        <>
                          <input
                            type="text"
                            name="color"
                            defaultValue="Nuevos Colores"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditPhrase(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Frase: verde
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() => setEditPhrase(true))}
                          >
                            Editar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="rounded-3xl p-2 ">
                    <div className="flex w-full flex-row items-center justify-around gap-3 ">
                      {editCategory ? (
                        <>
                          <input
                            type="text"
                            name="color"
                            defaultValue="Nuevos Colores"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditCategory(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Category: verde
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() =>
                              setEditCategory(true),
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
                      {editList ? (
                        <>
                          <input
                            type="text"
                            name="color"
                            defaultValue="Nuevos Colores"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleAcceptClick(() =>
                              setEditList(false),
                            )}
                          >
                            Aceptar
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="block w-[170px] text-sm text-dark dark:text-white">
                            Lista: verde
                          </div>
                          <button
                            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                            onClick={handleEditClick(() => setEditList(true))}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditBlogs;
