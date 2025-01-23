import { useState, useEffect } from "react";
import { getProducts } from "../api/productApi";
import ProductList from "../components/ProductList";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList
        products={products}
        fetchProducts={fetchProducts}
        loading={loading}
      />
    </div>
  );
};

export default ProductListPage;
