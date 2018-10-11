console.log("required successfully!");

const fs = require("fs");

var addNote = (title, body) => {
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync("notes-data.json");
        var notes = JSON.parse(notesString);
    } catch(e) {
        var notes = [];
    }
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync("notes-data.json", JSON.stringify(notes));
        console.log(`Adding Note \n ${title} \n ${body}`);
    } else {
        console.log("Duplicate Note");
    }
};

var getAll = () => {
    console.log("Showing all notes");
};

var removeNote = (title) => {
    console.log(`Removing ${title}`);
};

var getNote = (title) => {
    console.log(`Fetching ${title}`);
};

module.exports =  {
    addNote,
    getAll,
    removeNote,
    getNote
};