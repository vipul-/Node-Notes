const fs = require('fs');
const _ = require("lodash");
const yargs = require('yargs');

var argv = yargs.argv;

const notes = require('./notes');

//var command = process.argv[2];
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note saved successfully.");
        notes.logNotes(note);
    } else {
        console.log("A note with the same title already exists. Please change the title.");
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note Found");
        notes.logNotes(note);
    } else {
        console.log("Note not found.");
    }
} else {
    console.log("Command not recognized");
}