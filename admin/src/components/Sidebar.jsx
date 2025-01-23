import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <h1 className="text-2xl font-bold p-4 border-b border-gray-600">
        Admin Panel
      </h1>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link to="/add-product" className="hover:text-blue-400">
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/product-list" className="hover:text-blue-400">
              Product List
            </Link>
          </li>
          <li>
            <Link to="/orders" className="hover:text-blue-400">
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
