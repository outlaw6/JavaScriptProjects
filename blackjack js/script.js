
function blackjackHit() {
	alert('auhc');
}


let blackjackGame = {
	'you': {   'scoreSpan': '#your-blackjack-result',   'div': '#your-box', 'score': 0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
	'cards': ['1', '2', '3', '4', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
	'cardsMap': {'2': 2, '3': 3, '4': 4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K': 10, 'J':10, 'Q':10, 'A': [1, 11]}
};

let a = document.querySelector('#blackjack-hit-button')
a.addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);		


const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');

function blackjackHit() {
	let card = randomCard();
	console.log(card);
	showCard(DEALER, card	);
}
function randomCard(){
	let randomIndx = Math.floor(Math.random() * 13);
	return blackjackGame['cards'][randomIndx];
}


function showCard(activePlayer, card) {
	let cardImage = document.createElement('img');
	// cardImage.src = 'images/'+ randomCard() +'.png';
	cardImage.src = `images/${card}.png`;
	document.querySelector(activePlayer['div']).appendChild(cardImage);
	hitSound.play();

}

function blackjackDeal() {
		let yourImages = document.querySelector('#your-box').querySelectorAll('img');

		let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
		console.log(yourImages);

		for (let a=0;a<yourImages.length;a++) {
			yourImages[a].remove();
		}
		for (let a=0;a<dealerImages.length;a++) {
			dealerImages[a].remove();
		}
}



//black jack js