const PersonProto = {
	calcAge() {
		console.log(2038 - this.birthYear);
	},
};

const steven = Object.create(PersonProto);
console.log(steven)