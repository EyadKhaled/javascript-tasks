var headerCounter = document.querySelector("h3"),

	myButton = document.querySelector("button"),

	myInput = document.querySelector("input"),

	myResult = document.getElementById("result"),

	word1 = document.getElementById("theWord"),

	word2 = document.querySelector("p");

function tryAgainBtn() {

	'use strict';

	start();

	myInput.style.display = "block";
  
    myInput.value = "";

    myInput.focus();

	document.querySelectorAll("hr")[1].style.display = "block";
  
   	myResult.textContent = "";

}

function start() {

	'use strict';

	myInput.value = "";

	myInput.removeAttribute("readonly");

	myInput.placeholder = "Type here..";

	myInput.focus();
	
	myButton.style.display = "none";

	word1.style.display = "none";

	word2.style.display = "none";

	headerCounter.textContent = 5;

	var gameCounter = setInterval(function () {

		if (headerCounter.textContent <= 1) {

			clearInterval(gameCounter);

			headerCounter.textContent = "";

		} else {

			headerCounter.textContent = headerCounter.textContent - 1;

		}

	}, 1000);

	function gameLost() {

		'use strict';

		myResult.innerHTML =

		"<span style=\"color: #F44336\">" + "You Lost!" + "</span>" +
		"<a onclick=\"tryAgainBtn()\">" + "Try Again?" + "</a>";

		myInput.style.display = "none";

		document.querySelectorAll("hr")[1].style.display = "none";

		clearInterval(gameCounter);
		headerCounter.textContent = "";

	}
	
	var gameTime = setTimeout(gameLost, 5000);

	myInput.oninput = function () {

		'use strict';

		if (myInput.value == "I love html and css and javascript") {

			var score = 5 - headerCounter.textContent;

			myResult.innerHTML =

			"<span style=\"color: #4CAF50\">" + "You Won!" + "</span>" +
			"<a onclick=\"tryAgainBtn()\">" + "Try Again?" + "</a>" +
			"<h4>Time: " + score + " Seconds</h4>";

			myInput.style.display = "none";

			clearTimeout(gameTime);

			document.querySelectorAll("hr")[1].style.display = "none";

			clearInterval(gameCounter);
			headerCounter.textContent = "";

		}
	}
};