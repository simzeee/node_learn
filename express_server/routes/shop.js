import express from "express";
import path from "path";

import { getDirname } from "../util/path.js";

const __dirname = getDirname(import.meta.url);

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

export default router;
