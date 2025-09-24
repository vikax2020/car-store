import express from "express";
import { createProduct, getProducts } from "../controller/productController.js";
import middleware from "../middleware/middleware.js"; // ✅ user login check
import adminMiddleware from "../middleware/adminMiddleware.js"; // ✅ admin check

const proRou = express.Router();

proRou.post("/createProduct", middleware, adminMiddleware, createProduct);


proRou.get("/getProducts", getProducts);

export default proRou;
 
