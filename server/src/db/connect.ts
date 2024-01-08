import config from "$/config/config";
import mysql, { type Pool, type RowDataPacket } from "mysql2/promise";

const { dbConfig } = config;

const dbPool: Pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
});

export async function executeQuery<L extends string, Q>(query: L, params: Q) {
    let connection: mysql.PoolConnection | null = null;

    try {
        connection = await dbPool.getConnection();
        const [results] = await connection.query<RowDataPacket[]>(
            query,
            params
        );
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
