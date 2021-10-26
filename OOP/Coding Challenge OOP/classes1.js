class CarCL { 
	constructor(make, speed) {
	this.make = make;
	this.speed = speed;
}

accelerate() {
	this.speed += 5;
	console.log(`${this.make} is going at ${this.speed}`);
}


	brake() {
	this.speed -= 5;
	console.log(`${this.make} is going at ${this.speed}`);
}
	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}

}

const BMW = new CarCL('bmw', 100);
console.log(BMW);
BMW.accelerate();
BMW.brake();
BMW.speed = 50;
