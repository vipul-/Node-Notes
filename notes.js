console.log("required successfully!");

var addNote = (title, body) => {
    console.log(`Adding Note \n ${title} \n ${body}`);
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