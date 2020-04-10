const express = require('express');
const config = require('./config');
const videosAPI = require('./routes/videos');

const app = express();

app.use(express.json());

videosAPI(app);

app.use('/hello', (req,res) => {
    res.send('hello');
});

app.listen(config.port, () => {
    console.log(`APP listening on http://localhost:${config.port}`);
});
