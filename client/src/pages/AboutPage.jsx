import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12 overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-8"
      >
        About Us
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg?t=st=1738133964~exp=1738137564~hmac=1f148d1578d4473b995071eeff9e1b66d04f41087f530f7230d4671f9b08b8ee&w=740"
            className="w-full rounded shadow"
            alt="About Us Image"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <p className="text-lg mb-4">
            Our Inventory Management System is designed to help custoemrs to buy
            their products under various categories. It provides a platform for
            customers to place orders by entering the product details, quantity,
            and delivery information.
          </p>
          <p className="text-lg mb-4">
            The system also provides a platform for the cutomers to filter
            products under various categories and prices. It also provides a add
            to cart feature, which allows customers to add products to their
            cart.
          </p>
          <p className="text-lg mb-4">
            Our Inventories are daily updated with the latest products so that
            customers can avail the latest products at the best prices. Some
            days we offer discounts on our products to encourage customers to
            buy.
          </p>

          <button className="mt-4 bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-6 py-3 rounded">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
