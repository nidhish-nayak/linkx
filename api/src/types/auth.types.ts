import { type Request } from "express";

export interface CustomRequest extends Request {
    body: {
        username: string;
        name: string;
        email: string;
        password: string;
    };
}
