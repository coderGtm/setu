import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import {apiRoutes} from "./routes/api.js";
import {staticRoutes} from "./routes/static.js";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", staticRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server listening on PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });