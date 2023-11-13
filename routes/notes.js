const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const { readFromFile, readAndAppend, deleteByID } = require('../helpers/fsUtils.js');

notes.get('/', (req, res) => {
    readFromFile(path.join(__dirname, '../db/db.json'))
    .then((data) => res.status(200).json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            id: uuidv4(),
            title,
            text
        }
        readAndAppend(newNote, path.join(__dirname, '../db/db.json'));
        res.status(201).json(newNote);
    } else {
        res.status(400).error('Failed to add note!');
    }
});

notes.delete('/:id', (req, res) => {
    if (req.params.id) {
        const deleteID = req.params.id;
        deleteByID(deleteID, path.join(__dirname, '../db/db.json'))
    } else {
        res.status(400).error('Note ID not provided');
    }
});

module.exports = notes;