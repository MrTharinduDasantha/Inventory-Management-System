import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Electronics from "../assets/electronics.png";
import Clothing from "../assets/clothing.png";
import HomeAndKitchen from "../assets/home_kitchen.png";
import BeautyAndPersonalCare from "../assets/beauty_personal_care.png";
import Sports from "../assets/sports.png";
import Furniture from "../assets/furniture.png";

const categories = [
  { name: "Electronics", image: Electronics },
  { name: "Clothing", image: Clothing },
  { name: "Home & Kitchen", image: HomeAndKitchen },
  { name: "Beauty & Personal Care", image: BeautyAndPersonalCare },
  { name: "Sports", image: Sports },
  { name: "Furniture", image: Furniture },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleViewCategory = (categoryName) => {
    // Navigate to the ProductPage with the category as a query parameter
    navigate(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section
      id="categories"
      className="py-12 px-10 bg-gray-100 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Categories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Electronics */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={categories[0].image}
            alt={categories[0].name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-medium">{categories[0].name}</h3>
          <button
            onClick={() => handleViewCategory(categories[0].name)}
            className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 mt-3 rounded"
          >
            View
          </button>
        </motion.div>

        {/* Clothing */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={categories[1].image}
            alt={categories[1].name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-medium">{categories[1].name}</h3>
          <button
            onClick={() => handleViewCategory(categories[1].name)}
            className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 mt-3 rounded"
          >
            View
          </button>
        </motion.div>

        {/* Home & Kitchen */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={categories[2].image}
            alt={categories[2].name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-medium">{categories[2].name}</h3>
          <button
            onClick={() => handleViewCategory(categories[2].name)}
            className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 mt-3 rounded"
          >
            View
          </button>
        </motion.div>

        {/* Beauty & Personal Care */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={categories[3].image}
            alt={categories[3].name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-medium">{categories[3].name}</h3>
          <button
            onClick={() => handleViewCategory(categories[3].name)}
            className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 mt-3 rounded"
          >
            View
          </button>
        </motion.div>

        {/* Sports */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={categories[4].image}
            alt={categories[4].name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-medium">{categories[4].name}</h3>
          <button
            onClick={() => handleViewCategory(categories[4].name)}
            className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 mt-3 rounded"
          >
            View
          </button>
        </motion.div>

        {/* Furniture */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 rounded shadow-md flex flex-col items-center"
        >
          <img
            src={categories[5].image}
            alt={categories[5].name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-medium">{categories[5].name}</h3>
          <button
            onClick={() => handleViewCategory(categories[5].name)}
            className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 mt-3 rounded"
          >
            View
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
