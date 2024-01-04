import dotenv from "dotenv";
import express, { type Application } from "express";
import { zodMiddleware } from "./middlewares/zod.middleware";
import authRoutes from "./routes/auth.route";
import commentRoutes from "./routes/comment.route";
import likeRoutes from "./routes/like.route";
import postRoutes from "./routes/post.route";
import userRoutes from "./routes/user.route";

const app: Application = express();

// Configs
dotenv.config();
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
