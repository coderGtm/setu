import express from "express";
import handleGenerateNewShortUrl from "../../controllers/url";

const router = express.Router();

router.post("/new", handleGenerateNewShortUrl);

module.exports = router;