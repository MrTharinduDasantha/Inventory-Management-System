import express from "express";
import {
  addToCart,
  removeFromCart,
  updateCart,
  checkoutCart,
  getCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

// Routes for add, remove, and get cart items
cartRouter.post("/add", addToCart);
cartRouter.delete("/remove/:id", removeFromCart);
cartRouter.put("/update/:id", updateCart);
cartRouter.post("/checkout", checkoutCart);
cartRouter.get("/get", getCart);

export default cartRouter;
