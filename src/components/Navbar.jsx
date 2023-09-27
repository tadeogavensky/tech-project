import { AiFillApple } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const URLs = [
    { link: "#home", text: "Home" },
    { link: "#services", text: "Services" },
    { link: "#products", text: "Products" },
    { link: "#subscribe", text: "Contact Us" },
  ];

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    // If the menu is open, enable scrolling by removing the class
    if (open) {
      document.body.classList.remove("disable-scroll");
    } else {
      // If the menu is closed, disable scrolling by adding the class
      document.body.classList.add("disable-scroll");
    }

    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 1] },
    },
  };

  return (
    <header className=" fixed bg-white z-10 w-full">
      <nav className="flex justify-between px-10 py-8 ">
        <div className="flex items-center gap-2">
          <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <AiFillApple size={30} />
          </motion.span>
          <p className="text-xl hidden sm:block">Apple</p>
        </div>

        <ul className="items-center gap-16 flex max-lg:hidden ">
          {URLs.map((url, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.3, delay: index * 0.4 }}
                className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100"
              >
                <a href={url.link}>{url.text}</a>
              </motion.li>
            );
          })}
        </ul>

        <button className="hidden max-lg:block" onClick={toggleMenu}>
          <CiMenuFries />
        </button>

        <span className="flex max-lg:hidden"></span>
      </nav>

      {open && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 bg-fuchsia-400 origin-top h-screen w-screen px-10 py-8 "
          style={{ zIndex: 99 }}
        >
          <div className="flex items-center justify-between">
            <AiFillApple size={30} className="text-white" />

            <button
              className="font-montserrat text-white font-semibold"
              onClick={toggleMenu}
            >
              <p>Close</p>
            </button>
          </div>

          <ul className="flex flex-col justify-center items-start mt-40">
            {URLs.map((url, index) => {
              return (
                <motion.li
                  onClick={toggleMenu}
                  initial={{ opacity: 0, translateX: -40 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.4 }}
                  className="leading-normal text-white uppercase text-4xl font-montserrat hover:text-black transition-all ease-in-out duration-100"
                >
                  <a href={url.link}>{url.text}</a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
