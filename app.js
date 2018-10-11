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
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("A note with the same title already exists. Please change the title.");
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log("Command not recognized");
}