var divs = document.querySelectorAll("div"), i;

for (i = 1;i <= 4;i++) {

	divs[i].style.opacity = "0";

}


window.onscroll = function () {
	
	console.log(document.documentElement.scrollTop);

	if (document.documentElement.scrollTop >= 500) {

		divs[1].style.opacity = "1";

	}

		if (document.documentElement.scrollTop >= 1200) {

		divs[2].style.opacity = "1";

	}

		if (document.documentElement.scrollTop >= 2000) {

		divs[3].style.opacity = "1";

	}

		if (document.documentElement.scrollTop >= 2800) {

		divs[4].style.opacity = "1";

	}

}