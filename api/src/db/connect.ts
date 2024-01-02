import mysql from "mysql2";

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const connectDB = async () => {
    try {
        await db.connect();
        console.log("DB connected!");

        // DB operations here
    } catch (error) {
        throw new Error("Database connection failed! - " + error);
    } finally {
        db.end();
        console.log("DB disconnected!");
    }
};

export default connectDB;
