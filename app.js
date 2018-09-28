console.log("App Started");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

newNote = notes.addNote();

console.log(newNote);
var user = os.userInfo();

// fs.appendFile("greetings.txt", `Hello ${user.username}!`, (err) => {
//     if(err) {
//         console.log("There was an error :(");
//         console.error(err);
//     }
// });