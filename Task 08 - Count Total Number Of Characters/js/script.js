var theArea = document.getElementById("textarea"),

    count = document.getElementById("total"),

    checkInput = document.getElementById("inputCheck");

theArea.oninput = function () {

    count.innerHTML = theArea.value.length;

}

function check() {

	if (checkInput.checked == true) {

		theArea.removeAttribute("maxlength");

	} else if (checkInput.checked == false) {

		theArea.setAttribute("maxlength", "500");

	}
}
