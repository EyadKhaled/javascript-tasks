var arrow1 = document.getElementById("icon1"),

	down = document.getElementById("icon2");

window.onscroll = function () {

	'use strict';

	console.log(document.documentElement.scrollTop);

	if (document.documentElement.scrollTop >= 400) {

		arrow1.style.opacity = "1";

	} else {

		arrow1.style.opacity = "0";

	}

}

arrow1.onclick = function () {

	'use strict';

	document.documentElement.scrollTop = 0;

}

down.onclick = function () {

	'use strict';

	document.documentElement.scrollTop = 900;

}