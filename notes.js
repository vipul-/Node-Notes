console.log("required successfully!");

module.exports.addNote = () => {
    console.log("New Note");
    return "Note Added";
};

module.exports.add = (x, y) => {
    return x+y;
}