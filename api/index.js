const server = require("./src/app");

const {conn} = require("./src/db");

// import pg from 'pg';

const PORT = process.env.PORT || 3001;

// new pg.Pool({
//     connectionString:
// })



server.listen(PORT, () => {
    conn.sync({force: false});
    console.log(`Listening on port ${PORT}`);
});
