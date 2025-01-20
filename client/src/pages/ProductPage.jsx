import { useState, useEffect } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { toast } from "react-hot-toast";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleSearch = (query) => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
    console.log(filtered);
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
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
