import { type Request, type Response } from "express";

export const getUser = (_req: Request, res: Response) => {
    //operation here
    res.send("it works");
};
