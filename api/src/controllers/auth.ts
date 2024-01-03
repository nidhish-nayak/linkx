import { executeQuery } from "$/db/connect";
import bcrypt from "bcryptjs";

import { type CustomRequest } from "$/types/auth.types";
import { type Response } from "express";

export const register = async (req: CustomRequest, res: Response) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Check if user exists
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

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const values = [username, email, hashedPassword, name];

    // Insert new user
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
