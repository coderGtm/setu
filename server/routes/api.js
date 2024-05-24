import express from "express";
import userRoutes from "./api/user";
import urlRoutes from "./api/url"

const router = express.Router();

router.post("/user", userRoutes);
router.post("/url", urlRoutes);


module.exports = router;