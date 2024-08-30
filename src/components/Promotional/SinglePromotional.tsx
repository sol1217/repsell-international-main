"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const SinglePromotional = () => {
  const [promotionals, setPromotionals] = useState([]);
  const [addedPromotionalId, setAddedPromotionalId] = useState(null);

  useEffect(() => {
    const fetchPromotional = async () => {
      try {
        const response = await axios.get("http://localhost:3001/promotional");
        const uniquePromotional = response.data.data.filter(
          (promotional, index, self) =>
            index === self.findIndex((m) => m.name === promotional.name),
        );
        setPromotionals(uniquePromotional);
      } catch (error) {
        console.error("Error fetching promotional:", error);
      }
    };

    fetchPromotional();
  }, []);

  const handleAddToLocalStorage = (promotional) => {
    let storedItems =
      JSON.parse(localStorage.getItem("selectedPromotionals")) || [];
    storedItems.push(promotional);
    localStorage.setItem("selectedPromotionals", JSON.stringify(storedItems));
    setAddedPromotionalId(promotional.id);
    setTimeout(() => setAddedPromotionalId(null), 3000);
  };

  return (
    <div className="container">
      <div className="products-box flex w-[80vw] flex-wrap items-center justify-center gap-3">
        {promotionals.length > 0 ? (
          promotionals.map((promotional) => (
            <div
              key={promotional.id}
              className="product-main group relative mb-8 h-[650px] w-[400px] flex-wrap overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
            >
              <Link
                href="/blog-details"
                className="relative block aspect-[37/22] w-full"
              >
                <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                  {promotional.category}
                </span>
                <img
                  className="mx-auto object-contain"
                  src={promotional.image || ""}
                  alt={promotional.name}
                  style={{ width: "300px", height: "300px" }}
                />
              </Link>
              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                <h3>
                  <Link
                    href="/blog-details"
                    className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                  >
                    {promotional.name}
                  </Link>
                </h3>
                <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                  {promotional.description}
                </p>
                <div className="flex items-center">
                  <div className="mr-5 flex flex-col items-center gap-3 border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                    <div className="w-full">
                      <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                        Colores Disponibles: Preguntar disponibles
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                      Altura: {promotional.height}
                    </h4>
                    <button
                      onClick={() => handleAddToLocalStorage(promotional)}
                      className="rounded-sm bg-[#e11b24] px-9 py-2 text-center text-base font-medium text-white shadow-submit duration-300 hover:bg-[#e11b25]/90 dark:shadow-submit-dark"
                    >
                      Añadir
                    </button>
                    {addedPromotionalId === promotional.id && (
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
          <p>No se encontraron promocionales.</p>
        )}
      </div>
    </div>
  );
};

export default SinglePromotional;
