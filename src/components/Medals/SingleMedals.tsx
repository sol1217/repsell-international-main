"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import error from "../../../public/images/hero/error.png";
import white from "../../../public/images/products/color/white.jpeg";

import { colorMapping } from "@/utils/colorMapping";

const SingleMedals = () => {
  const [medals, setMedals] = useState([]);
  const [addedMedalId, setAddedMedalId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedals = async () => {
      try {
        const response = await axios.get(
          "https://repsell-international-backend.onrender.com/medals",
        );
        const uniqueMedals = response.data.data.filter(
          (medal, index, self) =>
            index === self.findIndex((m) => m.name === medal.name),
        );
        setMedals(uniqueMedals);
      } catch (error) {
        console.error("Error fetching medals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedals();
  }, []);

  const handleAddToLocalStorage = (medal) => {
    let storedItems = JSON.parse(localStorage.getItem("selectedMedals")) || [];
    storedItems.push(medal);
    localStorage.setItem("selectedMedals", JSON.stringify(storedItems));
    setAddedMedalId(medal.id); // Set the added medal ID to display the message
    setTimeout(() => setAddedMedalId(null), 3000); // Clear the message after 3 seconds
  };

  const defaultImageSrc = "/images/default-color.png";

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="products-box flex w-[80vw] flex-wrap items-center justify-center gap-3">
          {medals.length > 0 ? (
            medals.map((medal) => (
              <div
                key={medal.id}
                className="product-main medals-colors group relative mb-8 h-[740px] w-[400px] flex-wrap overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="relative block aspect-[37/22] w-full">
                  <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                    {medal.category}
                  </span>
                  <img
                    className="mx-auto object-contain"
                    src={medal.image || error}
                    alt={medal.name}
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <Link
                      href="/blog-details"
                      className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                    >
                      {medal.name}
                    </Link>
                  </h3>
                  <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {medal.description}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-5 flex flex-col items-center gap-3 border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                      <div className="w-full">
                        <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                          Colores Disponibles:
                        </h4>
                      </div>
                      <div className="mr-4 flex w-full flex-row  flex-wrap gap-5">
                        {(medal.color || "").split(",").map((color, index) => {
                          const colorKey = color.trim().toLowerCase();
                          const imageSrc = colorMapping[colorKey] || white;

                          return (
                            <div
                              key={index}
                              className="flex w-[70px] items-center gap-3"
                            >
                              <Image
                                src={imageSrc}
                                alt={color.trim()}
                                width={24}
                                height={24}
                                className="rounded-full border-body-color dark:border-white"
                                style={{ width: "24px", height: "24px" }}
                              />
                              <span className="text-xs font-bold text-dark dark:text-white">
                                {color.trim()}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="mb-1 text-sm font-medium text-dark dark:text-white">
                        <p>Tamaño: {medal.height} CM</p>
                        <b className="border-b-2">Aproximadamente</b>
                      </div>
                      <button
                        onClick={() => handleAddToLocalStorage(medal)}
                        className="rounded-sm bg-[#e11b24] px-9 py-2 text-center text-base font-medium text-white shadow-submit duration-300 hover:bg-[#e11b25]/90 dark:shadow-submit-dark"
                      >
                        Añadir
                      </button>
                      {addedMedalId === medal.id && (
                        <p className="mt-2 flex flex-col items-center justify-center gap-3 text-center text-sm font-medium text-green-600">
                          Añadido correctamente
                          <FaCheckCircle color="white" fontSize={16} />
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron medallas.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleMedals;
