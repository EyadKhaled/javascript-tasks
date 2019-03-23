function getTime() {

	'use strict';

var nowDate = new Date(),

	date_format = '12',

	hours = nowDate.getHours(),

	minutes = nowDate.getMinutes(),

	seconds = nowDate.getSeconds(),

	timeType = '';

if (date_format == '12') {

    if (hours > 12) {

        timeType = 'PM';

        hours = (hours - 12);
     
        if (hours == 12) {

            hours = "00";

            timeType = 'AM';
        }

    } else if (hours < 12) {

        timeType = 'AM';

    } else if (hours == 12) {

        timeType = 'PM';
    }
}

if (hours < 10) {

	hours = "0" + hours;

}

if (minutes < 10) {

	minutes = "0" + minutes;

}

if (seconds < 10) {

	seconds = "0" + seconds;

}		

document.querySelector("section").textContent =
	
	hours + " : " + minutes + " : " + seconds + " " + timeType;

}

window.onload = function () {

	'use strict';

	setInterval(getTime, 500);

}