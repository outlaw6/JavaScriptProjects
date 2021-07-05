
function blackjackHit() {
	alert('auhc');
}
function blackjackDeal() {
		let yourImages = document.querySelector('#your-box').querySelectorAll('img');
		console.log(yourImages);

}

let blackjackGame = {
	'you': {   'scoreSpan': '#your-blackjack-result',   'div': '#your-box', 'score': 0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0}
};

let a = document.querySelector('#blackjack-hit-button')
a.addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);		


const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');

function blackjackHit() {
	showCard(DEALER);
}


function showCard(activePlayer) {
	let cardImage = document.createElement('img');
	cardImage.src = 'images/Q.png';
	document.querySelector(activePlayer['div']).appendChild(cardImage);
	hitSound.play();

}


//black jack js