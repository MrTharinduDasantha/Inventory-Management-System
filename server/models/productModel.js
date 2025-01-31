import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: [
      "Electronics",
      "Clothing",
      "Home & Kitchen",
      "Beauty & Personal Care",
      "Furniture",
      "Sports",
      "Other",
    ],
  },
  image: { type: String, required: true },
});

ProductSchema.methods.decreaseQuantity = async function (amount) {
  if (this.quantity >= amount) {
    this.quantity -= amount;
    await this.save();
  } else {
    throw new Error("Insufficient stock for this product.");
  }
};

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
