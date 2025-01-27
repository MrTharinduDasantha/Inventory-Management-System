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

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await Order.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete order" });
    console.log(error);
  }
};

export { getOrders, deleteOrder };
