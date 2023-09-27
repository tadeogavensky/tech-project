import { AiFillStar } from "react-icons/ai";
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"

const CustomerReviews = () => {
  const customerReviews = [
    {
      img: avatar1,
      rating: 5,
      name: "Sarah Johnson",
      review: "Exceptional product! I couldn't be happier with my purchase.",
    },
    {
      img: avatar2,
      rating: 4.5,
      name: "John Smith",
      review: "Great quality and fast delivery. Highly recommended.",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-palanquin font-bold text-4xl lg:text-5xl">
          What Our <span className="text-pink-400 ">Clients</span> Say?
        </h1>
        <p className="font-montserrat text-center mt-4 max-w-lg text-gray-500">
          Discover authentic accounts from our delighted customers who have had
          truly remarkable experiences with our services.
        </p>

        <div className="flex flex-col lg:flex-row mt-24 gap-16">
          {customerReviews.map((customer, index) => {
            return (
              <div className="flex flex-col items-center" key={index}>
                <img src={customer.img} alt="img" className="w-[150px] h-[150px] object-cover rounded-full" />
                <p className="font-montserrat max-w-sm text-center text-xl mt-6">{customer.review}</p>
                <div className="flex items-center gap-2.5 mt-3">
                  <AiFillStar size={30} className="text-pink-500" />
                  <p className="text-xl font-montserrat">({customer.rating})</p>
                </div>
                <p className="font-palanquin font-bold text-3xl mt-1">
                  {customer.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
