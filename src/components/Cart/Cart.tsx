"use client";

import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { BsFillCartXFill } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("info@gruposelley.com", "cotizacion", form.current, {
        publicKey: "frFPhKvlbZ8DyyXhk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsEmailSent(true); // Actualizar el estado si el correo fue enviado exitosamente
          setEmailError(false); // Asegurar que no haya un mensaje de error si fue exitoso
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailError(true); // Si falla, activar el estado de error
          setIsEmailSent(false); // Asegurarse de que no muestre el mensaje de éxito
        },
      );
  };

  useEffect(() => {
    const storedPromotionals =
      JSON.parse(localStorage.getItem("selectedPromotionals")) || [];
    const storedMedals =
      JSON.parse(localStorage.getItem("selectedMedals")) || [];
    const storedTrophies = JSON.parse(localStorage.getItem("trophies")) || [];
    const storedImpressions =
      JSON.parse(localStorage.getItem("impressions")) || [];
    const storedRecognitions =
      JSON.parse(localStorage.getItem("recognitions")) || [];

    const combinedItems = [
      ...storedPromotionals,
      ...storedMedals,
      ...storedTrophies,
      ...storedImpressions,
      ...storedRecognitions,
    ];
    setCartItems(combinedItems);
  }, []);

  const handleRemoveItem = (itemId) => {
    const updateLocalStorage = (key, filterFn) => {
      const storedItems = JSON.parse(localStorage.getItem(key)) || [];
      const updatedItems = storedItems.filter(filterFn);
      localStorage.setItem(key, JSON.stringify(updatedItems));
    };

    const filterFunctions = {
      selectedPromotionals: (item) => item.id !== itemId,
      selectedMedals: (item) => item.id !== itemId,
      trophies: (item) => item.id !== itemId,
      impressions: (item) => item.id !== itemId,
      recognitions: (item) => item.id !== itemId,
    };

    for (const [key, filterFn] of Object.entries(filterFunctions)) {
      updateLocalStorage(key, filterFn);
    }

    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="flex flex-col gap-10 bg-white p-7 ">
      <Breadcrumb
        color="text-[#000000]"
        pageName="Repsell International (Cotización)"
        description="Cotice sus reconocimientos, promocionales e impresión a gran formato"
      />
      <div>
        <div className="cart-main flex flex-row items-start justify-center gap-32 ">
          <div className="cart-products b-[#172039] flex w-[600px] flex-col items-center justify-center gap-10 bg-[#e11b24a3] p-4 shadow-xl">
            <h3 className="text-center text-2xl font-bold leading-tight text-black dark:text-white">
              Productos Seleccionados:
            </h3>
            <p className="text-red-black border-b border-body-color border-opacity-25 text-center text-base leading-relaxed dark:border-white dark:border-opacity-25">
              Cotice todo tipo de reconocimientos, promocionales
              <br /> e impresiones a gran formato con nosotros
            </p>
            {cartItems.length > 0 ? (
              <>
                {!isEmailSent && !emailError ? ( // Verificar si ya se ha enviado el correo y no hay errores
                  <form ref={form} onSubmit={sendEmail}>
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="cart-product border-opacity-8 flex flex-row items-center justify-center gap-8 border-b border-body-color p-16 pb-5 pt-2"
                      >
                        <Image
                          className="rounded-full"
                          src={item.image || "/default-image.png"}
                          alt={item.name || "Product Image"}
                          width={100}
                          height={100}
                        />
                        <p>{item.name || `Código #${item.id}`}</p>

                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600"
                        >
                          <FaTrashAlt color="white" fontSize={24} />
                        </button>
                      </div>
                    ))}
                    <input
                      type="name"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Ingresa tu nombre completo"
                      name="name"
                      className="mb-3 mt-3 flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
                    />
                    <input
                      type="number"
                      maxLength={8}
                      required
                      placeholder="Ingresa un número de teléfono"
                      name="number"
                      className="mb-3 mt-3 flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
                    />
                    <input
                      type="id"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Ingresa tu número identificación"
                      name="id"
                      className="mb-3 mt-3 flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
                    />
                    <input
                      type="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Ingresa tu correo electrónico"
                      name="email"
                      className="mb-3 mt-3 flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
                    />
                    <input
                      type="adress"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder="Ingresa tu dirección"
                      name="adress"
                      className="mb-3 mt-3 flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
                    />

                    <input
                      type="hidden"
                      name="product_names"
                      value={cartItems
                        .map((item) => item.name || `Código #${item.id}`)
                        .join(", ")}
                    />

                    <input
                      type="submit"
                      value="Cotizar Productos"
                      className="flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
                    />
                  </form>
                ) : isEmailSent ? (
                  <p className="text-center text-base font-medium text-green-500">
                    ¡Enviado correctamente!
                  </p>
                ) : emailError ? (
                  <p className="text-black-500 bg-blue-950 text-center text-base font-medium">
                    No se pudo enviar la cotización. Inténtalo nuevamente.
                  </p>
                ) : null}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-8">
                <BsFillCartXFill fontSize={100} />
                <h3>No hay productos seleccionados</h3>
              </div>
            )}

            <p className="text-red-black text-center text-base leading-relaxed dark:border-white dark:border-opacity-25">
              Una de nuestras agentes de ventas pronto se contactará con usted
              para brindarle la información solicitada
            </p>
          </div>
          <NewsLatterBox />
        </div>
      </div>
    </div>
  );
};

export default Cart;
