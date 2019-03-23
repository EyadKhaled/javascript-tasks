var beginn 		= document.getElementById("begin"),

	codee 		= document.getElementById("code"),

	designn  	= document.getElementById("design"),

	devv 		= document.getElementById("dev"),

	resultt1 	= document.getElementById("result1");

function begin() {
 
 	resultt1.innerHTML =

 	"You are a " + "<span style='font-weight: bold;'>" + beginn.innerHTML + "</span>";

}

function code() {
 
 	resultt1.innerHTML =

 	"You are a " + "<span style='font-weight: bold;'>" + codee.innerHTML + "</span>";

}

function design() {
 
 	resultt1.innerHTML =

 	"You are a " + "<span style='font-weight: bold;'>" + designn.innerHTML + "</span>";

}

function dev() {
 
 	resultt1.innerHTML =

 	"You are a " + "<span style='font-weight: bold;'>" + devv.innerHTML + "</span>";

}

