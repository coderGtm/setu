import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoutes from "./routes/api";
import staticRoutes from "./routes/static";
import restrictToAuthenticatedUserOnly from "./middleware/auth";

dotenv.config()

const app = express();
app.use(express.json());

app.use("/api", restrictToAuthenticatedUserOnly, apiRoutes);
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