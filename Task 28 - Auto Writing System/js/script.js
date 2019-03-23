var wordsList = "Hello and welcome.",

	i = 0,

	mainElement = document.querySelector("h2");

window.onload = function () {

	'use strict';

	var autoWriting = setInterval(function () {

		'use strict';

		mainElement.textContent += wordsList[i];

		i = i + 1;

		if (i > wordsList.length - 1) {

			clearInterval(autoWriting);

			mainElement.innerHTML = mainElement.textContent +
			" <i class=\"fas fa-heart\"></i>";
		}

	}, 300)

};