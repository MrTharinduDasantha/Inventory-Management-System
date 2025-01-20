import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
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
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
