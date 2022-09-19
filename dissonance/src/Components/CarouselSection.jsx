import React from "react";
import FeaturedCard from "./FeaturedCard";

import { Carousel } from "antd";
import "../../node_modules/react-multi-carousel/lib/styles.css";

const CarouselSection = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const customLeftArrow = (
    <div className="arrow-btn absolute left-0 cursor-pointer rounded-full  bg-indigo-600 py-3 text-center  text-white">
      <p>&#8637;</p>
    </div>
  );

  const customRightArrow = (
    <div className="arrow-btn absolute right-0 cursor-pointer rounded-full bg-indigo-600  py-3 text-center text-white">
      <p>&#8640;</p>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 w-full text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg> */}
    </div>
  );
  return (
    <>
      {/* change */}
      <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
        <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-auto">
          <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-cyan-100 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>

            <div class="relative bg-white shadow-lg sm:rounded-3xl">
              <div class="flex items-center justify-start pt-6 pl-6">
                <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              </div>
              <div class="px-20 py-6 h-full">
                <div className="h-full justify-center items-center mb-10">
                  <Carousel autoplay={500}>
                    <div>
                      <FeaturedCard></FeaturedCard>
                    </div>
                    <div>
                      <FeaturedCard></FeaturedCard>{" "}
                    </div>
                    <div>
                      <FeaturedCard></FeaturedCard>{" "}
                    </div>
                    <div>
                      <FeaturedCard></FeaturedCard>{" "}
                    </div>
                  </Carousel>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
