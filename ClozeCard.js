

var ClozeCard = function(fullText, cloze) {
	if(this instanceof ClozeCard) {
		this.fullText = fullText;
		this.cloze = cloze;
		this.clozeIndex = this.fullText.indexOf(cloze);
		this.partial = fullText.replace(cloze, "...");

		if(fullText.indexOf(cloze) === -1){
			throw "Cloze not found inside of full text.";
		}		
	} else {
		return new ClozeCard(fullText, cloze);
	}

}

ClozeCard.prototype.displayCard = function() {
	console.log("full text: " + this.fullText);
	console.log("partial text: " + this.partial);
}




module.exports = ClozeCard;