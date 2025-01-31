import { useState } from "react";
import { addProduct } from "../api/productApi";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
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
    formData.append("category", product.category);
    formData.append("image", product.image);

    try {
      const { data } = await addProduct(formData);
      console.log(data);
      toast.success(data.message);
      setProduct({
        name: "",
        quantity: "",
        price: "",
        category: "",
        image: null,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding product");
      console.log(error);
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
          Product Name
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
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          value={product.category}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Beauty & Personal Care">Beauty & Personal Care</option>
          <option value="Sports">Sports</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </select>
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
        className="bg-blue-500 hover:bg-gray-800 transition-colors duration-300 text-white px-4 py-2 rounded block ml-auto"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
