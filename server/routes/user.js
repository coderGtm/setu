import express from "express";
import {
  handleUserSignup,
  handleUserLogin,
  getAllUrlsOfUser,
} from "../controllers/user.js";

const userRoutes = express.Router();

userRoutes.post("/signup", handleUserSignup);
userRoutes.post("/login", handleUserLogin);
userRoutes.get("/urls", getAllUrlsOfUser);

export { userRoutes };
