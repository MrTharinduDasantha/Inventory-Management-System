import express from "express";
import multer from "multer";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

// Multer middleware to handle image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// Route for add, get, update, and delete products
productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/get", getProducts);
productRouter.put("/update/:id", upload.single("image"), updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
