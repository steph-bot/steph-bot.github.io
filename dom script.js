// select elements we are interested in, cache them
// we want to select user input, button, list
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelectorAll("ul")[1]
var crazybtn = document.getElementById("crazystyle");
var funBtn = document.getElementById("addStyle");
var toggleBtn = document.getElementById("toggle");
var h1 = document.querySelector("h1");

// refactored code (cleaned up)
// function declarations
function inputLength (){
	return input.value.length;
}

function createListElement(){
	// create list element
	var li = document.createElement("li");
	// add text to list element (user input)
	li.appendChild(document.createTextNode(input.value));

	// create button element
	var newButton = document.createElement("BUTTON");
	// create text node (create button text)
	var t = document.createTextNode("delete");
	// Append the text to <button> (allows button to have text)
	newButton.appendChild(t); 

	newButton.classList.add("deleter");





	// append button to list element
	li.appendChild(newButton);


	// append li to unordered list
	ul.appendChild(li);

	// reset form to blank value
	input.value="";
}

function addListAfterClick(){
	if (inputLength() > 0){ // user input not blank
		createListElement();
		// use these 2 to have cursor automatically within input box
		input.focus();
		input.select();
	}
}

function addListAfterKeypress(event){ // still need event param here
	//console.log(event);

	// user input not blank AND press enter key
	if (inputLength() > 0 && event.keyCode ===13){ 
		createListElement();
	}
}

function makeTitlePlain(){
	h1.classList.remove("coolTitle");
}

function makeTitleFun(){
	h1.classList.add("coolTitle");
}

function makeTitleToggle(){
	h1.classList.toggle("coolTitle");
}

// use these 2 to have cursor automatically within input box
input.focus();
input.select();

// click button >> if anyone clicks btn, run this fnxn
button.addEventListener("click", addListAfterClick);

// press enter >> if press enter, run this fnxn
input.addEventListener("keypress", addListAfterKeypress);

// click button >> if anyone clicks btn, run this fnxn
crazybtn.addEventListener("click", makeTitlePlain);
funBtn.addEventListener("click", makeTitleFun);
toggleBtn.addEventListener("click", makeTitleToggle);



// KNOWN GLITCH: CANT CLICK WITHIN TEXT FIELD OR ADD ITEM
// BUTTON SOMETIMES. MAY HAVE TO DO WITH COOLTITLE STYLE
// ON H1.

