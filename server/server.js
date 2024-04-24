const express = require('express');
const cors = require('cors');
const pool = require('./database');

// routes
const router = require('./routes/test_router');

// initialize express
const app = express();



// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(router);

// dev temp junk
// var passIncrementer = {

//     i: Math.floor(Math.random() * 1000) + 1
// }

// app.post("/adduser", (req, res) => {

//     passIncrementer.i += 1;

//     console.log("passIncrementer: " + passIncrementer.i);

//     const name = req.body["name"];
//     const number = req.body["number"];

//     console.log("name: " + name);
//     console.log("number: " + number);

//     const insertSTMT = `INSERT INTO accounts ( username, user_id, password ) VALUES ( '${name}', '${number}', '${passIncrementer.i}' )`;

//     pool
//         .query(insertSTMT)
//         .then((response) => {
//             console.log("User added successfully");
//             res.send("User added successfully");
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// });

// app.get("/showusers", (req, res) => {
//     pool
//         .query('SELECT * FROM accounts')
//         .then((response) => {
//             console.log("Users retrieved successfully");
//             console.log(response.rows);
//             res.send(response.rows);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Hello, world!' });
// });

// initialize server
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`))

// const port = 8383;
