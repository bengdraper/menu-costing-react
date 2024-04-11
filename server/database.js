const { Pool } = require('pg');


const pool = new Pool({
    user: "postgres", // should be my username from my postgres db
    password: "password", // should be my password from my postgres db
    host: "localhost",  // because my postgres db is running on my local machine
    port: 5432,  // default port for postgres
    database: "mydatabase" // should be my database from my postgres db
})

module.exports = pool;




