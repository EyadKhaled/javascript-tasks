function AgeGen() {

var realDays 		= ["Sunday",
					   "Monday",
					   "Tuesday",
					   "Wednesday",
					   "Thursday",
					   "Friday",
					   "Saturday"],

	day 			= document.getElementById("days"),

	month 			= document.getElementById("months"),

	year 			= document.getElementById("years"),

	born 			= document.getElementById("divAge"),

	bornDay 		= document.getElementById("divDay"),

	bornDays 		= document.getElementById("divDays"),

	bornHours 		= document.getElementById("divHours"),

	bornMinutes 	= document.getElementById("divMinutes"),

	bornSeconds 	= document.getElementById("divSeconds"),

	date 			= month.value + " " + day.value + " " + year.value,

	theDate 		= new Date(date.toString()),

	calc 			= Date.now() - theDate.getTime();


born.innerHTML 			= Math.round(calc / (1000 * 3600 * 24 * 365));

bornDay.innerHTML 		= realDays[theDate.getDay()];

bornDays.innerHTML 		= Math.round(calc / (1000 * 3600 * 24));

bornHours.innerHTML 	= Math.round(calc / (1000 * 3600));

bornMinutes.innerHTML 	= Math.round(calc / (1000 * 60));

bornSeconds.innerHTML 	= Math.round(calc / (1000));

}