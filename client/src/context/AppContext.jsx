import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { getProducts } from "../api/productApi";
import {
  addCart,
  checkout,
  getCart,
  removeCart,
  updateCart,
} from "../api/cartApi";
const AppContext = createContext();

// Temporary userId for backend interactions
const TEMP_USER_ID = "mr_tharindu";

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Search for products by name
  const handleSearch = (query) => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
    console.log(filtered);
    setFilteredProducts(filtered);
  };

  // Fetch the cart items on initial load
  const fetchCart = async () => {
    try {
      const { data } = await getCart(TEMP_USER_ID);
      setCart(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch cart");
    }
  };

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  // Add a product to the cart
  const addToCart = async (product) => {
    try {
      const { data } = await addCart({
        productId: product._id,
        quantity: 1,
        userId: TEMP_USER_ID,
      });
      setCart(data);
      fetchCart();
      fetchProducts();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  };

  // Remove a product from the cart
  const removeFromCart = async (productId) => {
    try {
      const { data } = await removeCart(productId);
      setCart(data);
      fetchCart();
      fetchProducts();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove product");
    }
  };

  // Update the quantity of a product in the cart
  const increaseQuantity = async (productId, quantity) => {
    try {
      const { data } = await updateCart(productId, {
        quantity,
        increment: true,
      });
      setCart(data);
      fetchCart();
      fetchProducts();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update quantity");
      console.log(error);
    }
  };

  // Update the quantity of a product in the cart
  const decreaseQuantity = async (productId, quantity) => {
    try {
      const { data } = await updateCart(productId, {
        quantity,
        increment: false,
      });
      setCart(data);
      fetchCart();
      fetchProducts();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update quantity");
      console.log(error);
    }
  };

  // Checkout the cart
  const order = async () => {
    try {
      const { data } = await checkout({
        userId: TEMP_USER_ID,
      });
      toast.success(data.message);
      setCart([]);
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to checkout");
    }
  };

  return (
    <AppContext.Provider
      value={{
        fetchProducts,
        handleSearch,
        products,
        filteredProducts,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        order,
        fetchCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApp = () => useContext(AppContext);
