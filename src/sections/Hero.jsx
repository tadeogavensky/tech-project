import React, { useState } from "react";
import gray from "../assets/iphone-15-pro-gray.avif";
import purple from "../assets/iphone-15-purple.png";
import pink from "../assets/iphone-15-pink.avif";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {  motion } from "framer-motion";
const iphones = [gray, purple, pink];

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(purple);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className="relative w-full pt-24 xl:pt-0 " id="home">
      <div className="flex flex-col lg:flex-row items-center min-h-screen gap-10 max-w-7xl mx-auto">
        <div className="relative flex flex-col justify-center items-start sm:pt-24">
          <p className="text-pink-400 text-opacity-80 font-poppins">
            Our Autumn collection 🍂
          </p>
          <h1 className="lg:text-8xl text-6xl font-palanquin font-bold lg:leading-relaxed mb-8">
            <motion.span
              initial={{ height: -10 }}
              animate={{ height: 40 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:whitespace-normal relative  "
            >
              {" "}
              The New Arrival
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.5 }}
              className="text-pink-400"
            >
              {" "}
              Apple{" "}
            </motion.span>
            Phones
          </h1>

          <p className="font-montserrat font-normal">
            iPhone 15 and 15 Pro are here. <br /> With the A17 chip, any task
            you face upon is a piece of 🍰.
          </p>

          <button className="font-poppins mt-10 w-full justify-between lg:w-4/12  bg-pink-400 text-white flex items-center gap-3 rounded-full px-6 py-3 text-xl hover:bg-pink-700 transition-all duration-300 ease-in-out">
            <p>Shop now</p>
            <BsFillArrowRightCircleFill size={15} />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-8">
            <div className="flex flex-col justify-center font-palanquin">
              <p className="font-bold text-2xl sm:text-4xl">A17 Bionic</p>
              <p className="text-lg sm:text-2xl">Powerful</p>
            </div>
            <div className="flex flex-col justify-center font-palanquin">
              <p className="font-bold text-2xl sm:text-4xl">48 MP</p>
              <p className="text-lg sm:text-2xl">Beautiful pics</p>
            </div>
            <div className="flex flex-col justify-center font-palanquin">
              <p className="font-bold text-2xl sm:text-4xl">12GB RAM</p>
              <p className="text-lg sm:text-2xl">Faster</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex  lg:bg-hero bg-center bg-cover  justify-evenly flex-col items-center xl:min-h-screen ">
          <img
            src={selectedImage}
            alt=""
            width={610}
            height={502}
            className="object-contain  max-w-lg max-h-[400px]"
          />

          <div className="flex flex-row gap-10 sm:absolute md:-bottom-20 lg:-bottom-10 mt-10">
            {iphones.map((iphone, index) => {
              const isSelected = iphone === selectedImage;
              return (
                <div
                  className={`bg-card bg-center bg-cover w-[80px] lg:w-[130px] h-[80px] lg:h-[130px] p-4 rounded-lg flex justify-center ${
                    isSelected
                      ? "border-pink-500 border-2"
                      : "border-gray-200 border-2 "
                  }`}
                  key={index}
                  onClick={() => {
                    handleImageClick(iphone);
                  }}
                >
                  <img
                    src={iphone}
                    alt="iphone"
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
