import { deleteProduct } from "../api/productApi";
import { toast } from "react-hot-toast";
import EditProduct from "./EditProduct";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductList = ({ products, fetchProducts }) => {
  const [editProduct, setEditProduct] = useState(null);
  const [isEditComponentOpen, setIsEditComponentOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      const { data } = await deleteProduct(id);
      toast.success(data.message);
      fetchProducts();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setIsEditComponentOpen(true);
  };

  return (
    <>
      {products.length > 0 ? (
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Product List</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="text-center">
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2 flex justify-center">
                    <img
                      src={`http://localhost:3000/${product.image}`}
                      alt={product.name}
                      className="w-10 h-10 object-contain rounded"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 p-2">
                    Rs. {product.price}/=
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                    >
                      Update
                    </button>
                    <span>Or</span>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isEditComponentOpen && (
            <EditProduct
              product={editProduct}
              setEditProduct={setEditProduct}
              fetchProducts={fetchProducts}
              setIsEditComponentOpen={setIsEditComponentOpen}
            />
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default ProductList;
