import React from "react";

const CardHero = () => {
  return (
    <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
      <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl">
          <div className="flex items-center justify-start pt-6 pl-6">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
          </div>

          <div className="px-20 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                  {/* <svg
                    className="w-10 h-10 mr-1 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    ></path>
                  </svg> */}
                  <svg
                  className="w-5 h-5 mr-2 text-blue-700"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="128.000000pt"
                    height="128.000000pt"
                    viewBox="0 0 128.000000 128.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                    >
                      <path
                        d="M486 1248 c-14 -20 -16 -94 -16 -608 0 -514 2 -588 16 -608 18 -26
46 -28 68 -6 14 14 16 83 16 614 0 531 -2 600 -16 614 -22 22 -50 20 -68 -6z"
                      />
                      <path
                        d="M252 1058 c-9 -9 -12 -108 -12 -419 0 -438 0 -435 52 -427 45 6 48
28 48 428 0 281 -3 381 -13 400 -14 28 -55 38 -75 18z"
                      />
                      <path
                        d="M726 964 c-14 -13 -16 -57 -16 -324 0 -267 2 -311 16 -324 22 -22 50
-20 68 6 14 19 16 67 16 318 0 251 -2 299 -16 318 -18 26 -46 28 -68 6z"
                      />
                      <path
                        d="M22 914 c-22 -15 -22 -18 -22 -274 l0 -260 25 -16 c23 -15 27 -15 50
0 l25 16 0 260 c0 256 0 259 -22 274 -12 9 -25 16 -28 16 -3 0 -16 -7 -28 -16z"
                      />
                      <path
                        d="M964 916 c-18 -14 -19 -29 -19 -276 0 -247 1 -262 19 -276 25 -18 41
-18 60 2 24 23 24 525 0 548 -19 20 -35 20 -60 2z"
                      />
                      <path
                        d="M1197 752 c-26 -28 -24 -202 1 -225 24 -22 45 -21 65 1 26 28 24 202
-1 225 -24 22 -45 21 -65 -1z"
                      />
                    </g>
                  </svg>
                  DISSONANCE
                </div>
                <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                  <a
                    href="#"
                    className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                  >
                    Product
                    <svg
                      className="w-3.5 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                  >
                    Community
                    <svg
                      className="w-3.5 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                  >
                    Plans
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <a
                  href="#"
                  className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                >
                  Login
                </a>
                <button className="px-4 lg:px-10 py-2 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
              <div className="text-6xl font-bold text-gray-900 leading-none">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">Bring</span> all your documents anytime
              </div>
              <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                A seamless experience for your team and your documents.
              </div>
              <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 hover:to-purple-800 transition duration-200 ease-in-out">
                Try for free
              </button>
            </div>
            <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
              <bottom
                type="button"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </bottom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
