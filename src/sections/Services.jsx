import React from "react";
import { FaShippingFast, FaHandHoldingHeart } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const Services = () => {
  return (
    <section className="mt-20" id="services">
      <div className="flex flex-wrap gap-10">
        <div className="bg-white shadow-2xl flex flex-col flex-1 items-start justify-center px-16 py-10 rounded-3xl gap-3">
          <div className="rounded-full p-2 flex justify-center text-white bg-pink-400 ">
            <FaShippingFast size={20} />
          </div>
          <p className="font-bold font-palanquin text-2xl">Free Shipping</p>
          <p className="font-montserrat">
            Enjoy the convenience of FREE shipping on all orders!
          </p>
        </div>
        <div className="bg-white shadow-2xl flex-1 flex flex-col items-start justify-center px-16 py-10 rounded-3xl gap-3">
          <div className="rounded-full p-2 flex justify-center text-white bg-pink-400 ">
            <MdVerifiedUser size={20} />
          </div>
          <p className="font-bold font-palanquin text-2xl">Secure Payment</p>
          <p className="font-montserrat">
            Shop with confidence! We offer secure and verified payment options
            to ensure your peace of mind.
          </p>
        </div>
        <div className=" bg-white shadow-2xl flex flex-col flex-1 items-start justify-center px-16 py-10 rounded-3xl gap-3">
          <div className="rounded-full p-2 flex justify-center text-white bg-pink-400 ">
            <FaHandHoldingHeart size={20} />
          </div>
          <p className="font-bold font-palanquin text-2xl">Love to help you</p>
          <p className="font-montserrat">
            Our dedicated team is always ready to assist you with any questions,
            concerns, or support you may need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
