import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import SuperQuality from "./components/SuperQuality";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReviews from "./components/CustomerReviews";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <div className="sm:pl-16 pl-8 mt-20 min-h-screen">
        <Hero />
      </div>
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </div>
  );
};

export default App;
