import { Url } from "../models/Url.js";
import { customAlphabet } from "nanoid";

async function handleGenerateNewShortURL(req, res) {
  const user = req.user;
  const body = req.body;

  const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 4);

  if (!body.url)
    return res.status(400).json({ error: "URL is a required prameter" });

  const shordId = nanoid();

  let entry = new Url({
    shortId: shordId,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: user.id,
  });
  await entry.save();

  return res.status(200).json({ id: shordId });
}

async function handleShortUrl(req, res) {
  const shortId = req.params.shortId;
  console.log("IP: ", req.ip);
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now(), ip: req.ip },
      },
    },
  );
  if (!entry) return res.status(404).json({ error: "URL not found" });
  return res.status(200).json({ redirectURL: entry.redirectURL });
}

async function getUrlAnalytics(req, res) {
  const shortId = req.param.shortId;
  const userId = req.user.id;
  const entry = await Url.findOne({ shortId: shortId });

  if (!entry) return res.status(404).json({ error: "URL not found" });
  if (entry.createdBy != userId) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  return res.json(entry);
}

export { handleGenerateNewShortURL, handleShortUrl, getUrlAnalytics };
