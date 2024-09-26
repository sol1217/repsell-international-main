"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { colorMapping } from "@/utils/colorMapping";
import { FaCheckCircle } from "react-icons/fa";
import error from "../../../public/images/hero/error.png";
import gold from "../../../public/images/products/color/golden.jpeg";

const SingleTrophiesAndCups = () => {
  const [trophies, setTrophies] = useState([]);
  const [addedTrophyId, setAddedTrophyId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrophies = async () => {
      try {
        const response = await axios.get(
          "https://repsell-international-backend.onrender.com/trophies",
        );
        const uniqueTrophies = response.data.data.filter(
          (trophy, index, self) =>
            index === self.findIndex((m) => m.name === trophy.name),
        );
        setTrophies(uniqueTrophies);
      } catch (error) {
        console.error("Error fetching trophies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrophies();
  }, []);

  const handleAddTrophy = (trophy) => {
    const storedTrophies = JSON.parse(localStorage.getItem("trophies")) || [];
    const updatedTrophies = [...storedTrophies, trophy];
    localStorage.setItem("trophies", JSON.stringify(updatedTrophies));
    setAddedTrophyId(trophy.id);
    setTimeout(() => setAddedTrophyId(null), 3000);
  };

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="products-box flex w-[80vw] flex-wrap items-center justify-center gap-3">
          {trophies.length > 0 ? (
            trophies.map((trophy) => (
              <div
                key={trophy.id}
                className="product-main group relative mb-8 h-[650px] w-[400px] flex-wrap overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="relative block aspect-[37/22] w-full">
                  <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                    {trophy.category}
                  </span>
                  <img
                    className="mx-auto object-contain"
                    src={trophy.image || error}
                    alt={trophy.name}
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <div className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                      {trophy.name}
                    </div>
                  </h3>
                  <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {trophy.description}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-5 flex flex-col items-center gap-3 border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                      <div className="w-full">
                        <div className="mb-1 text-sm font-medium text-dark dark:text-white">
                          Tamaño:
                          <br />
                          <br />
                          {(trophy.height || "")
                            .split(",")
                            .map((height, index) => {
                              const heightKey = height.trim().toLowerCase();

                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <span className="text-xs font-bold text-dark dark:text-white">
                                    {height.trim()}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex flex-row">
                        <div className="w-full">
                          <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                            Colores:
                          </h4>
                        </div>
                        <div className="mr-4 flex  flex-wrap gap-3">
                          {(trophy.color || "")
                            .split(",")
                            .map((color, index) => {
                              const colorKey = color.trim().toLowerCase();
                              const imageSrc = colorMapping[colorKey] || gold;

                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
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

                      <button
                        onClick={() => handleAddTrophy(trophy)}
                        className="rounded-sm bg-[#e11b24] px-9 py-2 text-center text-base font-medium text-white shadow-submit duration-300 hover:bg-[#e11b25]/90 dark:shadow-submit-dark"
                      >
                        Añadir
                      </button>
                      {addedTrophyId === trophy.id && (
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
            <p>No se encontraron trofeos y copas.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleTrophiesAndCups;
