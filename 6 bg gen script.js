// cache selectors

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizer1 = document.getElementsByClassName("randomizer")[0];
var randomizer2 = document.getElementsByClassName("randomizer")[1];


// function declarations

// sets bg gradient to input colors
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// generates a random hex color
function randomHex() {
	newHex = '#' + (function co(lor){   return (lor +=
		[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
		&& (lor.length == 6) ?  lor : co(lor); })('');
}

// set bg gradient 1 color
function firstColor() {
	randomHex();
	color1.value = newHex;
	setGradient();
}

// set bg gradient 2 color
function secondColor() {
	randomHex();
	color2.value = newHex;
	setGradient();
}


// event listeners & function calls
setGradient(); // set bg to initial colors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomizer1.addEventListener("click", firstColor);
randomizer2.addEventListener("click", secondColor);


// pretty colors:
// #FFA7C0
// #F8EFFF

// <input class = "color1" type="color" name="color1" value="#B8FDFF">
	// <input class = "color2" type="color" name="color2" value="#FF3AEC">