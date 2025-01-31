import { useApp } from "../context/AppContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";

const ProductPage = () => {
  const {
    products,
    filteredProducts,
    filterByCategory,
    filterByPrice,
    selectedCategory,
    priceSort,
  } = useApp();

  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");

  useEffect(() => {
    if (categoryFromURL && categoryFromURL !== selectedCategory) {
      filterByCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports",
    "Furniture",
    "Other",
  ];

  const priceFilters = [
    { label: "Low to High", value: "lowToHigh" },
    { label: "High to Low", value: "highToLow" },
  ];

  return (
    <div className="p-6">
      {products.length > 0 && (
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Filter by Category */}
          <div className="w-full md:w-4/5">
            <h3 className="text-xl font-bold mb-2">Filter by Category</h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex items-center cursor-pointer"
                  onClick={() => filterByCategory(category)}
                >
                  {selectedCategory === category ? (
                    <IoCheckbox className="mr-2" />
                  ) : (
                    <IoCheckboxOutline className="mr-2" />
                  )}
                  <span
                    className={`${
                      selectedCategory === category ? "font-bold" : ""
                    }`}
                  >
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Filter by Price */}
          <div className="w-full md:w-1/5">
            <h3 className="text-xl font-bold mb-2">Filter by Price</h3>
            <ul className="space-y-2">
              {priceFilters.map((filter) => (
                <li
                  key={filter.value}
                  className="flex items-center cursor-pointer"
                  onClick={() => filterByPrice(filter.value)}
                >
                  {priceSort === filter.value ? (
                    <IoCheckbox className="mr-2" />
                  ) : (
                    <IoCheckboxOutline className="mr-2" />
                  )}
                  <span
                    className={`${
                      priceSort === filter.value ? "font-bold" : ""
                    }`}
                  >
                    {filter.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Product List */}
      <div>
        {products.length > 0 ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
