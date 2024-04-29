require("dotenv").config();


const {Pool} = require('pg');


const server = require("./src/app");

const {conn} = require("./src/db");


const PORT = process.env.PORT || 3001;

const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user:'postgres',
    password: 'ringo527',
    port: 5432
})

server.get("/ping", async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})


server.listen(3001, () => {
    conn.sync({force: false});
    console.log(`Listening on port ${3001}`);
});
