import { addLike, deleteLike, getLikes } from "$/controllers/like.controller";
import express from "express";

const router = express.Router();

router.get("/", getLikes);
router.post("/", addLike);
router.delete("/", deleteLike);

export default router;
