

function BasicCard(frontSide, backSide) {
	this.frontSide = frontSide;
	this.backSide = backSide;
}

var firstPresident = new BasicCard(
		"Who was the first president of the United States?", 
		"George Washington"
	)

console.log(firstPresident.frontSide); 
console.log(firstPresident.backSide); 

module.exports = BasicCard;