let a = document.querySelector('#blackjack-hit-button')
a.addEventListener('click', blackjackHit);


function blackjackHit() {
	alert('auhc');
}

let blackjackGame = {
	'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0}
};


const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

function blackjackHit() {
	let cardImage = document.createElement('img');
	cardImage.src = 'images/Q.png';
	document.querySelector(YOU['div']).appendChild(cardImage);

}

