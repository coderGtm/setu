import express from "express";
import {handleGenerateNewShortURL} from "../../controllers/url.js";

const urlRoutes = express.Router();

urlRoutes.post("/new", handleGenerateNewShortURL);

export {urlRoutes};