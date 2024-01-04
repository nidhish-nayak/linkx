import dotenv from "dotenv";
import mysql, { type Pool } from "mysql2/promise";

dotenv.config();

const dbPool: Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export async function executeQuery<L extends string, Q>(query: L, params: Q) {
    let connection: mysql.PoolConnection | null = null;

    try {
        connection = await dbPool.getConnection();
        const [results] = await connection.query(query, params);
        return results;
    } catch (error) {
        console.error("Error executing query:", error);
        throw new Error("Error executing query");
    } finally {
        if (connection) {
            connection.release();
        }
    }
}
