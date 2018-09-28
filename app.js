console.log("App Started");

const fs = require('fs');

fs.appendFile("greetings.txt", "Hello World!", (err) => {
    if(err) {
        console.log("There was an error :(");
        console.error(err);
    }
});