import Order from "../models/orderModel.js";

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products.productId");
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders" });
    console.log(error);
  }
};

export { getOrders };
