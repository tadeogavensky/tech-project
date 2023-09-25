import { AiFillApple } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full top-0 left-0">
      <nav className="flex justify-between ">
        <div className="flex items-center gap-2">
          <AiFillApple size={30} /> <p className="text-xl">Apple</p>
        </div>

        <ul className="items-center gap-16 flex max-lg:hidden ">
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#">Home</a>
          </li>
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#">About Us</a>
          </li>
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#">Products</a>
          </li>
          <li className="text-lg leading-normal text-slate-500 font-montserrat hover:text-black transition-all ease-in-out duration-100">
            <a href="#">Contact Us</a>
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
