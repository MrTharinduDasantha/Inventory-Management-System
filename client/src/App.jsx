import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Toaster position="bottom-left" />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
