const express = require('express');
const app = express();
const port = 8383;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World!</h1>');
});

app.listen(port, () => console.log(`Listening on port ${port}`));