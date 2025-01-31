import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
