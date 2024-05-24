import express from "express";
import {handleShortUrl} from "../controllers/url.js";

const staticRoutes = express.Router();

staticRoutes.get("/:shortId", handleShortUrl);

export {staticRoutes};