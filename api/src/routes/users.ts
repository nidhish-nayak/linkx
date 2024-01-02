import { getUser, updateUser } from "$/controllers/user";
import express from "express";

const router = express.Router();

router.get("/find/:userId", getUser);
router.put("/", updateUser);

export default router;
