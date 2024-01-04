import { login, logout, register } from "$/controllers/auth.controller";
import express, { type Router } from "express";

const router: Router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
