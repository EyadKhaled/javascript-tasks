var inputColor = document.getElementById("colorInput"),

	inputText  = document.getElementById("textInput"),

	inputCheck = document.getElementById("checkInput"),

	myDiv 	   = document.getElementById("text");

function customButton() {

	myDiv.style.color = inputColor.value;

	myDiv.textContent = inputText.value;

	if (inputCheck.checked == true) {

		myDiv.style.background = "#555";

	} else if (inputCheck.checked == false) {

		myDiv.style.background = "none";

	}

}