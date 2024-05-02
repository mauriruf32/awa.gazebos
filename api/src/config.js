require("dotenv").config();



const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "ringo527";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 5432
const DB_NAME = process.env.DB_NAME || "awa";
const DATABASE_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;


module.exports = {
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DATABASE_URL 
}