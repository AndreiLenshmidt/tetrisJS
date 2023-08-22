'use strict'

class Line {
	constructor(part1, part2, part3, part4, type, position) {
		this.line1 = part1;
		this.line2 = part2;
		this.line3 = part3;
		this.line4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(this.line1, this.line2, this.line3,this.line4);
	}
	fall(speed) {
		if(this.type === "line" && this.line4.style.top !=="425px" ) {
			this.line1.style.top == "" ? this.line1.style.top = "-50px" : 
				this.line1.style.top = parseInt(this.line1.style.top)+speed+"px";
			this.line2.style.top == "" ?this.line2.style.top = "-25px" :
				this.line2.style.top = parseInt(this.line2.style.top)+speed+"px";
			this.line3.style.top == "" ? this.line3.style.top = "0px" :
				this.line3.style.top = parseInt(this.line3.style.top)+speed+"px";
			this.line4.style.top == "" ? this.line4.style.top = "25px" :
				this.line4.style.top = parseInt(this.line4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || (event.key === "ArrowLeft")) 
			&& (this.line4.style.left !== "0px" && this.line1.style.left !== "0px"
			&& this.line2.style.left !== "0px" && this.line3.style.left !== "0px")) {
			if(this.line1.style.left == "") this.line1.style.left = "100px";
				this.line1.style.left = parseInt(this.line1.style.left)-25+"px";
			if(this.line2.style.left == "") this.line2.style.left = "100px";
				this.line2.style.left = parseInt(this.line2.style.left)-25+"px";
			if(this.line3.style.left == "") this.line3.style.left = "100px";
				this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			if(this.line4.style.left == "") this.line4.style.left = "100px";
				this.line4.style.left = parseInt(this.line4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if(((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight")) 
			&& (this.line4.style.left !== "225px" && this.line1.style.left !== "225px"
			&& this.line2.style.left !== "225px" && this.line3.style.left !==  "225px")) {
			if(this.line1.style.left == "") this.line1.style.left = "100px";
				this.line1.style.left = parseInt(this.line1.style.left)+25+"px";
			if(this.line2.style.left == "") this.line2.style.left = "100px";
				this.line2.style.left = parseInt(this.line2.style.left)+25+"px";
			if(this.line3.style.left == "") this.line3.style.left = "100px";
				this.line3.style.left = parseInt(this.line3.style.left)+25+"px";
			if(this.line4.style.left == "") this.line4.style.left = "100px";
				this.line4.style.left = parseInt(this.line4.style.left)+25+"px";
		} 
		return this;
	}

	turnLeft(event) {
		if(((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) && (this.position === "start" && this.line1.style.left !== "200px"
			&& this.line1.style.left !== "0px" && this.line1.style.left !== "225px")) {
			this.line1.style.top = parseInt(this.line1.style.top)+25+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)-25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)+25+"px";
			this.line4.style.top = parseInt(this.line4.style.top)-50+"px";
			this.line4.style.left = parseInt(this.line4.style.left)+50+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) && (this.position === "start" 
			&& this.line4.style.left === "200px" && this.line1.style.left === "200px")) {
			this.line2.style.top = parseInt(this.line2.style.top)+25+"px";
			this.line2.style.left = parseInt(this.line2.style.left)-25+"px";
			this.line1.style.top = parseInt(this.line1.style.top)+50+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-50+"px";
			this.line4.style.top = parseInt(this.line4.style.top)-25+"px";
			this.line4.style.left = parseInt(this.line4.style.left)+25+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) && (this.position === "start" 
			&& this.line4.style.left === "0px" && this.line1.style.left === "0px" 
			&& this.line2.style.left === "0px" && this.line3.style.left === "0px")) {
			this.line2.style.top = parseInt(this.line2.style.top)-25+"px";
			this.line2.style.left = parseInt(this.line2.style.left)+25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)-50+"px";
			this.line3.style.left = parseInt(this.line3.style.left)+50+"px";
			this.line4.style.top = parseInt(this.line4.style.top)-75+"px";
			this.line4.style.left = parseInt(this.line4.style.left)+75+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[0])||(event.key === "z")) && (this.position === "start" 
			&& this.line4.style.left === "225px" && this.line1.style.left === "225px" 
			&& this.line2.style.left === "225px" && this.line3.style.left === "225px")) {
			this.line1.style.top = parseInt(this.line1.style.top)+75+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-75+"px";
			this.line2.style.top = parseInt(this.line2.style.top)+50+"px";
			this.line2.style.left = parseInt(this.line2.style.left)-50+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) 
			&& (this.position === "turnLeft" && this.line4.style.top !== "425px")) {
			this.line1.style.top = parseInt(this.line1.style.top)-25+"px";
			this.line1.style.left = parseInt(this.line1.style.left)+25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			this.line4.style.top = parseInt(this.line4.style.top)+50+"px";
			this.line4.style.left = parseInt(this.line4.style.left)-50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) 
			&&  (this.position === "turnRight" && this.line4.style.top !== "425px")) {
			this.line1.style.top = parseInt(this.line1.style.top)-25+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)+25+"px";
			this.line4.style.top = parseInt(this.line4.style.top)+50+"px";
			this.line4.style.left = parseInt(this.line4.style.left)-50+"px";
			this.position = "start";
		}
		return this;
	}

	turnRight(event) {
		if(((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) 
			&&  (this.position === "start" && this.line1.style.left !== "0px" 
			&&  this.line1.style.left !== "200px" && this.line1.style.left !== "225px")) {
			this.line1.style.top = parseInt(this.line1.style.top)+25+"px";
			this.line1.style.left = parseInt(this.line1.style.left)+25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)-25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			this.line4.style.top = parseInt(this.line4.style.top)-50+"px";
			this.line4.style.left = parseInt(this.line4.style.left)+50+"px";
			this.position = "turnRight";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) && (this.position === "start" 
			&& this.line4.style.left === "0px" && this.line1.style.left === "0px" 
			&& this.line2.style.left === "0px" && this.line3.style.left === "0px")) {
			this.line2.style.top = parseInt(this.line2.style.top)-25+"px";
			this.line2.style.left = parseInt(this.line2.style.left)+25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)-50+"px";
			this.line3.style.left = parseInt(this.line3.style.left)+50+"px";
			this.line4.style.top = parseInt(this.line4.style.top)-75+"px";
			this.line4.style.left = parseInt(this.line4.style.left)+75+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) && (this.position === "start" 
			&& this.line4.style.left === "200px" && this.line1.style.left === "200px")) {
			this.line1.style.top = parseInt(this.line1.style.top)+75+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-75+"px";
			this.line2.style.top = parseInt(this.line2.style.top)+50+"px";
			this.line2.style.left = parseInt(this.line2.style.left)-50+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) && (this.position === "start" 
			&& this.line4.style.left === "225px" && this.line1.style.left === "225px"
			&& this.line2.style.left === "225px" && this.line3.style.left === "225px")) {
			this.line1.style.top = parseInt(this.line1.style.top)+75+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-75+"px";
			this.line2.style.top = parseInt(this.line2.style.top)+50+"px";
			this.line2.style.left = parseInt(this.line2.style.left)-50+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) 
			&&  (this.position === "turnRight" && this.line4.style.top !== "425px")) {
			this.line1.style.top = parseInt(this.line1.style.top)-25+"px";
			this.line1.style.left = parseInt(this.line1.style.left)-25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)+25+"px";
			this.line4.style.top = parseInt(this.line4.style.top)+50+"px";
			this.line4.style.left = parseInt(this.line4.style.left)-50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  
			&&  (this.position === "turnLeft" && this.line4.style.top !== "425px")) {
			this.line1.style.top = parseInt(this.line1.style.top)-25+"px";
			this.line1.style.left = parseInt(this.line1.style.left)+25+"px";
			this.line3.style.top = parseInt(this.line3.style.top)+25+"px";
			this.line3.style.left = parseInt(this.line3.style.left)-25+"px";
			this.line4.style.top = parseInt(this.line4.style.top)+50+"px";
			this.line4.style.left = parseInt(this.line4.style.left)-50+"px";
			this.position = "start";
		}
		return this;
	}
}

class Square {
	constructor(part1, part2, part3, part4, type, position) {
		this.square1 = part1;
		this.square2 = part2;
		this.square3 = part3;
		this.square4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(
			this.square1, this.square2, this.square3, this.square4);
	}
	fall(speed) {
		if(this.type === "square" && this.position === "start" && this.square4.style.top !=="425px" ) {
			if(this.square1.style.top == "") {
				this.square1.style.top = "-25px";
				this.square1.style.left = "100px";
			}
				this.square1.style.top = parseInt(this.square1.style.top)+speed+"px";
			if(this.square2.style.top == "") {
				this.square2.style.top = "0px";
				this.square2.style.left = "100px";
			}
				this.square2.style.top = parseInt(this.square2.style.top)+speed+"px";
			if(this.square3.style.top == "") {
				this.square3.style.top = "-25px";
				this.square3.style.left = "125px";
			}
				this.square3.style.top = parseInt(this.square3.style.top)+speed+"px";
			if(this.square4.style.top == "") {
				this.square4.style.top = "0px";
				this.square4.style.left = "125px";
			}
				this.square4.style.top = parseInt(this.square4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || 
			(event.key === "ArrowLeft")) && this.square1.style.left !== "0px") {
			if(this.square1.style.left == "") this.square1.style.left = "100px";
				this.square1.style.left = parseInt(this.square1.style.left)-25+"px";
			if(this.square2.style.left == "") this.square2.style.left = "100px";
				this.square2.style.left = parseInt(this.square2.style.left)-25+"px";
			if(this.square3.style.left == "") this.square3.style.left = "125px";
				this.square3.style.left = parseInt(this.square3.style.left)-25+"px";
			if(this.square4.style.left == "") this.square4.style.left = "125px";
				this.square4.style.left = parseInt(this.square4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if(((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight" 
			))&& this.square4.style.left !== "225px") {
			if(this.square1.style.left == "") this.square1.style.left = "100px";
				this.square1.style.left = parseInt(this.square1.style.left)+25+"px";
			if(this.square2.style.left == "") this.square2.style.left = "100px";
				this.square2.style.left = parseInt(this.square2.style.left)+25+"px";
			if(this.square3.style.left == "") this.square3.style.left = "125px";
				this.square3.style.left = parseInt(this.square3.style.left)+25+"px";
			if(this.square4.style.left == "") this.square4.style.left = "125px";
				this.square4.style.left = parseInt(this.square4.style.left)+25+"px";
		}
		return this;
	}
	turnLeft(event) {
		return this;
	}	
	turnRight(event) {
		return this;
	}
}

class LeftS {
	constructor(part1, part2, part3, part4, type, position) {
		this.leftS1 = part1;
		this.leftS2 = part2;
		this.leftS3 = part3;
		this.leftS4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(this.leftS1, this.leftS2, this.leftS3,this.leftS4);
	}
	fall(speed) {
		if(this.type === "leftS" && this.leftS4.style.top !=="425px" ) {
			if(this.leftS1.style.top == "") {
				this.leftS1.style.top = "-50px";
				this.leftS1.style.left = "100px";
			}
				this.leftS1.style.top = parseInt(this.leftS1.style.top)+speed+"px";
			if(this.leftS2.style.top == "") {
				this.leftS2.style.top = "-25px";
				this.leftS2.style.left = "100px";
			}
				this.leftS2.style.top = parseInt(this.leftS2.style.top)+speed+"px";
			if(this.leftS3.style.top == "") {
				this.leftS3.style.top = "-25px";
				this.leftS3.style.left = "125px";
			}
				this.leftS3.style.top = parseInt(this.leftS3.style.top)+speed+"px";
			if(this.leftS4.style.top == "") {
				this.leftS4.style.top = "0px";
				this.leftS4.style.left = "125px";
			}
				this.leftS4.style.top = parseInt(this.leftS4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || (event.key === "ArrowLeft")) 
		&& (this.leftS1.style.left !== "0px"  && this.leftS4.style.left !== "0px")) {
			if(this.leftS1.style.left == "") this.leftS1.style.left = "100px";
				this.leftS1.style.left = parseInt(this.leftS1.style.left)-25+"px";
			if(this.leftS2.style.left == "") this.leftS2.style.left = "100px";
				this.leftS2.style.left = parseInt(this.leftS2.style.left)-25+"px";
			if(this.leftS3.style.left == "") this.leftS3.style.left = "125px";
				this.leftS3.style.left = parseInt(this.leftS3.style.left)-25+"px";
			if(this.leftS4.style.left == "") this.leftS4.style.left = "125px";
				this.leftS4.style.left = parseInt(this.leftS4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if(((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight")) 
			&& (this.leftS4.style.left !== "225px"  && this.leftS1.style.left !== "225px")) {
			if(this.leftS1.style.left == "") this.leftS1.style.left = "100px";
				this.leftS1.style.left = parseInt(this.leftS1.style.left)+25+"px";
			if(this.leftS2.style.left == "") this.leftS2.style.left = "100px";
				this.leftS2.style.left = parseInt(this.leftS2.style.left)+25+"px";
			if(this.leftS3.style.left == "") this.leftS3.style.left = "125px";
				this.leftS3.style.left = parseInt(this.leftS3.style.left)+25+"px";
			if(this.leftS4.style.left == "") this.leftS4.style.left = "125px";
				this.leftS4.style.left = parseInt(this.leftS4.style.left)+25+"px";
		} 
		return this;
	}
	turnLeft(event) {
		if(((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))   
			&& ( this.position === "start" && this.leftS4.style.left !== "225px")) {
			this.leftS4.style.left = parseInt(this.leftS4.style.left)-25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)+25+"px";
			this.leftS2.style.left = parseInt(this.leftS2.style.left)+25+"px";
			this.leftS1.style.left = parseInt(this.leftS1.style.left)+50+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)+25+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) && this.position === "turnLeft") {
			this.leftS1.style.left = parseInt(this.leftS1.style.left)-50+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)-25+"px";
			this.leftS2.style.left = parseInt(this.leftS2.style.left)-25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)-25+"px";
			this.leftS4.style.left = parseInt(this.leftS4.style.left)+25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnRight") {
			this.leftS1.style.left = parseInt(this.leftS1.style.left)-25+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)-25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)-25+"px";
			this.leftS3.style.left = parseInt(this.leftS3.style.left)+25+"px";
			this.leftS4.style.left = parseInt(this.leftS4.style.left)+50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&& (this.position === "start" && this.leftS4.style.left === "225px")) {
			this.leftS1.style.left = parseInt(this.leftS1.style.left)+25+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)+25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)+25+"px";
			this.leftS3.style.left = parseInt(this.leftS3.style.left)-25+"px";
			this.leftS4.style.left = parseInt(this.leftS4.style.left)-50+"px";
			this.position = "turnRight";
		}
		return this;
	}

	turnRight(event) {
		if(((event.type === "click" && event.target==buttons[1])  || (event.key === "x")) 
			&&  (this.position === "start" && this.leftS4.style.left !== "25px")) {
			this.leftS1.style.left = parseInt(this.leftS1.style.left)+25+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)+25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)+25+"px";
			this.leftS3.style.left = parseInt(this.leftS3.style.left)-25+"px";
			this.leftS4.style.left = parseInt(this.leftS4.style.left)-50+"px";
			this.position = "turnRight";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) &&  this.position === "turnRight") {
			this.leftS1.style.left = parseInt(this.leftS1.style.left)-25+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)-25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)-25+"px";
			this.leftS3.style.left = parseInt(this.leftS3.style.left)+25+"px";
			this.leftS4.style.left = parseInt(this.leftS4.style.left)+50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  this.position === "turnLeft") {
			this.leftS1.style.left = parseInt(this.leftS1.style.left)-50+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)-25+"px";
			this.leftS2.style.left = parseInt(this.leftS2.style.left)-25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)-25+"px";
			this.leftS4.style.left = parseInt(this.leftS4.style.left)+25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) 
			&& (this.position === "start" && this.leftS4.style.left === "25px")) {
			this.leftS4.style.left = parseInt(this.leftS4.style.left)-25+"px";
			this.leftS3.style.top = parseInt(this.leftS3.style.top)+25+"px";
			this.leftS2.style.left = parseInt(this.leftS2.style.left)+25+"px";
			this.leftS1.style.left = parseInt(this.leftS1.style.left)+50+"px";
			this.leftS1.style.top = parseInt(this.leftS1.style.top)+25+"px";
			this.position = "turnLeft";
		}
		return this;
	}
}

class RightS {
	constructor(part1, part2, part3, part4, type, position) {
		this.rightS1 = part1;
		this.rightS2 = part2;
		this.rightS3 = part3;
		this.rightS4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(
			this.rightS1, this.rightS2, this.rightS3,this.rightS4);
	}
	fall(speed) {
		if(this.type === "rightS" && this.rightS4.style.top !=="425px" ) {
			if(this.rightS1.style.top == "") {
				this.rightS1.style.top = "-50px";
				this.rightS1.style.left = "125px";
			}
				this.rightS1.style.top = parseInt(this.rightS1.style.top)+speed+"px";
			if(this.rightS2.style.top == "") {
				this.rightS2.style.top = "-25px";
				this.rightS2.style.left = "125px";
			}
				this.rightS2.style.top = parseInt(this.rightS2.style.top)+speed+"px";
			if(this.rightS3.style.top == "") {
				this.rightS3.style.top = "-25px";
				this.rightS3.style.left = "100px";
			}
				this.rightS3.style.top = parseInt(this.rightS3.style.top)+speed+"px";
			if(this.rightS4.style.top == "") {
				this.rightS4.style.top = "0px";
				this.rightS4.style.left = "100px";
			}
				this.rightS4.style.top = parseInt(this.rightS4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || (event.key === "ArrowLeft"))
			&& (this.rightS4.style.left !== "0px" && this.rightS1.style.left !== "0px")) {
			if(this.rightS1.style.left == "") this.rightS1.style.left = "125px";
				this.rightS1.style.left = parseInt(this.rightS1.style.left)-25+"px";
			if(this.rightS2.style.left == "") this.rightS2.style.left = "125px";
				this.rightS2.style.left = parseInt(this.rightS2.style.left)-25+"px";
			if(this.rightS3.style.left == "") this.rightS3.style.left = "100px";
				this.rightS3.style.left = parseInt(this.rightS3.style.left)-25+"px";
			if(this.rightS4.style.left == "") this.rightS4.style.left = "100px";
				this.rightS4.style.left = parseInt(this.rightS4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if(((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight"))
		   && (this.rightS4.style.left !== "225px" && this.rightS1.style.left !== "225px")) {
			if(this.rightS1.style.left == "") this.rightS1.style.left = "125px";
				this.rightS1.style.left = parseInt(this.rightS1.style.left)+25+"px";
			if(this.rightS2.style.left == "") this.rightS2.style.left = "125px";
				this.rightS2.style.left = parseInt(this.rightS2.style.left)+25+"px";
			if(this.rightS3.style.left == "") this.rightS3.style.left = "100px";
				this.rightS3.style.left = parseInt(this.rightS3.style.left)+25+"px";
			if(this.rightS4.style.left == "") this.rightS4.style.left = "100px";
				this.rightS4.style.left = parseInt(this.rightS4.style.left)+25+"px";
		} 
		return this;
	}

	fixFigure() {
		
	}

	turnLeft(event) {
		if(((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  (this.position === "start"
			&& this.rightS4.style.left !== "200px" && this.rightS1.style.left !== "225px")) {
			this.rightS4.style.left = parseInt(this.rightS4.style.left)+50+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)+25+"px";
			this.rightS3.style.left = parseInt(this.rightS3.style.left)+25+"px";
			this.rightS1.style.left = parseInt(this.rightS1.style.left)-25+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)+25+"px";
			this.position = "turnLeft";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) &&  this.position === "turnLeft") {
			this.rightS1.style.left = parseInt(this.rightS1.style.left)+25+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)-25+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)-25+"px";
			this.rightS3.style.left = parseInt(this.rightS3.style.left)-25+"px";
			this.rightS4.style.left = parseInt(this.rightS4.style.left)-50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnRight") {
			this.rightS4.style.left = parseInt(this.rightS4.style.left)-25+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)-25+"px";
			this.rightS2.style.left = parseInt(this.rightS2.style.left)+25+"px";
			this.rightS1.style.left = parseInt(this.rightS1.style.left)+50+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)-25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) &&  (this.position === "start" 
			&& this.rightS4.style.left === "200px" && this.rightS1.style.left === "225px")) {
			this.rightS1.style.left = parseInt(this.rightS1.style.left)-50+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)+25+"px";
			this.rightS2.style.left = parseInt(this.rightS2.style.left)-25+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)+25+"px";
			this.rightS4.style.left = parseInt(this.rightS4.style.left)+25+"px";
			this.position = "turnRight";
		}
		return this;
	}

	turnRight(event) {
		if(((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  (this.position === "start"
			&& this.rightS4.style.left !== "0px" && this.rightS1.style.left !== "25px")) {
			this.rightS1.style.left = parseInt(this.rightS1.style.left)-50+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)+25+"px";
			this.rightS2.style.left = parseInt(this.rightS2.style.left)-25+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)+25+"px";
			this.rightS4.style.left = parseInt(this.rightS4.style.left)+25+"px";
			this.position = "turnRight";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) &&  this.position === "turnRight") {
			this.rightS4.style.left = parseInt(this.rightS4.style.left)-25+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)-25+"px";
			this.rightS2.style.left = parseInt(this.rightS2.style.left)+25+"px";
			this.rightS1.style.left = parseInt(this.rightS1.style.left)+50+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)-25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) && this.position === "turnLeft") {
			this.rightS1.style.left = parseInt(this.rightS1.style.left)+25+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)-25+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)-25+"px";
			this.rightS3.style.left = parseInt(this.rightS3.style.left)-25+"px";
			this.rightS4.style.left = parseInt(this.rightS4.style.left)-50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  (this.position === "start"
			&& this.rightS4.style.left === "0px" && this.rightS1.style.left === "25px")) {
			this.rightS4.style.left = parseInt(this.rightS4.style.left)+50+"px";
			this.rightS3.style.top = parseInt(this.rightS3.style.top)+25+"px";
			this.rightS3.style.left = parseInt(this.rightS3.style.left)+25+"px";
			this.rightS1.style.left = parseInt(this.rightS1.style.left)-25+"px";
			this.rightS1.style.top = parseInt(this.rightS1.style.top)+25+"px";
			this.position = "turnLeft";
		}
		return this;
	}
}

class LCorner {
	constructor(part1, part2, part3, part4, type, position) {
		this.lCorner1 = part1;
		this.lCorner2 = part2;
		this.lCorner3 = part3;
		this.lCorner4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(
			this.lCorner1, this.lCorner2, this.lCorner3, this.lCorner4);
	}
	fall(speed) {
		if(this.type === "lCorner" && this.lCorner4.style.top !=="425px" 
		  && this.lCorner2.style.top !=="425px"  && this.lCorner1.style.top !=="425px") {
			if(this.lCorner1.style.top == "") {
				this.lCorner1.style.top = "-50px";
				this.lCorner1.style.left = "125px";
			}
				this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+speed+"px";
			if(this.lCorner2.style.top == "") {
				this.lCorner2.style.top = "-50px";
				this.lCorner2.style.left = "100px";
			}
				this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+speed+"px";
			if(this.lCorner3.style.top == "") {
				this.lCorner3.style.top = "-25px";
				this.lCorner3.style.left = "100px";
			}
				this.lCorner3.style.top = parseInt(this.lCorner3.style.top)+speed+"px";
			if(this.lCorner4.style.top == "") {
				this.lCorner4.style.top = "0px";
				this.lCorner4.style.left = "100px";
			}
				this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || (event.key === "ArrowLeft")) 
			&& (this.lCorner4.style.left !== "0px" && this.lCorner1.style.left !== "0px")) {
			if(this.lCorner1.style.left == "") this.lCorner1.style.left = "125px";
				this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-25+"px";
			if(this.lCorner2.style.left == "") this.lCorner2.style.left = "100px";
				this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-25+"px";
			if(this.lCorner3.style.left == "") this.lCorner3.style.left = "100px";
				this.lCorner3.style.left = parseInt(this.lCorner3.style.left)-25+"px";
			if(this.lCorner4.style.left == "") this.lCorner4.style.left = "100px";
				this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if(((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight")) 
			&& (this.lCorner1.style.left !== "225px" && this.lCorner4.style.left !== "225px")) {
			if(this.lCorner1.style.left == "") this.lCorner1.style.left = "125px";
				this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+25+"px";
			if(this.lCorner2.style.left == "") this.lCorner2.style.left = "100px";
				this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+25+"px";
			if(this.lCorner3.style.left == "") this.lCorner3.style.left = "100px";
				this.lCorner3.style.left = parseInt(this.lCorner3.style.left)+25+"px";
			if(this.lCorner4.style.left == "") this.lCorner4.style.left = "100px";
				this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+25+"px";
		} 
		return this;
	}
	turnLeft(event) {
		if(((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))   
			&& (this.position === "start" && this.lCorner1.style.left !== "225px")) {
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-25+"px";
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+50+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)+25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)+25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+50+"px";
			this.position = "turnLeft1";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) &&  this.position === "turnLeft1") {
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+25+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)-25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-25+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)-50+"px";
			this.position = "turnLeft2";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  
			&&  (this.position === "turnLeft2" || this.position === "turnRight2")
			&& this.lCorner3.style.left !== "225px") {
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)-25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+25+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+50+"px";
			this.position = "turnLeft3";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnLeft3") {
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)-25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-50+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)-25+"px";
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)-50+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) 
			&& (this.position === "start" && this.lCorner1.style.left === "225px")) {
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+25+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+50+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-25+"px";
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+25+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-50+"px";
			this.position = "turnRight3";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&&  ((this.position === "turnRight2" || this.position === "turnLeft2") && this.lCorner3.style.left === "225px")) {
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)-25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)-25+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-50+"px";
			this.position = "turnRight1";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) &&  this.position === "turnRight1") {
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)-25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-25+"px";
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)-50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnRight3") {
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)-50+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)-25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)+25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+50+"px";
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+25+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+25+"px";
			this.position = "turnLeft2";
		}
		return this;
	}

	turnRight(event) {
		if(((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  (this.position === "start"
			&& this.lCorner4.style.left !== "0px" && this.lCorner1.style.left !== "25px")) {
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+50+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-25+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)-25+"px";
			this.position = "turnRight1";
		} else if  (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  this.position === "turnRight1") {
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)+25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+50+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)-25+"px";
			this.position = "turnRight2";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) 
			&&  ((this.position === "turnRight2" || this.position === "turnLeft2") 
			&& this.lCorner3.style.left !== "0px" && this.lCorner1.style.left !== "0px")) {
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)-25+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-50+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)-25+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)+25+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+50+"px";
			this.position = "turnRight3";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  this.position === "turnRight3") {
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)-25+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+50+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)-50+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+25+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)-25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  
			&& (this.position === "start" && this.lCorner3.style.left === "0px")) {
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)-25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)+50+"px";
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)+50+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+25+"px";
			this.position = "turnLeft3";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&&  ((this.position === "turnRight2" || this.position === "turnLeft2") && this.lCorner1.style.left === "0px")) {
			this.lCorner1.style.top = parseInt(this.lCorner1.style.top)-25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-25+"px";
			this.lCorner3.style.top = parseInt(this.lCorner3.style.top)+25+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+50+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+25+"px";
			this.position = "turnLeft1";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  this.position === "turnLeft1") {
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)-25+"px";
			this.lCorner3.style.left = parseInt(this.lCorner3.style.left)-25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)-50+"px";
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)+25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  this.position === "turnLeft3") {
			this.lCorner4.style.top = parseInt(this.lCorner4.style.top)-25+"px";
			this.lCorner4.style.left = parseInt(this.lCorner4.style.left)+25+"px";
			this.lCorner2.style.top = parseInt(this.lCorner2.style.top)+25+"px";
			this.lCorner2.style.left = parseInt(this.lCorner2.style.left)-25+"px";
			this.lCorner1.style.left = parseInt(this.lCorner1.style.left)-50+"px";
			this.position = "turnRight2";
		}
		return this;
	}
}

class RCorner {
	constructor(part1, part2, part3, part4, type, position) {
		this.rCorner1 = part1;
		this.rCorner2 = part2;
		this.rCorner3 = part3;
		this.rCorner4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(this.rCorner1, this.rCorner2, this.rCorner3, this.rCorner4);
	}
	fall(speed) {
		if(this.type === "rCorner" && this.rCorner4.style.top !=="425px" ) {
			if(this.rCorner1.style.top == "") {
				this.rCorner1.style.top = "-50px";
				this.rCorner1.style.left = "100px";
			}
				this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+speed+"px";
			if(this.rCorner2.style.top == "") {
				this.rCorner2.style.top = "-50px";
				this.rCorner2.style.left = "125px";
			}
				this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+speed+"px";
			if(this.rCorner3.style.top == "") {
				this.rCorner3.style.top = "-25px";
				this.rCorner3.style.left = "125px";
			}
				this.rCorner3.style.top = parseInt(this.rCorner3.style.top)+speed+"px";
			if(this.rCorner4.style.top == "") {
				this.rCorner4.style.top = "0px";
				this.rCorner4.style.left = "125px";
			}
				this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || (event.key === "ArrowLeft")) && (this.rCorner1.style.left !== "0px"
			&& this.rCorner2.style.left !== "0px" && this.rCorner4.style.left !== "0px")) {
			if(this.rCorner1.style.left == "") this.rCorner1.style.left = "100px";
				this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-25+"px";
			if(this.rCorner2.style.left == "") this.rCorner2.style.left = "125px";
				this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-25+"px";
			if(this.rCorner3.style.left == "") this.rCorner3.style.left = "125px";
				this.rCorner3.style.left = parseInt(this.rCorner3.style.left)-25+"px";
			if(this.rCorner4.style.left == "") this.rCorner4.style.left = "125px";
				this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if(((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight")) && (this.rCorner4.style.left !== "225px"
			&& this.rCorner1.style.left !== "225px" && this.rCorner2.style.left !== "225px")) {
			if(this.rCorner1.style.left == "") this.rCorner1.style.left = "100px";
				this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+25+"px";
			if(this.rCorner2.style.left == "") this.rCorner2.style.left = "125px";
				this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+25+"px";
			if(this.rCorner3.style.left == "") this.rCorner3.style.left = "125px";
				this.rCorner3.style.left = parseInt(this.rCorner3.style.left)+25+"px";
			if(this.rCorner4.style.left == "") this.rCorner4.style.left = "125px";
				this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+25+"px";
		} 
		return this;
	}
	turnLeft(event) {
		if(((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&& (this.position === "start" && this.rCorner3.style.left !== "225px")) {
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+50+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)-25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+25+"px";
			this.position = "turnLeft1";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnLeft1") {
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+25+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)-25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-50+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)-25+"px";
			this.position = "turnLeft2";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  
			&& ((this.position === "turnLeft2" || this.position === "turnRight2") 
			&& this.rCorner1.style.left !== "225px")) {
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+50+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)+25+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)+25+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+50+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+25+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)-25+"px";
			this.position = "turnLeft3";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnLeft3") {
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+25+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)-25+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)-50+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)-25+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  
			&& (this.position === "start" && this.rCorner3.style.left === "225px")) {
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)-25+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)-25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+25+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-50+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+50+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-25+"px";
			this.position = "turnRight3";
		} else if  (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&& ((this.position === "turnRight2" || this.position === "turnLeft2") && this.rCorner1.style.left === "225px")) {
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)-25+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+50+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)+25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-25+"px";
			this.position = "turnRight1";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnRight1") {
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+50+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)+25+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)-25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)-50+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)-25+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "turnRight3") {
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+50+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)-25+"px";
			this.position = "turnLeft2";
		}
		return this;
	}
	turnRight(event) {
		if(((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& (this.position === "start" && this.rCorner1.style.left !== "0px")) {
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-50+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)-25+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)+25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+50+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+25+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+25+"px";
			this.position = "turnRight1";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) &&  this.position === "turnRight1") {
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+25+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-25+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)-25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)-50+"px";
			this.position = "turnRight2";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& ((this.position === "turnRight2" || this.position === "turnLeft2") 
			&& this.rCorner3.style.left !== "0px" && this.rCorner1.style.left !== "0px")) {
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+25+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-50+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)-25+"px";
			this.position = "turnRight3";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))  &&  this.position === "turnRight3") {
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+25+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)-50+"px";			
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+50+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)-25+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)+25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& (this.position === "start" && this.rCorner1.style.left === "0px")) {
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)+50+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+25+"px";	
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)+50+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+25+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)+25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-25+"px";
			this.position = "turnLeft3";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&&  ((this.position === "turnRight2" || this.position === "turnLeft2") && this.rCorner3.style.left === "0px")) {
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)-25+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)+25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+25+"px";
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)+50+"px";
			this.position = "turnLeft1";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) &&  this.position === "turnLeft1") {
			this.rCorner4.style.left = parseInt(this.rCorner4.style.left)-25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)+25+"px";
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)-50+"px";	
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)+25+"px";
			this.rCorner2.style.top = parseInt(this.rCorner2.style.top)-25+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) &&  this.position === "turnLeft3") {
			this.rCorner1.style.top = parseInt(this.rCorner1.style.top)+25+"px";
			this.rCorner1.style.left = parseInt(this.rCorner1.style.left)-25+"px";
			this.rCorner2.style.left = parseInt(this.rCorner2.style.left)-50+"px";
			this.rCorner3.style.left = parseInt(this.rCorner3.style.left)-25+"px";
			this.rCorner3.style.top = parseInt(this.rCorner3.style.top)-25+"px";
			this.rCorner4.style.top = parseInt(this.rCorner4.style.top)-50+"px";
			this.position = "turnRight2";
		}
		return this;
	}
}

class TCorner {
	constructor(part1, part2, part3, part4, type, position) {
		this.tCorner1 = part1;
		this.tCorner2 = part2;
		this.tCorner3 = part3;
		this.tCorner4 = part4;
		this.type = type;
		this.position = position;
	}
	addFigure(selector) {
		document.querySelector(selector).append(
			this.tCorner1, this.tCorner2, this.tCorner3,this.tCorner4);
	}
	fall(speed) {
		if(this.type === "tCorner" && this.tCorner4.style.top !=="425px" 
			&& this.tCorner1.style.top !=="425px" && this.tCorner3.style.top !=="425px") {
			if(this.tCorner1.style.top == "") {
				this.tCorner1.style.top = "-25px";
				this.tCorner1.style.left = "125px";
			}
				this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+speed+"px";
			if(this.tCorner2.style.top == "") {
				this.tCorner2.style.top = "0px";
				this.tCorner2.style.left = "125px";
			}
				this.tCorner2.style.top = parseInt(this.tCorner2.style.top)+speed+"px";
			if(this.tCorner3.style.top == "") {
				this.tCorner3.style.top = "0px";
				this.tCorner3.style.left = "100px";
			}
				this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+speed+"px";
			if(this.tCorner4.style.top == "") {
				this.tCorner4.style.top = "0px";
				this.tCorner4.style.left = "150px";
			}
				this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+speed+"px";
		}
		return this;
	}
	moveLeft(event) {
		if(((event.type === "click" && event.target==buttons[3]) || (event.key === "ArrowLeft")) && (this.tCorner3.style.left !== "0px"
			&& this.tCorner4.style.left !== "0px" && this.tCorner1.style.left !== "0px")) {
			if(this.tCorner1.style.left == "") this.tCorner1.style.left = "125px";
				this.tCorner1.style.left = parseInt(this.tCorner1.style.left)-25+"px";
			if(this.tCorner2.style.left == "") this.tCorner2.style.left = "125px";
				this.tCorner2.style.left = parseInt(this.tCorner2.style.left)-25+"px";
			if(this.tCorner3.style.left == "") this.tCorner3.style.left = "100px";
				this.tCorner3.style.left = parseInt(this.tCorner3.style.left)-25+"px";
			if(this.tCorner4.style.left == "") this.tCorner4.style.left = "150px";
				this.tCorner4.style.left = parseInt(this.tCorner4.style.left)-25+"px";
		}
		return this;
	}
	moveRight(event) {
		if((event.type === "click" && event.target==buttons[6]) || (event.key === "ArrowRight" && this.tCorner4.style.left !== "225px"
			&& this.tCorner3.style.left !== "225px" && this.tCorner1.style.left !== "225px")) {
			if(this.tCorner1.style.left == "") this.tCorner1.style.left = "125px";
				this.tCorner1.style.left = parseInt(this.tCorner1.style.left)+25+"px";
			if(this.tCorner2.style.left == "") this.tCorner2.style.left = "125px";
				this.tCorner2.style.left = parseInt(this.tCorner2.style.left)+25+"px";
			if(this.tCorner3.style.left == "") this.tCorner3.style.left = "100px";
				this.tCorner3.style.left = parseInt(this.tCorner3.style.left)+25+"px";
			if(this.tCorner4.style.left == "") this.tCorner4.style.left = "150px";
				this.tCorner4.style.left = parseInt(this.tCorner4.style.left)+25+"px";
		} 
		return this;
	}
	turnLeft(event) {
		if(((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  &&  this.position === "start") {
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)-25+"px";
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)-25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)-25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+25+"px";
			this.position = "turnLeft1";			
		}  else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))  
			&& ((this.position === "turnLeft1" || this.position === "turnRight3")
			&& this.tCorner2.style.left !== "225px")) {
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)+25+"px";
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)-25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)-25+"px";
			this.position = "turnLeft2";		
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z")) 
			&&  (this.position === "turnLeft2" || this.position === "turnRight2")) {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)-25+"px";
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)+25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)+25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)-25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)-25+"px";
			this.position = "turnLeft3";		
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&& ((this.position === "turnLeft3" || this.position === "turnRight1") 
			&& this.tCorner2.style.left !== "0px")) {
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)-25+"px";
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)-25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)-25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)-25+"px";
			this.position = "start";		
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&& ((this.position === "turnLeft3" || this.position === "turnRight1") 
			&& this.tCorner2.style.left === "0px")) {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)-25+"px";
			this.tCorner2.style.left = parseInt(this.tCorner2.style.left)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)-25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)+50+"px";
			this.position = "start";
		} else if (((event.type === "click" && event.target==buttons[0]) || (event.key === "z"))
			&& ((this.position === "turnLeft1" || this.position === "turnRight3") 
			&& this.tCorner2.style.left === "225px")) {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+25+"px";
			this.tCorner2.style.left = parseInt(this.tCorner2.style.left)-25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)-25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)-50+"px";
			this.position = "turnRight2";
		}
		return this;
	}

	turnRight(event) {
		if(((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) &&  this.position === "start") {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+25+"px";
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)+25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)-25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)-25+"px";
			this.position = "turnRight1"
		}  else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& ((this.position === "turnRight1" || this.position === "turnLeft3") 
			&& this.tCorner2.style.left !== "0px")) {
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)-25+"px";
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)-25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)-25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)+25+"px";
			this.position = "turnRight2"
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& (this.position === "turnRight2" || this.position === "turnLeft2")) {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)-25+"px";
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)-25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)+25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)-25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)-25+"px";
			this.position = "turnRight3"
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& ((this.position === "turnRight3" || this.position === "turnLeft1")
			&& this.tCorner2.style.left !== "225px")) {
			this.tCorner1.style.left = parseInt(this.tCorner1.style.left)+25+"px";
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)-25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)-25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)-25+"px";
			this.tCorner4.style.left = parseInt(this.tCorner4.style.left)+25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+25+"px";
			this.position = "start"
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x")) 
			&& ((this.position === "turnRight3" || this.position === "turnLeft1")
			&& this.tCorner2.style.left === "225px")) {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)-25+"px";
			this.tCorner2.style.left = parseInt(this.tCorner2.style.left)-25+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)-25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)-50+"px";
			this.position = "start"
		} else if (((event.type === "click" && event.target==buttons[1]) || (event.key === "x"))
			&& ((this.position === "turnRight1" || this.position === "turnLeft3")
			&& this.tCorner2.style.left === "0px")) {
			this.tCorner1.style.top = parseInt(this.tCorner1.style.top)+25+"px";
			this.tCorner2.style.left = parseInt(this.tCorner2.style.left)+25+"px";
			this.tCorner3.style.top = parseInt(this.tCorner3.style.top)+25+"px";
			this.tCorner3.style.left = parseInt(this.tCorner3.style.left)+50+"px";
			this.tCorner4.style.top = parseInt(this.tCorner4.style.top)-25+"px";
			this.position = "turnRight2"
		}
		return this;
	}
}

class FigureBuilder {

	createFigure(value, array, position) {
		if (value>=0 && value <10) {
			return new Line(array[0], array[1], array[2], array[3], "line", position);
		} else if (value>=10 && value <20) {
			return new Square(array[0], array[1], array[2], array[3], "square", position);
		} else if (value>=20 && value <30) {
			return new LeftS(array[0], array[1], array[2], array[3], "leftS", position);
		} else if (value>=30 && value <40) {
			return new RightS(array[0], array[1], array[2], array[3], "rightS", position);
		} else if (value>=40 && value <50) {
			return new LCorner(array[0], array[1], array[2], array[3], "lCorner", position);
		} else if (value>=50 && value <60) {
			return new RCorner(array[0], array[1], array[2], array[3], "rCorner", position);
		} else if (value>=60 && value <70) {
			return new TCorner(array[0], array[1], array[2], array[3], "tCorner", position);
		} 
	}

	getFuncName(value) {
		if (value>=0 && value <10) {
			return movingLine();
		} else if (value>=10 && value <20) {
			return movingSquare();
		} else if (value>=20 && value <30) {
			return movingLeftS();
		} else if (value>=30 && value <40) {
			return movingRightS();
		} else if (value>=40 && value <50) {
			return movingLCorner();
		} else if (value>=50 && value <50) {
			return movingRCorner();
		} else if (value>=60 && value <70) {
			return movingTCorner();
		} 
	}
}

function copyFigure(selector) {
	const part1 = document.querySelector(selector[0]);
	const part2 = document.querySelector(selector[1]);
	const part3 = document.querySelector(selector[2]);
	const part4 = document.querySelector(selector[3]);
	let copy1 = part1.cloneNode(true);
	let copy2 = part2.cloneNode(true);
	let copy3 = part3.cloneNode(true);
	let copy4 = part4.cloneNode(true);
	return [copy1, copy2, copy3, copy4];
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function changeWorkFigure(selector, value, startPosY = 0, startPosX = 0) {
		const part1 = document.querySelector(selector[0]);
		const part2 = document.querySelector(selector[1]);
		const part3 = document.querySelector(selector[2]);
		const part4 = document.querySelector(selector[3]);
	if(value>=0 && value <10) {
		part1.style.top = -75+startPosY+"px";
		part1.style.left = 100+startPosX+"px";
		part2.style.top = -50+startPosY+"px";
		part2.style.left = 100+startPosX+"px";
		part3.style.top = -25+startPosY+"px";
		part3.style.left = 100+startPosX+"px";
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 100+startPosX+"px";
		part1.style.backgroundColor = "#F32";
		part2.style.backgroundColor = "#F32";
		part3.style.backgroundColor = "#F32";
		part4.style.backgroundColor = "#F32";
	} else if(value>=10 && value <20) {
		part1.style.top = -25+startPosY+"px";
		part1.style.left = 100+startPosX+"px";
		part2.style.top = 0+startPosY+"px";
		part2.style.left = 100+startPosX+"px";
		part3.style.top = -25+startPosY+"px";
		part3.style.left = 125+startPosX+"px";
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 125+startPosX+"px";
		part1.style.backgroundColor = "#23F";
		part2.style.backgroundColor = "#23F";
		part3.style.backgroundColor = "#23F";
		part4.style.backgroundColor = "#23F";
	} else if(value>=20 && value <30) {
		part1.style.top = -50+startPosY+"px";
		part1.style.left = 100+startPosX+"px";
		part2.style.top = -25+startPosY+"px";
		part2.style.left = 100+startPosX+"px";
		part3.style.top = -25+startPosY+"px";
		part3.style.left = 125+startPosX+"px";
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 125+startPosX+"px";
		part1.style.backgroundColor = "#0F0";
		part2.style.backgroundColor = "#0F0";
		part3.style.backgroundColor = "#0F0";
		part4.style.backgroundColor = "#0F0";
	} else if(value>=30 && value <40) {
		part1.style.top = -50+startPosY+"px";
		part1.style.left = 125+startPosX+"px";
		part2.style.top = -25+startPosY+"px";
		part2.style.left = 125+startPosX+"px";
		part3.style.top = -25+startPosY+"px";
		part3.style.left = 100+startPosX+"px";
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 100+startPosX+"px";
		part1.style.backgroundColor = "#F8F";
		part2.style.backgroundColor = "#F8F";
		part3.style.backgroundColor = "#F8F";
		part4.style.backgroundColor = "#F8F";
	} else if(value>=40 && value <50) {
		part1.style.top = -50+startPosY+"px";
		part1.style.left = 125+startPosX+"px";
		part2.style.top = -50+startPosY+"px";
		part2.style.left = 100+startPosX+"px";
		part3.style.top = -25+startPosY+"px";
		part3.style.left = 100+startPosX+"px";
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 100+startPosX+"px";
		part1.style.backgroundColor = "#FF0";
		part2.style.backgroundColor = "#FF0";
		part3.style.backgroundColor = "#FF0";
		part4.style.backgroundColor = "#FF0";
	} else if(value>=50 && value <60) {
		part2.style.top = -50+startPosY+"px";
		part2.style.left = 125+startPosX+"px";
		part1.style.top = -50+startPosY+"px";
		part1.style.left = 100+startPosX+"px";
		part3.style.top = -25+startPosY+"px";
		part3.style.left = 125+startPosX+"px";
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 125+startPosX+"px";
		part1.style.backgroundColor = "#F8F";
		part2.style.backgroundColor = "#F8F";
		part3.style.backgroundColor = "#F8F";
		part4.style.backgroundColor = "#F8F";
	} else if(value>=60 && value <70) {
		part4.style.top = 0+startPosY+"px";
		part4.style.left = 125+startPosX+"px";
		part3.style.top = 0+startPosY+"px";
		part3.style.left = 75+startPosX+"px";
		part1.style.top = -25+startPosY+"px";
		part1.style.left = 100+startPosX+"px";
		part2.style.top = 0+startPosY+"px";
		part2.style.left = 100+startPosX+"px";
		part1.style.backgroundColor = "#dbdde7";
		part2.style.backgroundColor = "#dbdde7";
		part3.style.backgroundColor = "#dbdde7";
		part4.style.backgroundColor = "#dbdde7";
	}
}

class MonoFigure {
	
	lines = new Map();
	topBorder = new Map();
	topValues = this.addTops();
	
	addTops() {
		const array = []
		for(let i = 0; i <= 425; i+=25) {
			array.push("T"+i+"px");
		}
		return array;
	}
	
	setTop(part) {
		const left = part.style.left;
		const top = part.style.top;
		if(this.topBorder.has(left)) {
			parseInt(top) < parseInt(this.topBorder.get(left)) ? this.topBorder.set(left, top) : false;
		} else {
			this.topBorder.set(left, top);
		}
		return this;
	}
	
	getTop(left) {
		if(this.topBorder.has(left)) {
			return this.topBorder.get(left)
		} else {
			return "450px";
		}
	}

	makeKey(part) {
		return "T"+part.style.top+":"+"L"+part.style.left;
	}
	
	addPart(part) {
		this.lines.set({coordinates:this.makeKey(part)}, part);
		return this;
	}
		
	checkLine() {
		
		for(const top of this.topValues) {
			let count = 0;
			//let keys = [];
			for(const key of this.lines.keys()) {
				if(key.coordinates.startsWith(top)) {
					// keys.push(key);
					count++;
				}
			}
			if(count === 10) {
				this.delLine(top);
				scoreCounter("line");
				winGame();
			}
		}
	}

	delLine(top) {
		for(const key of this.lines.keys()) {
			if(key.coordinates.startsWith(top)) {
				// keys.push(key);
				this.lines.get(key).style.backgroundColor = "#FFF";
				this.lines.get(key).remove();
				this.lines.delete(key);
			}
		}
		const horizont = parseInt(top.slice(1));
		for(const key of this.lines.keys()) {
			if(parseInt(key.coordinates.slice(1))<horizont) {
				this.lines.get(key).style.top = parseInt(this.lines.get(key).style.top)+25+"px";
				key.coordinates = this.makeKey(this.lines.get(key));
			}
		}
		for(let key of this.topBorder.keys()) {
			const field = document.querySelector(".field");
			const cssSelector = 'div[style*="left: '+key+'"]';
			const elements = field.querySelectorAll(cssSelector);
			let min = 450;
			for(const item of elements) {
				if(parseInt(item.style.top)<min) min = parseInt(item.style.top);
			}
			this.topBorder.set(key, min+"px");
		}
	}
}

function game(speed, delay, func, object, part) {
	let timerID = setTimeout(function drop() {
		object.fall(speed);
 		timerID = setTimeout(drop, delay);
		if(part.style.top ==="450px") {
			clearTimeout(timerID);
			const rand = getRandomInt(70);
			document.removeEventListener("keydown", func);
			return object;
		}
	}, delay);
}

function scoreCounter(type) {
	if(type === "figure") {
		score +=25;
		document.querySelector(".scoreCounter").textContent = score;
	} else if(type === "line") {
		score +=250;
		lineCounter++;
		document.querySelector(".scoreCounter").textContent = score;
		document.querySelector("p.lineCounter").textContent = lineCounter;
	}
}

function fasterFall(event) {
	if(event.type === "keydown" && event.key === "ArrowDown"
	  || event.type === "click" && event.target === buttons[5]) {
		time = 10;
	} else if(event.type === "keyup" && event.key === "ArrowDown"
	|| event.type === "click" && event.target === buttons[4]) {
		time = 10; 
		time = baseTime;
	}
}

function gameOver(part1, part2, part3, part4) {
	if((parseInt(part1.style.top)<0) || (parseInt(part2.style.top)<0)
	|| (parseInt(part3.style.top)<0) || (parseInt(part4.style.top)<0)) {
		document.querySelector(".message2").classList.remove("displayNone");
		return true;
	} 
	return false;
}

function winGame() {
	if(lineCounter === 30) {
		lineCounter = 0;
		startStop();
		document.querySelector(".message1").classList.remove("displayNone");
		increaseLevel();
		return true;
	}
	return false;
}

function increaseLevel() {
	const levelInfo = document.querySelector(".levelInfo");
	let value = parseInt(levelInfo.textContent.slice(6,8));
	value++;
	levelInfo.textContent = "Level: "+value;
	if(value<5) {
		time-=25;
		baseTime-=25;
	} else if(value<12) {
		time-=5;
		baseTime-=5;
	}
}

function startStop() {
	document.querySelector(".menu").classList.toggle("displayNone");
	if(!document.querySelector(".message1").classList.contains("displayNone")) {
		document.querySelector(".message1").classList.add("displayNone");
	}
	if(!document.querySelector(".message2").classList.contains("displayNone")) {
		document.querySelector(".message2").classList.add("displayNone");
		location.reload();
	}
	if(speed > 0) {
		speed = 0;
	} else {
		speed = 5;
	}
}

function toggleNext() {
	for(const item of topFigure) {
		item.classList.toggle("displayNone");
	}
}

function step(selectors, nextFigure) {
	const rand = getRandomInt(70);
	changeWorkFigure(selectors, rand);
	changeWorkFigure(nextFigure, rand, 75, -75);
	const items = copyFigure([".wbpart1", ".wbpart2", ".wbpart3", ".wbpart4"]);
	
	const bulder = new FigureBuilder();
	const figure = bulder.createFigure(rand, items, "start");
	figure.addFigure(".field");

	const moving = function (event) {
		figure.moveLeft(event).moveRight(event);
		figure.turnLeft(event).turnRight(event);
		fasterFall(event);
	}

	document.addEventListener("keydown", moving);
	document.addEventListener("keyup", fasterFall);
	buttons[0].addEventListener("click", moving);
	buttons[1].addEventListener("click", moving);
	buttons[3].addEventListener("click", moving);
	buttons[4].addEventListener("click", moving);
	buttons[5].addEventListener("click", moving);
	buttons[6].addEventListener("click", moving);
	const part1 = Object.keys(figure)[0];
	const part2 = Object.keys(figure)[1];
	const part3 = Object.keys(figure)[2];
	const part4 = Object.keys(figure)[3];
	// game(25, 600, moving,  figure, figure[part4]);
	new Promise(function(resolve, reject) {
		let timerID = setTimeout(function drop() {
		figure.fall(speed);
		const left1 = figure[part1].style.left;
		const left2 = figure[part2].style.left;
		const left3 = figure[part3].style.left;
		const left4 = figure[part4].style.left;
		let top1 = parseInt(figure[part1].style.top)+25+"px";
		let top2 = parseInt(figure[part2].style.top)+25+"px";
		let top3 = parseInt(figure[part3].style.top)+25+"px";
		let top4 = parseInt(figure[part4].style.top)+25+"px";
		timerID = setTimeout(drop, time);
		if(top1 === monoFigure.getTop(left1) ||top2 === monoFigure.getTop(left2) 
			|| top3 === monoFigure.getTop(left3) || top4 === monoFigure.getTop(left4)) {
			clearTimeout(timerID);
			scoreCounter("figure");
			// gameOver(figure[part1],figure[part2], figure[part3], figure[part4]);
			const rand = getRandomInt(70);
			document.removeEventListener("keydown", moving);
			document.removeEventListener("keyup", fasterFall);
			buttons[0].removeEventListener("click", moving);
			buttons[1].removeEventListener("click", moving);
			buttons[3].removeEventListener("click", moving);
			buttons[4].removeEventListener("click", moving);
			buttons[5].removeEventListener("click", moving);
			buttons[6].removeEventListener("click", moving);
			monoFigure.setTop(figure[part1]).setTop(figure[part2]).setTop(figure[part3]).setTop(figure[part4]);
			monoFigure.addPart(figure[part1]).addPart(figure[part2]).addPart(figure[part3]).addPart(figure[part4]);
			monoFigure.checkLine();
			resolve(figure);
		}
	}, time);
	}).then(function(result) {
		if(!gameOver(figure[part1],figure[part2], figure[part3], figure[part4])) {
			step(selectors, nextFigure);
		}
	});
}
	const selectors = [".wbpart1", ".wbpart2", ".wbpart3", ".wbpart4",];
	const nextFigure = [".nextFigureP1", ".nextFigureP2", ".nextFigureP3", ".nextFigureP4"];
	const monoFigure = new MonoFigure();
	let speed = 5;
	let time = 125;
	let baseTime = 125;
	let score = 0;
	let lineCounter = 0;
	const buttons = document.querySelectorAll("button");
	const topFigure = document.querySelectorAll("div.gameSpace>.figurePart");
	
	document.querySelector(".SP").addEventListener("click", ()=>{
		document.querySelector(".menu").classList.toggle("displayNone");
		document.querySelector(".SP").classList.toggle("displayNone");
		toggleNext();
		step(selectors, nextFigure);
	});

	buttons[2].addEventListener("click", startStop);
	
	document.querySelector(".WY").addEventListener("click", ()=>{
		startStop();
	});
	
	
