let now = new Date();
let hours = now.getHours();
if (hours > 12){
	hours -=12;
}
let minutes = now.getMinutes();
if (minutes < 10){
	minutes = ('0' + minutes);
}

let time = (hours + ':' + minutes)
document.getElementById("timetext").innerHTML = time

function lightOn() {
	console.log('on')
	let reqon = new XMLHttpRequest();
	reqon.open('GET', "https://maker.ifttt.com/trigger/lights-toggle/with/key/klVzGE694kL9d8sHgn1Ac2FpOtMoHsTTzlfgQZqCAu6", true);
	reqon.send();
}

function lightOff() {
	console.log('off')
	let reqon = new XMLHttpRequest();
	reqon.open('GET', "https://maker.ifttt.com/trigger/lights-off/with/key/klVzGE694kL9d8sHgn1Ac2FpOtMoHsTTzlfgQZqCAu6", true);
	reqon.send();
}

