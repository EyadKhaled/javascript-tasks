var myInput = document.getElementById('input'),

    myDiv = document.getElementById('div'),

    myCountry = document.getElementById("myCountry");

myCountry.onchange = function () {

	myInput.removeAttribute("disabled");

	myInput.onkeyup = function () {

		myDiv.innerHTML = myInput.value * myCountry.value;
	}
}