

const pg = require('pg');

require("dotenv").config();

const server = require("./src/app");

const {conn} = require("./src/db");


const PORT = process.env.PORT || 3001;

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

server.get("/ping", async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})


server.listen(3001, () => {
    conn.sync({force: false});
    console.log(`Listening on port ${3001}`);
});
