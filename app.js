console.log("App Started");

const fs = require('fs');
const _ = require("lodash");
const yargs = require('yargs');

var argv = yargs.argv;

const notes = require('./notes');

//var command = process.argv[2];
var command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log("Command not recognized");
}