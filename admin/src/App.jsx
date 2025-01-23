import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProductPage from "./pages/AddProductPage";
import ProductListPage from "./pages/ProductListPage";
import OrderListPage from "./pages/OrderListPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/orders" element={<OrderListPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
