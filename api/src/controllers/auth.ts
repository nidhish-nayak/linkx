import { executeQuery } from "$/db/connect";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "$/types/auth.types";
import { type Request, type Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        const validationResult = RegisterSchema.safeParse(req);
        if (!validationResult.success) {
            return res.status(400).send("Input validation failed!");
        }

        const { username, name, email, password } = validationResult.data.body;

        // Check if user exists
        const userExistsQuery = "SELECT * FROM users WHERE username = ?";
        const existingUsers = (await executeQuery(userExistsQuery, [
            username,
        ])) as [];

        if (existingUsers.length > 0) {
            return res.status(409).send("User already exists!");
        }

        // Hash password
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

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
        return res.status(500).send("Server error!");
    }
};

export const login = (_req: Request, _res: Response) => {};

export const logout = (_req: Request, _res: Response) => {};
