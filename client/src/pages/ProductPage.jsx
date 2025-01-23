import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const ProductPage = () => {
  const { cart, handleSearch, products, filteredProducts } = useApp();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mr-5">Inventory Management System</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex items-center ml-5">
          <button onClick={() => navigate("/cart")} className="p-2 relative">
            <FiShoppingCart className="text-3xl" />
            <span className="absolute bg-red-500 text-white rounded-full -top-1 right-0 px-2 py-1 text-xs font-bold">
              {cart.length}
            </span>
          </button>
        </div>
      </div>
      <div>
        {products.length > 0 ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="flex justify-center items-center h-[80vh] text-lg font-semibold">
              No product found
            </p>
          )
        ) : (
          <p className="flex justify-center items-center h-[80vh] text-lg font-semibold">
            Loading products ...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
