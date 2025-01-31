import PropTypes from "prop-types";
import { useApp } from "../context/AppContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart } = useApp();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded shadow-md p-8"
    >
      <img
        src={`http://localhost:3000/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-contain rounded"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-700">
        <span className="font-medium">Quantity:</span> {product.quantity}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Category:</span> {product.category}
      </p>
      <div className="flex justify-end">
        <p className="text-gray-700">Rs.{product.price}/=</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 hover:bg-gray-800 transition-colors duration-300 text-white mt-4 px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
