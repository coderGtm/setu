import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true,
        },
        redirectURL: {
            type: String,
            required: true,
        },
        visitHistory: [{ 
            timestamp: {type: Number, required: true},
            ip: {type: String, required: true},
        }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {timestamps: true}
);



export const Url = mongoose.model("url", urlSchema);