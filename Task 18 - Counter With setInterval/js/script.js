var CounterMain = document.querySelector("div"),

	myTimeDown;

function countDown() {

	'use strict';

	if (CounterMain.textContent >= 1430) {

		clearInterval(myTimeDown);

	} else {

		CounterMain.textContent++;

	}

}

var myTimeDown = setInterval(countDown, 2);