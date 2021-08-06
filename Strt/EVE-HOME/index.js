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



let URL = 'https://api.helium.io/v1/accounts/14QTmMBKi38c1E7QmT33e7VbYCVky2GeHJXjzUV8YgcADNR7you/stats'
let wheatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5313457&appid=f245d1cda44501f1a7eba8e2b1b70441&units=imperial'

$.getJSON(wheatherURL, weatherbox)












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

let cryptoURL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin&vs_currencies=usd'
document.getElementById('BTCBTN').addEventListener('click', setBTC);
document.getElementById('ETHBTN').addEventListener('click', setETH);



function setBTC(){
	document.getElementById('BTCBTN').style.fontWeight = '1000';
	document.getElementById('ETHBTN').style.fontWeight = 'normal';
	$.getJSON(cryptoURL, displayBTC);
}
setBTC();

function setETH(){
	document.getElementById('ETHBTN').style.fontWeight = '1000';
	document.getElementById('BTCBTN').style.fontWeight = 'normal';
	$.getJSON(cryptoURL, displayETH);
}

function displayBTC(data) {
	let btcval = (data.bitcoin.usd);
	document.getElementById('pricestuff').innerHTML = ('BTC = $' + btcval);


}

function displayETH(data) {
	let ethval = Math.round((data.ethereum.usd));
	document.getElementById('pricestuff').innerHTML = ('ETH = $' + ethval);


}