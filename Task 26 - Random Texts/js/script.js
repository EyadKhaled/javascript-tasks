var txtList = [ // The list of texts
	"Life is good",
	"Math 4 ever",
	"Programming = No life",
	"!Arrays starts at 1",
	"HelloWorld",
	"Robots can kill you",
	"Coffee",
	"Google it",
	"Hello from 2030",
	"I see you",
	"Anime is not for kids",
	"Tttt",
	"#4CAF50",
	"Random List",
	"Hello from sublime text",
	"I'm not responsive"
	],

	randomTxt = Math.floor(Math.random() * txtList.length); // Random number 

// The first random text
document.querySelector("h2").textContent = txtList[randomTxt];	

// after loading the page
window.onload = function () {

	// change the text by getting a new random number every 3 seconds
	setInterval(function () {
		var randomTxt = Math.floor(Math.random() * txtList.length);
		
		document.querySelector("h2").textContent = txtList[randomTxt];

		document.querySelector("h2").style.transform = "scale(1)"; // Default
	}, 3000);
}

// Hover on footer
document.querySelector("footer").onmouseover = function () {

	'use strict';

	document.getElementById("myPic").style.opacity = "0";
	document.getElementById("myPic").style.transform = "scale(.5)";
	document.querySelector("span").style.opacity = "1";

};

//  None-hover on footer
document.querySelector("footer").onmouseleave = function () {

	'use strict';

	document.getElementById("myPic").style.opacity = "1";
	document.getElementById("myPic").style.transform = "scale(1)";
	document.querySelector("span").style.opacity = "0";

};