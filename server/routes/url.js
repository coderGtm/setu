import express from "express";
import {
  handleGenerateNewShortURL,
  handleShortUrl,
} from "../controllers/url.js";
import { restrictToAuthenticatedUserOnly } from "../middleware/auth.js";

const urlRoutes = express.Router();

urlRoutes.use(restrictToAuthenticatedUserOnly);

urlRoutes.post("/new", handleGenerateNewShortURL);
urlRoutes.get("/visit/:shortId", handleShortUrl);

export { urlRoutes };
