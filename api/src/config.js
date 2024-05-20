require("dotenv").config();



const DB_USER = process.env.DB_USER || "awa";
const DB_PASSWORD = process.env.DB_PASSWORD || "YMjFpMFTuH518ZquKtLHrjJjnRbRO7Zi";
const DB_HOST = process.env.DB_HOST || "dpg-condc64f7o1s73fi5fjg-a";
const DB_PORT = process.env.DB_PORT || 5432
const DB_NAME = process.env.DB_NAME || "awa_tcyo";
// const DATABASE_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const DATABASE_URL = `postgres://default:Uvs9LXJCWZ7b@ep-white-star-a623sd1p.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require`;


module.exports = {
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DATABASE_URL 
}