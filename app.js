console.log("App Started");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

var arr = [1,2,1, "Andrew", "Azure", "Andrew"];

var u = _.uniq(arr);
console.log(u);

newNote = notes.addNote();

console.log(newNote);
var user = os.userInfo();

add = notes.add(6, 12);

console.log(add);

// fs.appendFile("greetings.txt", `Hello ${user.username}!`, (err) => {
//     if(err) {
//         console.log("There was an error :(");
//         console.error(err);
//     }
// });