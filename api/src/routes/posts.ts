import { addPost, deletePost, getPosts } from "$/controllers/post";
import express from "express";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
