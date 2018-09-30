console.log("App Started");

const fs = require('fs');
const _ = require("lodash");

const notes = require('./notes');

var command = process.argv[2];

console.log(`command: ${command}`);

if (command === 'add') {
    console.log("Adding new notes.");
} else if (command === 'list') {
    console.log("Listing notes");
} else if (command === 'remove') {
    console.log("Removing notes");
} else if (command === 'read') {
    console.log("Fetching notes");
} else {
    console.log("Command not recognized");
}