
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var zachBasic = new BasicCard("Who's a college student?", "Zach");
var zachCloze = new ClozeCard("Zach's a college student", "student");

console.log(zachBasic.frontSide);
console.log(zachCloze);

