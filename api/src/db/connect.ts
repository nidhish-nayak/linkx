import mysql from "mysql2";

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

try {
    db.connect(() => {
        console.log("Database Connected!");
    });
} catch (error) {
    throw new Error("Database connection failed! - " + error);
}
