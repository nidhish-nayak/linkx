import { executeQuery } from "$/db/connect";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "$/types/auth.types";
import { type Request, type Response } from "express";

export const register = async (req: Request, res: Response) => {
    try {
        const validationResult = RegisterSchema.safeParse(req);

        if (!validationResult.success) {
            return res.status(400).json({
                message: "Input validation failed.",
                error: validationResult.error,
            });
        }

        const { username, name, email, password } = validationResult.data.body;

        // Check if user exists
        const userExistsQuery = "SELECT * FROM users WHERE username = ?";
        const existingUsers = (await executeQuery(userExistsQuery, [
            username,
        ])) as [];

        if (existingUsers.length > 0) {
            return res.status(409).json({
                message: "User already exists!",
                existingUsers: existingUsers,
            });
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
            return res.status(201).json({
                message: "User added successfully!",
                insertionResult: insertionResult,
            });
        }

        return res.status(500).json({
            message: "Server error - New user registration failed!",
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).send("Server error - Internal Server Error");
    }
};

export const login = (_req: Request, _res: Response) => {};

export const logout = (_req: Request, _res: Response) => {};
