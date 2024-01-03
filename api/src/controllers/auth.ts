import { executeQuery } from "$/db/connect";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "$/types/auth.types";
import { type Request, type Response } from "express";

export const register = async (req: Request, res: Response) => {
    const schemaResult = RegisterSchema.safeParse(req);

    if (schemaResult.success) {
        const username = schemaResult.data.body.username;
        const name = schemaResult.data.body.name;
        const email = schemaResult.data.body.email;
        const password = schemaResult.data.body.password;

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
                .send("Server error - New user registration failed!");
        }
    } else {
        res.status(401).json({
            message: "Zod input validation failed for register user request!",
            error: schemaResult.error,
        });
    }
};

export const login = (_req: Request, _res: Response) => {};

export const logout = (_req: Request, _res: Response) => {};
