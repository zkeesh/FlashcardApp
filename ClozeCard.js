

var ClozeCard = function(fullText, clozeDeletion) {
	this.fullText = fullText;
	this.clozeDeletion = clozeDeletion;
	this.clozeIndex = this.fullText.indexOf(clozeDeletion);
}

module.exports = ClozeCard;