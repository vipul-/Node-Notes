const fs = require("fs");

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

var addNote = (title, body) => {
    notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
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