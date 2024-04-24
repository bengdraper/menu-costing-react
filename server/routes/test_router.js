const express = require('express');
const router = express.Router();
const pool = require('../database');
// const cors = require('cors');

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.get("/showusers", (req, res) => {
    pool
        .query('SELECT * FROM accounts')
        .then((response) => {
            console.log("Users retrieved successfully");
            console.log(response.rows);
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
        });
});

var passIncrementer = {

    i: Math.floor(Math.random() * 1000) + 1
}

router.post("/adduser", (req, res) => {

    passIncrementer.i += 1;

    console.log("passIncrementer: " + passIncrementer.i);

    const name = req.body["name"];
    const number = req.body["number"];

    console.log("name: " + name);
    console.log("number: " + number);

    const insertSTMT = `INSERT INTO accounts ( username, user_id, password ) VALUES ( '${name}', '${number}', '${passIncrementer.i}' )`;

    pool
        .query(insertSTMT)
        .then((response) => {
            console.log("User added successfully");
            res.send("User added successfully");
        })
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;