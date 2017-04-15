

var BasicCard = function(front, back) {
	if(this instanceof BasicCard) {
		this.front = front;
		this.back = back;		
	}else {
		return new BasicCard(front, back);
	}
}

BasicCard.prototype.displayCard = function() {
	console.log("front: " + this.front);
	console.log("back: " + this.back);
}

module.exports = BasicCard;