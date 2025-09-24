import express from "express";
import { deleteuser, findall, userLogin, userSignup, findUserByParms } from "../controller/userController.js";
import middleware from "../middleware/middleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const userRou = express.Router();

userRou.post("/userSignup", userSignup);
userRou.post("/userLogin", userLogin);
userRou.get("/findall", middleware,adminMiddleware ,findall);
userRou.delete("/deleteuser/:id",middleware,adminMiddleware, deleteuser);
userRou.get("/findUserByParms/:id", middleware,findUserByParms);

export default userRou;
