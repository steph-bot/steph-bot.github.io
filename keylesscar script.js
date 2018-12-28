// select elements we are interested in, cache them
// we want to select button
var button = document.getElementById("enter");


// function declaration
function checkDriverAge(){
	var age = Number(prompt("What is your age?"));
	if(age < 18){
		alert("Too young!");
	} else if (age > 18) {
		alert("You may drive.");
	} else if (age === 18) {
		alert("Happy 18th birthday! You may drive :)");
	}
}


// click button >> if anyone clicks btn, run this fnxn
button.addEventListener("click", checkDriverAge);

