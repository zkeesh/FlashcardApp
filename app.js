
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var zachBasic = BasicCard("Who's a college student?", "Zach");
var zachCloze = new ClozeCard("Zach's a college student", "student");

// new basic card w/out new
var card = BasicCard("Whats your favorite color?", "Blue");
console.log(card.front);

card.displayCard();

var clozeCardTwo = ClozeCard("The sky is blue", "blue");
console.log(clozeCardTwo.partial);

clozeCardTwo.displayCard();

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// George Washington was the first president of the United States.""
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because oops doesn't appear in This doesn't work
var brokenCloze = new ClozeCard("This doesn't work", "oops"); 





