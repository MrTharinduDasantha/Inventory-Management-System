import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useApp } from "../context/AppContext";
import SearchBar from "./SearchBar";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, handleSearch } = useApp();

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-3xl font-bold hover:text-blue-600 transition-colors duration-300">
          I M S
        </h1>
      </Link>

      <nav className="flex items-center space-x-6">
        {location.pathname === "/" && (
          <>
            <a
              href="#categories"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Categories
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Testimonials
            </a>
          </>
        )}
        {location.pathname === "/products" && (
          <div className="w-64">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}
        {location.pathname !== "/products" && (
          <Link
            to="/products"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Products
          </Link>
        )}
        {location.pathname !== "/about" && (
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About Us
          </Link>
        )}
        {location.pathname !== "/cart" && (
          <button onClick={() => navigate("/cart")} className="relative">
            <FiShoppingCart className="text-3xl hover:text-blue-600 transition-colors duration-300" />
            {cart.length > 0 && (
              <span className="absolute bg-red-500 text-white rounded-full -top-2 -right-2 px-2 py-1 text-xs font-bold">
                {cart.length}
              </span>
            )}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
