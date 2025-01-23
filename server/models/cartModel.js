import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  userId: { type: String, required: true },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
