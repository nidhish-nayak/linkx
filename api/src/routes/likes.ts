import { addLike, deleteLike, getLikes } from "$/controllers/like";
import express from "express";

const router = express.Router();

router.get("/", getLikes);
router.post("/", addLike);
router.delete("/", deleteLike);

export default router;
