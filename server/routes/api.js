import express from "express";
import {userRoutes} from "./api/user.js";
import {urlRoutes} from "./api/url.js"

const apiRoutes = express.Router();

apiRoutes.post("/user", userRoutes);
apiRoutes.post("/url", urlRoutes);


export {apiRoutes};