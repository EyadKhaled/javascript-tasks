var mainList = document.querySelector("ul"),

	myButton = document.querySelector("button"),

	i, zero;

myButton.onclick = function () {

	for (i = 1;i <= 20;i++) {

		if (i < 10) {
			zero = "0"
		} else {
			zero = ""
		}
		
		var ulChild = document.createElement("li"),

			liChild = document.createTextNode("Hello From Js #" + zero + i);

		mainList.appendChild(ulChild);

		ulChild.appendChild(liChild);

		ulChild.style.padding = "10px";
		ulChild.style.fontFamily = "sans-serif";
		ulChild.style.color = "#008CBA";
		ulChild.style.fontWeight = "bold";
	}
}
