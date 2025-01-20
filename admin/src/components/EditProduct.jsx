import { useState } from "react";
import { updateProduct } from "../api/productApi";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

const EditProduct = ({
  product,
  setEditProduct,
  fetchProducts,
  setIsEditComponentOpen,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product?.name || "",
    quantity: product?.quantity || "",
    price: product?.price || "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", updatedProduct.name);
    formData.append("quantity", updatedProduct.quantity);
    formData.append("price", updatedProduct.price);
    if (updatedProduct.image) {
      formData.append("image", updatedProduct.image);
    }

    try {
      const { data } = await updateProduct(product._id, formData);
      toast.success(data.message);
      fetchProducts();
      setEditProduct(null);
      setIsEditComponentOpen(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handdleCancel = () => {
    setEditProduct(null);
    setIsEditComponentOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={updatedProduct.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={updatedProduct.quantity}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={updatedProduct.price}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handdleCancel}
            className="bg-gray-500 text-white px-4 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

EditProduct.propTypes = {
  product: PropTypes.object,
  setEditProduct: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  setIsEditComponentOpen: PropTypes.func.isRequired,
};

export default EditProduct;
