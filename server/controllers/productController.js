import Product from "../models/productModel.js";
import fs from "fs";

// Function to add a new product
const addProduct = async (req, res) => {
  const { name, quantity, price, category } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const product = new Product({ name, quantity, price, category, image });
    const savedProduct = await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      savedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      products,
    });
  } catch (error) {}
};

// Function to update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price, category } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, image, quantity, price, category },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (product.image) {
      fs.unlinkSync(product.image);
    }
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to update product inventory
const updateProductInventory = async (productId, quantityChange) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");
  if (product.quantity + quantityChange < 0)
    throw new Error("Insufficient stock");

  product.quantity += quantityChange;
  await product.save();
};

export {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  updateProductInventory,
};
