import React from "react";
import macbookair from "../assets/macbookair.png";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
const SuperQuality = () => {
  return (
    <section className="mt-36 flex justify-between flex-col lg:flex-row items-center gap-10">
      <div className="flex flex-col flex-1">
        <h1 className="text-6xl font-bold font-palanquin lg:max-w-lg">
          We sell you <span className="text-pink-400">Top Notch</span> tech
        </h1>

        <p className="text-lg mt-6 font-montserrat w-full lg:max-w-lg">
          Guaranteeing premium comfort and style, our meticulously crafted tech
          products are designed to elevate your experience, providing you with
          unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="text-lg mt-6  font-montserrat w-full lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <button className="mt-10  justify-between md:w-[40%] w-full   bg-pink-400 text-white flex items-center gap-3 rounded-full px-6 py-3 text-xl hover:bg-pink-700 transition-all duration-300 ease-in-out">
          <p>Shop now</p>
          <BsFillArrowRightCircleFill size={15} />
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center bg-card rounded-2xl bg-center bg-cover py-12">
        <img
          src={macbookair}
          alt="macbookair"
          width="570" height="522" class="object-contain"
        
        />
      </div>
    </section>
  );
};

export default SuperQuality;
