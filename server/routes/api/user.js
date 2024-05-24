import express from "express";
import {handleUserSignup, handleUserLogin} from "../../controllers/user.js";

const userRoutes = express.Router();

userRoutes.post("/signup", handleUserSignup);
userRoutes.post("/login", handleUserLogin);

export {userRoutes}