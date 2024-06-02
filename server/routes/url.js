import express from "express";
import {
  handleGenerateNewShortURL,
  handleShortUrl,
  getUrlAnalytics,
} from "../controllers/url.js";
import { restrictToAuthenticatedUserOnly } from "../middleware/auth.js";

const urlRoutes = express.Router();

urlRoutes.post(
  "/new",
  restrictToAuthenticatedUserOnly,
  handleGenerateNewShortURL,
);
urlRoutes.get("/visit/:shortId", handleShortUrl);
urlRoutes.get(
  "/analytics:shortId",
  restrictToAuthenticatedUserOnly,
  getUrlAnalytics,
);

export { urlRoutes };
