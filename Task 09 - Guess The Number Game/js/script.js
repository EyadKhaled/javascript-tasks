var randomNumber = Math.random(),

	result = Math.floor(randomNumber * 10) + 1,

	playerNumber = document.getElementById("input"),

	btn = document.querySelector("button"),

	msg = document.getElementById("message"),

	cheatingMain = document.getElementById("cheatMain");


function start() {

	'use strict';

	if (isNaN(playerNumber.value) ||
		playerNumber.value <= 0 ||
		playerNumber.value > 10) {

		msg.innerHTML = "You must type a number from 1 to 10";

	} else if (playerNumber.value == result) {

		msg.innerHTML =

		"<span style=\"color: #4CAF50\">" + "You Won!" + "<span>" + " " +
		"<a onclick=\"again()\" id=\"again\">" + "Try Again?" + "</a>";

		playerNumber.style.display = "none";
		btn.style.display = "none";

	} else {

		msg.innerHTML =

		"<span style=\"color: #F44336\">" + "You Lost!" + "<span>" + " " +
		"<a onclick=\"again()\" id=\"again\">" + "Try Again?" + "</a>";

		playerNumber.style.display = "none";
		btn.style.display = "none";
	}
}

function again() {

	'use strict';

	var randomNumberX2;

	playerNumber.style.display = "block";

	btn.style.display = "inline";

	playerNumber.value = "";

	msg.textContent = "";

	cheatMain.innerHTML =

	"Want to Cheat? " +
	"<a id=\"cheat\" onclick=\"cheating()\">Click Me</a>";

	return randomNumberX2 = Math.random(),

	result = Math.floor(randomNumberX2 * 10) + 1;

}

function cheating() {

	'use strict';

	cheatingMain.innerHTML = result;
}