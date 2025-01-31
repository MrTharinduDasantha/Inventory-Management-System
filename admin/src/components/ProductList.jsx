import { deleteProduct } from "../api/productApi";
import { toast } from "react-hot-toast";
import EditProduct from "./EditProduct";
import PropTypes from "prop-types";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ProductList = ({ products, fetchProducts, loading }) => {
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

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center text-xl font-bold">
        Loading Products ...
      </div>
    );
  }

  return (
    <>
      {products.length ? (
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Product List</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Category</th>
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
                  <td className="border border-gray-300 p-2">
                    {product.category}
                  </td>
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
                  <td className="border border-gray-300">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-yellow-500 text-white px-4 py-1 rounded mr-2 flex items-center justify-center gap-2"
                      >
                        Update
                        <GrUpdate size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded ml-2 flex items-center justify-center gap-2"
                      >
                        Delete
                        <MdOutlineDeleteOutline size={20} />
                      </button>
                    </div>
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
        <div className="h-[100vh] flex items-center justify-center text-xl font-bold">
          No Products Found
        </div>
      )}
    </>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ProductList;
