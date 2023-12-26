import express, {
    type Application,
    type Request,
    type Response,
} from "express";
import { zodMiddleware } from "./middlewares/zod.middleware";

const app: Application = express();

app.use(zodMiddleware);
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + `http://localhost:${PORT}`);
});
