import express from "express";
import {userRoutes} from "./api/user.js";
import {urlRoutes} from "./api/url.js";
import {restrictToAuthenticatedUserOnly} from "../middleware/auth.js";

const apiRoutes = express.Router();

apiRoutes.use("/user", userRoutes);
apiRoutes.use("/url", restrictToAuthenticatedUserOnly, urlRoutes);


export {apiRoutes};