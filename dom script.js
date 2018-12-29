// select elements we are interested in, cache them
// we want to select user input, button, list
var button = document.getElementById("enter"); // add to list btn
var input = document.getElementById("userinput"); // text field
var ul = document.querySelectorAll("ul")[1]; // shopping list
var crazybtn = document.getElementById("crazystyle"); // plain btn
var funBtn = document.getElementById("addStyle"); // fun btn
var toggleBtn = document.getElementById("toggle"); // toggle btn
var h1 = document.querySelector("h1"); // shopping list title
var delBtn = document.getElementsByClassName("deleter"); // delete btns

// refactored code (cleaned up)
// function declarations

// moves cursor to back to input box
function cursor(){
	input.focus();
	input.select();
}

// deletes list item when delete btn clicked
var deleteItem = function(event) {
	// console.log(event.target);
	event.target.parentNode.remove();
	cursor();
}

for (var i=0; i < delBtn.length; i++){
    // console.log(delBtn[i]);
    delBtn[i].addEventListener("click", deleteItem);
    cursor();
}

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
	// assign class to new btn
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

		// adds new buttons to eventlistener
		for (var i=0; i < delBtn.length; i++){
			delBtn[i].addEventListener("click", deleteItem);
			cursor();
		}
	}
}

function addListAfterKeypress(event){ // still need event param here
	//console.log(event);

	// user input not blank AND press enter key >> create new items
	if (inputLength() > 0 && event.keyCode ===13){ 
		createListElement();

		// adds new buttons to eventlistener
		for (var i=0; i < delBtn.length; i++){
			delBtn[i].addEventListener("click", deleteItem);
		}
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




// FUNCTION CALLS AND EVENT DECLARATIONS


// click button >> if anyone clicks btn, add new list itm
button.addEventListener("click", addListAfterClick);

// press enter >> if press enter, run this fnxn to add new list itm
input.addEventListener("keypress", addListAfterKeypress);

// PLAY WITH SHOPPING LIST TITLE
// click button >> if anyone clicks btn, run this fnxn
crazybtn.addEventListener("click", makeTitlePlain);
funBtn.addEventListener("click", makeTitleFun);
toggleBtn.addEventListener("click", makeTitleToggle);




// KNOWN GLITCH: CANT CLICK WITHIN TEXT FIELD OR ADD ITEM
// BUTTON SOMETIMES. MAY HAVE TO DO WITH COOLTITLE STYLE
// ON H1.

