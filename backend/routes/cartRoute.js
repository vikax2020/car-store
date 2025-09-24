import express from "express";
import { addToCart, deleteAllItems, deleteSingleCartItem, getCart, updateCartQuantity } from "../controller/cartController.js";
import middleware from "../middleware/middleware.js"; 

const cartRou = express.Router();

cartRou.post("/addToCart", middleware, addToCart);
cartRou.get("/getCart", middleware, getCart);
cartRou.put("/updateCartQuantity/:id", middleware, updateCartQuantity);
cartRou.delete("/deleteSingleCartItem/:id",middleware,deleteSingleCartItem)
cartRou.delete("/deleteAllCartItem/:id",middleware,deleteAllItems)

export default cartRou;
