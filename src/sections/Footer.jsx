import { AiFillApple } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="pt-16 flex flex-col ">
      <div className="flex flex-wrap gap-24">
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2 text-white">
            <AiFillApple size={50} />{" "}
            <p className="text-2xl hidden sm:block">Apple</p>
          </div>
          <p className="text-base font-montserrat text-white max-w-xs mt-5">
            Gear up for the new season with the latest Apple innovations at your
            nearest Apple Store.
          </p>
          <div className="mt-8 flex flex-row gap-4">
            <div className="bg-white rounded-full p-2 cursor-pointer ">
              <FaFacebookF size={25} />
            </div>
            <div className="bg-white rounded-full p-2 cursor-pointer">
              <FaTwitter size={25} />
            </div>
            <div className="bg-white rounded-full p-2 cursor-pointer">
              <AiFillInstagram size={25} />
            </div>
          </div>
        </div>

        <div className="text-white">
          <p className="font-montserrat text-2xl">Products</p>
          <ul className="flex flex-col gap-4 text-gray-400 mt-4">
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              iPhone 15
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              iPhone 15 Pro
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              Apple Watch
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              Air Pods Pro
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              iPad Pro
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              Apple TV
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              MacBook
            </li>
          </ul>
        </div>
        <div className="text-white">
          <p className="font-montserrat text-2xl">Help</p>
          <ul className="flex flex-col gap-4 text-gray-400 mt-4">
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              About us
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              FAQs
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              How it works
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              Payment policy
            </li>
          </ul>
        </div>
        <div className="text-white">
          <p className="font-montserrat text-2xl">Talk to us</p>
          <ul className="flex flex-col gap-4 text-gray-400 mt-4">
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              customer@apple.com
            </li>
            <li className="font-montserrat text-lg hover:text-gray-500 cursor-pointer">
              +34145728953
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 text-white">
        <p className="flex items-center gap-2">
          <AiOutlineCopyrightCircle size={30} />
          Copyright. All rights reserved.
        </p>

        <div className="flex flex-col justify-center items-center">
          <p>Made by Tadeo Gavensky</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/tadeogavensky" className="text-2xl">
            Github
          </a>
          <AiOutlineGithub size={30}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
