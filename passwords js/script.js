const pw = document.getElementById('pw');
const copy = document.getElementById('copy');
const len = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');

const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numbers = '0123456789';
const symbols = '~!@#$%^&*()_';

function getLowercase() {
	return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase() {
	return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber(){
	return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}


var btn = document.getElementById('generate');
generate.addEventListener('click', generatePassword);

function generatePassword() {

	var len_of_password = len.value;

	var password = '';
	for (var a=0; a<len_of_password; a++) {
		password += generatePWD();
		console.log(password);
	}
	console.log(password);
	pw.innerHTML = password;
	console.log(pw.innerHTML);

}

function generatePWD() {
	
	var pwd = '';
	const containerp = []
	if (upper.checked) {
		containerp.push(getUppercase());
	}
	if (lower.checked) {
		containerp.push(getLowercase());
	}
	if (number.checked) {
		containerp.push(getNumber());
	}
	if (symbol.checked) {
		containerp.push(getSymbol());
	}
	return containerp[Math.floor(Math.random() * containerp.length)];
}