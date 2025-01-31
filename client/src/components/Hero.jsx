import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-100 overflow-hidden">
      {/* Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h1 className="text-4xl font-bold mb-8">Inventory Management System</h1>
        <p className="text-lg mb-8 pr-6">
          You can buy any product from our Inventory Management System. We have
          a wide range of products available for you to choose from with
          different categories and prices. You can also add your products to
          your cart and place your order online.
        </p>
        <Link
          to="/about"
          className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-6 py-3 rounded text-lg"
        >
          About Us
        </Link>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src="https://img.freepik.com/free-vector/courier-sales-agent-meeting-consumer_1262-19234.jpg?t=st=1738069537~exp=1738073137~hmac=7c30058a1cbcce5f7ff05b7ba552ff10972f1abec8aecfb9b26af849f9b850c9&w=740"
          alt="Hero Section Image"
          className="w-3/4 md:w-full object-cover object-center rounded shadow"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
