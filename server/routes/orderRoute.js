import express from "express";
import { getOrders, deleteOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

// Route for placing an order
orderRouter.get("/admin", getOrders);
orderRouter.delete("/admin/:id", deleteOrder);

export default orderRouter;
