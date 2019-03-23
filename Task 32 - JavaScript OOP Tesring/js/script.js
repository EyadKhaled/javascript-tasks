// Get Elements From HTML
const 	typeInput 	= document.getElementById("type"),
		colorInput 	= document.getElementById("color"),
		priceInput 	= document.getElementById("price"),
		tasteInput 	= document.getElementById("taste"),
		btn 		= document.getElementById("btn"),
		console		= document.getElementById("console"),
		listsCont	= document.getElementById("lists");

// The Constructor Of Objects
class Fruit {
	constructor (name, color, price, taste) {
		'use strict';

		this.name 	= name;
		this.color 	= color;
		this.price 	= price;
		this.taste 	= taste;

		this.describe =
			this.name + " fruit is colored " +
			this.color + " and its price is " +
			this.price + "$ each. And definitely with " +
			this.taste + "/10 taste !";
	}
}

// Making a New Fruit
btn.onclick = () => {
	'use strict';

	let itemName = typeInput.value;

	if (typeInput.value.length == "" || typeInput.value.length > 14) {
		console.textContent = "* Name input chars must be from 1 to 14";
	} else if (colorInput.value.length == "" || colorInput.value.length > 14) {
		console.textContent = "* Color input chars must be from 1 to 14";
	} else if (priceInput.value.length == "" || priceInput.value.length > 4) {
		console.textContent = "* Price input chars must be from 1 to 4";
	} else if (isNaN(priceInput.value)) {
		console.textContent = "* Price input chars must be numbers only";
	} else if (tasteInput.value.length == "" || tasteInput.value.length > 2) {
		console.textContent = "* Taste input chars must be from 1 to 2";
	} else if (isNaN(tasteInput.value)) {
		console.textContent = "* Taste input chars must be numbers only";
	} else {

		itemName = new Fruit(typeInput.value, colorInput.value,
							 priceInput.value, tasteInput.value);

		console.textContent = itemName.describe;

		// Making an Item
		let fruitCont 		= document.createElement("div"),
			overlay 		= document.createElement("div"),
			heart 			= document.createElement("i"),
			itemNamee		= document.createElement("div"),
			itemSettings	= document.createElement("div"),
			itemInfo		= document.createElement("div"),
			nameStar		= document.createElement("i"),
			name			= document.createElement("span"),
			settingsStar	= document.createElement("i"),
			settingsDelete  = document.createElement("i"),
			colorBox		= document.createElement("div"),
			taste 			= document.createElement("span"),
			price 			= document.createElement("span");

		// Put Elements Inside Elements
		lists.appendChild(fruitCont);
		fruitCont.appendChild(overlay);
		fruitCont.appendChild(heart);
		fruitCont.appendChild(itemNamee);
		fruitCont.appendChild(itemSettings);
		fruitCont.appendChild(itemInfo);
		itemNamee.appendChild(nameStar);
		itemNamee.appendChild(name);
		itemSettings.appendChild(settingsStar);
		itemSettings.appendChild(settingsDelete);
		itemInfo.appendChild(colorBox);
		itemInfo.appendChild(taste);
		itemInfo.appendChild(price);

		// Add Classes
		fruitCont.classList.add("fruit");
		overlay.classList.add("overlay");
		heart.classList.add("fa", "fa-heart", "fa-2x", "fa-fw");
		itemNamee.classList.add("item-name");
		itemSettings.classList.add("item-settings");
		itemInfo.classList.add("item-info");
		nameStar.classList.add("fas", "fa-certificate");
		settingsStar.classList.add("far", "fa-star", "fa-lg", "fa-fw");
		settingsDelete.classList.add("fas", "fa-times", "fa-lg", "fa-fw");
		colorBox.classList.add("color-box");

		// Add Attributes
		settingsStar.setAttribute("onclick", "favourite(this)");
		settingsDelete.setAttribute("onclick", "deleteItem(this)");

		// Add Test
		name.textContent = typeInput.value;
		colorBox.style.backgroundColor = colorInput.value;
		taste.textContent = tasteInput.value + "/10";
		price.textContent = priceInput.value + "$";

	}
}

// Clicking On Star "Favourite"
function favourite(e) {
	if (e.classList.contains("far")) {
		e.classList.remove("far");
		e.classList.add("fas");

		e.parentNode.parentNode.firstChild.style.display = "flex";
		e.parentNode.parentNode.firstChild.innerHTML = "Favourite&nbsp;&nbsp;<i class=\"far fa-thumbs-up\"></i>";
		setTimeout(() => {
			e.parentNode.parentNode.firstChild.style.display = "none";
			e.parentNode.parentNode.firstChild.textContent = "";
		}, 500);
	} else if (e.classList.contains("fas")) {
		e.classList.remove("fas");
		e.classList.add("far");	
	}
}

// Clicking On Delete
function deleteItem(e) {
	e.parentNode.parentNode.firstChild.style.display = "flex";
	e.parentNode.parentNode.firstChild.innerHTML = "Bye&nbsp;<i class=\"fas fa-heart-broken\"></i>";			
	setTimeout(() => {
		e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
	}, 500);
}

// Example Of Fruit Properties
document.getElementById("ex").onclick = () => {
	'use strict';

	typeInput.value 	= "Apple";
	colorInput.value 	= "red";
	priceInput.value 	= "1";
	tasteInput.value 	= "9";
}

// Focus On Input
$("input").focus(function(){
	$(this).attr("placeholder", "");
});

// Blur On Input
$("input").blur(function(){
	$(this).attr("placeholder", $(this).data("place"));
})

document.getElementById("myName").onmouseover = function () {
	document.getElementById("myPic").style.opacity = "0";
	document.getElementById("myPic").style.transform = "scale(.5)";
	document.getElementById("myName").style.opacity = "1";
};

document.getElementById("myName").onmouseleave = function () {
	document.getElementById("myPic").style.opacity = "1";
	document.getElementById("myPic").style.transform = "scale(1)";
	document.getElementById("myName").style.opacity = "0";
};