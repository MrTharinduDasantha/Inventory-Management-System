import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

// Function to add product to cart
const addToCart = async (req, res) => {
  const { productId, quantity, userId } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product || product.quantity < quantity) {
      return res
        .status(400)
        .json({ message: "Insufficient stock or invalid product" });
    }

    let cartItem = await Cart.findOne({ productId, userId });
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({ productId, quantity, userId });
    }
    await cartItem.save();

    let productQuantity = await Product.findById(productId);
    productQuantity.quantity -= quantity;
    await productQuantity.save();

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to remove product from cart
const removeFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await Cart.findById(id);
    const product = await Product.findById(cartItem.productId);
    product.quantity += cartItem.quantity;
    await product.save();

    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update product quantity in cart
const updateCart = async (req, res) => {
  const { id } = req.params;
  const { increment, quantity } = req.body;

  try {
    const cartItem = await Cart.findById(id);
    if (!cartItem) {
      return res.status(400).json({ message: "Cart item not found" });
    }

    if (quantity > Product.quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    const product = await Product.findById(cartItem.productId);
    if (increment) {
      product.quantity -= 1;
    } else {
      product.quantity += 1;
    }
    await product.save();

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

// Function to checkout cart
const checkoutCart = async (req, res) => {
  const { userId } = req.body;

  try {
    const cartItems = await Cart.find({ userId }).populate("productId");
    if (!cartItems.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const total = cartItems.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );

    // Create new order
    const order = new Order({
      products: cartItems.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      total,
      userId,
    });

    await order.save();

    // Clear cart
    await Cart.deleteMany({ userId });

    res.status(200).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get cart details
const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await Cart.find({ userId }).populate("productId");
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addToCart, removeFromCart, updateCart, checkoutCart, getCart };
