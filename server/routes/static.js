import express from "express";
import handleShortUrl from "../controllers/url";

const router = express.Router();

app.get("/:shortId", handleShortUrl);

module.exports = router;