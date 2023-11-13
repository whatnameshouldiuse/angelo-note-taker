const express = require('express');
const path = require('path');

const apiRouter = require('./routes/index.js');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () => 
    console.log(`Serving at http://localhost:${PORT}`)
);