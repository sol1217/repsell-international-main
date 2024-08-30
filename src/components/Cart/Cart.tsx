"use client";

import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { BsFillCartXFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve items from localStorage when the component mounts
    const storedPromotionals =
      JSON.parse(localStorage.getItem("selectedPromotionals")) || [];
    const storedMedals =
      JSON.parse(localStorage.getItem("selectedMedals")) || [];
    const storedTrophies = JSON.parse(localStorage.getItem("trophies")) || [];
    const storedImpressions =
      JSON.parse(localStorage.getItem("impressions")) || [];
    const storedRecognitions =
      JSON.parse(localStorage.getItem("recognitions")) || [];

    // Combine all arrays
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
    // Update localStorage by filtering out the removed item
    const updateLocalStorage = (key, filterFn) => {
      const storedItems = JSON.parse(localStorage.getItem(key)) || [];
      const updatedItems = storedItems.filter(filterFn);
      localStorage.setItem(key, JSON.stringify(updatedItems));
    };

    // Define which keys and filter functions to use
    const filterFunctions = {
      selectedPromotionals: (item) => item.id !== itemId,
      selectedMedals: (item) => item.id !== itemId,
      trophies: (item) => item.id !== itemId,
      impressions: (item) => item.id !== itemId,
      recognitions: (item) => item.id !== itemId,
    };

    // Update localStorage for each key
    for (const [key, filterFn] of Object.entries(filterFunctions)) {
      updateLocalStorage(key, filterFn);
    }

    // Update state
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="flex flex-col gap-10 p-7">
      <Breadcrumb
        pageName="Repsell International (Cotización)"
        description="Cotiza Reconocimientos, Medallas, Promocionales, Trofeos, Copas y Impresiones."
      />
      <div>
        <div className="flex flex-row items-start justify-center gap-32">
          <div className="b-[#172039] flex w-[600px] flex-col items-center justify-center gap-10 bg-[#e11b24a3] p-4 shadow-xl">
            <h3 className="text-2xl font-bold leading-tight text-black dark:text-white">
              Productos Seleccionados:
            </h3>
            <p className="text-red-black border-b border-body-color border-opacity-25 text-center text-base leading-relaxed dark:border-white dark:border-opacity-25">
              🏆 Cotiza todo tipo de Medallas, Trofeos
              <br /> Copas con nosotros. 🏆
            </p>
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-opacity-8 flex flex-row items-center justify-center gap-8 border-b border-body-color p-16 pb-5 pt-2"
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
                      Borrar
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-8">
                <BsFillCartXFill fontSize={100} />
                <h3>No hay productos seleccionados</h3>
              </div>
            )}

            <div className="flex w-full cursor-pointer items-center justify-center rounded-sm bg-[#121723] px-9 py-4 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark">
              Cotizar Productos
            </div>
            <p className="text-red-black text-center text-base leading-relaxed dark:border-white dark:border-opacity-25">
              Uno de nuestros operadores pronto estará disponible para brindarte
              la información de tu cotización.
            </p>
          </div>
          <NewsLatterBox />
        </div>
      </div>
    </div>
  );
};

export default Cart;
