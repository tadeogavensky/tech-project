import { AiFillApple } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

  

  return (
    <header className="px-14 py-8 absolute z-10 w-full">
      <nav className="flex justify-between ">
        <div className="flex items-center gap-2">
          <AiFillApple size={30} /> <p className="text-xl hidden sm:block">Apple</p>
        </div>

        <ul className="items-center gap-16 flex max-lg:hidden ">
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#home">Home</a>
          </li>
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#services">About Us</a>
          </li>
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#products">Products</a>
          </li>
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#subscribe">Contact Us</a>
          </li>
        </ul>

        <button className="hidden max-lg:block">
          <CiMenuFries />
        </button>

        <span className="flex max-lg:hidden"></span>
      </nav>
      </header>
  );
};

export default Navbar;
