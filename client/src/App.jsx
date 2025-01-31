import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import Products from "./components/Products";
import Cart from "./components/Cart";
import About from "./components/About";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Toaster position="bottom-center" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
