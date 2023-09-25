import React from "react";
import gray from "../assets/iphone-15-pro-gray.avif"
import purple from "../assets/iphone-15-purple.png"
import pink from "../assets/iphone-15-pink.avif"
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center min-h-screen">
      <div className="flex flex-col justify-start items-start">
        <p className="font-poppins text-xl text-orange-400 font-semibold mb-6">
          Our Autumn collections 🍁
        </p>

        <h1 className="font-palanquin text-6xl sm:text-8xl max-w-3xl font-bold max-sm:leading-[82px] bg-white whitespace-nowrap z-20">
          The New Arrival
          <br />
          <span className="text-orange-400">Apple </span>Phones
        </h1>

        <p className="mt-6 font-montserrat">
          Discover the new iPhones 15 and 15 Pro <br /> Go for the tower Max if
          you like.
        </p>

        <button className="font poppins bg-orange-500 text-white rounded-full px-6 py-3 flex items-center gap-4 mt-14">
          <p className="text-xl">Shop now </p>
          <BsFillArrowRightCircleFill size={20} />
        </button>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">

        <img src={gray} alt="iphone" width={610} height={500} className="object-contain relative z-10" />

      </div>
    </section>
  );
};

export default Hero;
