import CartPage from "../pages/CartPage";
import Footer from "./Footer";
import Header from "./Header";

const Cart = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CartPage />
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
