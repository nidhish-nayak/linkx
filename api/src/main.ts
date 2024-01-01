import express, { type Application } from "express";
import { zodMiddleware } from "./middlewares/zod.middleware";
import authRoutes from "./routes/auth";
import commentRoutes from "./routes/comments";
import likeRoutes from "./routes/likes";
import postRoutes from "./routes/posts";
import userRoutes from "./routes/users";

const app: Application = express();

app.use(express.json());

// Global catches using zod
app.use(zodMiddleware);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// Listener
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port: " + `http://localhost:${PORT}`);
});
