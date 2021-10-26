const CarCL = function(make, speed) {
	
	this.make = make;
	this.speed = speed;
};

CarCL.prototype.accelerate = function() {
	this.speed += 5;
	console.log(`${this.make} is going at ${this.speed}`);
};


CarCL.prototype.brake = function() {
	this.speed -= 5;
	console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function(make, speed, charge) {
	CarCL.call(this, make, speed);
	this.charge = charge;
};
EV.prototype = Object.create(CarCL.prototype);
EV.prototype.chargeBattery = function(chargeTo) {
	this.charge = chargeTo;
}

const tesla = new EV('Tesla', 120, 23); 
tesla.chargeBattery(90);

EV.prototype.accelerate = function() {
	this.speed += 20;
	this.charge--;
	console.log(`${this.make} is going at ${this.speed}`);
};
console.log(tesla);
tesla.brake();
tesla.accelerate();

