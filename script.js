var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(color1);
console.log(color2);
console.log(body);

//For GRadient Background
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient();
color1.addEventListener("hover",setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// For Todo List
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

