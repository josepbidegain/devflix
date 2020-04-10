const express = require('express');
const config = require('./config');

const app = express();


app.use('/hello', (req,res) => {
    res.send('hello');
});

app.listen(config.port, () => {
    console.log(`APP listening on http://localhost:${config.port}`);
});
