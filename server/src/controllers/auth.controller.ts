import { executeQuery } from "$/db/connect";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "$/validations/auth.validation";
import { type Request, type Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        // Zod validations
        const validationResult = RegisterSchema.safeParse(req);
        if (!validationResult.success) {
            return res.status(400).send("Input validation failed!");
        }

        const { username, name, email, password } = validationResult.data.body;

        // Check if user exists
        const existingUser = await executeQuery(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );
        if (Array.isArray(existingUser) && existingUser.length > 0) {
            return res.status(409).send("User already exists!");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const insertUserQuery =
            "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)";

        const userValues = [username, email, hashedPassword, name];
        const insertionResult = await executeQuery(insertUserQuery, [
            userValues,
        ]);

        if (insertionResult) {
            return res.status(201).send("User added successfully!");
        }

        return res.status(500).send("New user registration failed!");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error!");
    }
};

export const login = async (req: Request, res: Response) => {
    const query = "SELECT * FROM users WHERE username = ?";
    const existingUser = await executeQuery(query, [req.body.username]);

    if (Array.isArray(existingUser) && existingUser.length === 0) {
        return res.status(404).send("User not found!");
    }

    if (Array.isArray(existingUser) && existingUser) {
        const checkPassword = bcrypt.compareSync(
            req.body.password,
            existingUser[0].password
        );
        console.log(checkPassword);
    }
};

export const logout = (_req: Request, _res: Response) => {};
