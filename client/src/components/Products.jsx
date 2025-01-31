import ProductPage from "../pages/ProductPage";
import Footer from "./Footer";
import Header from "./Header";

const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
