import mysql, { type Pool, type PoolConnection } from "mysql2/promise";

const dbPool: Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export async function executeQuery<L extends string, Q>(query: L, params: Q) {
    const connection: PoolConnection = await dbPool.getConnection();
    try {
        const [results] = await connection.query(query, params);
        return results;
    } finally {
        connection.release();
    }
}
