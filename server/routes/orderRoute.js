import express from "express";
import { getOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

// Route for placing an order
orderRouter.get("/admin", getOrders);

export default orderRouter;
