import express from "express";
import {handleShortUrl} from "../controllers/url.js";

const staticRoutes = express.Router();

staticRoutes.get("/visit/:shortId", handleShortUrl);

export {staticRoutes};