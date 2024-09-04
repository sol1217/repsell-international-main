"use client";

import Image from "next/image";
import logo from "../../../public/images/hero/logo-repsell-icono.png";

import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://repsell-international-backend.onrender.com/admin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ User: user, password }),
      },
    );

    const resultado = await response.json();
    console.log(resultado);

    if (response.ok) {
      window.location.href = "http://localhost:3000/admin";
    } else {
      setErrorMessage(resultado.message || "Usuario o contraseña incorrectos.");
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Perfil Administrador
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                Solo personal administrador puede ingresar a este apartado.
              </p>
              <div className="mb-8 flex items-center justify-center">
                <Image src={logo} alt="logo" height={150} width={150} />
              </div>

              <div className="mb-8 flex items-center justify-center">
                <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                <p className="w-full px-5 text-center text-base font-medium text-body-color">
                  Usuario y Contraseña
                </p>
                <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label
                    htmlFor="user"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Tu Usuario
                  </label>
                  <input
                    type="text"
                    name="User"
                    placeholder="Ingresa tu Usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    Tu contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                  <div>
                    <a
                      href="https://wa.link/h2pg27"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Olvidaste la cuenta?
                    </a>
                  </div>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                  >
                    Iniciar Sección
                  </button>
                </div>
                {errorMessage && (
                  <p className="mb-6 text-center text-sm text-red-500">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1225.4 502.966L771.4 759.966L1074.06 740.914L1225.4 502.966Z"
              fill="url(#paint1_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M688.289 279.942L234.289 536.942L536.955 517.89L688.289 279.942Z"
              fill="url(#paint2_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M826.727 484.93L372.727 741.93L675.393 722.878L826.727 484.93Z"
              fill="url(#paint3_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="431.76"
              x2="618.056"
              y2="645.704"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="1316.84"
              y1="636.748"
              x2="756.497"
              y2="850.692"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_95:1005"
              x1="779.732"
              y1="413.724"
              x2="219.388"
              y2="627.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_95:1005"
              x1="918.17"
              y1="618.712"
              x2="357.826"
              y2="832.656"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default SignIn;
