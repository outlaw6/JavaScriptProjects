
function blackjackHit() {
	alert('auhc');
}


let blackjackGame = {
	'you': {   'scoreSpan': '#your-blackjack-result',   'div': '#your-box', 'score': 0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
	'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
	'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
	'wins': 0,
	'losses': 0,
	'draws': 0,
	'isStand': false,
	'turnsOver': false,
};

let a = document.querySelector('#blackjack-hit-button')
a.addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);		
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);		



const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lostSound = new Audio('sounds/aww.mp3');





function blackjackHit() {
	if (blackjackGame['isStand'] === false) {
	let card = randomCard();
	console.log(card);
	showCard(card, YOU);
	updateScore(card, YOU);
	
	showScore(YOU);
	}

}



function randomCard(){
	let randomIndx = Math.floor(Math.random() * 13);
	return blackjackGame['cards'][randomIndx];
}


function showCard(card, activePlayer) {

	if (activePlayer['score'] <= 21) {
	let cardImage = document.createElement('img');
	// cardImage.src = 'images/'+ randomCard() +'.png';
	cardImage.src = `images/${card}.png`;
	document.querySelector(activePlayer['div']).appendChild(cardImage);
	hitSound.play();
	}
}

function blackjackDeal() {

	if (blackjackGame['turnsOver'] === true) {

		blackjackGame['isStand'] = false;
		showResult(computeWinner());
		let yourImages = document.querySelector('#your-box').querySelectorAll('img');

		let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
		console.log(yourImages);

		for (let a=0;a<yourImages.length;a++) {
			yourImages[a].remove();
		}
		for (let a=0;a<dealerImages.length;a++) {
			dealerImages[a].remove();
		}

		document.querySelector('#your-blackjack-result').textContent = 0;
		YOU['score'] = 0;
		DEALER['score'] = 0;

		document.querySelector('#your-blackjack-result').textContent = 0;
		document.querySelector('#dealer-blackjack-result').textContent = 0;

		document.querySelector('#your-blackjack-result').style.color = '#ffffff';
		document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

		document.querySelector('#blackjack-result').textContent = 'Letplay again ';
		document.querySelector('#blackjack-result').style.color = 'black';
		blackjackGame['turnsOver'] = true;

	}

}



function updateScore(card, activePlayer) {
	console.log(card);

	if (card === "A") {
		if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21 ) {
			activePlayer['score'] += blackjackGame['cardsMap'][card][1];
	    } else {
	    	activePlayer['score'] += blackjackGame['cardsMap'][card][0];
	    }
	} else {
	activePlayer['score'] += blackjackGame['cardsMap'][card];
	}
}



function showScore(activePlayer) {
	if (activePlayer['score'] > 21) {
		document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
		document.querySelector(activePlayer['scoreSpan']).style.color  = 'red';
	} else {
	document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
	}
}

function dealerLogic() {
	blackjackGame['isStand'] = true;
	let card = randomCard();
	showCard(card, DEALER);
	updateScore(card, DEALER);
	showScore(DEALER);

	if (DEALER['score'] > 15) {
		blackjackGame['turnsOver'] = true;
		let winner = computeWinner();
		showResult(winner);
		console.log(blackjackGame['turnsOver']);
	}
}

function computeWinner() {
	let winner;

	if (YOU['score'] <= 21) {
		//condition higher score than dealer or whom
		if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
			console.log('You won');
			blackjackGame['wins'] += 1;
 			winner = YOU;
		} else if (YOU['score'] < DEALER['score']) {
			console.log('You lost');
			blackjackGame['losses'] += 1;
			winner = DEALER;
		} else if (YOU['score'] === DEALER['score']) {
			console.log('You drew!');
			blackjackGame['draws'] += 1;
		}
	// condiition: not under 21 but but, dealer doesnt bust
	 else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
	 	console.log('You lost');
	 	blackjackGame['losses'] += 1
	 	winner = DEALER;

	//conditon : when both bust (dealer, user)
	 } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
	 	console.log('You drew');
	 	blackjackGame['draws'] += 1;
	 }
	 console.log("winner is");
 	return winner;
 	} 
}

function showResult(winner) {
	let message, messageColor;


	if (blackjackGame['turnsOver'] === true) {
	if (winner === YOU) {
		document.querySelector('#wins').textContent = blackjackGame['wins'];
		message = "You won!";
		messageColor = 'green';
		winSound.play();
	} else if  (winner === DEALER) {
		document.querySelector('#losses').textContent = blackjackGame['losses'];
		message = "You lost";
		messageColor = 'red';
		lostSound.play();
	} else {
		document.querySelector('#draws').textContent = blackjackGame['draws'];
		message = "You drew";
		messageColor = 'black';
	}
	document.querySelector('#blackjack-result').textContent = message;
	document.querySelector('#blackjack-result').style.color = messageColor;
}		
	}

//black jack js