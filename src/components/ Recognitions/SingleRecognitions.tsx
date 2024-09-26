"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import recognitions from "@/components/ Recognitions/Recognitions";
import { colorMapping } from "@/utils/colorMapping";
import white from "../../../public/images/products/color/white.jpeg";

const SingleRecognitions = () => {
  const [recognitions, setRecognitions] = useState([]);
  const [addedRecognitionId, setAddedRecognitionId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecognitions = async () => {
      try {
        const response = await axios.get(
          "https://repsell-international-backend.onrender.com/recognitions",
        );
        const uniqueRecognitions = response.data.data.filter(
          (recognition, index, self) =>
            index === self.findIndex((m) => m.name === recognition.name),
        );
        setRecognitions(uniqueRecognitions);
      } catch (error) {
        console.error("Error fetching recognitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecognitions();
  }, []);

  const handleAddRecognition = (recognition) => {
    const storedRecognitions =
      JSON.parse(localStorage.getItem("recognitions")) || [];
    const updatedRecognitions = [...storedRecognitions, recognition];
    localStorage.setItem("recognitions", JSON.stringify(updatedRecognitions));
    setAddedRecognitionId(recognition.id); // Set the added recognition ID to display the message
    setTimeout(() => setAddedRecognitionId(null), 3000); // Clear the message after 3 seconds
  };

  return (
    <div className="container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="products-box flex w-[80vw] flex-wrap items-center justify-center gap-3">
          {recognitions.length > 0 ? (
            recognitions.map((recognition) => (
              <div
                key={recognition.id}
                className="product-main group relative mb-8 h-[600px] w-[400px] flex-wrap overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="relative block aspect-[37/22] w-full">
                  <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                    {recognition.category}
                  </span>
                  <img
                    className="mx-auto object-contain"
                    src={recognition.image || ""}
                    alt={recognition.name}
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                  <h3>
                    <div className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                      {recognition.name}
                    </div>
                  </h3>
                  <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                    {recognition.description}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-5 flex flex-col items-center gap-3 border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"></div>
                    <div className="flex flex-row items-center gap-3">
                      <div>
                        <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                          Tamaño: {recognition.height}
                        </h4>
                        <div className="mr-4 flex  flex-wrap gap-3">
                          {(recognition.color || "")
                            .split(",")
                            .map((color, index) => {
                              const colorKey = color.trim().toLowerCase();
                              const imageSrc = colorMapping[colorKey] || white;

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
                        onClick={() => handleAddRecognition(recognition)}
                        className="rounded-sm bg-[#e11b24] px-9 py-2 text-center text-base font-medium text-white shadow-submit duration-300 hover:bg-[#e11b25]/90 dark:shadow-submit-dark"
                      >
                        Añadir
                      </button>
                      {addedRecognitionId === recognition.id && (
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
            <p>No se encontraron Reconocimientos.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SingleRecognitions;
