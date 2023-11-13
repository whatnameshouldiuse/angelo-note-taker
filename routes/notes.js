const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const {readFromFile, readAndAppend, deleteByID } = require('/helpers/fsUtils');

app.get('/', (req, res) => {
    readFromFile('/db/db.json')
    .then((data) => res.status(20).json(JSON,parse(data)));
});

app.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            id: uuidv4(),
            title,
            text
        }
        readAndAppend(newNote, '/db/db.json');
        res.status(201).json(newNote);
    } else {
        res.status(400).error('Failed to add note!');
    }
});

app.delete('/:id', (req, res) => {
    if (req.params.id) {
        const deleteID = req.params.id;
        deleteByID(deleteID, '/db/db.json')
    } else {
        res.status(400).error('Note ID not provided');
    }
});

module.exports = notes;