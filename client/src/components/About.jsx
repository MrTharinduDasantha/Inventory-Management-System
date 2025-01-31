import AboutPage from "../pages/AboutPage";
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
};

export default About;
