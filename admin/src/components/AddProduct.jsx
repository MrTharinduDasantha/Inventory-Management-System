import { useState } from "react";
import { addProduct } from "../api/productApi";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

const AddProduct = ({ fetchProducts }) => {
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("quantity", product.quantity);
    formData.append("price", product.price);
    formData.append("image", product.image);

    try {
      const { data } = await addProduct(formData);
      toast.success(data.message);
      fetchProducts();
      setProduct({ name: "", quantity: "", price: "", image: null });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Add Product
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter product name"
          value={product.name}
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
          placeholder="Enter product quantity"
          value={product.quantity}
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
          placeholder="Enter product price"
          value={product.price}
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
          required
        />
      </div>
      {product.image && (
        <img
          src={URL.createObjectURL(product.image)}
          alt="product"
          className="mb-4 w-20 h-20 object-cover rounded"
        />
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

AddProduct.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

export default AddProduct;
