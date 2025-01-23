import PropTypes from "prop-types";
import { useApp } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useApp();

  return (
    <div className="border rounded shadow p-4">
      <img
        src={`http://localhost:3000/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-contain rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-gray-700">
          <span className="font-medium">Quantity:</span> {product.quantity}
        </p>
        <p className="text-gray-700">Rs.{product.price}/=</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white mt-4 px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
