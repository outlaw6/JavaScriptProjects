var count = 0;


const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn) {
	
	btn.addEventListener('click', function(e) {
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--; 
			console.log(count);
		} else if (styles.contains('increase')) {
			count++;
		} else if (styles.contains('reset')) {
			count = 0;
		} else {
			console.log("Unknown value");	
		}
		if (count > 0) {
			value.style.color = 'green';
		} else if (count < 0) {
			value.style.color = 'red';
		} else {
			value.style.color = 'black';
		}
		value.textContent = count;
	});
});
console.log(btns);