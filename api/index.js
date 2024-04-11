const server = require("./src/app");

const {conn} = require("./src/db");

const PORT = 3001;


server.listen(PORT, () => {
    conn.sync({force: false});
    console.log(`Listening on port ${PORT}`);
});
