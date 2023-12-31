import express, { type Application } from "express";
import { zodMiddleware } from "./middlewares/zod.middleware";
import userRoutes from "./routes/users";

const app: Application = express();

app.use(express.json());

// Global catches using zod
app.use(zodMiddleware);

// Routes
app.use("/api/users", userRoutes);

// Listener
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + `http://localhost:${PORT}`);
});
