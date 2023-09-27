import { AiFillStar } from "react-icons/ai";

import iphone15progray from "../assets/iphone-15-pro-gray.avif";
import macbookair from "../assets/macbookair.png";
import ipadpro from "../assets/ipadpro.png";
import airpodspro from "../assets/airpodspro.png";

const PopularProducts = () => {
  const appleProducts = [
    {
      img: iphone15progray,
      rating: 4.8,
      name: "iPhone 15 Pro",
      price: 999.99,
    },
    {
      img: macbookair,
      rating: 4.7,
      name: "MacBook Air",
      price: 1299.99,
    },
    {
      img: ipadpro,
      rating: 4.9,
      name: "iPad Pro",
      price: 799.99,
    },

    {
      img: airpodspro,
      rating: 4.8,
      name: "AirPods Pro",
      price: 249.99,
    },
  ];

  return (
    <section className="mt-36" id="products">
      <div className="flex flex-col justify-center  lg:justify-start items-start mb-12">
        <h1 className="text-5xl font-bold font-palanquin mb-8">
          Best From <span className="text-pink-400">Apple</span>
        </h1>

        <p className="font-montserrat max-w-lg text-gray-500">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
        {appleProducts.map((product, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col flex-1  gap-2">
                <div className="bg-card flex justify-center items-center bg-center bg-cover rounded-xl w-[280px] h-[280px]">
                  <img
                    src={product.img}
                    alt="image"
                    className="object-contain w-full  "
                  
                  />
                </div>

                <div className="flex items-center mt-8 gap-2.5">
                  <AiFillStar size={25} className="text-pink-500" />
                  <p className="text-xl font-montserrat">({product.rating})</p>
                </div>
                <p className="font-palanquin font-semibold text-2xl">
                  {product.name}
                </p>
                <p className="font-montserrat font-semibold text-base text-pink-500">
                  ${product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
