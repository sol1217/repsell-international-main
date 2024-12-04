"use client";
import NewsLatterBox from "./NewsLatterBox";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("Enviar Mensaje");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "info@gruposelly.com",
          "template_9zcv0pr",
          form.current,
          "frFPhKvlbZ8DyyXhk",
        )
        .then(
          () => {
            setIsSent(true);
            setButtonText("Enviado ✅");
          },
          (error) => {
            console.error("FAILED...", error.text);
            setButtonText("Error al enviar mensaje");
          },
        );
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="contact-form mb-12 h-[720px] rounded-sm border-2 border-amber-200 bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Nuestro equipo está aquí para ayudarle
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                ¿Tienes alguna consulta o necesitas asesoría sobre nuestros
                productos?
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre Completo:
                      </label>
                      <input
                        name="from_name"
                        type="text"
                        placeholder="Escriba su nombre"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Correo Electrónico:
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Escriba su correo"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="id"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Número de identificación:
                      </label>
                      <input
                        type="id"
                        name="id"
                        placeholder="Número de identificación"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="type_id"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tipo de identificación:
                      </label>
                      <input
                        type="type_id"
                        name="type_id"
                        placeholder="Tipo de identificación"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="address"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Dirección:
                      </label>
                      <input
                        type="address"
                        name="address"
                        placeholder=" Dirección"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Teléfono:
                      </label>
                      <input
                        type="phone"
                        name="phone"
                        placeholder="Teléfono"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mensaje:
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="¿Cómo le podemos ayudar?"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="rounded-sm bg-[#e11b24] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-[#e11b26]/90 dark:shadow-submit-dark"
                      disabled={isSent}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
