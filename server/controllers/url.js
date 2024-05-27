import {Url} from "../models/Url.js";
import {nanoid} from "nanoid";

async function handleGenerateNewShortURL(req, res) {
    const user = req.user;
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: "URL is a required prameter"});

    const shordId = nanoid(4);

    await Url.create({
        shordId: shordId,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: user.id,
    });

    return res.status(200).json({ id: shordId });
}

async function handleShortUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({
        shortId,
    },{
        $push: {
            visitHistory: {timestamp: Date.now()},
            ip: req.connection.remoteAddress,
        },
    });
    res.redirect(entry.redirectURL);
}

async function getAllUrlsOfUser(req, res) {
    const user = req.user;
    const entries = await Url.find({ createdBy: user.id });
    return res.json(entries)
}

export { handleGenerateNewShortURL, handleShortUrl };