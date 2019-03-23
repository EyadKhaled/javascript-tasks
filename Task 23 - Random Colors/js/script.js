var myMain = document.querySelector("section"),

	myTextCode = document.querySelector("div"),

	myColors = [
		"#008CBA",
		"#4CAF50",
		"#D2691E",
		"#2E4A62",
		"#F3D6E4",
		"#DC4C46",
		"#898E8C",
		"#95DEE3",
		"#CE3175",
		"#F0F0F0",
		"#9E4624",
		"#B18F6A",
		"#009B77",
		"#5B5EA6",
		"#E15D44",
		"#C3447A",
		"#BC243C",
		"#EFC050",
		"#F44336"
	];

function colorChange() {

	'use strict'

	setInterval(function () {

		var randomColor = Math.floor(Math.random() * myColors.length);

		console.log(randomColor);

		myMain.style.background = myColors[randomColor];

		myTextCode.textContent = myColors[randomColor];

	}, 3000);

};

colorChange();	
