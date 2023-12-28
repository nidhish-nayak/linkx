import express, {
    type Application,
    type Request,
    type Response,
} from "express";
import { zodMiddleware } from "./middlewares/zod.middleware";

const app: Application = express();

app.use(express.json());

// Routes
app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!");
});

// Global catches using zod
app.use(zodMiddleware);

// Listener
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + `http://localhost:${PORT}`);
});
