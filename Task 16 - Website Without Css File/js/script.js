/* Start Execute HTML Elements */

var i,
	container 		= document.getElementsByClassName('container'),
	header 	  		= document.querySelector('header'),
	headerH1 		= container[0].firstElementChild,
	headerButton	= container[0].lastElementChild,
	navMain			= document.querySelector('nav'),
	logo 			= document.getElementById('logo'),
	anchors 		= container[1].lastElementChild,
	anchorsLi		= document.getElementsByTagName('li'),
	sectionH1 		= container[2].firstElementChild,
	sectionAbout	= document.getElementsByClassName('about'),
	skillsMain 		= document.getElementById('skills'),
	skillsLeft 		= document.getElementById('skills-left'),
	skillsRight 	= document.getElementById('skills-right'),
	progressPar		= document.getElementsByClassName('progress-par'),
	contactMain		= document.getElementById('contact-me'),
	contactLeft 	= document.getElementById('contact-left'),
	contactRight 	= document.getElementById('contact-right'),
	textArea 		= document.querySelector('textarea'),
	footer			= document.querySelector('footer'),
	social 			= document.getElementsByClassName('fab');

/* End Execute HTML Elements */

/* Start Style HTML Elements */

// Body
document.body.style.backgroundColor = "#FAFAFA";
document.body.style.margin 			= "0px";
document.body.style.padding 		= "0px";
document.body.style.fontFamily 		= "sans-serif,arial";

// Container Class
for (i = 0;i <= 5;i = i + 1) {
	container[i].style.width 	= "1170px";
	container[i].style.margin 	= "auto";
}

// Header
header.style.height 			= "600px";
header.style.backgroundImage 	= "url(\"images/background2.jpeg\")";
header.style.backgroundSize 	= "cover";
header.style.display 			= "flex";
header.style.justifyContent 	= "center";
header.style.alignItems 		= "center";

// Header ==> Div
container[0].style.color 		= "#FFF";
container[0].style.fontFamily 	= "sans-serif,arial";
container[0].style.textAlign 	= "center";
container[0].style.fontWeight 	= "bold";

// Header ==> H1
headerH1.style.padding		= "10px";
headerH1.style.fontSize   	= "2.5em";
headerH1.style.borderTop  	= "5px solid #FFF";
headerH1.style.borderBottom = "5px solid #FFF";
headerH1.style.width 		= "400px";
headerH1.style.margin 		= "30px auto";

// Header ==> Button
headerButton.style.background 	= "none";
headerButton.style.padding 		= "10px 20px";
headerButton.style.border 		= "2px solid #FFF";
headerButton.style.color 		= "#FFF";
headerButton.style.fontSize 	= "20px";
headerButton.style.fontWeight 	= "bold";
headerButton.style.cursor 		= "pointer";
headerButton.style.transition 	= "all .5s ease-in-out";

headerButton.onmouseover = function () {
	container[0].lastElementChild.style.backgroundColor = "#CCC";
	container[0].lastElementChild.style.color 			= "#000";
}
headerButton.onmouseleave = function () {
	container[0].lastElementChild.style.background 	= "none";
	container[0].lastElementChild.style.color 		= "#FFF";
}

// Nav
navMain.style.backgroundColor 	= "#252e30";
navMain.style.overflow 			= "hidden";
navMain.style.padding			= "10px";

// Nav ==> Logo
logo.style.float 			= "left";
logo.style.color 			= "#FFF";
logo.style.fontSize 		= "25px";
logo.style.lineHeight 		= "45px";
logo.style.marginLeft 		= "20px";
logo.style.textTransform 	= "uppercase";
logo.style.fontWeight 		= "bold";

logo.firstElementChild.style.color = "#4CAF50";

// Nav ==> Ul
anchors.style.listStyleType = "none";
anchors.style.float 		= "right";

// Nav ==> Ul == Li
for (i = 0;i < anchorsLi.length;i = i + 1) {
anchorsLi[i].style.display 		= "inline-block";
anchorsLi[i].style.color 		= "#FFF";
anchorsLi[i].style.fontSize 	= "16px";
anchorsLi[i].style.paddingLeft 	= "20px";
anchorsLi[i].style.cursor 		= "pointer";
anchorsLi[i].style.transition 	= "all .5s ease-in-out";
}
// Scroll : nav ul li:hover {color: #4CAF50;transform: scale(1.1, 1.1);}

// Section ==> H1
sectionH1.style.color 			= "#008CBA";
sectionH1.style.fontSize 		= "28px";
sectionH1.style.margin 			= "40px 0 60px 30px";

// Section ==> About
for (i = 0;i < sectionAbout.length;i = i + 1) {
	sectionAbout[i].style.display 		= "inline-block";
	sectionAbout[i].style.width  	 	= "200px";
	sectionAbout[i].style.marginLeft 	= "70px";
	sectionAbout[i].style.textAlign  	= "center";

	// About ==> I
	sectionAbout[i].firstElementChild.style.fontSize = "25px";

	//About ==> P
	sectionAbout[i].lastElementChild.style.color 			= "#555";
	sectionAbout[i].lastElementChild.style.letterSpacing 	= ".4px";
}

// About ==> I 
sectionAbout[0].firstElementChild.style.color = "#2B87D3";
sectionAbout[1].firstElementChild.style.color = "#555";
sectionAbout[2].firstElementChild.style.color = "#4CAF50";
sectionAbout[3].firstElementChild.style.color = "#2ecc71";

// Skills
skills.style.height 			= "400px";
skills.style.backgroundColor 	= "#EEE";
skills.style.marginTop 			= "80px";
skills.style.boxSizing 			= "border-box";

// Skills ==> Skills Left
skillsLeft.style.paddingLeft 	= "30px";
skillsLeft.style.width 			= "50%";
skillsLeft.style.float			= "left";

// Skills Left ==> H1
skillsLeft.firstElementChild.style.color 	= "#4CAF50";
skillsLeft.firstElementChild.style.fontSize = "28px";
skillsLeft.firstElementChild.style.padding 	= "40px 0 5px 0";

// Skills Left ==> p
skillsLeft.children[1].style.marginTop 		= "40px";
skillsLeft.children[1].style.color 			= "#555";
skillsLeft.children[1].style.letterSpacing 	= ".4px";
skillsLeft.children[2].style.marginTop 		= "40px";
skillsLeft.children[2].style.color 			= "#555";
skillsLeft.children[2].style.letterSpacing 	= ".4px";

// Skills Left ==> Button
skillsLeft.lastElementChild.style.background 	= "none";
skillsLeft.lastElementChild.style.padding 		= "10px";
skillsLeft.lastElementChild.style.border 		= "2px solid #4CAF50";
skillsLeft.lastElementChild.style.color 		= "#4CAF50";
skillsLeft.lastElementChild.style.fontSize 		= "20px";
skillsLeft.lastElementChild.style.fontWeight 	= "bold";
skillsLeft.lastElementChild.style.cursor 		= "pointer";
skillsLeft.lastElementChild.style.margin 		= "20px 0 0 3em";
skillsLeft.lastElementChild.style.textTransform = "uppercase";
skillsLeft.lastElementChild.style.transition 	= "all .5s ease-in-out";

skillsLeft.lastElementChild.onmouseover = function () {
	skillsLeft.lastElementChild.style.backgroundColor 	= "#4CAF50";
	skillsLeft.lastElementChild.style.color 			= "#FFF";
}
skillsLeft.lastElementChild.onmouseleave = function () {
	skillsLeft.lastElementChild.style.background 	= "none";
	skillsLeft.lastElementChild.style.color 		= "#4CAF50";
}

// Skills Right
skillsRight.style.width 	= "40%";
skillsRight.style.float 	= "left";
skillsRight.style.padding 	= "50px 0 0 60px";

// Skills Right ==> P
for (i = 0;i < skillsRight.querySelectorAll('p').length;i = i + 1) {
	skillsRight.querySelectorAll('p')[i].style.color = "#333";
	skillsRight.querySelectorAll('p')[i].style.letterSpacing = ".5px";
	skillsRight.querySelectorAll('p')[i].style.fontWeight = "bold";
	skillsRight.querySelectorAll('p')[i].style.textTransform = "uppercase";
}

// Skills Right ==> Progress Par
for (i = 0;i < 4;i = i + 1) {
	progressPar[i].style.width 			= "100%";
	progressPar[i].style.height 			= "25px";
	progressPar[i].style.backgroundColor 	= "#FAFAFA";
	progressPar[i].style.marginBottom 		= "15px";
}

// Skills Right ==> Progress Par ==> Progress Child
for (i = 0;i < 4;i = i + 1) {
	progressPar[i].firstElementChild.style.height = "100%";
	progressPar[i].firstElementChild.style.backgroundColor = "#2ecc71";
	progressPar[i].firstElementChild.style.color = "#FFF";
	progressPar[i].firstElementChild.style.textAlign = "right";
	progressPar[i].firstElementChild.style.lineHeight = "25px";
	progressPar[i].firstElementChild.style.fontWeight = "bold";
}

// Contact
contactMain.style.backgroundColor 	= "#252e30";
contactMain.style.overflow 			= "hidden";

// Contact ==> Container
contactMain.firstElementChild.style.display = "flex";

// Contact ==> Contact Left
contactLeft.style.width 	= "50%";
contactLeft.style.padding 	= "45px 0 0 40px";

// Contact Left ==> H1
contactLeft.firstElementChild.style.color = "#FFF";

// Contact Left ==> P
contactLeft.children[1].style.color 		= "#546e71";
contactLeft.children[1].style.lineHeight 	= "1.6";

// Contact Left ==> Span
for (i = 0;i < contactLeft.querySelectorAll('span').length;i = i + 1) {
	contactLeft.querySelectorAll('span')[i].style.color 		= "#546e71";
	contactLeft.querySelectorAll('span')[i].style.display 		= "block";
	contactLeft.querySelectorAll('span')[i].style.paddingBottom = "10px";
}

contactLeft.querySelectorAll('span')[2].style.paddingBottom = "20px";

contactLeft.querySelectorAll('strong')[0].style.color = "#d1d6da";
contactLeft.querySelectorAll('strong')[1].style.color = "#d1d6da";

// Contact ==> Contact Right
contactRight.style.width 	= "42%";
contactRight.style.padding 	= "75px 0 0 45px";

// Contact Right ==> Label
for (i = 0;i < contactRight.querySelectorAll('label').length;i = i + 1) {
	contactRight.querySelectorAll('label')[i].style.color 			= "#d1d6da";
	contactRight.querySelectorAll('label')[i].style.display 		= "block";
	contactRight.querySelectorAll('label')[i].style.paddingBottom 	= "10px";
}

// Contact Right ==> Input
for (i = 0;i < contactRight.querySelectorAll('input').length;i = i + 1) {
	contactRight.querySelectorAll('input')[i].style.width 			= "100%";
	contactRight.querySelectorAll('input')[i].style.backgroundColor = "#4B5557";
	contactRight.querySelectorAll('input')[i].style.color 			= "#F0F0F0";
	contactRight.querySelectorAll('input')[i].style.height 			= "30px";
	contactRight.querySelectorAll('input')[i].style.border 			= "none";
	contactRight.querySelectorAll('input')[i].style.marginBottom 	= "30px";
	contactRight.querySelectorAll('input')[i].style.padding 		= "10px";
	contactRight.querySelectorAll('input')[i].style.fontSize 		= "18px";
}

// Contact Right ==> Text Area
textArea.style.width 			= "100%";
textArea.style.backgroundColor 	= "#4B5557";
textArea.style.color 			= "#F0F0F0";
textArea.style.border 			= "none";
textArea.style.height 			= "200px";
textArea.style.resize 			= "none";
textArea.style.padding 			= "10px";
textArea.style.marginBottom 	= "20px";
textArea.style.fontSize 		= "18px";
textArea.style.fontFamily 		= "sans-serif,arial";

// Contact Right ==> Button
contactRight.lastElementChild.style.marginBottom 	= "50px";
contactRight.lastElementChild.style.padding 		= "10px 30px"; 
contactRight.lastElementChild.style.fontSize 		= "18px";
contactRight.lastElementChild.style.backgroundColor = "#191F21";
contactRight.lastElementChild.style.color 			= "#FFF";
contactRight.lastElementChild.style.border 			= "1px solid #191F21";
contactRight.lastElementChild.style.cursor 			= "pointer";
contactRight.lastElementChild.style.transition 		= "all .5s ease-in-out";
contactRight.lastElementChild.style.fontWeight 		= "bold";

contactRight.lastElementChild.onmouseover = function () {
	contactRight.lastElementChild.style.backgroundColor = "#EEE";
	contactRight.lastElementChild.style.color 			= "#555";
}
contactRight.lastElementChild.onmouseleave = function () {
	contactRight.lastElementChild.style.backgroundColor 	= "#191F21";
	contactRight.lastElementChild.style.color 		= "#FFF";
}

// Footer
footer.style.backgroundColor 	= "#191F21";
footer.style.width				= "100%";
footer.style.overflow 			= "hidden";
footer.style.textAlign 			= "center";

// Footer ==> P
container[5].firstElementChild.style.color = "#506e71";
container[5].firstElementChild.style.float = "left";

// Footer ==> I (Social)
for (i = 0;i < 5;i = i + 1) {
	social[i].style.color 			= "#191F21";
	social[i].style.backgroundColor = "#6a6e71";
	social[i].style.width 			= "24px";
	social[i].style.height 			= "24px";
	social[i].style.borderRadius 	= "50%";
	social[i].style.cursor			= "pointer";
	social[i].style.float 			= "right";
	social[i].style.lineHeight 		= "24px";
	social[i].style.margin 			= "15px 5px 0 0";
}
		

// Footer ==> I (Heart)
container[5].getElementsByClassName('fas')[0].style.color 		= "#F44336";
container[5].getElementsByClassName('fas')[0].style.lineHeight 	= "50px";
container[5].getElementsByClassName('fas')[0].style.fontSize 	= "18px";

/* End Style HTML Elements */