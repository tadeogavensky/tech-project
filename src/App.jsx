import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SuperQuality from "./sections/SuperQuality";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="px-14">
        <Hero />
      </section>
      <section className="px-14">
        <PopularProducts />
      </section>
      <section className="px-14">
        <SuperQuality />
      </section>
      <section className="px-14">
        <Services />
      </section>
      <section className="px-14">
        <SpecialOffer />
      </section>
      <section className="bg-fuchsia-50 px:32">
        <CustomerReviews />
      </section>
      <section className="py-32 p-8 sm:p-16">
        <Subscribe />
      </section>
      <section className=" bg-black px-14 pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
