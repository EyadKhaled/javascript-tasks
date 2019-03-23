var hours		= document.getElementById("inputHours"),

	minutes		= document.getElementById("inputMins"),

	seconds 	= document.getElementById("inputSecs"),

	genButton	= document.querySelector("Button"),

	error 		= document.getElementById("error"),

	sections    = document.querySelectorAll("section"),

	myMainDiv   = document.getElementById("mainDiv"),

	everySecond;

genButton.onclick = function () {

	'use strict';

	if (hours.value > 12 || hours.value < 0 || hours.value == "") {

		error.innerHTML = "Hours must be from 0 to 12";
	
	} else if (minutes.value > 59 || minutes.value < 0 || minutes.value == "") {

		error.innerHTML = "Minutes must be from 0 to 59";

	} else if (seconds.value > 59 || seconds.value < 0 || seconds.value == "") {

		error.innerHTML = "Seconds must be from 0 to 59";

	} else {

		var countMain = setInterval(function () {

			'use strict';

			everySecond();

		}, 1000);

		sections[0].style.display = "none";

		sections[1].style.display = "block";

		myMainDiv.innerHTML = "00 : 00 : 00";

	}

};	

function everySecond() {

	'use strict';

	if (seconds.value < 10) {

		seconds.value = "0" + Number(seconds.value);

	}

	if (minutes.value < 10) {

		minutes.value = "0" + Number(minutes.value);

	}

	if (hours.value < 10) {

		hours.value = "0" + Number(hours.value);

	}
	
	myMainDiv.innerHTML =

	hours.value + " : " + minutes.value + " : " + seconds.value;
	
	if (seconds.value > 0) {

		seconds.value = seconds.value - 1;

	} else if (seconds.value == 0 && minutes.value > 0) {

		minutes.value = minutes.value - 1;

		seconds.value = 59;
	
	} else if (minutes.value == 1 && hours.value == 0) {

		seconds.value = 59;

		minutes.value = 0;
	
	} else if (minutes.value == 1 && seconds.value == 0) {

		hours.value = hours.value - 1;

		seconds.value = 59;

		minutes.value = 59;
	

	} else if (seconds.value == 0 && minutes.value == 0 && hours.value >= 1) {

		seconds.value = 59;

		minutes.value = 59;

		hours.value = hours.value - 1;

	} else if (seconds.value == 0 && minutes.value == 0 && hours.value == 0) {

		clearInterval(everySecond);

		myMainDiv.innerHTML = "Time's Up..!";

	}
}