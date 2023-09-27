import offer from "../assets/offer.png";
import { motion } from "framer-motion";

const SpecialOffer = () => {
  return (
    <section className="my-36">
      <div className="flex flex-col-reverse lg:flex-row gap-14">
        <motion.div
         initial={{ translateX: -50 }}
         animate={{ translateX: 100 }}
         transition={{
           repeat: Infinity,
           repeatType: "reverse", // This makes the animation reverse after each repeat
           duration: 2, // Adjust the duration as needed
           ease: "linear", // Use linear easing for a constant speed
         }}
        >
          <img src={offer} alt="offer" />
        </motion.div>

        <div className="flex flex-col ">
          <h1 className="text-6xl font-bold font-palanquin">
            <span className="text-pink-500">Special </span>
            Offer
          </h1>
          <p className="mt-4 lg:max-w-lg text-gray-400">
            🍎 Back to School Special Offer! 🎒 <br /> Gear up for a successful
            academic year with our exclusive Back to School deals on Apple
            products.
          </p>

          <p className="font-montserrat mt-6 lg:max-w-lg text-gray-400 ">
            Elevate your learning experience with the latest Apple devices at
            unbeatable prices. From powerful MacBooks for your studies to iPads
            that spark creativity, we've got you covered. Don't miss out on this
            limited-time offer – it's the perfect way to start your journey back
            to school with style and innovation! 📚💻🍏
            <span className="text-blue-400">
              #BackToSchool #AppleSpecialOffer"
            </span>
          </p>

          <div className="mt-10 flex gap-5">
            <button className=" font-poppins justify-between  bg-pink-400 text-white flex items-center gap-3 rounded-full px-6 py-3 text-xl hover:bg-pink-300 transition-all duration-300 ease-in-out">
              <p>View details</p>
            </button>

            <button className="font-poppins justify-between text-gray-400  bg-white border-gray-400 border-2 flex items-center gap-3 rounded-full px-6 py-3 text-xl  transition-all duration-300 ease-in-out">
              <p>Learn more</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
