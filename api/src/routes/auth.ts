import { login, logout, register } from "$/controllers/auth";
import { Router } from "express";

const router = Router();

router.post("login", login);
router.post("register", register);
router.post("logout", logout);

export default router;
