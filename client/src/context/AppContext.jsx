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

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceSort, setPriceSort] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.products);
      applyFilters(data.products, selectedCategory, priceSort); // Apply filters on initial load
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Helper function to apply both category and price filters
  const applyFilters = (products, category, sortOrder) => {
    let filtered = products;

    // Apply category filter
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Apply price sorting
    if (sortOrder === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  // Search for products by name
  const handleSearch = (query) => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
    applyFilters(filtered, selectedCategory, priceSort); // Apply filters after search
  };

  // Filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    applyFilters(products, category, priceSort); // Apply filters after category change
  };

  // Filter products by price
  const filterByPrice = (sortOrder) => {
    setPriceSort(sortOrder);
    applyFilters(products, selectedCategory, sortOrder); // Apply filters after price change
  };

  // Fetch the cart items on initial load
  const fetchCart = async () => {
    try {
      const { data } = await getCart();
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
  const order = async (formData) => {
    try {
      const { data } = await checkout(formData);
      toast.success(data.message);
      setCart([]);
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
        filterByCategory,
        filterByPrice,
        selectedCategory,
        priceSort,
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
