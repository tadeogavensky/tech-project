import { FaShippingFast } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

import {motion} from "framer-motion";
const sections = [
  {
    icon: <FaShippingFast size={20} />,
    title: "Free Shipping",
    description: "Enjoy the convenience of FREE shipping on all orders!",
  },
  {
    icon: <MdVerifiedUser size={20} />,
    title: "Secure Payment",
    description:
      "Shop with confidence! We offer secure and verified payment options to ensure your peace of mind.",
  },
  {
    icon: <FaHandHoldingHeart size={20} />,
    title: "Love to help you",
    description:
      "Our dedicated team is always ready to assist you with any questions, concerns, or support you may need.",
  },
];

const Services = () => {
  return (
    <section className="flex flex-wrap gap-10 mt-20" id="services">
      {sections.map((section, index) => (
        <motion.div
          initial={{
            opacity:0,
            translateY: -50
          }}
          whileInView={{
            opacity:1,
            translateY: 0
          }}
          transition={{
            duration:0.3,
            delay: index*0.4
          }}
          viewport={{once:true}}
          key={index}
          className="bg-white shadow-2xl flex-1 flex flex-col items-start justify-center px-16 py-10 rounded-3xl gap-3"
        >
          <div className="rounded-full p-2 flex justify-center text-white bg-pink-400">
            {section.icon}
          </div>
          <p className="font-bold font-palanquin text-2xl">{section.title}</p>
          <p className="font-montserrat">{section.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
