const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    // TODO: Return the index.html file
});

app.get('/notes', (req, res) => {
    // TODO: Return the notes.html file
});

app.get('/api/notes', (req, res) => {
    // TODO: Read the db.json file and return all saved notes as JSON
});

app.post('/api/notes', (req, res) => {
    // TODO: Receive a new note to save from Request, add it to db.json, and return the new note to the client.
    // give each note a unique id.
});

app.delete('/api/notes/:id', (req, res) => {
    // TODO: use id param received, use it to delete corresponding note from db.json.
});