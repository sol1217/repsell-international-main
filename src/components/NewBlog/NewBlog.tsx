"use client";

import React, { useState } from "react";

const NewBlog = () => {
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    additionalTitle: "",
    additionalText: "",
    list: ["", "", "", ""],
    phrase: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("point")) {
      const index = parseInt(name.split("-")[1], 10);
      const updatedList = [...formData.list];
      updatedList[index] = value;
      setFormData({ ...formData, list: updatedList });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog creado exitosamente:", data);
        setMessage("Blog creado exitosamente!");
      } else {
        console.error("Error al crear el blog");
        setMessage("Error al crear el blog. Por favor, intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al conectarse al backend:", error);
      setMessage(
        "Error al conectarse al backend. Por favor, intenta nuevamente.",
      );
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[10px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[1200px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                AÑADIR NUEVO BLOG
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                Completa los siguientes campos para crear una entrada de blog
                informativa y atractiva para tus clientes.
              </p>

              <form onSubmit={handleSubmit}>
                <input type="file" />
                <div className="mb-8">
                  <label
                    htmlFor="title"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Título del Blog:
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    placeholder="Ingresa un título detallado"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="description"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Descripción Completa:
                  </label>
                  <textarea
                    required
                    name="description"
                    placeholder="Ingresa una descripción completa del blog"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="additionalTitle"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Título de la Información Adicional:
                  </label>
                  <input
                    required
                    type="text"
                    name="additionalTitle"
                    placeholder="Ingresa un título para la información adicional"
                    value={formData.additionalTitle}
                    onChange={handleInputChange}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="additionalText"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Información Adicional:
                  </label>
                  <textarea
                    name="additionalText"
                    placeholder="Ingresa cualquier información adicional"
                    value={formData.additionalText}
                    onChange={handleInputChange}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
                <label
                  htmlFor="important-points"
                  className="mb-3 block text-sm text-dark dark:text-white"
                >
                  Puntos Clave:
                </label>
                <div className="mb-8 flex flex-col gap-3">
                  {formData.list.map((point, index) => (
                    <input
                      key={index}
                      required
                      type="text"
                      name={`point-${index}`}
                      placeholder={`Punto ${index + 1}`}
                      value={point}
                      onChange={handleInputChange}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  ))}
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="phrase"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Frase o Cita Inspiradora:
                  </label>
                  <textarea
                    required
                    name="phrase"
                    placeholder="Ingresa una frase o cita inspiradora"
                    value={formData.phrase}
                    onChange={handleInputChange}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    Publicar Blog
                  </button>
                </div>
                {message && (
                  <div
                    className={`mb-6 text-center ${message.includes("exitosamente") ? "text-green-600" : "text-red-600"}`}
                  >
                    {message}
                  </div>
                )}
              </form>
              <p className="text-center text-base font-medium text-body-color">
                ¿Quieres ver tus blogs publicados?
                <a href="/blog" className="text-primary hover:underline">
                  Ir al Blog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlog;
