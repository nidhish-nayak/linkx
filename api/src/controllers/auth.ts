import { executeQuery } from "$/db/connect";
import bcrypt from "bcryptjs";
import { type Request, type Response } from "express";

export const register = async (req: Request, res: Response) => {
    // Check if user exists
    const username = req.body.username;

    try {
        const query = "SELECT FROM users WHERE username = ?";
        const result = await executeQuery(query, [username]);
        if ([result].length) {
            return res.status(409).json("User already exists!");
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).send("Server Error - Query get user");
    }

    // Create new user
    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const values = [
        req.body.username,
        req.body.email,
        hashedPassword,
        req.body.name,
    ];

    const query =
        "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    try {
        const result = await executeQuery(query, [values]);
        if ([result].length) {
            return res.status(409).json("User already exists!");
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        return res
            .status(500)
            .send("Server Error - Insert new user failed for register user");
    }
};

export const login = (_req: Request, _res: Response) => {};

export const logout = (_req: Request, _res: Response) => {};
