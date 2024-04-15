const pg = require('pg');

const server = require("./src/app");

const {conn} = require("./src/db");


const PORT = process.env.PORT || 3001;

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})



server.listen(PORT, () => {
    conn.sync({force: false});
    console.log(`Listening on port ${PORT}`);
});
