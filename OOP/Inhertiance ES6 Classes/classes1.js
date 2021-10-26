class PersonCL {
	constructor(firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
	}

	calcAge() {
		console.log(2037 - this.birthYear);
	}
}

const jessica = new PersonCL('Jessica', 1996);

console.log(jessica);

jessica.calcAge();