const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const cors = require("cors");
const pg = require('pg');


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(cookieParser())
app.use(morgan("dev"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use(express.json());

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

app.get("/ping", async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.use(mainRouter);

module.exports = app;
