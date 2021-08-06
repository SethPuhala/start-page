
function CLOCK(){
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
	document.getElementById("timetext").innerHTML = time;
	setTimeout(CLOCK, 1000);
}
CLOCK();



let URL = 'https://api.helium.io/v1/accounts/14QTmMBKi38c1E7QmT33e7VbYCVky2GeHJXjzUV8YgcADNR7you/stats'
let wheatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5313457&appid=f245d1cda44501f1a7eba8e2b1b70441&units=imperial'

$.getJSON(wheatherURL, weatherbox)

$.getJSON(URL, moneyBox)



let lightBool = true

if (lightBool == false) {
	document.getElementById('lightbox').style.backgroundColor = "#460c7c";

}

else {
	document.getElementById('lightbox').style.backgroundColor = "#be84f4";

}


document.getElementById('lightbox').addEventListener('click', toggle);


function lightOn() {
	
	let reqon = new XMLHttpRequest();
	reqon.open('GET', "https://maker.ifttt.com/trigger/lights-toggle/with/key/klVzGE694kL9d8sHgn1Ac2FpOtMoHsTTzlfgQZqCAu6", true);
	reqon.send();
}

function lightOff() {
	
	let reqon = new XMLHttpRequest();
	reqon.open('GET', "https://maker.ifttt.com/trigger/lights-off/with/key/klVzGE694kL9d8sHgn1Ac2FpOtMoHsTTzlfgQZqCAu6", true);
	reqon.send();
}

function moneyBox(data) {
	let bal = (data.data.last_day[0].balance) / 100000000;
	bal = Math.round(bal * 100) / 100;
	let balstr = (bal + ' hnt')
	document.getElementById('heliumtxt').innerHTML = balstr;
	window.hntbal = bal;
}

function weatherbox(data) {

	let desc = (data.weather[0].main);
	let temp = Math.round((data.main.temp));
	document.getElementById('weatherinfo').innerHTML = (temp + '°' + ' and ' + desc)
	

}


function toggle(){
	if (lightBool){
		console.log('off')
		lightBool = false;
		lightOff();
		document.getElementById('lightbox').style.backgroundColor = "#460c7c";
	}

	else {
		console.log('on')
		lightBool = true;
		lightOn();
		document.getElementById('lightbox').style.backgroundColor = "#be84f4";
	}


}

let cryptoURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Chelium&vs_currencies=usd'
document.getElementById('BTCBTN').addEventListener('click', setBTC);
document.getElementById('ETHBTN').addEventListener('click', setETH);
document.getElementById('HNTBTN').addEventListener('click', setHNT);




function setBTC(){
	document.getElementById('BTCBTN').style.fontWeight = '1000';
	document.getElementById('ETHBTN').style.fontWeight = 'normal';
	document.getElementById('HNTBTN').style.fontWeight = 'normal';
	$.getJSON(cryptoURL, displayBTC);
}
setBTC();

function setETH(){
	document.getElementById('ETHBTN').style.fontWeight = '1000';
	document.getElementById('BTCBTN').style.fontWeight = 'normal';
	document.getElementById('HNTBTN').style.fontWeight = 'normal';
	$.getJSON(cryptoURL, displayETH);
}

function setHNT(){
	document.getElementById('BTCBTN').style.fontWeight = 'normal';
	document.getElementById('ETHBTN').style.fontWeight = 'normal';
	document.getElementById('HNTBTN').style.fontWeight = '1000';

	$.getJSON(cryptoURL, displayHNT);
}

function displayBTC(data) {
	let btcval = (data.bitcoin.usd);
	document.getElementById('pricestuff').innerHTML = ('BTC = $' + btcval);
	document.getElementById('heliumtxt').innerHTML = (hntbal + ' hnt');


}

function displayETH(data) {
	let ethval = Math.round((data.ethereum.usd));
	document.getElementById('pricestuff').innerHTML = ('ETH = $' + ethval);
	document.getElementById('heliumtxt').innerHTML = (hntbal + ' hnt');



}

function displayHNT(data) {
	let hntval = (data.helium.usd);
	document.getElementById('pricestuff').innerHTML = ('HNT = $' + hntval);
	let total = Math.round((hntbal * hntval * 100));
	total = total / 100;
	document.getElementById('heliumtxt').innerHTML = (total + ' USD');


}
