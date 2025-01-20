import { useState, useEffect } from "react";
import { getProducts } from "../api/productApi";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="p-6">
      <AddProduct fetchProducts={fetchProducts} />
      <ProductList products={products} fetchProducts={fetchProducts} />
    </div>
  );
};

export default Dashboard;
