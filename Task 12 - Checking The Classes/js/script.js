var paragraph = document.getElementById("p"),

	textInput = document.getElementById("inputText"),

	resultDiv = document.getElementById("result"),

	error	  = document.getElementById("h2");

function check() {

	if (textInput.value.length >= 10) {

		error.textContent =

		"Your Check Must Be Lower Than " +

		(textInput.value.length - 9) + " Character !";

		resultDiv.textContent = "";

	} else if (textInput.value == "") {

		error.textContent = "You Need To Type Your Check !"

		resultDiv.textContent = "";

	} else if (textInput.value == "Par1") {

		error.textContent = "That's Right! <p> Have Class Called \"Par1\"";

		resultDiv.textContent = "Par1";

	} else if (textInput.value == "Par2") {

		error.textContent = "That's Right! <p> Have Class Called \"Par2\"";

		resultDiv.textContent = "Par2";

	} else if (textInput.value == "Par3") {

		error.textContent = "That's Right! <p> Have Class Called \"Par3\"";

		resultDiv.textContent = "Par3";

	} else if (textInput.value != paragraph.classList.item(0)) {

		error.textContent = "Wrong !";

		resultDiv.textContent = "";

	}

}